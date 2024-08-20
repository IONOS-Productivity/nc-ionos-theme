# SPDX-FileCopyrightText: 2024 STRATO AG
# SPDX-License-Identifier: AGPL-3.0-or-later
# SPDX-FileContributor: Kai Henseler <kai.henseler@strato.de>

IMAGE_NAME = node20-dev
CONTAINER_NAME = IONOS-GLOBAL-NAVIGATION

.PHONY: help

help: ## This help
	@echo "Usage: make [target]"
	@echo ""
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.DEFAULT_GOAL := help

build: ## Build the container image
	podman build -t $(IMAGE_NAME) .

start: ## Start the container
	podman rm -f $(CONTAINER_NAME) || true
	podman run -d --network=host -h "nc-global-navigation" -v .:/app:z --name $(CONTAINER_NAME) localhost/$(IMAGE_NAME)

install: start ## Install the dependencies
	podman exec -it $(CONTAINER_NAME) /bin/bash -c "npm install"

run-dev: install ## Run the dev server
	podman exec -it $(CONTAINER_NAME) /bin/bash -c "npm run dev"

run-build: install ## Build the project
	podman exec -it $(CONTAINER_NAME) /bin/bash -c "npm run build"

shell: start ## Open a shell in the container
	podman exec -it $(CONTAINER_NAME) /bin/bash
