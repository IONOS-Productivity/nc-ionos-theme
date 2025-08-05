#!/bin/bash
set -euo pipefail

# Script to generate Git patch series for synchronizing changes from parent repository
# core/ directory to a Git submodule's themes/nc-ionos-theme/core/ directory.
#
# Usage:
#   ./generate_core_patches.sh                    # Default: exclude l10n files
#   INCLUDE_L10N=true ./generate_core_patches.sh  # Include l10n files in patches
#
# Options (set as environment variables):
#   INCLUDE_L10N=true/false  - Whether to include localization files (default: false)

# Configuration
SOURCE_DIR="core"
SUBMODULE_DIR="themes/nc-ionos-theme"
TARGET_DIR="$SUBMODULE_DIR/core"
PATCHES_DIR="$SUBMODULE_DIR/patches"
START_COMMIT="7142ea922729615a2e8c4ff6d6d76d33c96dafa5"

REPO_URL="https://github.com/nextcloud/server"
INCLUDE_L10N="${INCLUDE_L10N:-false}"  # Set to true to include l10n files

# Files to always skip (relative to core/)
SKIP_FILES=(
    "css/*.css"
    "templates/legacy/fileexists.html"
    "templates/print_exception.php"
    "templates/print_xml_exception.php"
    "templates/xml_exception.php"
)

# Add l10n files to skip list if INCLUDE_L10N is false
if [[ "$INCLUDE_L10N" == "false" ]]; then
    SKIP_FILES+=("l10n/*")
fi

# Clean up and prepare patches directory
echo "Cleaning patches directory: $PATCHES_DIR"
rm -rf "$PATCHES_DIR"
mkdir -p "$PATCHES_DIR"

# Show configuration
echo "Configuration:"
echo "  Include l10n files: $INCLUDE_L10N"
echo "  Include template files: only existing in target + newly created after $START_COMMIT"
echo "  Skip files: ${#SKIP_FILES[@]} files (${SKIP_FILES[*]})"
echo ""

# Get list of files currently in the target directory (relative to core/)
echo "Scanning target directory: $TARGET_DIR"
cd "$TARGET_DIR"
TARGET_FILES=$(find . -type f | sed 's|^\./||')
TARGET_FILE_COUNT=$(echo "$TARGET_FILES" | wc -l)
echo "Found $TARGET_FILE_COUNT files in target directory"
cd - > /dev/null

# Track newly added template files during processing
NEWLY_ADDED_TEMPLATES=()

# Get list of commits after START_COMMIT affecting core/
echo "Finding commits after $START_COMMIT that affect $SOURCE_DIR"
COMMITS=$(git log --format="%H" --reverse "$START_COMMIT"..HEAD -- "$SOURCE_DIR")
COMMIT_COUNT=$(echo "$COMMITS" | wc -l)
echo "Found $COMMIT_COUNT commits to process"

PATCH_NUM=1
COMMIT_NUM=1

