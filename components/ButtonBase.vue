<template>
  <a :href="url" class="w-full">
    <button :class="['rounded-lg border lg:px-3 px-4 py-1 text-xl hover:scale-90 scaleUp w-full', typeBtn == 'primary' ? 'bg-primaryGreen text-white' : typeBtn == 'secondary' ? 'bg-primaryBlue' : typeBtn == 'empty' ? 'bg-transparent border-2 border-black' : 'text-black bg-white']">
      <slot class="text-4xl"></slot>
    </button>
  </a>
</template>

<script>
export default {
  props: ['typeBtn', 'url'],
}
</script>

<style></style>
