import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			hot: !process.env.VITEST,
			compilerOptions: {
				customElement: false, // Disable custom elements for testing
			},
		}),
	],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./src/test-setup.ts'],
		coverage: {
			reporter: ['text', 'html', 'json'],
			exclude: [
				'node_modules/',
				'src/test-setup.ts',
				'**/*.d.ts',
				'**/*.config.*',
			],
		},
	},
});
