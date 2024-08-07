<svelte:options customElement="ionos-user-menu" />

<script lang="ts">
	import { onDestroy } from 'svelte';

	let showMenu = false;

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
</script>

<ionos-icons
	user
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
					<slot name="username" />
				</div>
			</div>
		</div>
		<div class="divider-line" />
		<div class="dropdown-menu">
			<slot name="options" />
			<div class="divider-line" />
			<slot name="logout" />
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
		color: var(--ionos-text-color);
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
</style>
