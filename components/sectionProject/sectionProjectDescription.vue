<template>
  <section :class="{}" class="sm:flex sm:items-center sm:justify-end gap-x-[10px] sm:gap-x-[20px] mt-[50px] md:mt-[100px] xxl:mt-[150px]">
    <div class="w-[250px] sm:w-[430px] xxl:w-[550px] aspect-[16/11] bg-bgPlugImg rounded-[40px]">
      <picture>
        <source :srcset="img[num]?.XL" media="(min-width: 1024px)" />
        <source :srcset="img[num]?.MD" media="(min-width: 480px)" />
        <img :src="img[num]?.XS" class="w-full h-full object-cover rounded-[20px] xs:rounded-xs" loading="lazy" />
      </picture>
    </div>

    <p class="xs:text-[18px] xxl:text-[24px] max-sm:mt-[30px] sm:max-w-[44%] lg:ml-[80px] lg:max-w-[420px] xxl:ml-[150px]">
      <span>{{ contents[num].description }}</span>
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  num: number;
  img: { XS: string; MD: string; XL: string }[];
  contents: { description: string }[];
}>();
</script>
