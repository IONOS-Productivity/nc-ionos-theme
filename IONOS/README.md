# ✨ IONOS Global Navigation ✨

as a Custom Element written in Svelte for convenience. Targeted to be used as Header for Easystorage as part of a custom Nextcloud theme (`/themes`).

## 🚚 Available Elements

### 🏠 Header

#### ⚙️ Attributes

-   `home_src` => The link the logo is supposed to use

#### 🎰 Slots

-   `webmail` => links to peer products
-   `usermenu` => see [Usermenu](#user-menu)

```html
<ionos-global-nav home_src="...">
	<!--Slot for webmail link-->
	<a href="..." slot="webmail">...</a>
	<!--Slot for usermenu-->
	<div slot="usermenu">
		<ionos-user-menu />
		...
	</div>
</ionos-global-nav>
```

### 👤 User Menu

#### 🎰 Slots

-   `username` => shows in the upper user menu element
-   `options` => container for [usermenu entries](#user-menu-entries)
-   `logout` => last & separated usermenu elment

```html
<ionos-user-menu>
	<!--Slot for username-->
	<b slot="username">Username</b>
	<!--Slot for menu options-->
	<div slot="options">
		<ionos-user-menu-item />
		...
	</div>
	<div slot="logout">
		<ionos-user-menu-item />
	</div>
</ionos-user-menu>
```

#### 🗂️ User Menu Entries

##### ⚙️ Attributes

-   `icon` => [ionos-icon](#icon) to be used
-   `label` => text to be displayed
-   `link` => link the entry is supposed to lead to
-   `target` => defines how the link is supposed to be opened **(default: `_self`)**

```html
<ionos-user-menu-item icon="..." label="..." link="..." target="" ="...">
</ionos-user-menu-item>
```

### 🖼️ Icon

#### ⚙️ Attributes

-   `type` => choose from the available icons:
    -   `webmail`
    -   `user`
    -   `logout`
    -   `settings`
    -   `help`
-   `size` => multiplyer for the icon size **(default: `1`)**

```html
<ionos-icons {type} size="..." />
```

## 🚀 Usage

### 🎨 Activate Theme

1. put the a folder with the name of the theme as foldername into `/themes`
2. activate by putting `'theme' => 'nc-ionos-theme',` into the `config.php`
3. _(optional)_ make theme exclusive by putting `'theme => 'nc-ionos-theme'` into the `config.php` file

### 🛠️ Use

Make sure the latest version of the Global Navigation is used by [building](#-build) the project into `../core/js/custom-elements/global-navigation`

1. Import file
   for example using: `<script src="myscripts.js"></script>`
2. Insert Element

```html
<ionos-global-nav home_src="index.html">
	<a href="webmail.html" slot="webmail">Webmail</a>
	<div slot="usermenu">
		<ionos-user-menu>
			<b slot="username">Username</b>
			<div slot="options">
				<ionos-user-menu-item
					icon="settings"
					label="Settings"
					link="settings.html" />
				<ionos-user-menu-item
					icon="help"
					label="Help"
					link="help.html" />
			</div>
			<div slot="logout">
				<ionos-user-menu-item
					icon="logout"
					label="Logout"
					link="logout.html" />
			</div>
		</ionos-user-menu>
	</div>
</ionos-global-nav>
```

## ⚙️ Development

### 🛠️ Setup

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
