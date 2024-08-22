<script lang="ts" context="module">
	import UserMenu from '../components/userMenu/UserMenu.svelte';

	export const meta = {
		title: 'IONOS Header/User Menu',
		component: UserMenu,
		tags: ['autodocs'],
	};
</script>

<script lang="ts">
	import { Template, Story } from '@storybook/addon-svelte-csf';
	import '../main';
</script>

<Template let:args>
	<ionos-user-menu {...args} />
</Template>

<Story name="Default">
	<ionos-user-menu>
		<b slot="username">Username</b>
		<div slot="options">
			<ionos-user-menu-item icon="settings" label="Settings" link="#"
			></ionos-user-menu-item>
		</div>
		<div slot="logout">
			<ionos-user-menu-item icon="logout" label="Logout" link="#"
			></ionos-user-menu-item>
		</div>
	</ionos-user-menu>
</Story>
