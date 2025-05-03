<template>
  <Swiper :modules="[Pagination, Navigation]" :pagination="{
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5
  }" :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }" :loop="true" :slidesPerView="1" :spaceBetween="10" :loopAdditionalSlides="1" class="my-swiper rounded-[20px]">
    <SwiperSlide v-for="(img, index) in images" :key="index" class="aspect-[7/5] lg:aspect-[8/6]">
      <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover swiper-lazy" />
    </SwiperSlide>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

defineProps<{ images: { src: string; alt: string }[] }>();
</script>

<style lang="scss">
.swiper-slide {
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 8px;
}

.my-swiper {
  --swiper-pagination-bottom: 0;

  .swiper-pagination {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
  }

  .swiper-pagination-bullet {
    flex: 0 0 auto;
    width: 10px;
    height: 10px;
    background: var(--white);
    opacity: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .swiper-pagination-bullet-active {
    background: var(--yellow);
    border-color: var(--yellow);
  }
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  z-index: 20;
  cursor: pointer;
  color: var(--white);
  width: 30px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.1s ease, background 0.2s ease;

  &:active {
    color: var(--yellow);
    background: rgba(0, 0, 0, 0.7);
  }

  &::after {
    font-size: 20px;
    font-weight: bold;
  }
}

@media screen and (min-width: 480px) {
  .my-swiper {
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border-width: 2px;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 60px;
  }
}
</style>