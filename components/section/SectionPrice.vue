<template>
  <section class="container section-margin-top">
    <h2 class="font-jetBold text-[40px] md:text-[60px] xl:text-[100px] leading-[100%]">Наши услуги</h2>
    <div
      class="grid gap-5 grid-rows-[repeat(4,300px)] sm:grid-rows-[repeat(2,300px)] lg:grid-rows-[repeat(2,300px)] sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] xl:grid-cols-[500px,1fr,1fr,1fr] xl:grid-rows-[350px,350px] xxl:grid-cols-[630px,1fr,1fr,300px] mt-[64px]"
    >
      <div
        class="relative lg:col-span-2 xl:col-span-2 xl:order-4 flex flex-col justify-between rounded-base text-[30px] p-[15px] xs:p-[20px] md:p-[30px] bg-cover bg-center xxl:bg-[-10px] bg-no-repeat bg-[url('~/assets/images/img/price/corner.png')]"
      >
        <div class="max-w-[210px] lg:max-w-[290px] xl:max-w-[300px] xxl:max-w-[380px]">
          <h3 class="uppercase font-jetBold text-[24px] lg:text-[30px]">Тариф базовый</h3>
          <p class="text-ptice font-interReg">
            <span class="xxl:block">Дизайн проект с основными</span>
            <span class="xxl:block">чертежами, без визуализации</span>
            1200руб.м²
          </p>
        </div>
        <nuxt-link class="ml-auto" to="#">
          <BtnBase
            class="max-w-[250px] inline-flex gap-[50px] items-center justify-between py-[12px] px-[20px]"
            @click="checkContent(0)"
            :isCheckBasePrice="checkSecondaryBtn[0]"
          >
            <template v-slot:text>
              <div>Подробнее</div>
            </template>
            <template v-slot:icon>
              <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
            </template>
          </BtnBase>
        </nuxt-link>
      </div>

      <div
        class="lg:col-span-2 xl:col-span-2 xl:order-2 flex flex-col justify-between rounded-base text-[30px] p-[15px] xs:p-[20px] md:p-[30px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/images/img/price/sofa.png')]"
      >
        <div>
          <h3 class="uppercase font-jetBold text-[24px] lg:text-[30px]">Тариф Стандартный</h3>
          <p class="text-ptice font-interReg">
            Дизайн проект
            <span class="max-md:block">с основными чертежами и</span>
            визуализацией 2200руб.м²
          </p>
        </div>
        <nuxt-link class="ml-auto" to="#">
          <BtnBase
            class="max-w-[250px] inline-flex gap-[50px] items-center justify-between ml-auto py-[12px] px-[20px]"
            @click="checkContent(1)"
            :isCheckBasePrice="checkSecondaryBtn[1]"
          >
            <template v-slot:text>
              <div>Подробнее</div>
            </template>
            <template v-slot:icon>
              <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
            </template>
          </BtnBase>
        </nuxt-link>
      </div>

      <div
        class="lg:col-span-3 xl:row-span-2 xl:col-span-1 xl:order-1 flex flex-col justify-between xl:flex-col-reverse rounded-base text-[30px] p-[15px] xs:p-[20px] md:p-[30px] xl:pb-[0px] xl:pl-[0px] bg-no-repeat bg-cover bg-center bg-[url('~/assets/images/img/price/home_xxs.png'),url('~/assets/images/img/price/background.png')] xs:bg-[url('~/assets/images/img/price/home_xs.png'),url('~/assets/images/img/price/background.png')] sm:bg-[url('~/assets/images/img/price/home_xxs.png'),url('~/assets/images/img/price/background.png')] min-[770px]:bg-[url('~/assets/images/img/price/home_md.png'),url('~/assets/images/img/price/background.png')] lg:bg-[url('~/assets/images/img/price/home_lg.png'),url('~/assets/images/img/price/background.png')] xl:bg-[url('~/assets/images/img/price/home_xl.png')] xxl:bg-[url('~/assets/images/img/price/home_xxl.png')]"
      >
        <div class="max-w-[220px] min-[880px]:max-w-[250px] lg:max-w-[340px] xl:max-w-[515px]">
          <h3 class="uppercase font-jetBold text-[24px] lg:text-[30px]">Тариф полный</h3>
          <p class="text-ptice max-w-[500px] font-interReg mt-[8px]">
            <span class="xxl:block">Дизайн проект со всеми чертежами,</span>
            <span class="xxl:block">документацией и визуализацей</span>
            2800руб.м²
          </p>
        </div>

        <nuxt-link class="ml-auto" to="#">
          <BtnBase
            class="max-w-[250px] inline-flex gap-[50px] items-center justify-between ml-auto py-[12px] px-[20px]"
            @click="checkContent(2)"
            :isCheckBasePrice="checkSecondaryBtn[2]"
          >
            <template v-slot:text>
              <div>Подробнее</div>
            </template>
            <template v-slot:icon>
              <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
            </template>
          </BtnBase>
        </nuxt-link>
      </div>
      <div
        class="lg:col-span-1 xl:row-span-2 xl:order-3 flex flex-col justify-between xl:justify-end rounded-base text-[30px] p-[15px] xs:p-[20px] md:p-[30px] bg-cover bg-no-repeat bg-[position:65px_center,0_0] min-[410px]:bg-[70%,cover] min-[410px]:bg-[position:100px_-60px,0_0] min-[495px]:bg-[position:100px_-120px,0_0] sm:bg-[position:100px_-60px,0_0] sm:bg-[80%,cover] min-[800px]:bg-[position:100px_-100px,0_0] lg:bg-[cover,cover] lg:bg-[position:130px_-40px,0_0] bg-[url('~/assets/images/img/price/lamp.png'),url('~/assets/images/img/price/background.png')] xl:bg-[position:center] xl:bg-[url('~/assets/images/img/price/lamp_and_bg.png')]"
      >
        <h3 class="uppercase max-w-[160px] font-jetBold text-[20px] lg:text-[30px]">Опциональные улуги</h3>
        <nuxt-link class="ml-auto lg:mx-auto" to="#">
          <BtnBase
            class="max-w-[250px] inline-flex gap-[50px] items-center justify-between ml-auto py-[12px] px-[20px] xl:mt-[30px]"
            @click="checkContent(3)"
            :isCheckBasePrice="checkSecondaryBtn[3]"
          >
            <template v-slot:text>
              <div>Подробнее</div>
            </template>
            <template v-slot:icon>
              <IconCard class="flex w-[30px] h-[30px] rotate-[45deg]" />
            </template>
          </BtnBase>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconCard from '@/assets/images/svg/arrow/arrow-card.svg';
import { useStorageCheckContent } from '~/composables/useStorageCheckContent';

const checkSecondaryBtn = ref([false, false, false, false]);

function checkContent(indexElem: number) {
  checkSecondaryBtn.value[indexElem] = true;
  sessionStorage.setItem('checkSecondaryPrice', JSON.stringify(checkSecondaryBtn.value));
}

onMounted(() => {
  useStorageCheckContent('checkSecondaryPrice', checkSecondaryBtn);
});
</script>

<style scoped lang="scss"></style>
