<template>
  <article
    v-for="(card, index) in cards"
    :key="card.id"
    @mouseover="hover[index] = true"
    @mouseleave="hover[index] = false"
    :class="{
      'w-[150%]': hover[index],
      'w-[100%]': !hover[index],
    }"
    class="relative w-[100%] rounded-base overflow-hidden bg-cover bg-center transition-[width] delay-150"
    :style="{ backgroundImage: `url(${card.src})` }"
  >
    <div class="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>

    <div class="relative z-10 text-white p-4">
      <p>{{ card.content }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  cards: {
    id: number
    src: string
    alt: string
    content: string
  }[]
}>()

// Создаем массив состояний для ховера, длина массива соответствует количеству карточек
let hover = ref<boolean[]>(new Array(props.cards.length).fill(false))
</script>

<style scoped lang="scss"></style>
