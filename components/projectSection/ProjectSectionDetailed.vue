<template>
  <section
    :class="{}"
    class="sm:flex sm:flex-col lg:flex-row-reverse sm:items-center sm:justify-end gap-x-[10px] sm:gap-x-[20px] mt-[50px] md:mt-[100px] xxl:mt-[150px]"
  >
    <div
      class="grid max-[360px]:grid-rows-[170px,170px] min-[360px]:grid-rows-1 min-[360px]:grid-cols-3 max-[360px]:grid-cols-2 gap-[10px] sm:gap-[20px]"
    >
      <picture
        v-for="(img, index) in images[num]"
        :key="index"
        :class="{ 'max-[360px]:col-span-2  ': index == 2 }"
        class="max-[360px]:justify-self-center"
      >
        <source :srcset="img?.XL" media="(min-width: 1024px)" />
        <source :srcset="img?.MD" media="(min-width: 480px)" />
        <img :src="img?.XS" class="w-full h-full object-cover rounded-[20px] xs:rounded-xs" loading="lazy" />
      </picture>
    </div>

    <p
      class="xs:text-[18px] sm:px-[70px] lg:px-[0px] xxl:text-[24px] lg:mr-[20px] xl:mr-[50px] mt-[30px] lg:max-w-[420px] xxl:ml-[150px]"
    >
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
