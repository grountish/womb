<template>
    <div :class="['absolute top-4 border border-white h-3 w-3 rounded-full', returnCategoryClass(title)]" :style="{ left: 5 + i * 10 + 'px' }"></div>
</template>

<script>
import general from '../mixins/general'

export default {
    mixins: [general],
    props: ['title', 'i'],
}
</script>

<style></style>
