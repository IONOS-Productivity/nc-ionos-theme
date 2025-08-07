# IONOS Nextcloud Theme (nc-ionos-theme)

A comprehensive Nextcloud theme that customizes the interface for IONOS HiDrive Next, featuring custom branding, global navigation, and enhanced user experience.

## 🎨 Features

- **Custom Branding**: IONOS-specific logos, colors, and styling
- **Global Navigation**: Modern Svelte-based navigation component
- **Multi-language Support**: Translations for German, English, Spanish, French, Italian, Dutch, and Swedish
- **Enhanced UI**: Custom CSS styling and layout improvements
- **Theme Enforcement**: Optional exclusive theme mode
- **Responsive Design**: Mobile and desktop optimized

## 🚀 Installation

### Prerequisites

- Nextcloud server installation
- Admin access to Nextcloud configuration
- Node.js v20+ (for development)

### Quick Setup

1. **Install the theme**:
   ```bash
   # Copy theme to Nextcloud themes directory
   cp -r nc-ionos-theme /path/to/nextcloud/themes/
   ```

2. **Activate the theme**:
   
   **Option A: Using occ command (recommended)**:
   ```bash
   # Navigate to your Nextcloud directory
   cd /path/to/nextcloud
   
   # Activate the theme
   sudo -u www-data php occ config:system:set theme --value="nc-ionos-theme"
   ```
   
   **Option B: Manual configuration**:
   Add to your Nextcloud `config.php`:
   ```php
   'theme' => 'nc-ionos-theme',
   ```

3. **Optional: Enforce theme** (makes it exclusive):
   
   **Using occ command**:
   ```bash
   sudo -u www-data php occ config:system:set enforce-theme --value="nc-ionos-theme"
   ```
   
   **Manual configuration**:
   ```php
   'enforce-theme' => 'nc-ionos-theme',
   ```

4. **Configure IONOS settings**:
   
   **Using occ command**:
   ```bash
   sudo -u www-data php occ config:system:set ionos_homepage --value="https://www.ionos.com"
   sudo -u www-data php occ config:system:set ionos_help_target_link --value="https://help.ionos.com"
   ```
   
   **Manual configuration**:
   Add to your `config.php`:
   ```php
   'ionos_homepage' => 'https://www.ionos.com',
   'ionos_help_target_link' => 'https://help.ionos.com',
   ```

## 📁 Project Structure

```
nc-ionos-theme/
├── README.md                    # This file
├── LICENSE.txt                  # AGPL-3.0 license
├── defaults.php                 # Theme configuration and branding
├── apps/                        # App-specific customizations
│   └── files/js/               # File app JavaScript overrides
├── core/                        # Core Nextcloud customizations
│   ├── css/                    # Custom stylesheets
│   ├── js/custom-elements/     # Global navigation component
│   ├── l10n/                   # Translation files
│   ├── templates/              # PHP template overrides
│   └── translationfiles/       # Translation source files
└── IONOS/                       # Svelte global navigation development
    ├── src/                    # Svelte source code
    ├── package.json            # Node.js dependencies
    └── vite.config.ts          # Build configuration
```

## 🛠️ Development

### Global Navigation Component

The theme includes a modern Svelte-based global navigation component located in the `IONOS/` directory.

#### Development Setup

```bash
cd IONOS/
npm install
npm run dev      # Start development server
npm run build    # Build for production
```

#### Using Containers

```bash
cd IONOS/
make run-dev     # Start containerized development
make run-build   # Build in container
```

### Customization

#### Colors and Branding

Primary brand color is defined in `defaults.php`:
```php
public function getColorPrimary(): string {
    return '#745bca';  // IONOS purple
}
```

#### Adding Translations

1. Add new language files in `core/l10n/`
2. Create corresponding `.po` files in `core/translationfiles/`
3. Update the template in `core/translationfiles/templates/core.pot`

#### Custom CSS

Add styles to `core/css/` directory:
- `guest.css` - Styling for guest/login pages
- `server.css` - General server styling

## 🔧 Configuration Options

The theme supports various configuration options in Nextcloud's `config.php`:

| Option | Description | Default |
|--------|-------------|---------|
| `theme` | Activate the theme | `'nc-ionos-theme'` |
| `enforce-theme` | Make theme exclusive | `'nc-ionos-theme'` |
| `ionos_homepage` | IONOS homepage URL | Required |
| `ionos_help_target_link` | Help documentation URL | Required |

## 🌍 Internationalization

Supported languages:
- 🇩🇪 German (de_DE)
- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇮🇹 Italian (it)
- 🇳🇱 Dutch (nl)
- 🇸🇪 Swedish (sv)

## 🧩 Core Synchronization

The theme includes a sophisticated synchronization system to keep core customizations in sync with upstream Nextcloud changes.

### Generate Core Patches Script

The `.github/scripts/generate_core_patches.sh` script automates the process of generating Git patches for synchronizing changes from the parent Nextcloud repository to the theme's core directory.

#### Usage

```bash
# Default: exclude localization files
./.github/scripts/generate_core_patches.sh

# Include localization files in patches
INCLUDE_L10N=true ./.github/scripts/generate_core_patches.sh
```

#### Options

| Environment Variable | Description | Default |
|---------------------|-------------|---------|
| `INCLUDE_L10N` | Include/exclude localization files | `false` |

#### How it works

1. **Analyzes commits**: Scans commits after a specified start commit that affect the `core/` directory
2. **Filters files**: Only includes files that exist in the target directory or are newly created templates
3. **Generates patches**: Creates individual patch files for each relevant commit
4. **Maintains history**: Preserves commit messages and adds cherry-pick trailers for traceability

#### File filtering rules

- **Always excluded**: CSS files, certain legacy templates
- **Conditionally excluded**: l10n files (when `INCLUDE_L10N=false`)
- **Template files**: Only existing templates in target + newly created after start commit
- **Other files**: Only if they exist in the target directory

#### Applying patches

After patch generation:

```bash
cd themes/nc-ionos-theme
# Apply each patch
git am < patches/0001-*.patch
git am < patches/0002-*.patch
# ... continue for all patches

# If conflicts occur
git add .
git am --continue
```

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
See [LICENSE.txt](LICENSE.txt) for details.

## 🤝 Contributing

1. Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages
2. Use semantic versioning for releases
3. Ensure all code passes linting and formatting checks

Example commit:
```bash
git commit -sm "feat(navigation): add user menu dropdown component"
```

## 🏢 About

**HiDrive Next** - powered by IONOS SE

This theme transforms Nextcloud into a branded experience for IONOS customers, providing seamless integration with the IONOS ecosystem while maintaining all Nextcloud functionality.