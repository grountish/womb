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
		select(selector) {
			return document.querySelector(selector)
		},
		selectAll(selector) {
			return document.querySelectorAll(selector)
		},
		matches(elem, filter) {
			if (elem && elem.nodeType === 1) {
				if (!filter) return
				return elem.matches(filter)
			}
		},
		getPreviousSiblings(elem, filter) {
			const sibs = []
			while ((elem = elem.previousSibling)) {
				if (this.matches(elem, filter)) sibs.push(elem)
			}

			return sibs
		},
		getNextSiblings(elem, filter) {
			const sibs = []
			while ((elem = elem.nextSibling)) {
				if (this.matches(elem, filter)) sibs.push(elem)
			}

			return sibs
		},
		returnThemeClass(isBackground, color) {
			if (isBackground) {
				return this.$store.state.mainTheme === 'black' ? 'bg-black text-white' : `bg-${color}`
			} else {
				return this.$store.state.mainTheme === 'black' ? 'text-white' : `text-${color}`
			}
		},
	},
}
