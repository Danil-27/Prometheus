<template>
  <img :src="props.imgSrc" :alt="props.imgAlt" />
</template>

<script setup lang="ts">
const props = defineProps<{
  imgSrc: string
  imgAlt: string
}>()
</script>

<style scoped lang="scss"></style>
