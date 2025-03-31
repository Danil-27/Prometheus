<template>
  <section class="custom-container section-margin-top">
    <div class="flex flex-wrap gap-y-10 xs:gap-10 xs:justify-between items-center">
      <h2 class="font-jetBold text-[40px] lg:text-[80px] xl:text-[100px] leading-[100%]">Наши проекты</h2>
      <nuxt-link to="/projects" />
      <BtnSecondary
        :is-check-secondary-project="checkSecondaryBtn"
        class="flex items-center gap-[70px] px-7 py-3"
        @click="toggleSecondary()"
      >
        <template #text>Смотреть все</template>
        <template #icon><IconBtn /></template>
      </BtnSecondary>
    </div>
    <article class="flex justify-center flex-wrap xl:flex-nowrap gap-5 mt-[60px] lg:h-[460px] xxl:h-[600px]">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="relative w-full min-h-[350px] sm:w-[calc(50%-20px)] p-[15px] md:px-[25px] md:pt-[25px] md:pb-[38px] rounded-base overflow-hidden bg-auto bg-center bg-no-repeat xl:transition-all duration-300"
        :class="{
          'xl:w-[100%]': isHover[index],
          'xl:w-[50%]': !isHover[index]
        }"
        :style="{ backgroundImage: `url(${card.src})` }"
        @mouseover="handleMouseOver(index)"
        @mouseleave="handleMouseLeave"
      >
        <div class="absolute inset-0 bg-black-40"></div>
        <div class="relative h-full flex flex-col justify-between z-10 text-white">
          <nuxt-link to="/projects">
            <BtnArrow :is-hover="isHover[index]" :index="index" />
          </nuxt-link>
          <div>
            <p class="font-jetBold text-[30px] max-[570px]:text-[25px]" v-html="card.content"></p>
            <nuxt-link to="/projects">
              <BtnBase
                class="w-full flex items-center justify-between py-[15px] px-[20px] mt-[30px]"
                :is-check-base-project="checkBaseBtn[index]"
                @click="toggleBase(index)"
              >
                <template #text>
                  <div>Изучить</div>
                </template>
                <template #icon>
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
  import IconBtn from '@/assets/svg/arrow/arrow-right-btn.svg';
  import IconCard from '@/assets/svg/arrow/arrow-card.svg';
  import { useStorageCheckContent } from '~/composables/useStorageCheckContent';
  import { cards } from './type';

  const isHover = ref<boolean[]>(new Array(cards.length).fill(false));
  const checkBaseBtn = ref<boolean[]>(new Array(cards.length).fill(false));
  const checkSecondaryBtn = ref<boolean>(false);

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
