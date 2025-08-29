<template>
  <div class="decor-progect-container mt-[-24px] pt-[24px] lg:mt-[-104px] lg:pt-[104px] xxl:mt-[-124px] xxl:pt-[124px] bg-circles-prject ">
    <div v-for="(section, index) in sectionProjectNum"
      :id="idLinkProject[index]"
      :key="index"
      :class="{ 'mt-[90px] md:mt-[150px]': index !== 0 }"
      class="custom-container scroll-m-[20px] lg:scroll-m-[110px]">
      <sectionProjectAbout :num="section"
        :img="imagesAbout"
        :header="headerAbout"
        :contents="contentAbout" />
      <sectionProjectDescription :num="section"
        :img="imagesDescription"
        :contents="contentDescription" />
      <sectionProjectDetailed :num="section"
        :images="imagesDetailed"
        :contents="contentDetailed" />
      <sectionProjectSwaiper :num="section"
        :images="imagesSwiper"
        :contents="contentSwiper" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  imagesAbout,
  headerAbout,
  contentAbout,
  imagesDescription,
  contentDescription,
  imagesDetailed,
  contentDetailed,
  imagesSwiper,
  contentSwiper
} from '~/types/projectPage/index';

onMounted(async () => {
  const hash = window.location.hash;

  if (hash) {
    await nextTick();
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }
});
</script>

<style scoped lang="scss"></style>
