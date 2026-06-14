import path from "node:path"
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { hopeTheme } from 'vuepress-theme-hope';
import { defineUserConfig } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = import.meta.dirname || getDirname(import.meta.url)


export default defineUserConfig({
	base: '/portfolio_but2/',
	source: path.resolve(__dirname, '../..'), // Point vers le dossier "docs"
  	dest: path.resolve(__dirname, '../../build'), // Force la sortie dans "build"
	bundler: viteBundler(),
	port: 4040,
	plugins: [
		registerComponentsPlugin({
			components: {
				ImageComposant: path.resolve(__dirname, './components/ImageComposant.vue'),
			},
		}),
	],
	theme: defaultTheme({
		logo: 'https://vuepress.vuejs.org/images/hero.png',
		sidebar: [
			{
				text: 'Accueil',
				link: '/README.md'
			},
			{
				text: 'Technique',
				link: '/pages/technique.md'
			},
			{
				text: 'Suivi de projet',
				link: '/pages/suivi-projet.md'
			},
			{
				text: 'Intégration en entreprise',
				link: '/pages/integration-entreprise.md'
			}
		]
	})
})
