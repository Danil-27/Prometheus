<template>
  <section class="section-margin-top">
    <div class="custom-container lg:flex flex-wrap gap-y-10 lg:gap-10 justify-center items-center lg:justify-between">
      <h2 class="font-jetBold text-heading">Наши проекты</h2>
      <nuxt-link to="/projects">
        <BtnSecondary
          :isCheckSecondaryProject="checkSecondaryBtn"
          class="flex items-center gap-[70px] px-7 py-3 max-lg:mx-auto max-lg:mt-[30px]"
          @click="toggleSecondary()"
        >
          <template #text>Смотреть все</template>
          <template #icon><IconBtn /></template>
        </BtnSecondary>
      </nuxt-link>
    </div>
    <article
      class="custom-container flex justify-center flex-wrap lg:flex-nowrap gap-[1rem] xxl:gap-5 mt-[60px] lg:h-[460px] xxl:h-[600px]"
    >
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="relative w-full min-h-[350px] sm:w-[calc(50%-20px)] p-[16px] md:pb-[36px] xxl:px-[25px] md:pt-[25px] rounded-base overflow-hidden bg-center bg-cover bg-no-repeat xl:transition-all duration-300"
        :class="{
          'lg:w-[100%]': isHover[index],
          'lg:w-[50%]': !isHover[index]
        }"
        :style="{ backgroundImage: `url(${card.src})` }"
        @mouseover="handleMouseOver(index)"
        @mouseleave="handleMouseLeave"
      >
        <div class="absolute inset-0 bg-black-40"></div>
        <div class="relative h-full flex flex-col justify-between text-white">
          <nuxt-link :to="`/projects#${idLinkProject[index]}`">
            <BtnArrow :is-hover="isHover[index]" :index="index" />
          </nuxt-link>
          <div>
            <p
              class="font-jetBold text-[21px] lg:text-[clamp(16px,1.72vw,21px)] xxl:text-[30px] max-[570px]:text-[25px] whitespace-pre-line"
            >
              {{ card.content }}
            </p>
            <nuxt-link :to="`/projects#${idLinkProject[index]}`">
              <BtnBase
                class="w-full flex items-center justify-between py-[11px] px-[20px] xxl:py-[15px] mt-[30px]"
                :isCheckBaseProject="checkBaseBtn[index]"
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
  import { idLinkProject } from '~/utils/constants';

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
