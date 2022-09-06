<template>
  <div class="grid overflow-x-hidden min-h-screen">
    <Navbar />
    <Nuxt class="pt-16" />
  </div>
</template>
<script>
if (process.client) {
  var styles =
    '.fadeInC{animation:fadeAn 0.87s;}@keyframes fadeAn {from {opacity: 0;}to {opacity: 1;}}.scaleUpC{animation:scaleU 0.87s;}@keyframes scaleU {from {opacity: 0;transform: scale(0.7);}to {opacity: 1;transform: scale(1);}}.scaleDC{animation:scaleD 0.87s;}@keyframes scaleD {from {opacity: 0;transform: scale(1.2);}to {opacity: 1;transform: scale(1);}}.fadeLC{animation:fadeL 0.87s;}@keyframes fadeL {from {opacity: 0;transform: translateX(-30px);}to {opacity: 1;transform: translateX(0);}} .fadeRC{animation:fadeR 0.87s;}@keyframes fadeR {from {opacity: 0;transform: translateX(30px);}to {opacity: 1;transform: translateX(0);}}'
  let styleSheet = document.createElement('style')
  ;(styleSheet.type = 'text/css'),
    (styleSheet.innerText = styles),
    document.head.appendChild(styleSheet)
  let fadeInTarg = document.querySelectorAll('.fadeIn'),
    scaleDTarg = document.querySelectorAll('.scaleDown'),
    scaleUTarg = document.querySelectorAll('.scaleUp'),
    fadeLeftTarg = document.querySelectorAll('.fadeLeft'),
    fadeRightTarg = document.querySelectorAll('.fadeRight'),
    ae = (e, a) => {
      e.classList.add(a),
        setTimeout(() => {
          e.style.opacity = 1
        }, 50)
    }
  function io(e, a) {
    new IntersectionObserver((t) =>
      t.forEach((t) => ((t) => t.isIntersecting && ae(e, a))(t))
    ).observe(e)
  }
  fadeLeftTarg &&
    fadeLeftTarg.forEach((e) => {
      ;(e.style.opacity = 0), io(e, 'fadeRC')
    }),
    fadeRightTarg &&
      fadeRightTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'fadeLC')
      }),
    fadeInTarg &&
      fadeInTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'fadeInC')
      }),
    scaleDTarg &&
      scaleDTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'scaleDC')
      }),
    scaleUTarg &&
      scaleUTarg.forEach((e) => {
        ;(e.style.opacity = 0), io(e, 'scaleUpC')
      })
}
export default {
   
}
</script>
<style>
 
:root {
  --marquee-width: 80vw;
  --marquee-height: 20vh;
  /* --marquee-elements: 12; */ /* defined with JavaScript */
  --marquee-elements-displayed: 5;
  --marquee-element-width: calc(
    var(--marquee-width) / var(--marquee-elements-displayed)
  );
  --marquee-animation-duration: calc(var(--marquee-elements) * 3s);
}

.marquee {
  width: var(--marquee-width);
  height: var(--marquee-height);
  background-color: white;
  color: #eee;
  overflow: hidden;
  position: relative;
  max-width: 90vw;
}
.marquee:before,
.marquee:after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  content: '';
  z-index: 1;
}
.marquee:before {
  left: 0;
  background: linear-gradient(
    to right,
    rgb(255, 255, 255) 0%,
    transparent 100%
  );
}
.marquee:after {
  right: 0;
  background: linear-gradient(to left, rgb(255, 255, 255) 0%, transparent 100%);
}
.marquee-content {
  list-style: none;
  height: 100%;
  display: flex;
  animation: scrolling var(--marquee-animation-duration) linear infinite;
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      calc(-1 * var(--marquee-element-width) * var(--marquee-elements))
    );
  }
}
.marquee-content li {
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-shrink: 0;
  width: var(--marquee-element-width);
  max-height: 100%;
  font-size: calc(var(--marquee-height) * 3 / 4);  
  white-space: nowrap;
}

.marquee-content li img {
  width: 100%;
  /* height: 100%; */
  margin: 0 0.7em;
}

@media (max-width: 600px) {
  html {
    font-size: 12px;
  }
  :root {
    --marquee-width: 90vw;
    --marquee-height: 16vh;
    --marquee-elements-displayed: 3;
  }
  .marquee:before,
  .marquee:after {
    width: 5rem;
  }
}
</style>
