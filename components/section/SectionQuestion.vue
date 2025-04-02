<template>
  <section class="custom-container section-margin-top">
    <h2 class="font-jetBold text-heading">Популярные вопросы</h2>
    <QuestionDesktop class="max-lg:hidden section-margin-top" :questions="questions" />
    <QuestionMobile class="lg:hidden section-margin-top" :questions="questions" />
  </section>
</template>

<script setup lang="ts">
  import { questions } from './type';
</script>