for COMMIT in $COMMITS; do
    echo ""
    echo "Processing commit $COMMIT_NUM/$COMMIT_COUNT: $COMMIT"

    # Get commit info for display with error handling
    if ! COMMIT_SUBJECT=$(git log -1 --format="%s" "$COMMIT" 2>/dev/null); then
        echo "  ERROR: Could not get commit subject for $COMMIT"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi
    if ! COMMIT_AUTHOR=$(git log -1 --format="%an" "$COMMIT" 2>/dev/null); then
        echo "  ERROR: Could not get commit author for $COMMIT"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi
    echo "  Subject: $COMMIT_SUBJECT"
    echo "  Author: $COMMIT_AUTHOR"

    # Get files changed in this commit (relative to core/)
    if ! CHANGED_FILES=$(git diff-tree --no-commit-id --name-only -r "$COMMIT" -- "$SOURCE_DIR" 2>/dev/null | sed "s|^$SOURCE_DIR/||"); then
        echo "  ERROR: Could not get changed files for $COMMIT"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi

    # Handle empty CHANGED_FILES (e.g., merge commits with no direct changes)
    if [ -z "$CHANGED_FILES" ]; then
        echo "  → No files changed in $SOURCE_DIR (possibly a merge commit)"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi

    CHANGED_FILE_COUNT=$(echo "$CHANGED_FILES" | grep -v '^$' | wc -l)
    echo "  Changed $CHANGED_FILE_COUNT files in $SOURCE_DIR"

    # Find intersection with TARGET_FILES
    FILES_TO_PATCH=()
    MATCHED_FILES=()
    SKIPPED_FILES=()
    NEW_TEMPLATE_FILES=()
    TEMPLATE_FILES=()

    # Create current target file list including newly added templates
    CURRENT_TARGET_FILES="$TARGET_FILES"
    for ADDED_TEMPLATE in "${NEWLY_ADDED_TEMPLATES[@]}"; do
        CURRENT_TARGET_FILES="$CURRENT_TARGET_FILES"$'\n'"$ADDED_TEMPLATE"
    done

    for FILE in $CHANGED_FILES; do
        # Skip files from the explicit skip list (supports glob patterns)
        SKIP_FILE=false
        for SKIP_PATTERN in "${SKIP_FILES[@]}"; do
            if [[ "$FILE" == $SKIP_PATTERN ]]; then
                SKIPPED_FILES+=("$FILE")
                SKIP_FILE=true
                break
            fi
        done
        if [ "$SKIP_FILE" = true ]; then
            continue
        fi

        # Handle template files
        if [[ "$FILE" == templates/* ]]; then
            # Check if it's a newly created template file after START_COMMIT
            if ! git cat-file -e "$START_COMMIT:$SOURCE_DIR/$FILE" 2>/dev/null; then
                # This is a new template file - always include it and track it
                FILES_TO_PATCH+=("$SOURCE_DIR/$FILE")
                NEW_TEMPLATE_FILES+=("$FILE")
                # Add to newly added templates list for future commits
                if ! printf '%s\n' "${NEWLY_ADDED_TEMPLATES[@]}" | grep -qx "$FILE"; then
                    NEWLY_ADDED_TEMPLATES+=("$FILE")
                fi
            # Check if it exists in current target (including newly added)
            elif echo "$CURRENT_TARGET_FILES" | grep -qx "$FILE"; then
                FILES_TO_PATCH+=("$SOURCE_DIR/$FILE")
                TEMPLATE_FILES+=("$FILE")
            else
                # Template file exists but not in target - skip it
                SKIPPED_FILES+=("$FILE")
            fi
        elif echo "$CURRENT_TARGET_FILES" | grep -qx "$FILE"; then
            FILES_TO_PATCH+=("$SOURCE_DIR/$FILE")
            MATCHED_FILES+=("$FILE")
        else
            SKIPPED_FILES+=("$FILE")
        fi
    done

    if [ ${#MATCHED_FILES[@]} -gt 0 ]; then
        echo "  → Found ${#MATCHED_FILES[@]} matching files: ${MATCHED_FILES[*]}"
    fi
    if [ ${#TEMPLATE_FILES[@]} -gt 0 ]; then
        echo "  → Found ${#TEMPLATE_FILES[@]} template files: ${TEMPLATE_FILES[*]}"
    fi
    if [ ${#NEW_TEMPLATE_FILES[@]} -gt 0 ]; then
        echo "  → Found ${#NEW_TEMPLATE_FILES[@]} new template files: ${NEW_TEMPLATE_FILES[*]}"
    fi
    if [ ${#SKIPPED_FILES[@]} -gt 0 ]; then
        echo "  → Skipped ${#SKIPPED_FILES[@]} non-matching files: ${SKIPPED_FILES[*]}"
    fi

    # Skip if no relevant files
    if [ ${#FILES_TO_PATCH[@]} -eq 0 ]; then
        echo "  → Skipping: No files match target directory"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi

    # Generate patch for only the relevant files
    PATCH_NAME=$(printf "%04d" $PATCH_NUM)
    PATCH_FILE="$PATCHES_DIR/${PATCH_NAME}-$(git log -1 --format=%s "$COMMIT" | tr ' ' '-' | tr -cd '[:alnum:]-').patch"
    echo "  → Generating patch: $(basename "$PATCH_FILE")"

    # Extract commit info
    AUTHOR=$(git log -1 --format="%an <%ae>" "$COMMIT")
    DATE=$(git log -1 --format="%aD" "$COMMIT")
    SUBJECT=$(git log -1 --format="%s" "$COMMIT")
    BODY=$(git log -1 --format="%b" "$COMMIT" | sed '/^Signed-off-by:/d')

    # Generate the patch
    echo "  → Creating initial patch from git format-patch"
    if ! git format-patch -1 "$COMMIT" --stdout -- "$SOURCE_DIR" > "$PATCH_FILE.tmp" 2>/dev/null; then
        echo "  ERROR: git format-patch failed for commit $COMMIT"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi

    # Filter patch to only include diffs for relevant files (keep original paths)
    echo "  → Filtering patch to include only relevant files"
    if ! awk -v files="$(printf "%s\n" "${FILES_TO_PATCH[@]}")" '
    BEGIN {
        split(files, arr, "\n");
        for (i in arr) wanted[arr[i]] = 1;
        in_diff = 0;
        keep = 0;
    }
    /^diff --git a\// {
        in_diff = 1;
        keep = 0;
        for (f in wanted) {
            if ($3 == "a/" f) {
                keep = 1;
                break;
            }
        }
    }
    {
        if (!in_diff || keep) print $0;
    }
    ' "$PATCH_FILE.tmp" > "$PATCH_FILE"; then
        echo "  ERROR: AWK filtering failed for commit $COMMIT"
        rm -f "$PATCH_FILE.tmp" "$PATCH_FILE"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi

    # Create a proper commit message with cherry-pick trailer
    echo "  → Creating commit message with cherry-pick trailer"
    CHERRY_PICK_TRAILER="(cherry picked from commit $REPO_URL/commit/$COMMIT)"

    # Create temporary file with new commit message
    TEMP_MSG=$(mktemp)
    echo "$SUBJECT" > "$TEMP_MSG"
    if [ -n "$BODY" ]; then
        echo "$BODY" >> "$TEMP_MSG"
    fi
    echo "" >> "$TEMP_MSG"
    echo "$CHERRY_PICK_TRAILER" >> "$TEMP_MSG"

    # Replace the commit message section in the patch
    echo "  → Updating patch headers and commit message"
    if ! awk -v author="$AUTHOR" -v date="$DATE" -v msgfile="$TEMP_MSG" '
    BEGIN {
        while ((getline line < msgfile) > 0) {
            msg = msg line "\n"
        }
        close(msgfile)
        in_header = 1
        in_body = 0
        body_started = 0
    }
    /^From: / { print "From: " author; next }
    /^Date: / { print "Date: " date; next }
    /^Subject: / {
        print "Subject: " substr(msg, 1, index(msg, "\n")-1)
        in_body = 1
        next
    }
    /^$/ && in_header && in_body && !body_started {
        printf "%s", substr(msg, index(msg, "\n")+1)
        body_started = 1
        next
    }
    /^---$/ {
        in_header = 0
        in_body = 0
        print $0
        next
    }
    !in_body || !in_header { print $0 }
    ' "$PATCH_FILE" > "$PATCH_FILE.new"; then
        echo "  ERROR: AWK message processing failed for commit $COMMIT"
        rm -f "$PATCH_FILE.tmp" "$PATCH_FILE" "$PATCH_FILE.new" "$TEMP_MSG"
        COMMIT_NUM=$((COMMIT_NUM + 1))
        continue
    fi

    mv "$PATCH_FILE.new" "$PATCH_FILE"
    rm "$TEMP_MSG"

    rm "$PATCH_FILE.tmp"
    echo "  → Patch created successfully: $(basename "$PATCH_FILE")"
    PATCH_NUM=$((PATCH_NUM + 1))
    COMMIT_NUM=$((COMMIT_NUM + 1))
done

echo ""
echo "========================================="
echo "Patch generation complete!"
echo "Generated $((PATCH_NUM - 1)) patches in $PATCHES_DIR"
echo "========================================="
cat <<EOF

Patch generation complete!

To apply the patches in the submodule:

1. cd $SUBMODULE_DIR
2. For each patch in the patches/ directory, run:
     git am < patches/<patch-file>
3. If you encounter conflicts:
     git add .
     git am --continue
4. After all patches are applied:
     cd ..
     git add $SUBMODULE_DIR
     git commit -m "IONOS(themes/nc-ionos-theme): submodule update core sync"
     git push

Note:
- Files in SKIP_FILES array are always excluded (including CSS and l10n files when INCLUDE_L10N=false)
- Template files: only existing in target + newly created after START_COMMIT
- Newly created template files will be tracked for subsequent changes

EOF
