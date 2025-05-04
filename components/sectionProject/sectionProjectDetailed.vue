<template>
  <section :class="{}" class="sm:flex sm:flex-col lg:flex-row-reverse sm:items-center sm:justify-end gap-x-[10px] sm:gap-x-[20px] mt-[50px] md:mt-[100px] xxl:mt-[150px]">
    <div class="flex justify-center gap-[10px] xs:gap-[20px]">

      <div class="bg-bgPlugImg w-[110px] xs:w-[150px] md:w-[180px] min-[1100px]:w-[230px]  xxl:w-[300px] aspect-[5/8] rounded-[40px]" v-for="(img, index) in images[num]" :key="index">
        <picture>
          <source :srcset="img?.XL" media="(min-width: 1024px)" />
          <source :srcset="img?.MD" media="(min-width: 480px)" />
          <img :src="img?.XS" class=" min-w-full h-full object-cover rounded-[20px] xs:rounded-xs" loading="lazy" />
        </picture>
      </div>
    </div>

    <p class="xs:text-[18px] sm:px-[70px] lg:px-[0px] xxl:text-[24px] lg:mr-[20px] xl:mr-[50px] mt-[30px] lg:max-w-[420px] xxl:ml-[150px]">
      <span>{{ contents[num].description }}</span>
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  num: number;
  images: { XS: string; MD: string; XL: string }[][];
  contents: { description: string }[];
}>();
</script>
