<template>
  <div
    :class="{ openMenu: !isMenu }"
    class="menu fixed top-0 right-0 z-20 w-full h-full p-7 bg-gray transition-all duration-300 ease-linear overflow-auto"
  >
    <div></div>
    <Nav class="menu-nav" :links="links" />
  </div>
</template>

<script setup lang="ts">
import { links } from './type'
const props = defineProps<{ isMenu: boolean }>()
</script>

<style scoped lang="scss">
.openMenu {
  right: -100%;
}

.menu-nav :deep(.nav__block) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
}
.menu-nav :deep(.nav__link) {
  // font-size: 100px;
}
</style>
