<template>
    <div :class="[$store.state.mainTheme === 'black' ? 'bg-black text-white' : 'bg-primaryYellow', 'grid overflow-x-hidden   fadeIn']">
        <!-- section 1  -->
        <div class="flex flex-col h-screen">
            <div class="static" style="height: 70vh; overflow:hidden;">
                <video playsinline autoplay muted loop id="bgvideo" class="w-screen">
                    <source :src="page.section1.blocks.video" type="video/mp4" />
                </video>
            </div>
            <div class="flex flex-1 h-full">
                <p class=" text-4_5xl p-4 heading-1 ">{{ page.section1.blocks.header }}</p>
            </div>
        </div>

        <!-- section 2 -->
        <div class="flex flex-col px-4 py-2">
            <div class="flex w-full">
                <div v-for="article in page.section2.collection" :key="article.id" class="flex-1 flex-col m-4 fadeIn">
                    <div class="flex h-120 bg-cover bg-center rounded-3xl" :style="{ backgroundImage: 'url(' + urlFor(article.image.asset._ref) + ')' }"></div>
                    <div class="flex flex-col">
                        <h1 class="font-black p-4 text-4xl leading-none text-justify">{{ article.header }}</h1>
                        <p class="">{{ article.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- section 3 -->
        <div class="flex flex-col px-4 py-20">
            <h4 class="text-xs uppercase font-mono flex mr-auto items-center"><span class="text-3xl m-auto pb-1">● </span> {{ page.section3.blocks.topHeader.text }}</h4>
            <h1 class="text-8xl heading-2">
                {{ page.section3.blocks.header }}
            </h1>
            <div class="flex w-full">
                <NuxtLink v-for="project in page.section3.projects" :key="project.id" :to="'projects/' + project.slug.current" class="flex-1 flex-col m-4 fadeIn">
                    <div class="flex h-120 bg-cover bg-center rounded-3xl relative" :style="{ backgroundImage: 'url(' + urlFor(project.mainMedia.image.asset._ref) + ')' }">
                        <div
                            v-for="(category, i) in project.categories"
                            :key="category.id"
                            class="absolute top-4 border border-white h-3 w-3 bg-red-500 rounded-full"
                            :style="{ left: 5 + i * 10 + 'px' }"
                        ></div>
                    </div>
                    <div class="flex flex-col space-y-3">
                        <h1 class="font-black py-4 text-xl leading-none text-left">{{ project.title }}</h1>
                        <div class="flex space-x-3">
                            <h4 v-for="category in project.categories" :key="category.id" class="font-mono text-xs uppercase">
                                {{ category.title }}
                            </h4>
                        </div>
                        <SanityContent :blocks="project.information" />
                    </div>
                </NuxtLink>
            </div>
        </div>
        <!-- section 4 -->
        <div class="flex flex-col px-4 py-20">
            <div class="flex-1 flex-col my-4 fadeIn">
                <div class="flex h-120 bg-cover bg-center rounded-3xl" :style="{ backgroundImage: 'url(' + urlFor(page.section4.blocks.articles.image.asset._ref) + ')' }"></div>
                <div class="flex flex-col">
                    <h1 class="font-black py-4 text-4xl leading-none text-justify">{{ page.section4.blocks.articles.header }}</h1>
                    <p class="">{{ page.section4.blocks.articles.text }}</p>
                </div>
            </div>
        </div>
            <h1 class="text-8xl heading-2 text-center">
                {{ page.section4.blocks.subHeader }}
            </h1>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`{
"section1":*[_type=="home"][0]{blocks[0]{...,"video":media.video.asset->url}},
"section2":*[_type=="home"][0]{"collection":blocks[1].collection},
"section3":*[_type=="home"][0]{blocks[2]}{...,"projects": blocks.projects[]->{...,categories[]->}},
"section4":*[_type=="home"][0]{blocks[3]}}
`

import general from '../mixins/general'

export default {
    mixins: [general],
    async asyncData({ $sanity }) {
        let page = await $sanity.fetch(query)
        return { page }
    },
}
</script>

<style scoped>
 
.index {
    cursor: initial !important;
}

video {
    object-fit: cover;
}
</style>

