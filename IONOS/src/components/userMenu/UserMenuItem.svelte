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
<svelte:options customElement="ionos-user-menu-item" />

<script lang="ts">
	interface Props {
		icon?: string;
		label?: string;
		link?: string;
		target?: string;
	}

	let {
		icon = '',
		label = '',
		link = '',
		target = '_self',
	}: Props = $props();
</script>

<a href={link} class="option-content" {target}>
	<div class="icon-and-label">
		<ionos-icons {...{ [icon]: true }}></ionos-icons>
		<div class="label">{label}</div>
	</div>
</a>

<style lang="scss">
	.icon-and-label {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
	}

	.label {
		flex: 1;
		position: relative;
		line-height: 24px;
		font-weight: 500;
	}

	.option-content {
		display: flex;
		padding: 16px;
		gap: 16px;
	}

	a {
		text-decoration: none;
		color: var(--ion-context-menu-item-text);
	}

	a:hover {
		background-color: var(--ion-context-menu-item-background-hover);
	}

	a:active {
		background-color: var(--ion-context-menu-item-background-active);
	}

	a:disabled {
		color: var(--ion-context-menu-item-text-disabled);
		background-color: var(--ion-context-menu-item-background-disabled);
	}

	ionos-icons {
		display: inline-flex;
	}
</style>
