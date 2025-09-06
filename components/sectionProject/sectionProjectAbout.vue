<template>
  <section class="mt-[24px]">
    <div class="w-10/12 h-[3px] my-[10px] md:mb-[20px] bg-gradient-to-r from-black to-transparent"></div>
    <h2 class="font-jetBold text-[26px] md:text-[40px] mb-[20px]">{{ header[num].headerProject }}</h2>

    <div class="bg-bgPlugImg rounded-[40px] w-full aspect-[16/9] lg:aspect-[10/4.8] mt-[20px]">
      <picture>
        <source :srcset="img[num]?.XL"
          media="(min-width: 1024px)" />
        <source :srcset="img[num]?.MD"
          media="(min-width: 640px)" />
        <img :src="img[num]?.XS"
          class="mx-auto rounded-[40px] w-full  h-full lg:h-auto object-cover "
          loading="lazy" />
      </picture>
    </div>
    <p class="text-[14px] xs:text-[20px] lg:text-[24px] mt-[40px] md:mt-[50px] xxl:mt-[100px]">
      Подробнее о проекте
      <br />
    </p>
    <div class="w-10/12 xs:w-8/12 md:w-6/12 h-[3px] my-[10px] md:mb-[20px] bg-gradient-to-r from-black to-transparent"></div>

    <ul v-for="(section, index) in contents"
      :key="index"
      class="">
      <li v-for="(item, itemIndex) in section"
        :key="itemIndex">
        <p v-if="index == num"
          class="relative pl-[18px] md:pl-[28px] lg:max-w-[650px] text-[15px] xs:text-[18px] xxl:text-[24px] mt-[10px] md:mt-[20px]">
          <span class="dot"></span>
          <span class="font-jetBold">{{ item.title }}</span>
          {{ item.text }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">

defineProps<{
  num: number
  img: { XS: string; MD: string; XL: string }[]
  contents: { title: string; text: string }[][]
  header: { headerProject: string }[]
}>()

</script>

<style scoped lang="scss"></style>
