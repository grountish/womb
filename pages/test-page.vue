<template>
  <div class="p-80">
    <button class="border p-8" @click="callApi">Show data</button>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
    }
  },
  methods: {
    async callApi() {
      try {
        const response = await this.$axios.get('/api/test')
        this.data = response.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>