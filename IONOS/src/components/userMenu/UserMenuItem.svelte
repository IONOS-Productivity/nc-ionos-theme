<svelte:options customElement="ionos-user-menu-item" />

<script lang="ts">
	export let icon: string = '';
	export let label: string = '';
	export let link: string = '';
	export let target: string = '_self';
</script>

<a href={link} class="option-content" {target}>
	<div class="icon-and-label">
		<ionos-icons {...{ [icon]: true }} />
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
		color: var(--ionos-text-color);
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
