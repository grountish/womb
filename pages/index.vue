<template>
  <div class="">
    <!-- section 1  -->
    <div class="flex flex-col h-screen ">
      <div class="static" style="height: 70vh; overflow: hidden">
        <video playsinline autoplay muted loop id="bgvideo">
          <source :src="page.section1.blocks.video" type="video/mp4" />
        </video>
      </div>

      <div class="flex flex-1 h-full">
        <p class="font-black text-4xl p-4 leading-none text-justify">{{ page.section1.blocks.header }}</p>
      </div>
    </div>

    <!-- section 2 -->
    <div class="flex flex-col min-h-screen p-4 ">
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
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`{
"section1":*[_type=="home"][0]{blocks[0]{...,"video":media.video.asset->url}},
"section2":*[_type=="home"][0]{"collection":blocks[1].collection}}
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
* {
  font-family: Helvetica, sans-serif;
}
.index {
  cursor: initial !important;
}

video {
  object-fit: cover;
}
</style>

