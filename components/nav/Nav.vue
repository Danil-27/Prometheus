<template>
  <nav class="nav">
    <ul class="nav__block">
      <li class="nav__item" v-for="link in props.links" :key="link.id">
        <nuxt-link class="nav__link" :to="link.url">{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  links: Array<{ id: number; title: string; url: string }>
}>()
</script>

<style scoped lang="scss"></style>
