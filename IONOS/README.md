# ✨ IONOS Global Navigation ✨

as a Custom Element written in Svelte for convenience. Targeted to be used as Header for Easystorage as part of a custom Nextcloud theme (`/themes`).

## Usage

### Activate Theme
1. put the a folder with the name of the theme as foldername into `/themes`
2. activate by putting `'theme' => 'nc-ionos-theme',` into the `config.php`
3. (optional) make theme exclusive by putting `'theme => 'nc-ionos-theme'` into the `config.php` file

### Use
1. Import file
for example using: `<script src="myscripts.js"></script>`
2.  Insert Element
```html
<ionos-global-nav home_src="index.html">
	<p>This is Placed on the rigth side of the header as a slot</p>
</ionos-global-nav>
```
## ⚙️ Development

### 🛠️ Setup

#### 📦 Podman Dev Container

Uses containerized Node environment

simply run `make run-dev` to start a container, install dependencies and start the dev server.

#### 🖥️ Without Container

Make sure Node v20 is installed

1. run `npm install` to install dependencies
2. run `npm run dev` to start dev server

### 🚀 Build
#### 💻 local

##### 📦 Container

```shell
make run-build
```

##### 🖥️ or without Container

```shell
npm run build
```

### 📏 Conventions

The repository uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

Example:

`<type>[(optional scope)]: <description>`

```shell
git commit -sm "ci(release): add auto SemVer step"
```
