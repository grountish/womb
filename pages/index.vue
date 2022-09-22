<template>
    <div :class="[returnThemeClass(true, 'primaryYellow')]">
        <!-- section 1  -->
        <div class="flex flex-col">
            <div class="static" style="height: 70vh; overflow: hidden">
                <video playsinline autoplay muted loop id="bgvideo" class="w-screen">
                    <source :src="page.section1.blocks.video" type="video/mp4" />
                </video>
            </div>
            <div class="flex flex-1 h-full">
                <p :class="['p-4 heading-1', returnThemeClass(false, 'brown')]">{{ page.section1.blocks.header }}</p>
            </div>
        </div>
        <!-- section 2 -->
        <div class="flex flex-col px-4 py-2">
            <div class="flex w-full space-x-6">
                <div v-for="article in page.section2.collection" :key="article.id" class="flex-1 flex-col fadeIn">
                    <div class="flex h-120 bg-cover bg-center rounded-3xl" :style="{ backgroundImage: 'url(' + urlFor(article.image.asset._ref) + ')' }"></div>
                    <div class="flex flex-col">
                        <h1 :class="['font-black p-4 text-4xl leading-none text-justify', returnThemeClass(false, 'brown')]">{{ article.header }}</h1>
                        <p class="">{{ article.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- section 3 -->
        <div class="flex flex-col px-4 py-20">
            <h1 :class="['heading-2', returnThemeClass(false, 'blue')]">
                {{ page.section3.blocks.header }}
            </h1>
            <div class="flex w-full">
                <NuxtLink v-for="project in page.section3.projects" :key="project.id" :to="'projects/' + project.slug.current" class="flex-1 flex-col m-4 fadeIn">
                    <div
                        class="flex h-120 bg-cover bg-center rounded-3xl relative"
                        :style="{ backgroundImage: project.mainMedia.isVideo ? '' : 'url(' + urlFor(project.mainMedia.image.asset._ref) + ')' }"
                    >
                        <video playsinline autoplay muted loop class="rounded-3xl h-full">
                            <source :src="project.mainVideo" type="video/mp4" />
                        </video>
                        <CategoryComponent v-for="(category, i) in project.categories" :key="category.id" :title="category.title" :i="i" />
                    </div>
                    <div class="flex flex-col space-y-3">
                        <h1 :class="['font-black py-4 text-xl leading-none text-left', returnThemeClass(false, 'brown')]">{{ project.title }}</h1>
                        <div class="flex space-x-3">
                            <h4 v-for="category in project.categories" :key="category.id" :class="['font-mono text-xs uppercase', returnThemeClass(false, 'lime')]">
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
                    <h1 :class="['py-4 text-4xl leading-none text-justify', returnThemeClass(false, 'brown')]">{{ page.section4.blocks.articles.header }}</h1>
                    <p class="">{{ page.section4.blocks.articles.text }}</p>
                </div>
            </div>
        </div>
        <h1 :class="['heading-2 text-center', returnThemeClass(false, 'blue')]">
            {{ page.section4.blocks.subHeader }}
        </h1>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`{
"section1":*[_type=="home"][0]{blocks[0]{...,"video":media.video.asset->url}},
"section2":*[_type=="home"][0]{"collection":blocks[1].collection},
"section3":*[_type=="home"][0]{blocks[2]}{...,"projects": blocks.projects[]->{...,categories[]->,"mainVideo":mainMedia.video.asset->url}},
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

<style >
video {
    object-fit: cover;
}
</style>

