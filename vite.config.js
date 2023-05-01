import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  { VantResolve } from 'vite-plugin-style-import';
import Components from 'unplugin-vue-components/vite';
import { resolve } from "path";
const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolves: [VantResolve()],
		}),
	],
	resolve: {
		alias: {
			"@": pathResolve("./src"), // 新增
		},
	},
})
