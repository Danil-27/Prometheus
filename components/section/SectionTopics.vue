<template>
  <section class="custom-container section-margin-top">
    <h2 class="font-jetBold text-heading">Этапы работы</h2>
    <div class="flex flex-col gap-[42px] mt-[60px]">
      <Topics :topics="topics" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { topics } from './type';
</script>

<style scoped lang="scss"></style>
