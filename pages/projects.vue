<template>
  <div
    class="decor-progect-container mt-[-24px] pt-[24px] lg:mt-[-104px] lg:pt-[104px] xxl:mt-[-124px] xxl:pt-[124px] bg-circles-prject"
  >
    <div
      v-for="(section, index) in sectionProjectNum"
      :id="idLinkProject[index]"
      :key="index"
      :class="{ 'mt-[80px] lg:mt-[100px]': index !== 0 }"
      class="custom-container section-scroll-mt"
    >
      <ProjectSectionAbout :num="section" :img="imagesAbout" :contents="contentAbout" />
      <projectSectionDescription :num="section" :img="imagesDescription" :contents="contentDescription" />
      <ProjectSectionDetailed :num="section" :images="imagesDetailed" :contents="contentDetailed" />
      <ProjectSectionSwaiper :num="section" :images="imagesSwiper" :contents="contentSwiper" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    imagesAbout,
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
