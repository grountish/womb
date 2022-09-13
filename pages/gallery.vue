<template>
	<!-- //TODO reference projects -->
	<article class="gallery | bg-purple relative">
		<section class="text-yellow leading-9 pt-28 px-4">
			<h2 v-for="(element, index) in collection" :key="index" class="text-4xl" @mouseover="mouseOver(index, element)">
				{{ element.title }}
			</h2>
		</section>

		<section class="images-section | absolute px-4 bottom-16 h-screen w-full md:transform md:-translate-x-4">
			<figure
				v-for="(element, index) in collection"
				:key="index"
				class="overflow-hidden absolute duration-300"
				:style="{ bottom: `${index * OFFSET}px`, right: `${index * OFFSET}px`, transform: `scale(${1 - index * SCALE})`, zIndex: `${collection.length - index}` }"
			>
				<SanityImage :asset-id="element.image.asset._ref" class="object-cover h-full w-full" />
			</figure>
		</section>
	</article>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type=="gallery"][0]`

import general from '../mixins/general'

export default {
	mixins: [general],
	async asyncData({ $sanity }) {
		let { collection } = await $sanity.fetch(query)
		return { collection }
	},
	methods: {
		mouseOver(index, element) {
			const imgs = this.selectAll('img')
		},
		checkMobile() {
			this.isMobile = window.innerWidth < 768
		},
		resize() {
			this.checkMobile()
		},
	},
	data() {
		return {
			isMobile: false,
		}
	},
	computed: {
		OFFSET() {
			if (this.isMobile) return 40
			return 80
		},
		SCALE() {
			if (this.isMobile) return 0.1
			return 0
		},
	},
	mounted() {
		this.checkMobile()
		window.addEventListener('resize', this.resize)
	},
	destroyed() {
		window.removeEventListener('resize', this.resize)
	},
}
</script>

<style scoped>
.gallery {
	min-height: 100vh;
	isolation: isolate;
}

.images-section {
	z-index: -1;
}

figure {
	aspect-ratio: 4 / 2.5;
	width: calc(100vw - 3rem);
	border-radius: 37px;
	left: 1.5rem;
}

@media (min-width: 768px) {
	figure {
		width: 50vw;
		left: inherit;
		right: 1.5rem;
	}
}
</style>
