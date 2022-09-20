<template>
    <div :class="[returnThemeClass(true, 'pink')]">
        <!-- section 1  -->
        <div class="flex flex-col lg:min-h-screen py-28 px-4">
            <p :class="['text-4_5xl p-4 heading-1', returnThemeClass(false, 'mint')]">{{ header }}</p>
            <div class="grid grid-cols-2 p-28 mx-auto">
                <div v-for="author in authors" :key="author.id" class="m-4 fadeIn">
                    <div class="flex flex-col text-center">
                        <h1 :class="['font-black p-4 text-4xl leading-none', returnThemeClass(false, 'teal')]">{{ author.name }}</h1>
                        <p>{{ author.description }}</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center py-12">
                <h5 class="text-center px-6 pt-6 pb-4 m-auto rounded-full bg-white text-black leading-none">CLIENTS</h5>
            </div>
            <div :class="['heading-1', returnThemeClass(false, 'mint')]">
                <SanityContent :blocks="clients" />
            </div>
            <div class="flex justify-center py-12">
                <h5 class="text-center px-6 pt-6 pb-4 m-auto rounded-full bg-white text-black leading-none">SERVICES</h5>
            </div>
            <div class="grid grid-cols-3 w-full">
                <div v-for="service in services" :key="service.id" class="flex-1 flex-col m-4 fadeIn">
                    <h1 :class="['font-black py-4 text-xl leading-none text-left', returnThemeClass(false, 'teal')]">{{ service.name }}</h1>
                    <div class="flex h-80 bg-cover bg-center rounded-3xl relative" :style="{ backgroundImage: 'url(' + urlFor(service.image.asset._ref) + ')' }"></div>
                </div>
            </div>
            <div class="flex justify-center py-12">
                <h5 class="text-center px-6 pt-6 pb-4 m-auto rounded-full bg-white text-black leading-none">AWARDS</h5>
            </div>
            <div style="column-count: 2" class="soehne text-xs">
                <SanityContent :blocks="awards" />
            </div>
        </div>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`*[_type=="about"][0]`

import general from '../mixins/general'

export default {
    mixins: [general],
    async asyncData({ $sanity }) {
        let page = await $sanity.fetch(query)
        return { header: page.header, authors: page.authors, clients: page.clients, awards: page.awards, services: page.services }
    },
}
</script>

<style scoped>
</style>

