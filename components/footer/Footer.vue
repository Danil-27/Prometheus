<template>
  <footer class="mt-[100px] lg:mt-[140px] rounded-t-[50px] lg:rounded-t-[100px] bg-yellow pt-[40px] xxl:pt-[94px] lg:pb-[40px] max-lg:pb-[80px] bg-[length:100%_15px] md:bg-[length:100%_auto] bg-no-repeat bg-bottom" :style="{ backgroundImage: `url(${rulePicture})` }">
    <div class="custom-container md:px-[50px] xl:px-[16px] grid md:block grid-cols-1 grid-rows-4 gap-5 xs:grid-cols-2 xs:grid-rows-2 text-center md:text-start font-jetReg text-[18px] sm:text-[20px] xl:text-[24px] xxl:text-[30px]">
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Почта
          <span class="max-md:hidden">:</span>
        </p>
        <p class="max-md:mt-[4px]">jul_vlas@mail.ru</p>
      </div>
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Основной номер
          <span class="max-md:hidden">:</span>
        </p>
        <p class="max-md:mt-[4px]">+7 (918) 660-49-33</p>
      </div>
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Дополнительный номер
          <span class="max-md:hidden">:</span>
        </p>
        <p class="max-md:max-md:mt-[4px]">+7 (918) 660-47-87</p>
      </div>
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Время работы
          <span class="max-md:hidden">:</span>
        </p>
        <p class="max-md:mt-[4px]">Будни, с 09:00 до 21:00</p>
      </div>
    </div>
    <div class=" lg:my-[50px] xl:my-[50px] xxl:my-[100px]">
      <p class="font-jetExtraB max-w-[100vw] whitespace-nowrap break-normal text-center uppercase max-lg:mt-[20px]  text-[clamp(50px,16vw,90px)] xs:text-[clamp(70px,16vw,90px)] sm:text-[100px] md:text-[130px] lg:text-[clamp(170px,17vw,220px)] xl:text-[220px] xxl:text-[clamp(220px,17vw,340px)] leading-[1]">
        Прометей
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { rulePicture } from './type';
</script>

<style scoped lang="scss"></style>
