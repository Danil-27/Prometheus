<template>
  <div class="max-lg:hidden relative container mt-[20px] xxl:mt-[35px]">
    <div class="relative bg-white rounded-base flex items-center h-[5rem] xxl:h-[6.25rem] z-10">
      <div class="flex justify-between items-center w-full px-[50px] xl:px-[100px]">
        <Logo class="logo" />
        <div class="flex">
          <nav>
            <ul class="flex justify-center items-center gap-6">
              <li v-for="link in links" :key="link.id">
                <nuxt-link
                  class="text-black p-[5px] text-[22px]"
                  :class="{ 'bg-black text-white rounded-base px-[35px] py-[8px] ': link.id == 5 }"
                  :to="link.url"
                >
                  {{ link.title }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { links } from './type';
</script>

<style scoped lang="scss"></style>
