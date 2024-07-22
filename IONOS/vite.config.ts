import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			}
		})
	],
	build: {
		rollupOptions: {
			output: {
				dir: '../core/js/custom-elements/global-navigation',
				entryFileNames: 'ionos-global-navigation.js'
			}
		},
		lib: {
			entry: 'src/App.svelte',
			name: 'IonosGlobalNavigation',
			formats: ['iife']
		}
	}
});
