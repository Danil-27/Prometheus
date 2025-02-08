<template>
  <div class="swiper relative">
    <ClientOnly>
      <swiper-container
        class="h-[500px] sm:h-[600px] xl:h-[auto] sm:px-[20px] lg:px-[100px] xl:px-[0px]"
        :init="false"
        ref="containerRef"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          @click="projectDeeper(index)"
          class="swiper-slide flex justify-center py-[50px] xl:py-[100px]"
          style="color: white"
        >
          <div
            class="swiper__content relative h-[100%] w-[100%] sm:rounded-xl shadow-custom-shadow"
          >
            <img
              class="swiper__img h-[100%] w-[100%] object-cover"
              :src="slide.src"
              :alt="slide.alt"
            />
            <div
              class="swiper__overlay absolute w-full h-[30%] bottom-0 left-0 bg-[rgba(0,0,0,0.5)] opacity-0 transition-opacity ease-out duration-500"
            >
              <button>подробнее</button>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <div class="swiper-button-prev"><</div>
    <div class="swiper-button-next">></div>
  </div>
  <div v-if="true" class="projectDeeper">projectDeeper</div>
</template>

<script setup lang="ts">
import { images } from './type'

const slides = ref(images)
const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
  effect: 'slide',
  loop: true,
  spaceBetween: 70,
  slidesPerView: 1,
  grabCursor: true,
  speed: 600,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    disableOnInteraction: true,
    delay: 5000000,
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
})

onMounted(() => {
  setTimeout(() => {
    console.log(swiper.instance)
  }, 0)
})

function projectDeeper(index: number) {
  console.log(index, 'Слайд')
}

// let isActiveDetails = ref<boolean>(true)

// function toggleActiveDetails() {
//   isActiveDetails.value = !isActiveDetails.value
// }
</script>

<style lang="scss">
.swiper__content:hover {
  .swiper__overlay {
    opacity: 1;
  }
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 0, 0, 1);
  color: white;
  cursor: pointer;
  font-size: 30px;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}

@media screen and (min-width: 1280px) {
  .swiper-slide {
    height: 700px;
    transition: transform 0.8s ease, opacity 0.8s ease;
    transform: scale(0.8); // Делаем обычные слайды чуть меньше
    opacity: 0.6;
  }

  .swiper-slide-active {
    transform: scale(1.2);
    opacity: 1;
    z-index: 10;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.9);
    opacity: 0.8;
  }
}
</style>
