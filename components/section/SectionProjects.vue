<template>
  <section class="container section-margin-top">
    <div class="flex flex-wrap gap-10 justify-between items-center">
      <h2 class="font-jetBold text-[60px] lg:text-[80px] xl:text-[100px] leading-[100%]">Наши проекты</h2>
      <nuxt-link to="/projects"></nuxt-link>
      <BtnSecondary
        :isCheckSecondaryProject="checkSecondaryBtn"
        @click="toggleSecondary()"
        class="flex items-center gap-[70px] px-7 py-3"
      >
        <template v-slot:text>Смотреть все</template>
        <template v-slot:icon><IconBtn /></template>
      </BtnSecondary>
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
            <BtnArrow :isHover="isHover[index]" :index="index" />
          </nuxt-link>
          <div>
            <p v-html="card.content" class="font-jetBold text-[30px] max-[570px]:text-[25px]"></p>
            <nuxt-link to="/projects">
              <BtnBase @click="toggleBase(index)" :isCheckBaseProject="checkBaseBtn[index]">
                <template v-slot:text>
                  <div>Изучить</div>
                </template>
                <template v-slot:icon>
                  <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
                </template>
              </BtnBase>
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
import { useStorageCheckContent } from '~/composables/useStorageCheckContent';
import { cards } from './type';

let isHover = ref<boolean[]>(new Array(cards.length).fill(false));
let checkBaseBtn = ref<boolean[]>(new Array(cards.length).fill(false));
let checkSecondaryBtn = ref<boolean>(false);

function handleMouseOver(index: number) {
  isHover.value[index] = true;
}

function handleMouseLeave() {
  isHover.value.fill(false);
}

function toggleSecondary() {
  checkSecondaryBtn.value = true;
  sessionStorage.setItem('checkSecondaryProject', JSON.stringify(checkSecondaryBtn.value));
}

function toggleBase(index: number) {
  checkBaseBtn.value[index] = true;
  sessionStorage.setItem('checkBaseBtn', JSON.stringify(checkBaseBtn.value));
}

onMounted(() => {
  useStorageCheckContent('checkBaseBtn', checkBaseBtn);
  useStorageCheckContent('checkSecondaryProject', checkSecondaryBtn);
});
</script>

<style scoped lang="scss"></style>
