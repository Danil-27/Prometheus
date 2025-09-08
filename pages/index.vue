<template>
  <div>
    <div class="decor-container bg-circle-1">
      <SectionObverse />
      <SectionAchievement />
      <SectionMission />
      <div class="bg-circle-2">
        <SectionProjectCards />
        <SectionOffer />
      </div>
    </div>
    <div class="bg-circle-4">
      <SectionPrice />
      <SectionTopics />
    </div>
    <div class="decor-container bg-circle-5">
      <SectionSocial />
      <SectionQuestion />
    </div>
  </div>
</template>

<script setup lang="ts">
const SectionObverse = defineAsyncComponent(() => import('@/components/section/SectionObverse.vue'))
const SectionAchievement = defineAsyncComponent(() => import('@/components/section/SectionAchievement.vue'))
const SectionMission = defineAsyncComponent(() => import('@/components/section/SectionMission.vue'))
const SectionProjectCards = defineAsyncComponent(() => import('@/components/section/SectionProjectCards.vue'))
const SectionOffer = defineAsyncComponent(() => import('@/components/section/SectionOffer.vue'))
const SectionPrice = defineAsyncComponent(() => import('@/components/section/SectionPrice.vue'))
const SectionTopics = defineAsyncComponent(() => import('@/components/section/SectionTopics.vue'))
const SectionSocial = defineAsyncComponent(() => import('@/components/section/SectionSocial.vue'))
const SectionQuestion = defineAsyncComponent(() => import('@/components/section/SectionQuestion.vue'))
// const SectionForm = defineAsyncComponent(() => import('@/components/SectionForm.vue')) // пока закомментирован
</script>
