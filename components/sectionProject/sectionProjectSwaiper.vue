<template>
  <section class="mt-[50px] sm:mt-[100px] xxl:mt-[150px] sm:flex sm:items-center sm:gap-[20px] sm:justify-between">
    <div class="w-full sm:w-[330px] md:w-[420px] lg:w-[600px] xl:w-[680px] xxl:w-[910px] select-none">
      <AsyncSwiper :images="images[num]" />
    </div>

    <p class="xs:text-[18px] xxl:text-[24px] max-sm:mt-[40px] lg:ml-[auto] md:max-w-[350px] xxl:max-w-[500px]">
      <span>{{ contents[num].description }}</span>
    </p>
  </section>
</template>

<script setup lang="ts">
const AsyncSwiper = defineAsyncComponent(() => import('~/components/swiper/Swiper.vue')
);

defineProps<{
  num: number;
  images: { src: string; alt: string }[][];
  contents: { description: string }[];
}>();
</script>
