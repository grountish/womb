<template>
  <div>
    <div class="ball"></div>
    <section class="flex flex-col w-full h-screen px-12 space-y-4 fadeIn">
      <div class="flex flex-col mt-auto lg:flex-row lg:pr-24">
        <h1 class="sm:text-nav lg:w-10/12 lg:text-6xl Haffer">
          Build a more
          <span class="Crusellia">
            <span class="relative circle">diverse</span> , inclusive</span
          >
          and
          <span class="relative Crusellia underlined">equitable</span> company
          where all employees can
          <span class="relative Crusellia doubleUnderlined">belong</span> .
        </h1>
        <h5
          class="w-full mt-auto text-lg lg:text-medium lg:w-3/12 lg:-ml-32 Copernicus arrow"
        >
          We’re an end-to end DIEB consulting firm that delivers serious
          results.
        </h5>
        <span class=""></span>
      </div>
      <div class="flex justify-between pb-12">
        <ButtonBase typeBtn="primary">Partner with us</ButtonBase>
        <ButtonBase typeBtn="secondary">See how we can help</ButtonBase>
      </div>
    </section>
    <section class="border-t border-black fadeIn">
      <div class="mx-auto marquee">
        <ul class="marquee-content">
          <li><img src="/brandLogo1.svg" alt="" /></li>
          <li><img src="/brandLogo2.svg" alt="" /></li>
          <li><img src="/brandLogo3.svg" alt="" /></li>
          <li><img src="/brandLogo4.svg" alt="" /></li>
          <li><img src="/brandLogo5.svg" alt="" /></li>
          <li><img src="/brandLogo6.svg" alt="" /></li>
          <li><img src="/brandLogo7.svg" alt="" /></li>
        </ul>
      </div>
      <div class="px-12 py-12 lg:flex lg:flex-row-reverse">
        <div class="px-12 my-auto lg:w-11/12 effords">
          <h1 class="text-5xl Haffer">
            DEIB efforts don’t always yield results
          </h1>
          <p class="pr-20 Copernicus">
            There’s a difference between keeping busy and making progress. We’re
            an impact-driven firm and we define success as getting measurable
            and sustainable results for our clients.
          </p>
        </div>
        <div class="cake1">
          <img src="/cake1.png" alt="cake1" class="transform scale-125" />
        </div>
      </div>
      <div class="py-12 pb-32 lg:flex lg:flex-row-reverse">
        <div class="px-12 my-auto lg:w-11/12 peoplism">
          <h1 class="text-5xl Haffer lg:pr-8">
            At Peoplism, we do DEIB differently
          </h1>
          <p class="pb-8 pr-20 Copernicus">
            We have a long track record of not just happy clients, but concrete
            results that have meaningfully improved employee experience and
            increased representation.
          </p>
          <ButtonBase typeBtn="primary">Partner with us</ButtonBase>
        </div>
        <div class="relative w-full">
          <!-- <img src="/cake2.png" alt="cake1" class="transform scale-125" /> -->
          <img
            src="/cake2a.png"
            alt="cake1"
            class="relative w-7/12 mx-auto frontCircle"
          />

          <img
            src="/cake2b.png"
            alt="cake1"
            class="absolute top-0 w-7/12 mx-auto backCircle"
          />
        </div>
      </div>
    </section>
    <section
      class="relative grid w-full text-white lg:h-screen z lg:grid-cols-3 bg-primaryGreen"
    >
      <h1
        class="z-10 hidden px-12 text-6xl text-center center lg:inline Haffer"
      >
        Work with us to move the <span class="Crusellia scaleUp">needle</span>
      </h1>
      <div class="flex border-b border-black lg:hidden">
        <h1 class="z-10 py-20 text-4xl text-center px-28">
          Work with us to move the <b>needle</b>
        </h1>
      </div>
      <div class="relative flex flex-col border-b border-black lg:border-r">
        <div class="pb-40 text-center pt-84 lg:pb-0">
          <h1 class="text-6xl Haffer">
            +<span class="counter" data-target="4">-30</span>%
          </h1>
          <p class="px-12 pb-12 text-sm lg:pb-1 Copernicus">
            Black & Latinx employees year-over-year
          </p>
        </div>
        <div>
          <img
            class="mx-auto my-12 center bottom-8 fadeIn"
            src="/workWithUs3.svg"
            alt="workwithus"
          />
        </div>
      </div>
      <div class="relative flex flex-col border-b border-black lg:border-r">
        <div class="pb-40 text-center pt-84 lg:pb-0">
          <h1 class="text-6xl Haffer">
            +<span class="counter" data-target="27">0</span>%
          </h1>
          <p class="px-12 pb-12 text-sm lg:pb-1 Copernicus">
            Underrepresented minorities agreeing that their race/ethnicity will
            not interfere with their ability to succeed at LPFCH
          </p>
        </div>
        <div>
          <img
            class="mx-auto my-12 center bottom-8 fadeIn"
            src="/workWithUs1.svg"
            alt="workwithus"
          />
        </div>
      </div>
      <div class="relative flex flex-col">
        <div class="pb-40 text-center pt-84 lg:pb-0">
          <h1 class="text-6xl Haffer">
            +<span class="counter" data-target="13">-30</span>%
          </h1>
          <p class="px-12 pb-12 text-sm lg:pb-1 Copernicus">
            Inclusion and Belonging Index
          </p>
        </div>
        <div>
          <img
            class="mx-auto my-12 center bottom-8 fadeIn"
            src="/workWithUs2.svg"
            alt="workwithus"
          />
        </div>
      </div>
    </section>
    <section
      class="box-content w-screen overflow-y-hidden bg-yellow-100 lg:max-h-screen"
    >
      <div class="flex flex-col justify-around overflow-x-scroll">
        <div class="flex flex-row flex-no-wrap justify-around w-400vw scroll-x">
          <div
            class="flex flex-col justify-center px-20 my-20 text-center fadeIn"
          >
            <h1 class="text-6xl Haffer">Diversity</h1>
            <p class="py-2 text-lg Copernicus">
              Recruit and hire a demographically <br />
              representative workforce
            </p>

            <div class="scaleUp">
              <ButtonBase typeBtn="primary">View Services</ButtonBase>
            </div>
          </div>
          <div
            class="flex flex-col justify-center my-20 text-center space-y- fadeIn"
          >
            <h1 class="text-6xl Haffer">Inclusion</h1>
            <p class="py-2 text-lg Copernicus">
              Lorem, ipsum dolor sit amet consectetur adipisicing
            </p>
            <div class="scaleUp">
              <ButtonBase typeBtn="primary">View Services</ButtonBase>
            </div>
          </div>
          <div
            class="flex flex-col justify-center my-20 text-center space-y- fadeIn"
          >
            <h1 class="text-6xl Haffer">Equity</h1>
            <p class="py-2 text-lg Copernicus">
              Lorem, ipsum dolor sit amet consectetur adipisicing
            </p>
            <div class="scaleUp">
              <ButtonBase typeBtn="primary">View Services</ButtonBase>
            </div>
          </div>
          <div
            class="flex flex-col justify-center my-20 text-center space-y- fadeIn"
          >
            <h1 class="text-6xl Haffer">Belonging</h1>
            <p class="py-2 text-lg Copernicus">
              Lorem, ipsum dolor sit amet consectetur adipisicing
            </p>
            <div class="scaleUp">
              <ButtonBase typeBtn="primary">View Services</ButtonBase>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 fadeIn">
        <div
          class="flex flex-col w-40 col-span-1 col-start-2 py-36 h-36 fadeIn"
        >
          <h4
            @click="scrollTo(0)"
            :class="[
              dievSelected == 0 && 'greenPoint',
              'text-lg cursor-pointer Copernicus',
            ]"
          >
            Diversity
          </h4>
          <h4
            @click="scrollTo(1)"
            :class="[
              dievSelected == 1 && 'greenPoint',
              'text-lg cursor-pointer Copernicus',
            ]"
          >
            Inclusion
          </h4>
          <h4
            @click="scrollTo(2)"
            :class="[
              dievSelected == 2 && 'greenPoint',
              'text-lg cursor-pointer Copernicus',
            ]"
          >
            Equity
          </h4>
          <h4
            @click="scrollTo(3)"
            :class="[
              dievSelected == 3 && 'greenPoint',
              'text-lg cursor-pointer Copernicus',
            ]"
          >
            Belonging
          </h4>
        </div>
        <div class="relative col-start-3 col-end-11">
          <img
            src="/spinwheel.svg"
            alt="spinwheel"
            class="absolute wheel scaleUp"
          />
        </div>
      </div>
    </section>
    <section
      class="w-screen h-screen px-12 py-12 bg-center bg-cover sliderSection"
    >
      <div
        class="flex flex-col justify-between h-full text-center border-t border-black "
      >
        <div class="flex justify-between py-6">
          <h5 class="SpaceMono">Let us recommend solutions</h5>
          <ButtonBase typeBtn="primary">See how we can help</ButtonBase>
        </div>

        <div
          class="px-2 py-12 text-center transition-all lg:px-40 slider"
          style="transition: all 1s"
        >
          <h1 class="text-5xl Haffer fadeIn">
            {{ returnSliderData().question }}
          </h1>

          <div
            class="flex flex-col justify-between pt-12 space-y-2 Copernicus lg:flex-row"
          >
            <ButtonBase typeBtn="primary">{{
              returnSliderData().answers[0]
            }}</ButtonBase>
            <ButtonBase typeBtn="empty">{{
              returnSliderData().answers[1]
            }}</ButtonBase>
            <ButtonBase typeBtn="empty">{{
              returnSliderData().answers[2]
            }}</ButtonBase>
            <div @click="nextSlider">
              <ButtonBase class="flex justify-center w-full lg:inline">{{
                returnSliderData().answers[3]
              }}</ButtonBase>
            </div>
          </div>
        </div>
        <div class="mx-auto">
          <button
            v-for="i in 5"
            :key="i"
            :class="[
              selected === i ? 'border border-black' : 'text-gray-500',
              ' px-4 py-2 mx-3  rounded-full bg-fixed-transparent focus:outline-none SpaceMono',
            ]"
            @click="selectQuestion(i)"
          >
            {{ i }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from 'gsap'
// or get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/all'

export default {
  mounted() {
    this.initAnimation()
    const root = document.documentElement
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      '--marquee-elements-displayed'
    )
    const marqueeContent = document.querySelector('ul.marquee-content')

    root.style.setProperty('--marquee-elements', marqueeContent.children.length)

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
    }
    // animateNrs
    let displayEntry = (entry) =>
      entry.isIntersecting ? this.animateCounters() : null
    let obs = new IntersectionObserver((ents) =>
      ents.forEach((ent) => displayEntry(ent))
    )
    let trg = document.querySelector('.counter')
    obs.observe(trg)
    // animateBG
    let displayEntryBG = (entry) =>
      entry.isIntersecting ? this.animateBg() : null
    let obsbg = new IntersectionObserver((ents) =>
      ents.forEach((ent) => displayEntryBG(ent))
    )
    let trgbg = document.querySelector('.sliderSection')
    obsbg.observe(trgbg)
  },
  data() {
    return {
      selected: 1,
      dievSelected: 0,
      sliderData: [
        {
          question:
            'What aspect of diversity and inclusion is most important to you?',
          answers: [
            '✓ Increasing Awareness',
            'Employee Welfare',
            'Monitery Incentive',
            'Next Step (1/5)',
          ],
        },
        {
          question:
            'lorem purus at nisl suscipit hendrerit. Morbi sit amet lobortis sapien?',
          answers: [
            '✓ Option 1',
            'Select Option 2',
            'Third option',
            'Next Step (2/5)',
          ],
        },
        {
          question:
            'lorem purus at nisl suscipit hendrerit. Morbi sit amet lobortis sapien?',
          answers: [
            '✓ Option 1',
            'Option 2',
            'Third option',
            'Next Step (3/5)',
          ],
        },
        {
          question:
            'lorem purus at nisl suscipit hendrerit. Morbi sit amet lobortis sapien?',
          answers: [
            '✓ Option 1',
            'Option 2',
            'Third option',
            'Next Step (4/5)',
          ],
        },
        {
          question:
            'lorem purus at nisl suscipit hendrerit. Morbi sit amet lobortis sapien?',
          answers: [
            '✓ Option 1',
            'Option 2',
            'Third option',
            'Next Step (5/5)',
          ],
        },
      ],
    }
  },
  methods: {
    initAnimation() {
      gsap.registerPlugin(ScrollTrigger)
      gsap.registerPlugin(CSSRulePlugin)

      gsap.set('.ball', { xPercent: -50, yPercent: -50 })

      const ball = document.querySelector('.ball')
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      const mouse = { x: pos.x, y: pos.y }
      const speed = 0.0835

      const xSet = gsap.quickSetter(ball, 'x', 'px')
      const ySet = gsap.quickSetter(ball, 'y', 'px')

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.x
        mouse.y = e.y
      })

      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio())

        pos.x += (mouse.x - pos.x) * dt
        pos.y += (mouse.y - pos.y) * dt
        xSet(pos.x)
        ySet(pos.y)
      })

      // special thanks to Blake Bowen for most of the code.

      gsap.from('.cake1', {
        scrollTrigger: {
          trigger: '.cake1',
          scrub: true,
          start: 'top bottom',
          end: 'center top',
        },
        y: -100,
        scale: 0.8,
      })
      let unl = CSSRulePlugin.getRule('.underlined::after')
      console.log(unl)
      gsap.from(unl, {
        cssRule: {
          width: 120,
        },
      })
      gsap.from('.effords', {
        scrollTrigger: {
          trigger: '.effords',
          scrub: true,
          start: 'top bottom',
          end: 'center top',
        },
        y: 100,
      })
      gsap.from('.peoplism', {
        scrollTrigger: {
          trigger: '.peoplism',
          // scrub: true,
          start: 'center bottom',
          end: 'center top',
        },
        y: 100,
      })
      gsap.to('.backCircle', {
        scrollTrigger: {
          trigger: '.backCircle',
          scrub: true,
          start: 'center bottom',
          end: 'center top',
        },
        scale: 1.9,
      })
      gsap.from('.frontCircle', {
        scrollTrigger: {
          trigger: '.frontCircle',
          scrub: true,
          start: 'center bottom',
          end: 'center top',
        },
        scale: 1.3,
      })
    },
    scrollTo(direction) {
      if (document) {
        let wrapper = document.getElementsByClassName('overflow-x-scroll')[0]
        let wheel = document.getElementsByClassName('wheel')[0]
        this.dievSelected = direction
        wrapper.scrollTo({
          top: 0,
          left: direction * window.innerWidth,
          behavior: 'smooth',
        })
        wheel.style.transform = `rotate(${90 * direction}deg)`
      }
    },
    returnSliderData() {
      return this.sliderData[this.selected - 1]
    },
    selectQuestion(index) {
      let slider = document.getElementsByClassName('slider')[0]
      slider.style.transition = 'all .25s'
      slider.style.opacity = 0
      setTimeout(() => {
        this.selected = index

        slider.style.opacity = 1
      }, 250)
    },
    nextSlider() {
      let index
      if (this.selected == 4) {
        index = 0
      } else {
        index = this.selected + 1
      }
      this.selectQuestion(index)
    },
    animateCounters() {
      const counters = document.querySelectorAll('.counter')
      for (let n of counters) {
        const updateCount = () => {
          const target = +n.getAttribute('data-target')
          const count = +n.innerText
          const speed = 10 // change animation speed here
          const inc = target / speed
          if (count < target) {
            n.innerText = Math.ceil(count + inc)
            setTimeout(updateCount, 1)
          } else {
            n.innerText = target
          }
        }
        updateCount()
      }
    },
    animateBg() {
      let sliderSection = document.querySelector('.sliderSection')
      window.addEventListener('scroll', () => {
        sliderSection.style.backgroundSize = 1000 + window.scrollY / 7.7 + 'px'
      })
    },
  },
}
</script>
<style scoped>
*{
	cursor: none !important;
}
.ball {
  width: 10px;
  height: 10px;
  position: fixed;
  top: 0;
  left: 12px;
  background-color: #1C433A;
  border: 3px solid #DBE0FA;
  border-radius: 50%;
  z-index: 3;
}
</style>