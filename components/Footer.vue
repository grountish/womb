<template>
  <footer class="w-full p-4">
    <div class="flex justify-between w-full">
      <div><img class="w-60" :src="$store.state.settings[0].circleLogo" /></div>
      <div class="flex mt-auto">
        <span class="text-5xl mt-auto pr-6 cursor-pointer" @click="moveTo()">↑↑</span>
        <div class="flex flex-col space-y-3 items-end">
          <img class="w-20" :src="$store.state.settings[0].logo" />
          <span class="ml-auto">🌈</span>
          <ButtonBase :url="$store.state.settings[0].contact.link"> {{ $store.state.settings[0].contact.text }}</ButtonBase>
          <ButtonBase :url="$store.state.settings[0].instagram.link"> {{ $store.state.settings[0].instagram.text }}</ButtonBase>
        </div>
      </div>
    </div>
    <div class="flex w-full justify-between text-xs py-3 font-mono">
      <div>WOMB PRODUCTION COMPANY 2022 ®</div>
      <div>PRIVACY POLICY / FAQ / TERMS & CONDITIONS</div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    moveTo() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style></style>
