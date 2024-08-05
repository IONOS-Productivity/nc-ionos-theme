<!--
SPDX-FileLicenseText: 2024 Kai Henseler <kai.henseler@strato.de>
SPDX-License-Identifier: AGPL-3.0-or-later

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
<svelte:options customElement="ionos-global-nav" />

<script lang="ts">
	export let home_src = '#';
</script>

<div class="ion-global-nav">
	<a class="header-left" href={home_src}>
		<ionos-icons ionos />
		<ionos-icons easystorage />
	</a>

	<div class="header-right">
		{#if $$slots.webmail}
			<slot name="webmail" />
		{/if}
		<slot />
	</div>
</div>

<style>
	.ion-global-nav {
		--ion-blue: var(--color-primary, rgba(0, 61, 143, 1));
		--ion-color-primary: var(--ion-blue);

		--ion-white: var(--color-main-background, #fff);
		--ion-color-main-background: var(--ion-white);

		display: flex;
		align-items: center;
		background-color: var(--ion-color-main-background);
		box-shadow: 0px 2px 8px 0px rgba(113, 128, 149, 0.5);
		height: 64px;
		padding: 0 24px;
	}

	.header-left {
		display: flex;
		align-items: center;
		text-decoration: none;
		gap: 18px;
	}

	.header-right {
		display: flex;
		align-items: center;
		margin-left: auto;
	}

	@media (max-width: 768px) {
		.ion-global-nav {
			padding: 0 16px;
		}

		.header-left {
			gap: 12px;
		}
	}
</style>
