<template>
  <footer
    class="mt-[100px] lg:mt-[140px] rounded-t-[40px] sm:rounded-t-[100px] bg-yellow pt-[40px] lg:pt-[94px] pb-[40px] md:pb-[70px] bg-[length:100%_15px] md:bg-[length:100%_auto] bg-no-repeat bg-bottom"
    :style="{ backgroundImage: `url(${rulePicture})` }"
  >
    <div
      class="container grid md:block grid-cols-1 grid-rows-4 gap-5 xs:grid-cols-2 xs:grid-rows-2 text-center md:text-start font-jetReg text-[18px] sm:text-[20px] xl:text-[24px] xxl:text-[30px] md:px-[100px]"
    >
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Почта
          <span class="max-md:hidden">:</span>
        </p>
        <p class="mt-[4px]">jul_vlas@mail.ru</p>
      </div>
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Основной номер
          <span class="max-md:hidden">:</span>
        </p>
        <p class="mt-[4px]">+7 (918) 660-49-33</p>
      </div>
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Дополнительный номер
          <span class="max-md:hidden">:</span>
        </p>
        <p class="mt-[4px]">+7 (918) 660-47-87</p>
      </div>
      <div class="md:flex md:justify-between">
        <p class="md:flex items-center">
          Время работы
          <span class="max-md:hidden">:</span>
        </p>
        <p class="mt-[4px]">Будни, с 09:00 до 21:00</p>
      </div>
    </div>
    <p
      class="text-center font-jetExtraB uppercase max-lg:mt-[20px] text-[56px] md:text-[100px] lg:text-[180px] xl:text-[200px] xxl:text-[290px] leading-[118%]"
    >
      Promethus
    </p>
  </footer>
</template>

<script setup lang="ts">
  import { rulePicture } from './type';
</script>

<style scoped lang="scss"></style>
