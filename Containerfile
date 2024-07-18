# SPDX-FileCopyrightText: Kai Henseler <kai.henseler@strato.de>
# SPDX-License-Identifier: AGPL-3.0-or-later

FROM node:20-buster

ENV NODE_ENV=development

WORKDIR /app

# await command by podman exec
CMD ["sleep", "infinity"]