<template>
  <div class="mx-auto custom-container">
    <div
      class="flex justify-between bg-white items-center h-[5rem] xxl:h-[6.25rem] z-10 px-[50px] xl:px-[60px] xxl:px-[88px ] rounded-base"
    >
      <Logo class="logo" />
      <div class="flex">
        <nav>
          <ul class="flex justify-center items-center gap-6">
            <li v-for="link in linksDesctop" :key="link.id">
              <nuxt-link
                class="text-black p-[5px] lg:text-[18px] xxl:text-[24px]"
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
</template>

<script setup lang="ts">
  import { linksDesctop } from './type';
</script>

<style scoped lang="scss"></style>
