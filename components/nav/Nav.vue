<template>
  <nav class="nav">
    <ul @click="clouseMenu" class="nav__block">
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

const emit = defineEmits<{ (event: 'nav-click', Event: MouseEvent): void }>()

function clouseMenu(event: Event) {
  const mouseEvent = event as MouseEvent
  emit('nav-click', mouseEvent)
}
</script>

<style scoped lang="scss"></style>
