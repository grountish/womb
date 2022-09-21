<template>
    <div :class="[returnThemeClass(true, 'lime'), 'min-h-screen']">
        <div v-if="post.video" class="w-full">
            <video class="w-full" :src="post.video.url" muted autoplay loop></video>
        </div>
        <div class="p-4 space-y-4">
            <h1 class="text-9xl helvetica-bold">{{ post.title }}</h1>
            <div class="w-3/4 sans-serif text-xs">
                <SanityContent :blocks="post.subtitle" />
            </div>
            <div class="flex justify-between">
                <div class="flex space-x-3 items-center">
                    <div class="flex relative pl-10 pb-3">
                        <div
                            v-for="(category, i) in post.categories"
                            :key="category.id"
                            class="absolute border border-white h-3 w-3 bg-red-500 rounded-full"
                            :style="{ left: 5 + i * 10 + 'px' }"
                        ></div>
                    </div>
                    <h4 v-for="category in post.categories" :key="category.id" :class="[returnThemeClass(false, 'white'), 'font-mono text-xs uppercase']">
                        {{ category.title }}
                    </h4>
                </div>
                <div>
                    <h4 :class="[returnThemeClass(false, 'white'), 'font-mono text-xs uppercase']">22.03.2021</h4>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div :class="[returnThemeClass(false, 'darkblue'), 'md:pr-10']">
                    <SanityContent :blocks="post.information" />
                </div>
                <div v-if="post.mainSlider">
                    <div
                        class="flex h-120 bg-cover bg-center rounded-3xl"
                        :style="{
                            backgroundImage: 'url(' + post.mainSlider[index].asset.url + ')',
                        }"
                    ></div>
                </div>
            </div>
            <div class="grid grid-cols-2 sans-serif text-xs">
                <div>
                    <h4>Text by {{ post.author }}</h4>
                </div>
                <div class="flex justify-between w-full" v-if="post.mainSlider">
                    <div>{{ index + 1 }} of {{ post.mainSlider.length }}</div>
                    <div @click="nextImage" class="cursor-pointer">slide</div>
                </div>
            </div>
            <div class="flex flex-col">
                <h1 :class="[returnThemeClass(false, 'yellow'), 'heading-3 py-20  text-center']">
                    {{ post.quote }}
                </h1>
                <h4 class="m-auto sans-serif text-xs">
                    {{ post.quoteAuthor }}
                </h4>
            </div>
            <div class="flex flex-wrap items-center justify-center">
                <div v-for="image in post.secondSlider" :key="image.id" class="w-1/3 p-4">
                    <div
                        class="flex h-120 bg-cover bg-center rounded-3xl"
                        :style="{
                            backgroundImage: 'url(' + urlFor(image.asset._ref) + ')',
                        }"
                    ></div>
                </div>
            </div>
            <div class="flex w-full flex-col">
                <div class="flex justify-center m-auto py-12">
                    <h1 class="text-center px-6 py-4 rounded-full bg-white text-black">SIMILAR</h1>
                </div>
                <div class="flex w-full">
                    <NuxtLink v-for="project in similarProjects" :key="project.id" :to="'/projects/' + project.slug.current" class="flex-1 flex-col m-4 fadeIn">
                        <div class="flex h-80 w-80 bg-cover bg-center rounded-3xl relative" :style="{ backgroundImage: 'url(' + urlFor(project.mainMedia.image.asset._ref) + ')' }">
                            <div
                                v-for="(category, i) in project.categories"
                                :key="category.id"
                                class="absolute top-4 border border-white h-3 w-3 bg-red-500 rounded-full"
                                :style="{ left: 5 + i * 10 + 'px' }"
                            ></div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import general from '../../mixins/general'
export default {
    mixins: [general],

    async asyncData({ $sanity, route }) {
        const page = await $sanity.fetch(groq`
    *[slug.current=="${route.params.id}"]{...,categories[]->{...,"similar":*[_type=="project" && references(^._id)]},
    "video": video.asset->,mainSlider[]{asset->{url}}}`)

        let post = page[0]
        const filteredProjects = post.categories.map((category) => category.similar).flat()
        let similarProjects = [],
            ids = []

        filteredProjects.forEach((element) => {
            const isDuplicate = ids.includes(element._id)
            if (!isDuplicate) {
                similarProjects.push(element)
                ids.push(element._id)
                return true
            }
            return false
        })

        return { post, similarProjects }
    },
    data() {
        return {
            index: 0,
        }
    },
    methods: {
        nextImage() {
            this.index++
            if (this.index > this.post.mainSlider.length - 1) {
                this.index = 0
            }
        },
    },
}
</script>
 

<style>
.sans-serif,
.sans-serif * {
    font-family: sans-serif;
}
</style>