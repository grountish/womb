<template>
    <div class="min-h-screen p-4">
        <h1 class="text-5xl font-black py-20 text-left">Our partners are lorem ipsum dolor sit amet</h1>
        <div class="">
            <div class="grid grid-cols-3">
                <h2 v-for="(element, index) in collection" :key="index" :class="[index === currentIndex && 'text-red-500', 'text-2xl font-black cursor-pointer']" @click="setCurrentIndex(index)">
                    {{ element.name }}
                </h2>
            </div>
            <div class="grid py-10 min-h-50 h-full">
                <h3 class="text-2xl">
                    {{ collection[currentIndex].jobDescription }}
                </h3>
                <h4 class="w-1/2 font-mono ">
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
    methods: {
        setCurrentIndex(index) {
            this.currentIndex = index
        },
    },
}
</script>

