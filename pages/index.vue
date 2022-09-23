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
                <ProjectComponent v-for="project in page.section2.projects" :key="project.id" :project="project" />
            </div>
        </div>
        <!-- section 3 -->
        <div class="flex flex-col px-4 py-20">
            <h1 :class="['heading-2', returnThemeClass(false, 'blue')]">
                {{ page.section3.blocks.header }}
            </h1>
            <div class="flex w-full">
                <ProjectComponent v-for="project in page.section3.projects" :key="project.id" :project="project" showCategories />
            </div>
        </div>
        <!-- section 4 -->
        <div class="flex flex-col px-4 py-20">
            <div class="flex w-full">
                <ProjectComponent v-for="project in page.section4.projects" :key="project.id" :project="project" />
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
"section2":*[_type=="home"][0]{"collection":blocks[1].collection, "projects":blocks[1].projects[]->{...,"mainVideo":mainMedia.video.asset->url}},
"section3":*[_type=="home"][0]{blocks[2]}{...,"projects": blocks.projects[]->{...,categories[]->,"mainVideo":mainMedia.video.asset->url}},
"section4":*[_type=="home"][0]{blocks[3]}{...,"projects": blocks.projects[]->{...,categories[]->,"mainVideo":mainMedia.video.asset->url}}}
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

