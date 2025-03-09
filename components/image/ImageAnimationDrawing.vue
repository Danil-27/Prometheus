<template>
  <component :is="props.imgSvg" />
</template>

<script setup lang="ts">
const props = defineProps<{
  imgSvg: any
}>()
</script>

<style scoped lang="scss"></style>
