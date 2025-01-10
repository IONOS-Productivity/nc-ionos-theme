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
<svelte:options customElement="ionos-global-nav" />

<script lang="ts">
	interface Props {
		home_src?: string;
	}

	let { home_src = '#' }: Props = $props();
</script>

<div class="ion-global-nav" part="ion-global-nav">
	<a class="header-left" href={home_src} aria-label="Home">
		<ionos-icons ionos></ionos-icons>
		<ionos-icons product></ionos-icons>
	</a>
	<div class="header-right">
		<slot name="search" />
		<slot name="webmail" />
		<slot name="usermenu" />
	</div>
</div>

<style lang="scss">
	@import './style.scss';

	.ion-global-nav {
		display: flex;
		align-items: center;
		background-color: var(--ion-color-main-background);
		box-shadow: var(--ion-shadow-header);
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
		gap: 16px;
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
