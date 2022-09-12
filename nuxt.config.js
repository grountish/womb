
export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	target: 'static',
	server: {
		host: '0.0.0.0', // default: localhost
	},
	head: {
		htmlAttrs: {
			lang: 'es',
		},
		target: 'static',
		meta: [
			{
				charset: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],

		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	plugins: ['~/plugins/preview.client.js'],

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['assets/css/tailwind.css'],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'nuxt-compress',
		'nuxt-build-optimisations',
		'@aceforth/nuxt-optimized-images',
	],
	serverMiddleware: {
		'/api': '~/api',
	},
	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/sanity/module',
		'@nuxtjs/axios',
		[
			'nuxt-compress',
			{
				gzip: {
					cache: true,
				},
				brotli: {
					threshold: 10240,
				},
			},
		],
	],
	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},
	build: {
		transpile: ['gsap'],
	},
	// Build Configuration (https://go.nuxtjs.dev/config-build)

	// GSAP

	sanity: {
		projectId: 'q5syy0z1',
		dataset: 'production',
		minimal: true,
		useCdn: false,
	},
}
