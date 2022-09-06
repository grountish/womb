<template>
  <div class="h-full">
    <div class="grid h-full grid-cols-2 bg-indigo-700 p-40">
      <div class="">
        <h2 v-for="(element, index) in collection" :key="index" class="text-4xl" @mouseover="mouseOver(index, element)">
          {{ element.title }}
        </h2>
      </div>
      <div class="relative">
        <div v-for="(element, index) in collection" :key="index" class="absolute w-80" :style="{ top: index + '00px', left: index + '00px' }">
          <SanityImage :asset-id="element.image.asset._ref" class="absolute" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type=="gallery"][0]`

import general from '../mixins/general'

export default {
  mixins: [general],
  async asyncData({ $sanity }) {
    let { collection } = await $sanity.fetch(query)
    return { collection }
  },
  methods: {
    mouseOver(index, element) {
      const imgs = this.selectAll('img')
      console.log(index, element, imgs)
    },
  },
}
</script>

