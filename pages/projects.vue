<template>
  <div class="custom-container">
    <div v-for="(item, index) in items" :key="index" :class="{ 'lg:mt-[100px]': index !== 0 }">
      <ProjectSectionAbout :num="item" :img="imagesAbout" :contents="contentAbout" />
      <projectSectionDescription :num="item" :img="imagesDescription" :contents="contentDescription" />
      <ProjectSectionDetailed :num="item" :images="imagesDetailed" :contents="contentDetailed" />
      <ProjectSectionSwaiper :num="item" :images="imagesSwiper" :contents="contentSwiper" />
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
  const items = [0, 1, 2, 3];
</script>

<style scoped lang="scss"></style>
