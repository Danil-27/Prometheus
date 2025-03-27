<template>
  <div class="swiper-wrapper relative">
    <ClientOnly>
      <!-- Основной слайдер -->
      <swiper-container ref="swiperMain" class="swiper-main">
        <swiper-slide v-for="(slide, index) in slides" :key="index" class="swiperDeeper-slide flex justify-center">
          <div class="swiper__content relative h-[100%] w-[100%]">
            <img class="swiper__img h-[100%] w-[100%] object-cover" :src="slide.src" :alt="slide.alt" />
          </div>
        </swiper-slide>
      </swiper-container>

      <!-- Навигация -->
      <button class="swiper-deeper-button-prev">
        <ArrowLeftSvg class="w-full" />
      </button>
      <button class="swiper-deeper-button-next">
        <ArrowRightSvg class="w-full" />
      </button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import ArrowRightSvg from '~/assets/images/svg/arrow/right-swiper.svg';
  import ArrowLeftSvg from '~/assets/images/svg/arrow/left-swiper.svg';
  import { images } from './type';
  import { ref, onMounted } from 'vue';

  const slides = ref(images);

  const swiperMain = ref(null);

  const swiperMainInstance = useSwiper(swiperMain, {
    effect: 'slide',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    grabCursor: true,
    speed: 600,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-deeper-button-next',
      prevEl: '.swiper-deeper-button-prev'
    },

    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  onMounted(() => {
    console.log(swiperMainInstance.instance);
  });
</script>

<style lang="scss">
  .swiper-deeper-button-next,
  .swiper-deeper-button-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    max-width: 50px;
    height: 100px;
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }

  .swiper-deeper-button-next {
    right: 10px;
  }

  .swiper-deeper-button-prev {
    left: 10px;
  }

  /* Миниатюры */
  .swiper-thumbs {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .swiperThumbs-slide {
    width: 80px;
    height: 80px;
    border: 2px solid transparent;
    transition: border-color 0.3s;
  }

  .swiperThumbs-slide.swiper-slide-thumb-active {
    border-color: #000;
  }
</style>
