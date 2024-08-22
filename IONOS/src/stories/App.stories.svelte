<script lang="ts" context="module">
	import App from '../App.svelte';

	export const meta = {
		title: 'IONOS Header',
		component: App,
		tags: ['autodocs'],
	};
</script>

<script lang="ts">
	import { Template, Story } from '@storybook/addon-svelte-csf';
	import '../main.ts';
</script>

<Template let:args>
	<App {...args} />
</Template>

<Story name="plain header" args={{ home_src: '#' }}>
	<ionos-global-nav></ionos-global-nav>
</Story>

<Story name="Logged in user" args={{ home_src: '#' }}>
	<ionos-global-nav>
		<div slot="webmail">
			<ionos-icons webmail />
		</div>
		<div slot="usermenu">
			<ionos-user-menu></ionos-user-menu>
		</div>
	</ionos-global-nav>
</Story>
