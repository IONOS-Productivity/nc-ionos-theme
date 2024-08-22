<script lang="ts" context="module">
	import UserMenuItem from '../components/userMenu/UserMenuItem.svelte';

	export const meta = {
		title: 'IONOS Header/User Menu/Item',
		component: UserMenuItem,
		tags: ['autodocs'],
	};
</script>

<script lang="ts">
	import { Template, Story } from '@storybook/addon-svelte-csf';
	import '../main';
</script>

<Template let:args>
	<ionos-user-menu-item {...args} />
</Template>

<Story name="Settings">
	<ionos-user-menu-item icon="settings" label="Settings" link="#"
	></ionos-user-menu-item>
</Story>

<Story name="Logout">
	<ionos-user-menu-item icon="logout" label="Logout" link="#"
	></ionos-user-menu-item>
</Story>

<Story name="Help">
	<ionos-user-menu-item icon="help" label="Help" link="#"
	></ionos-user-menu-item>
</Story>
