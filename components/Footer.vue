// eslin
<template>
	<footer :class="[returnThemeClassFooter(true), 'w-full p-4']">
		<div class="md:flex justify-between w-full">
			<div
				class="absolute md:static transform translate-y-4 -translate-x-4 md:translate-y-0 md:translate-x-0 scale-50 md:scale-100 origin-bottom-left"
				@mouseenter="onEnter"
				@mouseleave="onLeave"
			>
				<img ref="logoimg" :class="[$store.state.mainTheme === 'black' && 'invert', 'w-60']" :src="$store.state.settings[0].circleLogo" />
			</div>
			<div class="flex mt-auto w-full md:w-auto justify-between">
				<span class="text-5xl md:mt-auto pr-6 cursor-pointer w-24" @click="moveTo()" @mouseenter="onEnterTop" @mouseleave="onLeaveTop" ref="topbtn">
					<svg class="w-full h-full" height="84" viewBox="0 0 127 84" width="127" xmlns="http://www.w3.org/2000/svg">
						<g fill="#fff">
							<path d="m68.92 49.24 21.65-21.65v55.93h13.93v-35.13-20.76l21.66 21.61.08-19.31-28.78-28.79-28.63 28.81z" />
							<path d="m0 28.8.1 19.3 21.65-21.66v55.94h13.93v-55.9l21.66 21.61.08-19.31-28.79-28.78z" />
						</g>
					</svg>
				</span>
				<div class="flex flex-col space-y-3 items-end">
					<img class="transform scale-150" :src="$store.state.settings[0].logo" :class="[$store.state.mainTheme === 'black' && 'invert', 'w-20 h-auto mx-3 my-4']" />
					<span class="ml-auto">🌈</span>
					<ButtonBase :url="$store.state.settings[0].contact.link"> {{ $store.state.settings[0].contact.text }}</ButtonBase>
					<ButtonBase :url="$store.state.settings[0].instagram.link"> {{ $store.state.settings[0].instagram.text }}</ButtonBase>
				</div>
			</div>
		</div>
		<div class="flex flex-col md:flex-row w-full justify-end md:justify-between text-xs py-3">
			<h4 class="font-mono text-right md:text-left">WOMB PRODUCTION COMPANY 2022 ®</h4>
			<h4 class="font-mono text-right md:text-left">PRIVACY POLICY / FAQ / TERMS & CONDITIONS</h4>
		</div>
		<!-- <span
            class="
                bg-primaryYellow bg-orange bg-pink bg-mint bg-green bg-teal bg-blue bg-yellow bg-darkyellow bg-purple bg-darkpurple bg-orange bg-brown bg-lime
                text-primaryYellow text-orange text-pink text-mint text-green text-teal text-blue text-yellow text-darkyellow text-purple text-darkpurple text-orange text-brown
                bg-darkblue
                text-darkblue
                bg-cyan bg-magenta
            "
        ></span> -->
	</footer>
</template>

<script>
import { gsap } from 'gsap'

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
				'projects-id': 'lime',
				gallery: 'purple',
			}
			if (isBackground) {
				return this.$store.state.mainTheme === 'black' ? 'bg-black text-white' : `bg-${colors[this.currentRoute]}`
			} else {
				return this.$store.state.mainTheme === 'black' ? 'text-white' : `text-${color}`
			}
		},
		onEnter() {
			gsap.killTweensOf(this.$refs.logoimg)
			gsap.to(this.$refs.logoimg, {
				rotate: gsap.utils.random(-360, 360),
				duration: 0.8,
				ease: 'expo.out',
			})
		},
		onLeave() {
			gsap.killTweensOf(this.$refs.logoimg)
			gsap.to(this.$refs.logoimg, {
				rotate: 0,
				duration: 0.5,
				ease: 'bounce',
			})
		},
		onEnterTop() {
			gsap.to(this.$refs.topbtn, {
				y: -10,
				duration: 0.3,
				ease: 'poewr4.out',
			})
		},
		onLeaveTop() {
			gsap.to(this.$refs.topbtn, {
				y: 0,
				duration: 0.3,
				ease: 'bounce',
			})
		},
	},
}
</script>

<style>
/*
    bg-primaryYellow
    bg-orange
    bg-pink
    bg-mint
    bg-green
    bg-teal
    bg-blue 
    bg-yellow
    bg-darkyellow 
    bg-purple
    bg-darkpurple
    bg-orange 
    bg-brown
    bg-lime
    text-primaryYellow
    text-orange
    text-pink
    text-mint
    text-green
    text-teal
    text-blue
    text-yellow
    text-darkyellow
    text-purple
    text-darkpurple
    text-orange
    text-brown
    bg-darkblue
    text-darkblue
    bg-cyan bg-magenta
*/
</style>
