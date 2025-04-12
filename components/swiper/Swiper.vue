<template>
  <Swiper
    :modules="[Pagination]"
    :pagination="{
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 5
    }"
    :loop="true"
    :slidesPerView="1"
    :spaceBetween="10"
    :loopAdditionalSlides="1"
    class="my-swiper rounded-[20px]"
  >
    <SwiperSlide v-for="(img, index) in images" :key="index" class="aspect-[7/5] lg:aspect-[8/6]">
      <img :src="img.src" alt="img.alt" class="w-full h-full object-cover swiper-lazy" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';

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

  @media screen and (min-width: 480px) {
    .my-swiper {
      .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        border-width: 2px;
      }
    }
  }
</style>
