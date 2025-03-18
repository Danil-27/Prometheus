<template>
  <section class="container section-margin-top mb-[408px]">
    <QuestionDesktop class="max-lg:hidden" :questions="questions"></QuestionDesktop>
    <QuestionMobile class="lg:hidden" :questions="questions"></QuestionMobile>
  </section>
</template>

<script setup lang="ts">
import { questions } from './type';
</script>
