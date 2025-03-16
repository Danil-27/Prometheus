<template>
  <section
    class="section container flex gap-5 flex-wrap lg:flex-nowrap justify-center items-center mt-[3.125rem]"
  >
    <Achievement
      class="achieve w-[80%] lg:w-4/12"
      :class="{
        'xs:isButton ': achieve.id == 3,
        'xs:w-[calc(50%-10px)] ': achieve.id <= 2,
        'bg-green': achieve.id % 2 === 0,
        'bg-yellow': achieve.id % 2 !== 0,
      }"
      v-for="achieve in achievements"
      :key="achieve.id"
    >
      <template v-slot:content>
        <p
          class="font-jetBold lg:text-[16px] xxl:text-xs uppercase"
          v-html="achieve.content"
        ></p>
      </template>
      <template v-slot:number>
        <p
          class="font-jetExtraB pl-[10px] xs:pl-[5px] text-[40px] sm:text-[60px] xl:text-[70px] xxl:text-lg sm:leading-[1]"
        >
          {{ achieve.number }}
        </p>
      </template>
    </Achievement>
  </section>
</template>

<script setup lang="ts">
import { achievements } from './type'
</script>

<style scoped lang="scss"></style>
