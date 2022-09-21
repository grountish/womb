<template>
	<!-- //TODO reference projects -->
	<article class="gallery | bg-purple relative">
		<section class="text-yellow leading-9 pt-28 px-4 flex flex-col">
			<div v-for="(element, index) in collection" :key="element._key">
				<h2 class="inline-block text-4xl cursor-pointer" @mouseenter="mouseEnter(index, element)">
					{{ element.title }}
				</h2>
			</div>
		</section>

		<section class="images-section | absolute px-4 bottom-16 h-screen w-full md:transform md:-translate-x-4">
			<figure v-for="(element, index) in collection" :key="element._key" :data-index="index" class="img | overflow-hidden absolute">
				<SanityImage :asset-id="element.image.asset._ref" class="object-cover h-full w-full" />
				<figcaption class="text-white absolute inset-0">{{ element.title }}</figcaption>
			</figure>
		</section>
	</article>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type=="gallery"][0]`
import general from '../mixins/general'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
	mixins: [general],
	async asyncData({ $sanity }) {
		let { collection } = await $sanity.fetch(query)
		return { collection }
	},
	data() {
		return {
			isMobile: false,
			activeProject: 0,
			direction: 0,
		}
	},
	methods: {
		mouseEnter(index, element) {
			this.activeProject = this.collection.findIndex((img) => img.title === element.title)
		},
		renderImage(el, index, setIndex = true) {
			gsap.killTweensOf(el)
			const isFirst = el.dataset.index == 0

			const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 } })
			if (isFirst && this.direction === 1) {
				tl.to(el, { bottom: -250 })
				tl.to(el, { zIndex: this.collection.length - index }, '<')

				tl.to(
					el,
					{
						bottom: index * this.OFFSET,
						right: index * this.OFFSET,
						scale: 1 - index * this.SCALE,
						onComplete: () => {
							if (setIndex) el.setAttribute('data-index', index)
						},
					},
					'<20%'
				)
			} else {
				tl.to(el, {
					bottom: index * this.OFFSET,
					right: index * this.OFFSET,
					scale: 1 - index * this.SCALE,
					zIndex: this.collection.length - index,
					onComplete: () => {
						if (setIndex) el.setAttribute('data-index', index)
					},
				})
			}
		},
		initScrollTrigger() {
			this.headlines = this.selectAll('h2')

			this.headlines.forEach((headline, i) => {
				this.st = ScrollTrigger.create({
					trigger: headline,
					start: 'top top',
					onToggle: ({ isActive, direction }) => {
						this.direction = direction
						if (isActive) this.activeProject = i
					},
				})

				if (!this.isMobile) this.st.disable()
			})
		},
		checkMobile() {
			this.isMobile = window.innerWidth < 768
		},
		resize() {
			this.checkMobile()
			ScrollTrigger.getAll().forEach((st) => st.kill())
			this.initScrollTrigger()
		},
	},
	watch: {
		activeProject() {
			const activeImage = this.images[this.activeProject]
			const isSecondImage = Number(activeImage.dataset.index) === 1

			gsap.killTweensOf(activeImage)

			const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.4 } })

			if (!isSecondImage) tl.to(activeImage, { bottom: -200 })
			tl.set(activeImage, { zIndex: this.images.length - 0 }, isSecondImage ? '' : '<20%')
			tl.to(activeImage, { bottom: 0 * this.OFFSET }, '<')
			tl.to(
				activeImage,
				{
					right: 0 * this.OFFSET,
					scale: 1 - 0 * this.SCALE,
					onComplete: () => {
						activeImage.setAttribute('data-index', 0)
					},
				},
				'<'
			)

			this.getNextSiblings(activeImage, '[data-index]').forEach((el, i) => {
				const newIndex = i + 1
				this.renderImage(el, newIndex)
			})

			this.getPreviousSiblings(activeImage, '[data-index]').forEach((el, i) => {
				const newIndex = this.collection.length - i - 1
				this.renderImage(el, newIndex)
			})
		},
	},
	computed: {
		OFFSET() {
			if (this.isMobile) return 40
			return 90
		},
		SCALE() {
			if (this.isMobile) return 0.1
			return 0.06
		},
	},
	mounted() {
		gsap.registerPlugin(ScrollTrigger)

		this.checkMobile()
		window.addEventListener('resize', this.resize)

		this.images = this.selectAll('figure')
		this.images.forEach((img, index) => this.renderImage(img, index, false, true))

		this.initScrollTrigger()
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
