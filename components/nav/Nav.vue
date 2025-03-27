<template>
  <nav class="nav">
    <ul class="nav__block" @click="clouseMenu">
      <li v-for="link in props.links" :key="link.id" class="nav__item">
        <nuxt-link class="nav__link" :to="link.url">{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  const props = defineProps<{
    links: Array<{ id: number; title: string; url: string }>;
  }>();

  const emit = defineEmits<{ (event: 'nav-click', Event: MouseEvent): void }>();

  function clouseMenu(event: Event) {
    const mouseEvent = event as MouseEvent;
    emit('nav-click', mouseEvent);
  }
</script>

<style scoped lang="scss"></style>
