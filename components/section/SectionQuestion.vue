<template>
  <section class="custom-container section-margin-top-question">
    <h2 class="font-jetBold text-heading">Популярные вопросы</h2>
    <QuestionDesktop class="max-lg:hidden mt-[60px]" :questions="questions" />
    <QuestionMobile class="lg:hidden mt-[60px]" :questions="questions" />
  </section>
</template>

<script setup lang="ts">
import { questions } from './type';
</script>
