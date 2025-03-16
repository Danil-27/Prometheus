<template>
  <section class="container section-margin-top">
    <div class="flex flex-wrap gap-10 justify-between items-center">
      <h2 class="font-jetBold text-[60px] lg:text-[80px] xl:text-[100px] leading-[100%]">Наши проекты</h2>
      <nuxt-link to="/projects">
        <button class="flex items-center gap-[70px] bg-black text-white px-7 py-3">
          <span class="text-primary">Смотреть все</span>
          <IconBtn />
        </button>
      </nuxt-link>
    </div>
    <article class="flex justify-center flex-wrap xl:flex-nowrap gap-5 mt-[60px] xl:h-[600px]">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="relative w-full min-h-[350px] sm:w-[calc(50%-20px)] p-[15px] md:px-[25px] md:pt-[25px] md:pb-[38px] rounded-base overflow-hidden bg-auto bg-center bg-no-repeat xl:transition-all duration-300"
        :class="{
          'xl:w-[100%]': isHover[index],
          'xl:w-[50%]': !isHover[index],
        }"
        @mouseover="handleMouseOver(index)"
        @mouseleave="handleMouseLeave"
        :style="{ backgroundImage: `url(${card.src})` }"
      >
        <div class="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
        <div class="relative h-full flex flex-col justify-between z-10 text-white">
          <nuxt-link to="/projects">
            <button
              class="plate absolute right-0 w-[80px] h-[80px] ml-auto rounded-[100%]"
              :class="{
                'bg-[var(--yellow)]': isHover[index],
                'bg-[var(--white)]': !isHover[index],
              }"
            >
              <IconCard class="absolute w-[70px] h-[70px] top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]" />
            </button>
          </nuxt-link>
          <div>
            <p v-html="card.content" class="font-jetBold text-[30px] max-[570px]:text-[25px]"></p>
            <nuxt-link to="/projects">
              <button
                class="w-full flex items-center justify-between font-jetReg text-primary py-[15px] px-[20px] text-black bg-white rounded-base mt-[30px]"
              >
                <span class="text-primary">Изучить</span>
                <IconCard class="w-[30px] h-[30px] rotate-[45deg]" />
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import IconBtn from '@/assets/images/svg/arrow/arrow-right-btn.svg';
import IconCard from '@/assets/images/svg/arrow/arrow-card.svg';
import { cards } from './type';

let isHover = ref<boolean[]>(new Array(cards.length).fill(false));

function handleMouseOver(index: number) {
  isHover.value[index] = true;
}

function handleMouseLeave() {
  isHover.value.fill(false);
}
</script>

<style scoped lang="scss"></style>
