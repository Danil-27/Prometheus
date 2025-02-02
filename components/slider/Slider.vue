<template>
  <ClientOnly>
    <swiper-container
      class="h-[550px] py-[50px] items-center justify-center"
      :init="false"
      ref="containerRef"
    >
      <swiper-slide
        v-for="(slide, idx) in slides"
        :key="idx"
        class="swiper-slide object-cover p-10"
        style="color: white"
      >
        <img
          class="h-[100%] w-[100%] object-fill"
          :src="slide.src"
          :alt="slide.alt"
        />
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import { images } from './type'

const slides = ref(images)
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'slide',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  speed: 600,
  centeredSlides: true,

  // autoHeight: true,

  pagination: {
    // type: 'progressbar',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<style lang="scss">
.swiper-slide {
  height: 400px;
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

// .swiper-pagination {
//   position: absolute;
//   bottom: 10px !important; // Опускаем вниз
//   z-index: 10;
// }
</style>
