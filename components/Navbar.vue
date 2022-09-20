<template>
    <nav :class="[toggle ? 'bg-primaryGreen' : 'bg-transparent', 'fixed top-0 z-10 flex flex-wrap items-center justify-between w-full px-8 py-1  lg:px-10 xl:pr-12 Copernicus  sm:Haffer']">
        <div class="flex items-center flex-shrink-0 mr-6 lg:ml-4">
            <NuxtLink to="/">
                <!-- set the invert with the color theme -->
                <SanityImage :asset-id="logo.asset._ref" :class="[$store.state.mainTheme === 'black' && 'invert', 'w-30 h-auto mx-3 my-4']" auto="format" format="webp" />
            </NuxtLink>
        </div>
        <div :class="[toggle ? 'sm:circleMenu' : 'sm:circleMenu2']">
            <div class="block lg:hidden cursor-pointer">
                <input type="checkbox" id="overlay-input" />
                <label for="overlay-input" @click="toggleNav" id="overlay-button" class="p-5 absolute right-8">
                    <span :class="[toggle ? 'white ' : 'black']"></span>
                </label>
                <title>Index</title>
            </div>
        </div>

        <div :class="[toggle ? 'h-screen' : 'h-0', 'w-full flex-grow flex lg:items-center lg:w-auto lg:pt-8 items-center']" id="nav-content">
            <ul
                id="link-list"
                :class="[
                    linkse ? ' opacity-100 ' : ' opacity-0 hidden  ',
                    'pt-4 lg:pt-0 lg:opacity-100 list-reset lg:flex justify-end flex-1 items-center uppercase lg:text-xs text-5xl lg:text-center text-left text-white lg:text-black ',
                ]"
            >
                <div class="grid lg:flex">
                    <li>
                        <span
                            class="inline-block py-2 no-underline transition-all duration-200 desktop:mx-4 tablet:mx-2 hover:text-green-900 cursor-pointer"
                            @click="$store.commit('SET_mainTheme', $store.state.mainTheme === 'black' ? 'white' : 'black')"
                        >
                            🌈
                        </span>
                    </li>

                    <li>
                        <NuxtLink to="/gallery" class="inline-block py-2 no-underline transition-all duration-200 lg:mx-2 hover:text-green-900">
                            <div class="flex flex-col w-28 text-left">
                                <span class="mr-auto text-white">PROJECTS</span>
                                <h4 class="text-xxs text-gray-700">A vast range of projects</h4>
                            </div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/partners" class="inline-block py-2 no-underline transition-all duration-200 lg:mx-2 hover:text-green-900">
                            <div class="flex flex-col text-left">
                                <span class="mr-auto text-white">Partners</span>
                                <h4 class="text-xxs text-gray-700 w-28">Our diverse</h4>
                                <h4 class="text-xxs text-gray-700">network of collaborators</h4>
                            </div></NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink to="/about" class="inline-block py-2 no-underline transition-all duration-200 lg:mx-2 hover:text-green-900">
                            <div class="flex flex-col text-left">
                                <span class="mr-auto text-white">About</span>
                                <h4 class="text-xxs text-gray-700 w-28">Learn more</h4>
                                <h4 class="text-xxs text-gray-700">about our process</h4>
                            </div>
                        </NuxtLink>
                    </li>
                </div>
            </ul>
        </div>
    </nav>
</template>

<script>
import ButtonBase from './ButtonBase.vue'
import { groq } from '@nuxtjs/sanity'
const query = groq`*[_type=="settings"]`

export default {
    components: {
        ButtonBase,
    },
    data: () => ({
        logo: '',
        toggle: false,
        xtraLinks: '',
        linkse: false,
        reach: true,
    }),
    async fetch() {
        const queryData = await this.$sanity.fetch(query)
        this.logo = queryData[0].logo
    },
    methods: {
        toggleNav() {
            this.toggle = !this.toggle
            this.linkse
                ? (this.linkse = !this.linkse)
                : setTimeout(() => {
                      this.linkse = !this.linkse
                  }, 300)
        },
        clickAndClose() {
            let lis = document.getElementsByTagName('li')
            let burger = document.getElementById('overlay-button')
            ;[...lis].forEach((x) =>
                x.addEventListener('click', () => {
                    burger.click()
                })
            )
        },
    },
    mounted() {
        if (process.client) {
            window.innerWidth < 1000 && this.clickAndClose()
        }
    },
}
</script>

<style>
.invert {
    filter: invert(1);
}
.text-xxs {
    font-size: 0.5rem;
}
#nav-content {
    transition: all 0.31s;
}
#nav-content ul {
    transition: all 0.11s;
}

.logo {
    border-bottom: none !important;
}
@keyframes slide-nav-down {
    100% {
        transform: translateY(0);
    }
}
@keyframes slide-nav-up {
    100% {
        transform: translateY(100%);
    }
}

.is-floating {
    background-color: rgba(255, 255, 255, 0.87);
    transform: translateY(-100%);
    animation: slide-nav-down 0.5s ease;
    animation-fill-mode: both;
    opacity: 1;
}

.is-not {
    opacity: 0;
}

nav {
    transition: all 0.5s;
    position: fixed;
    top: 0;
}
nav * {
    font-family: sans-serif;
}
.transparent {
    background: white;
}

.translucido {
    background: rgba(255, 255, 255, 0.87);
}

@keyframes bugfix {
    from {
        padding: 0;
    }
    to {
        padding: 0;
    }
}
@-webkit-keyframes bugfix {
    from {
        padding: 0;
    }
    to {
        padding: 0;
    }
}
#overlay-button {
    position: absolute;
    right: 2em;
    top: 1em;
    z-index: 5;
    cursor: pointer;
    user-select: none;
}
#overlay-button .white {
    height: 5px;
    width: 35px;

    background-color: white;

    position: relative;
    display: block;
    transition: all 0.2s ease-in-out;
}
#overlay-button .white:before,
#overlay-button .white:after {
    height: 5px;
    width: 35px;

    background-color: white;

    position: absolute;
    content: '';
    transition: all 0.2s ease-in-out;
}
#overlay-button .black {
    height: 5px;
    width: 35px;

    background-color: #002a26;

    position: relative;
    display: block;
    transition: all 0.2s ease-in-out;
}
#overlay-button .black:before,
#overlay-button .black:after {
    height: 5px;
    width: 35px;
    height: 5px;

    background-color: #002a26;

    position: absolute;
    content: '';
    transition: all 0.2s ease-in-out;
}
#overlay-button span:before {
    top: -10px;
    visibility: visible;
}

#overlay-button span:before,
#overlay-button span:after {
    height: 5px;
    width: 35px;

    position: absolute;
    background-color: inherit;
    content: '';
    transition: all 0.2s ease-in-out;
}

input[type='checkbox'] {
    display: none;
}

input[type='checkbox']:checked ~ #overlay {
    visibility: visible;
}

input[type='checkbox']:checked ~ #overlay-button:hover span,
input[type='checkbox']:checked ~ #overlay-button span {
    background: transparent;
}
input[type='checkbox']:checked ~ #overlay-button span:before {
    transform: rotate(45deg) translate(7px, 7px);
    opacity: 1;
}
input[type='checkbox']:checked ~ #overlay-button span:after {
    transform: rotate(-45deg) translate(0px, 0px);
}
.text-nav {
    font-size: 2.74rem;
}
</style>

