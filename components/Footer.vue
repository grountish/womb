<template>
    <footer :class="[returnThemeClassFooter(true), 'w-full p-4']">
        <div class="flex justify-between w-full">
            <div><img :class="[$store.state.mainTheme === 'black' && 'invert', 'w-60']" :src="$store.state.settings[0].circleLogo" /></div>
            <div class="flex mt-auto">
                <span class="text-5xl mt-auto pr-6 cursor-pointer" @click="moveTo()">↑↑</span>
                <div class="flex flex-col space-y-3 items-end">
                    <img :src="$store.state.settings[0].logo" :class="[$store.state.mainTheme === 'black' && 'invert', 'w-20 h-auto mx-3 my-4']" />
                    <span class="ml-auto">🌈</span>
                    <ButtonBase :url="$store.state.settings[0].contact.link"> {{ $store.state.settings[0].contact.text }}</ButtonBase>
                    <ButtonBase :url="$store.state.settings[0].instagram.link"> {{ $store.state.settings[0].instagram.text }}</ButtonBase>
                </div>
            </div>
        </div>
        <div class="flex w-full justify-between text-xs py-3">
            <h4 class="font-mono">WOMB PRODUCTION COMPANY 2022 ®</h4>
            <h4 class="font-mono">PRIVACY POLICY / FAQ / TERMS & CONDITIONS</h4>
        </div>
        <span
            class="
                bg-primaryYellow bg-orange bg-pink bg-mint bg-green bg-teal bg-blue bg-yellow bg-darkyellow bg-purple bg-darkpurple bg-orange bg-brown
                text-primaryYellow text-orange text-pink text-mint text-green text-teal text-blue text-yellow text-darkyellow text-purple text-darkpurple text-orange text-brown
            "
        ></span>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentRoute: this.$router.history.current.name,
        }
    },
    watch: {
        async $route(to) {
            this.currentRoute = to.name
            console.log(to.name)
        },
    },
    methods: {
        moveTo() {
            window.scrollTo(0, 0)
        },
        returnThemeClassFooter(isBackground, color) {
            const colors = {
                index: 'primaryYellow',
                about: 'pink',
                partners: 'orange',
            }
            if (isBackground) {
                return this.$store.state.mainTheme === 'black' ? 'bg-black text-white' : `bg-${colors[this.currentRoute]}`
            } else {
                return this.$store.state.mainTheme === 'black' ? 'text-white' : `text-${color}`
            }
        },
    },
}
</script>

<style>
</style>
