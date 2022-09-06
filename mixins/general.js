import imageUrlBuilder from '@sanity/image-url'

export default {
	data() {
		return {
			builder: imageUrlBuilder({
				projectId: 'q5syy0z1',
				dataset: 'production',
				apiVersion: '2019-01-29', // use current UTC date - see "specifying API version"!
				useCdn: true, // `false` if you want to ensure fresh data
			}),
			serializers: {
				types: {},
			},
		}
	},
	methods: {
		urlFor(source) {
			return this.builder.image(source)
		},
		select(selector){
			return document.querySelector(selector)
		},
		selectAll(selector){
			return document.querySelectorAll(selector)
		},
	},
}
