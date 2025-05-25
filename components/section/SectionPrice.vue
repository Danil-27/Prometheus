<template>
  <section id="price" class="custom-container section-scroll-mt">
    <h2 class="font-jetBold text-heading">Наши услуги</h2>
    <div class="grid gap-5 grid-rows-[repeat(4,300px)] sm:grid-rows-[repeat(2,300px)] lg:grid-rows-[repeat(2,300px)] sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] xl:grid-cols-[460px,1fr,1fr,1fr] xl:grid-rows-[260px,260px] xxl:grid-cols-[630px,1fr,1fr,300px] mt-[64px] xxl:grid-rows-[340px,340px]">
      <div class="relative lg:col-span-2 xl:col-span-2 xl:order-4 flex flex-col justify-between rounded-[30px] md:rounded-base text-[30px] p-[15px] xs:p-[20px] lg:pl-[30px] lg:pr-[20px] lg:py-[20px] xxl:p-[30px] bg-cover bg-center xxl:bg-[-10px] bg-no-repeat bg-[url('~/assets/images/price/corner.png')]">
        <div class="max-w-[210px] lg:max-w-[290px] xl:max-w-[300px] xxl:max-w-[380px]">
          <h3 class="uppercase font-jetBold text-[21px] xxl:text-[30px]">Тариф базовый</h3>
          <p class="text-ptice font-interReg">
            <span class="xxl:block">Дизайн-проект с основными&nbsp;</span>
            <span class="xxl:block">чертежами без визуализации</span>
            1200руб.м²
          </p>
        </div>

        <BtnBase class="ml-auto max-w-[250px] inline-flex gap-[40px] xxl:gap-[50px] items-center justify-between py-[12px] px-[20px]" :isCheckBasePrice="checkSecondaryBtn[0]" @click="checkContent(0)">
          <template #text>
            <div>Подробнее</div>
          </template>
          <template #icon>
            <IconCard class="flex w-[25px] h-[25px] xxl:w-[30px] xxl:h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>

      <div class="lg:col-span-2 xl:col-span-2 xl:order-2 flex flex-col justify-between rounded-[30px] md:rounded-base p-[15px] xs:p-[20px] lg:pl-[30px] lg:pr-[20px] lg:py-[20px] xxl:p-[30px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/images/price/sofa.png')]">
        <div>
          <h3 class="uppercase font-jetBold text-[21px] xxl:text-[30px]">Тариф Стандартный</h3>
          <p class="text-ptice font-interReg">
            Дизайн проект
            <span class="max-md:block">с основными чертежами и</span>
            визуализацией 2200руб.м²
          </p>
        </div>

        <BtnBase class="max-w-[250px] inline-flex gap-[40px] xxl:gap-[50px] items-center justify-between ml-auto py-[12px] px-[20px]" :isCheckBasePrice="checkSecondaryBtn[1]" @click="checkContent(1)">
          <template #text>
            <div>Подробнее</div>
          </template>
          <template #icon>
            <IconCard class="flex w-[25px] h-[25px] xxl:w-[30px] xxl:h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>

      <div class="lg:col-span-3 xl:row-span-2 xl:col-span-1 xl:order-1 flex flex-col justify-between xl:flex-col-reverse rounded-[30px] md:rounded-base text-[30px] p-[15px] xs:p-[20px] md:p-[30px] xl:pb-[0px] xl:pl-[0px] bg-no-repeat bg-cover bg-center bg-[url('~/assets/images/price/home_xxs.png'),url('~/assets/images/price/background.png')] xs:bg-[url('~/assets/images/price/home_xs.png'),url('~/assets/images/price/background.png')] sm:bg-[url('~/assets/images/price/home_xxs.png'),url('~/assets/images/price/background.png')] min-[790px]:bg-[url('~/assets/images/price/home_md.png'),url('~/assets/images/price/background.png')] lg:bg-[url('~/assets/images/price/home_lg.png'),url('~/assets/images/price/background.png')] xl:bg-[url('~/assets/images/price/home_xl.png')] xxl:bg-[url('~/assets/images/price/home_xxl.png')]">
        <div class="max-w-[220px] min-[880px]:max-w-[250px] lg:max-w-[340px] xl:max-w-[515px]">
          <h3 class="uppercase font-jetBold text-[21px] xxl:text-[30px]">Тариф полный</h3>
          <p class="text-ptice max-lg:max-w-[310px] font-interReg mt-[8px]">
            <span class="lg:block">Дизайн проект со всеми чертежами,&nbsp;</span>
            <span class="lg:block">документацией и визуализацей</span>
            2800руб.м²
          </p>
        </div>

        <BtnBase class="max-w-[250px] inline-flex gap-[40px] xxl:gap-[50px] items-center justify-between ml-auto py-[12px] px-[20px]" :isCheckBasePrice="checkSecondaryBtn[2]" @click="checkContent(2)">
          <template #text>
            <div>Подробнее</div>
          </template>
          <template #icon>
            <IconCard class="flex w-[25px] h-[25px] xxl:w-[30px] xxl:h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>
      <div class="lg:col-span-1 xl:row-span-2 xl:order-3 flex flex-col justify-between xl:justify-end rounded-[30px] md:rounded-base text-[30px] p-[15px] min-[350px]:p-[20px] md:p-[30px] xl:p-[20px] xxl:p-[30px] bg-cover bg-no-repeat bg-[position:65px_center,0_0] min-[410px]:bg-[70%,cover] min-[410px]:bg-[position:100px_-60px,0_0] min-[495px]:bg-[position:100px_-120px,0_0] sm:bg-[position:100px_-60px,0_0] sm:bg-[80%,cover] min-[800px]:bg-[position:100px_-100px,0_0] lg:bg-[cover,cover] lg:bg-[position:130px_-40px,0_0] bg-[url('~/assets/images/price/lamp.png'),url('~/assets/images/price/background.png')] xl:bg-[position:center] xl:bg-[url('~/assets/images/price/lamp_and_bg.png')]">
        <h3 class="uppercase max-w-[160px] font-jetBold text-[21px] xxl:text-[30px]">Опциональные улуги</h3>

        <BtnBase class="lg:mx-auto max-w-[250px] inline-flex gap-[40px] xl:gap-[20px] xxl:gap-[50px] items-center justify-between ml-auto py-[12px] px-[20px] xl:mt-[20px] xxl:mt-[30px]" :isCheckBasePrice="checkSecondaryBtn[3]" @click="checkContent(3)">
          <template #text>
            <div>Подробнее</div>
          </template>
          <template #icon>
            <IconCard class="flex w-[25px] h-[25px] xxl:w-[30px] xxl:h-[30px] rotate-[45deg]" />
          </template>
        </BtnBase>
      </div>
    </div>
  </section>

  <Modal :modelValue="isOpenModal" transitionValue="modal" customClassWrapp="flex flex-col bg-bgModal rounded-[20px] max-xs:bg-center xs:rounded-base max-w-[600px] px-[10px] py-[16px] xs:p-[20px] sm:p-[30px] xl:px-[50px] xl:pt-[20px] xl:pb-[20px]" customClassClose="bottom-[20px] right-[20px] mt-[20px] xs:mt-[40px] inline-block self-end" @update:modelValue="handleModalMessage">
    <template #content>
      <p v-if="numOpneContent == 0" class="text-[1rem] xs:text-[1.125rem] xxl:text-[1.5rem]">
        <span class="font-InterBold block">
          -Основные чертежи
          <br />
          -3 планировочных решения
          <br />
          -3D планировка (не визуализация)
        </span>
        <span class="block mt-[20px] xs::mt-[40px]">
          *В планировку входит: Розетки, осветительное оборудование, расстановка мебели, со всеми размерами, сантехника,
          полы и теплый пол при необходимости.
        </span>
        <span class="font-InterBold block mt-[20px]">1200руб.м²</span>
      </p>
      <p v-if="numOpneContent == 1" class="text-[1rem] xs:text-[1.125rem] xxl:text-[1.5rem]">
        <span class="font-InterBold block">
          -Основные чертежи
          <br />
          -3 планировочных решения
          <br />
          -3D планировка (не визуализация)
          <br />
          -Визуализация
        </span>
        <span class="block mt-[20px] xs:mt-[40px]">
          *В планировку входит: Розетки, осветительное оборудование, расстановка мебели, со всеми размерами, сантехника,
          полы и теплый пол при необходимости.
        </span>
        <span class="font-InterBold block mt-[20px]">2200руб.м²</span>
      </p>
      <p v-if="numOpneContent == 2" class="text-[1rem] xs:text-[1.125rem] xxl:text-[1.5rem]">
        <span class="font-InterBold block">
          -Чертежи
          <br />
          -3 планировочных решения
          <br />
          -3D планировка (не визуализация)
          <br />
          -Визуализация
          <br />
          -Развертки по стенам и комплектация
        </span>
        <span class="block mt-[20px] xs:mt-[40px]">
          *В планировку входит: Розетки, осветительное оборудование, расстановка мебели, со всеми размерами, сантехника,
          полы и теплый пол при необходимости.
        </span>
        <span class="block mt-[20px]">
          *В комплектацию входит: Ведомости отделочных материалов, свет оборудования, мебели.
        </span>
        <span class="font-InterBold block mt-[20px]">2800руб.м²</span>
      </p>
      <p v-if="numOpneContent == 3" class="">
        <span class="block text-[18px] xs:text-[22px] xxl:text-[24px]">Большие коммерческие помещения</span>
        <span class="font-InterBold block text-[16px] xs:text-[18px]">-стоимость обсуждается индивидуально</span>
        <span class="block h-[2px] w-full bg-black mt-[10px] xs:mt-[20px]"></span>
        <span class="block mt-[10px] xs:mt-[30px] text-[18px] xs:text-[22px] xxl:text-[24px]">Авторский надзор</span>
        <span class="font-InterBold block text-[16px] xs:text-[18px]">-стоимость обсуждается индивидуально</span>
        <span class="block h-[2px] w-full bg-black mt-[10px] xs:mt-[20px]"></span>

        <span class="block mt-[10px] xs:mt-[30px] text-[18px] xs:text-[22px] xxl:text-[24px]">
          Консультация с выездом по городу
        </span>
        <span class="font-InterBold block text-[20px] xs:text-[22px] xxl:text-[24px]">-5000руб.</span>
        <span class="block h-[2px] w-full bg-black mt-[10px] xs:mt-[20px]"></span>

        <span class="block mt-[10px] xs:mt-[30px] text-[18px] xs:text-[22px] xxl:text-[24px]">
          3D визуализация + план расстановки мебели, без чертежей
        </span>
        <span class="font-InterBold block text-[20px] xs:text-[22px] xxl:text-[24px]">-1000руб.м²</span>
      </p>
    </template>
    <template #close>
      <BtnBase class="max-w-[250px] inline-flex flex-row-reverse gap-[40px] xl:gap-[20px] xxl:gap-[50px] items-center justify-between py-[12px] px-[20px]">
        <template #icon>
          <IconCard class="flex w-[25px] h-[25px] xxl:w-[30px] xxl:h-[30px] rotate-[-135deg]" />
        </template>
        <template #text>
          <div>Вернуться</div>
        </template>
      </BtnBase>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import IconCard from '@/assets/svg/arrow/arrow-card.svg';
import { useStorageCheckContent } from '~/composables/useStorageCheckContent';

const isOpenModal = ref(false);
const numOpneContent = ref(1);
const checkSecondaryBtn = ref([false, false, false, false]);

function checkContent(indexElem: number) {
  checkSecondaryBtn.value[indexElem] = true;
  sessionStorage.setItem('checkSecondaryPrice', JSON.stringify(checkSecondaryBtn.value));
  isOpenModal.value = true;
  numOpneContent.value = indexElem;
}

function handleModalMessage(value: boolean) {
  isOpenModal.value = value;
}

onMounted(() => {
  useStorageCheckContent('checkSecondaryPrice', checkSecondaryBtn);
});
</script>

<style scoped lang="scss"></style>
