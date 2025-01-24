<template>
  <div
    class="sticky top-0 flex items-center h-14 lg:h-20 border-b-[2px] border-black z-20"
  >
    <div class="header container mx-auto flex justify-between items-center">
      <Logo class="logo" />
      <div class="flex">
        <Nav :links="links" class="header-nav hidden lg:block" />
      </div>
    </div>
    <Menu :isMenu="isMenu" />
    <BtnBurger
      @click="toggleMenu"
      :isMenu="isMenu"
      class="absolute right-0 mr-4 z-50 lg:hidden p-1"
    />
  </div>
</template>

<script setup lang="ts">
import { links } from './type'

let isMenu = ref<boolean>(false)

function toggleMenu(event: MouseEvent) {
  isMenu.value = !isMenu.value
}
</script>

<style scoped lang="scss">
.header-nav :deep(.nav__block) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
</style>
