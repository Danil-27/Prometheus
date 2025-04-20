<template>
  <div
    class="fixed bottom-0 left-1/2 -translate-x-1/2 min-w-[96vw] sm:min-w-[80vw] md:min-w-[70vw] h-[70px] bg-white z-10 rounded-t-base px-[18px] py-[10px]"
  >
    <div>
      <nav>
        <ul class="flex gap-3 xs:gap-6">
          <li v-for="link in linksMobile" :key="link.id" class="w-full">
            <nuxt-link :to="link.url">
              <span class="flex justify-center mb-[4px]">
                <component :is="link.svg" />
              </span>
              <span class="flex justify-center">{{ link.title }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { linksMobile } from './type';
</script>

<style scoped lang="scss"></style>
