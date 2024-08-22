<script lang="ts" context="module">
	import Icon from '../components/Icon.svelte';

	export const meta = {
		title: 'IONOS Header/Icons',
		component: Icon,
		tags: ['autodocs'],
	};
</script>

<script lang="ts">
	import { Template, Story } from '@storybook/addon-svelte-csf';
	import '../main';
</script>

<Template let:args>
	<ionos-icons {...args} />
</Template>

<Story name="IONOS">
	<ionos-icons ionos />
</Story>

<Story name="Easystorage">
	<ionos-icons easystorage />
</Story>

<Story name="User">
	<ionos-icons user />
</Story>

<Story name="Webmail">
	<ionos-icons webmail />
</Story>

<Story name="Settings">
	<ionos-icons settings />
</Story>

<Story name="Logout">
	<ionos-icons logout />
</Story>

<Story name="Help">
	<ionos-icons help />
</Story>
