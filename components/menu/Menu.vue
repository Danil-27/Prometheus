<template>
  <div
    :class="{ openMenu: !props.isMenu }"
    class="menu fixed top-0 right-0 z-20 w-[50%] h-[100vh] p-7 bg-[rgb(182,178,182)] transition-all duration-300 ease-linear overflow-y-auto"
  >
    <Nav @nav-click="toggleClickMenu" class="menu-nav" :links="links" />
  </div>
</template>

<script setup lang="ts">
import { links } from './type'
const props = defineProps<{ isMenu: boolean }>()

const emit = defineEmits<{ (event: 'nav-click', Event: MouseEvent): void }>()
function toggleClickMenu(event: Event) {
  const mouseEvent = event as MouseEvent
  emit('nav-click', mouseEvent)
}
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
</style>
