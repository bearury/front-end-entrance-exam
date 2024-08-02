import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			$fonts: resolve('./fonts'),
		},
	},
	css: {
		devSourcemap: true,
	},
})
