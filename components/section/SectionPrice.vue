<template>
  <section class="container section-margin-top">
    <h2 class="font-jetBold text-[40px] md:text-[60px] xl:text-[100px] leading-[100%]">Наши услуги</h2>
    <div
      class="grid gap-5 grid-rows-[repeat(4,300px)] sm:grid-rows-[repeat(2,300px)] lg:grid-rows-[repeat(2,300px)] sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] xl:grid-cols-[2fr,1fr,1fr,1fr] xl:grid-rows-[350px,350px] mt-[63px]"
    >
      <div
        :style="{ backgroundImage: `url(${imagesPrice[2].url})` }"
        class="relative lg:col-span-2 xl:col-span-2 xl:order-4 flex flex-col justify-between rounded-base text-[30px] px-[24px] py-[20px] md:px-[25px] md:pt-[25px] md:pb-[38px] bg-cover bg-center bg-no-repeat"
      >
        <div class="max-w-[370px]">
          <h3 class="font-jetBold text-[20px] lg:text-[30px]">Тариф базовый</h3>
          <p class="font-interReg text-[16px] lg:text-[24px]">
            Дизайн проект с основными чертежами, без визуализации1200руб.м²
          </p>
        </div>
        <nuxt-link to="#"></nuxt-link>
        <BtnBase @click="checkContent(0)" :checkPrice="checkPrice[0]">
          <template v-slot:text>
            <div>Изучить</div>
          </template>
          <template v-slot:icon>
            <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>
      <div
        class="lg:col-span-2 xl:col-span-2 xl:order-2 flex flex-col justify-between bg-green rounded-base text-[30px] px-[24px] py-[20px] md:px-[25px] md:pt-[25px] md:pb-[38px] bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${imagesPrice[3].url})` }"
      >
        <div>
          <h3 class="font-jetBold text-[20px] lg:text-[30px]">Тариф Стандартный</h3>
          <p class="font-interReg text-[16px] lg:text-[24px]">
            Дизайн проект с основными чертежами и визуализацией2200руб.м²
          </p>
        </div>
        <nuxt-link to="#"></nuxt-link>
        <BtnBase @click="checkContent(1)" :checkPrice="checkPrice[1]">
          <template v-slot:text>
            <div>Изучить</div>
          </template>
          <template v-slot:icon>
            <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>
      <div
        class="lg:col-span-3 xl:row-span-2 xl:col-span-1 xl:order-1 flex flex-col justify-between xl:flex-col-reverse bg-green rounded-base text-[30px] px-[24px] py-[20px] md:px-[25px] md:pt-[25px] md:pb-[38px] bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${imagesPrice[4].url})` }"
      >
        <div>
          <h3 class="font-jetBold text-[20px] lg:text-[30px]">Тариф полный</h3>
          <p class="font-interReg text-[16px] lg:text-[24px]">
            Дизайн проект со всеми чертежами, документацией и визуализацей2800руб.м²
          </p>
        </div>

        <nuxt-link to="#"></nuxt-link>
        <BtnBase @click="checkContent(2)" :checkPrice="checkPrice[2]">
          <template v-slot:text>
            <div>Изучить</div>
          </template>
          <template v-slot:icon>
            <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>
      <div
        class="lg:col-span-1 xl:row-span-2 xl:order-3 flex flex-col justify-between bg-green rounded-base text-[30px] px-[24px] py-[20px] md:px-[25px] md:pt-[25px] md:pb-[38px] bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${imagesPrice[5].url})` }"
      >
        <h3 class="font-jetBold text-[20px] lg:text-[30px]">Опциональные улуги</h3>
        <nuxt-link to="#"></nuxt-link>

        <BtnBase @click="checkContent(3)" :checkPrice="checkPrice[3]">
          <template v-slot:text>
            <div>Изучить</div>
          </template>
          <template v-slot:icon>
            <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconCard from '@/assets/images/svg/arrow/arrow-card.svg';
import { imagesPrice } from './type';
import { useStorageCheckContent } from '~/composables/useStorageCheckContent';

const checkPrice = ref([false, false, false, false]);

function checkContent(indexElem: number) {
  checkPrice.value[indexElem] = true;
  sessionStorage.setItem('checkPrice', JSON.stringify(checkPrice.value));
}

onMounted(() => {
  useStorageCheckContent('checkPrice', checkPrice);
});
</script>

<style scoped lang="scss"></style>
