<!--
SPDX-FileLicenseText: 2024 STRATO AG
SPDX-License-Identifier: AGPL-3.0-or-later
SPDX-FileContributor: Kai Henseler <kai.henseler@strato.de>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
-->
<svelte:options customElement="ionos-user-menu" />

<script lang="ts">
	import { onDestroy } from 'svelte';

	let showMenu = $state(false);

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
	onclick={toggleMenu}
	onkeydown={toggleMenu}
	tabindex="0"
	role="button"
	aria-label="User Menu"></ionos-icons>

{#if showMenu}
	<div class="menu-container">
		<div class="menu-title-cell">
			<div class="cell-content">
				<div class="user-name">
					<slot name="username" />
				</div>
			</div>
		</div>
		<div class="divider-line"></div>
		<div class="dropdown-menu">
			<slot name="options" />
			<div class="divider-line"></div>
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
		box-shadow: var(--ion-shadow);
		border-radius: 8px;
		background-color: var(--ion-color-main-background);
		border: 2px solid var(--ion-context-menu-border);
		box-sizing: border-box;
		overflow: hidden;
		font-size: 16px;
		color: var(--ion-text);
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
		border-top: 1px solid var(--ion-context-menu-divider);
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
		background-color: var(--ion-context-menu-title-background);
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
