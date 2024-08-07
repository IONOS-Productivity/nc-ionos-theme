<svelte:options customElement="ionos-menu-item" />

<script lang="ts">
	export let icon: string = '';
	export let label = '';
	export let link = '';
</script>

<a href={link}>
	<div class="icon-and-label">
		<ionos-icons {...{ [icon]: true }} />
		<div class="label">{label}</div>
	</div>
</a>

<style lang="scss">
	.label {
		flex: 1;
		position: relative;
		line-height: 24px;
		font-weight: 500;
	}

	.icon-and-label {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
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
