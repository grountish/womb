<template>
  <nav
    :class="[
      toggle ? 'bg-primaryGreen' : 'bg-white',
      'top-0 z-10 flex flex-wrap items-center justify-between w-full px-8 py-1  lg:px-10 xl:pr-12 Copernicus  sm:Haffer',
    ]"
  >
    <div class="flex items-center flex-shrink-0 mr-6 lg:ml-4">
      <NuxtLink to="/">
        <img
          src="/logo.svg"
          alt="logo-sapunta"
          :class="[toggle && 'filter invert lg:invert-0', 'w-40 my-6 lg:w-32']"
        />
      </NuxtLink>
    </div>

    <div :class="[toggle ? 'sm:circleMenu' : 'sm:circleMenu2']">
      <div class="block lg:hidden">
        <input type="checkbox" id="overlay-input" />
        <label for="overlay-input" @click="toggleNav" id="overlay-button"
          ><span :class="[toggle ? 'white ' : 'black']"></span
        ></label>
        <title>Index</title>
      </div>
    </div>

    <div
      :class="[
        toggle ? 'h-screen' : 'h-0',
        'w-full flex-grow flex lg:items-center lg:w-auto lg:pt-0 items-center',
      ]"
      id="nav-content"
    >
      <ul
        id="link-list"
        :class="[
          linkse ? ' opacity-100 ' : ' opacity-0 hidden  ',
          'pt-4 lg:pt-0 lg:opacity-100 list-reset lg:flex justify-end flex-1 items-center uppercase lg:text-xs text-5xl lg:text-center text-left text-white lg:text-black ',
        ]"
      >
        <div class="grid lg:flex">
          <li>
            <NuxtLink
              to="/"
              class="relative inline-block py-2 no-underline transition-all duration-200 desktop:mx-4 tablet:mx-2 hover:text-green-900 sm:underlinedWhite"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/animations"
              class="inline-block py-2 no-underline transition-all duration-200 desktop:mx-4 tablet:mx-2 hover:text-green-900"
              >Animations</NuxtLink
            >
          </li>
           
          <li class="hidden lg:inline">
            <NuxtLink to="/">
              <img
                src="/personlogo.svg"
                alt="personlogo"
                class="w-6 mx-auto my-2 mt-1 lg:mx-8"
              />
            </NuxtLink>
          </li>
        </div>

        <ButtonBase typeBtn="primary" class="hidden lg:inline">
          Partner with us
        </ButtonBase>
      </ul>
    </div>
  </nav>
</template>

<script>
import ButtonBase from './ButtonBase.vue'

export default {
  components: { ButtonBase },
  data: () => ({
    toggle: false,
    xtraLinks: '',
    linkse: false,
    reach: true,
  }),
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
      let nav = document.getElementsByTagName('ul')[0]
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
    let lastScrollTop = 30
    let nav = document.getElementsByTagName('nav')[0]

    document.addEventListener(
      'scroll',
      () => {
        let st = window.pageYOffset || document.documentElement.scrollTop
        if (st == 0) {
          nav.classList.add('transparent')
        }
        if (st > lastScrollTop) {
          nav.classList.remove('is-floating')
          nav.classList.add('is-not')
        }
        if (st < lastScrollTop && st > 0) {
          nav.classList.remove('is-not')
          nav.classList.add('is-floating')
        }
        if (st == 0) {
          nav.classList.add('transparent')
          nav.classList.remove('is-floating')
          this.reach = true
        }
        if (st != 0) {
          this.reach = false
        }
        lastScrollTop = st <= 0 ? 0 : st
      },
      false
    )
  },
}
</script>

<style>
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
@media only screen and (max-width: 600px) {
  nav li {
    font-family: 'Haffer';
  }
}
@media only screen and (min-width: 600px) {
  nav li {
    font-family: 'Copernicus';
  }
}
nav {
  transition: all 0.5s;
  position: fixed;
  top: 0;
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
  top: 3em;
  z-index: 5;
  cursor: pointer;
  user-select: none;
}
#overlay-button .white {
  height: 2px;
  width: 35px;
  border-radius: 2px;
  background-color: white;

  position: relative;
  display: block;
  transition: all 0.2s ease-in-out;
}
#overlay-button .white:before,
#overlay-button .white:after {
  height: 2px;
  width: 35px;
  border-radius: 2px;

  background-color: white;

  position: absolute;
  content: '';
  transition: all 0.2s ease-in-out;
}
#overlay-button .black {
  height: 2px;
  width: 35px;
  border-radius: 2px;
  background-color: #002a26;

  position: relative;
  display: block;
  transition: all 0.2s ease-in-out;
}
#overlay-button .black:before,
#overlay-button .black:after {
  height: 2px;
  width: 35px;
  border-radius: 2px;

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
  height: 2px;
  width: 35px;
  border-radius: 2px;
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
.text-nav{
	font-size: 2.74rem;
}
</style>
