<template>
  <section class="container section-margin-top">
    <QuestionDesktop class="max-lg:hidden" :questions="questions" />
    <QuestionMobile class="lg:hidden" :questions="questions" />
  </section>
</template>

<script setup lang="ts">
  import { questions } from './type';
</script>
