<template>
    <div class="min-h-screen p-4">
        <h1 class="text-8xl heading-2 py-20">Our partners are lorem ipsum dolor sit amet</h1>
        <div class="">
            <div class="grid grid-cols-2 lg:grid-cols-3 ">
                <div v-for="(element, index) in collection" :key="index" class="-my-1">
                    <h2 :class="[index === currentIndex && 'text-red-500', 'text-2xl font-black cursor-pointer min-w-18']" @click="currentIndex = index">
                        {{ element.name }}
                    </h2>
                </div>
            </div>
            <div class="grid py-10 min-h-50 h-full">
                <h3 class="text-2xl">
                    {{ collection[currentIndex].jobDescription }}
                </h3>
                <h4 class="soehne">
                    {{ collection[currentIndex].text }}
                </h4>
            </div>
            <div class="">
                <div class="w-full">
                    <SanityImage :asset-id="collection[currentIndex].image.asset._ref" class="rounded-3xl" format="webp" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type=="partners"][0]`

import general from '../mixins/general'

export default {
    mixins: [general],
    data() {
        return {
            currentIndex: 0,
        }
    },
    async asyncData({ $sanity }) {
        let { collection } = await $sanity.fetch(query)
        return { collection }
    },
}
</script>

<style scoped>
h1 {
    letter-spacing: 0.05rem !important;
}
</style>

