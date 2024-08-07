<svelte:options customElement="ionos-user-menu" />

<script>
	import { getCurrentUser } from '@nextcloud/auth';
	import { translate as t } from '@nextcloud/l10n'
	import { onDestroy } from 'svelte';

	export let logoutLink = null;
	export let settingsLink = null;
	export let helpLink = null;

	export let options = [{
		label: t('theming', 'Settings'),
		icon: 'settings',
		link: settingsLink,
	}, {
		label: t('theming', 'Help & Support'),
		icon: 'help',
		link: helpLink,
		target: '_blank',
	}];

	export let onSelect = () => {};

	let showMenu = false;
	let displayName = getCurrentUser()?.displayName;

	function handleLinkClick(option) {
		onSelect(option);
	}

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function handleClickOutside(event) {
		const menu = document.querySelector('ionos-user-menu');
		if (showMenu && menu && !menu.contains(event.target)) {
			console.log('click outside triggered');
			showMenu = false;
		}
	}

	document.addEventListener('click', handleClickOutside);

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
	});
	console.log("helpLink", helpLink);
	console.log("settingsLink", settingsLink);
</script>

<ionos-icons user
			 on:click={toggleMenu}
			 on:keydown={toggleMenu}
			 tabindex="0"
			 role="button"
			 aria-label="User Menu" />

{#if showMenu}
	<div class="menu-container">
		<div class="menu-title-cell">
			<div class="cell-content">
				<div class="user-name">
					<b>{displayName}</b>
				</div>
			</div>
		</div>
		<div class="divider-line" />
		<div class="dropdown-menu">
			{#each options as option}
				{#if option.link}
					<a href="{option.link}"
					   target="{option.target || '_self'}"
					   class="option-content"
					   on:click="{() => handleLinkClick(option)}">
						<div class="icon-and-label">
							<ionos-icons {...{ [option.icon]: true }} />
							<div class="label">{option.label}</div>
						</div>
					</a>
				{/if}
			{/each}
			<div class="divider-line" />
			<a class="option-content" href={logoutLink} title="Logout">
				<div class="icon-and-label">
					<ionos-icons logout />
					<div class="label">{t('theming', 'Logout')}</div>
				</div>
			</a>
		</div>
	</div>
{/if}

<style lang="scss">
	.menu-container {
		width: 280px;
		position: absolute;
		top: 100%;
		right: 0;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
		border-radius: 8px;
		background-color: var(--color-main-background);
		border: 2px solid var(--color-blue-ionos-b4);
		box-sizing: border-box;
		overflow: hidden;
		font-size: 16px;
		color: var(--text-color);
	}

	.logout-icon {
		height: 24px;
	}

	.label {
		flex: 1;
		position: relative;
		line-height: 24px;
		font-weight: 500;
	}

	.icon-and-label {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
	}

	.cell-content {
		align-self: stretch;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
	}

	.divider-line {
		width: 100%;
		position: relative;
		border-top: 1px solid #bcc8d4;
		box-sizing: border-box;
		height: 1px;
		flex-shrink: 0;
	}

	.user-name {
		align-self: stretch;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
	}

	.option-content {
		padding: 16px;
		gap: 16px;
	}

	.menu-title-cell {
		align-self: stretch;
		background-color: var(--color-blue-ionos-b1);
		display: flex;
		padding: 16px;
		cursor: default;
	}

	.dropdown-menu {
		flex: 1 1 0;
		align-self: stretch;
		justify-content: flex-start;
		display: flex;
		flex-direction: column;
	}

	a {
		text-decoration: none;
		color: var(--text-color);
	}

	a:hover {
		background-color: var(--color-blue-ionos-b1);
	}

	a:active {
		background-color: var(--color-blue-ionos-b2);
	}

	ionos-icons {
		display: inline-flex;
	}
</style>
