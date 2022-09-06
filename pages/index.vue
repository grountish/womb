<template>

	<div class="h-screen">

		<div
			v-if="blocks[0].background"
			class="relative grid w-screen h-screen bg-cover bg-no-repeat bg-center place-items-center index"
			:style="{
				backgroundImage:
					'url(' + urlFor(blocks[0].background.asset._ref) + ')',
			}"
		>

			<div
				class="flex flex-col items-start justify-center w-full px-3 pt-24 pb-24 text-center md:px-28"
			>

				<h1
					class="mx-auto text-6xl text-white"
				>
					 {{ blocks[0].title }}
				</h1>

				<ButtonBase
					v-if="blocks[0].button"
					typeBtn="secondary"
					:url="blocks[0].button.link"
					class="mx-auto my-2"
				>
					 {{ blocks[0].button.title }}
				</ButtonBase>

			</div>

			<p
				v-if="blocks[0].subtitle"
				class="absolute lg:w-1/2 w-4/5 mx-auto text-xl text-center bottom-8 text-white"
			>
				 {{ blocks[0].subtitle }}
        
			</p>

		</div>

		<div class="w-11/12 mx-auto mt-auto border-b border-black"></div>

	</div>

</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type=="home"][0]`

import general from '../mixins/general'

export default {
	mixins: [general],
	async asyncData({ $sanity }) {
		let { blocks } = await $sanity.fetch(query)
		return { blocks }
	},
}
</script>

<style scoped>
.index {
	cursor: initial !important;
}
</style>

