<template>
  <section class="container section-margin-top flex justify-center gap-[20px]">
    <div class="hidden lg:block w-5/12 rounded-base">
      <img class="h-full" src="~/assets/images/img/input/img-input.png" alt="img-input" />
    </div>
    <div
      class="relative w-full md:w-10/12 lg:w-7/12 lg:bg-yellow px-[10px] xs:px-[30px] xl:px-[60px] pt-[78px] pb-[150px] bg-[url('~/assets/images/img/input/img-input.png')] lg:bg-none rounded-base bg-cover bg-center"
    >
      <div class="lg:hidden absolute bg-[rgba(0,0,0,0.4)] inset-0 z-[0] rounded-base"></div>
      <h2
        class="relative z-10 font-jetBold text-[26px] xs:text-[30px] xl:text-[50px] bg-yellow rounded-base xs:w-max p-[20px] max-[480px]:text-center mx-auto xs:mx-0 leading-[100%]"
      >
        Оставьте заявку
        <span class="xs:block">на дизайн проект</span>
      </h2>
      <div class="relative z-10 flex flex-col gap-[20px] mt-[66px]">
        <input class="xl:w-[78%] h-[60px] px-[20px] text-[20px] rounded-base" type="text" />
        <input class="xl:w-[78%] h-[60px] px-[20px] text-[20px] rounded-base" type="text" />
        <input class="xl:w-[78%] h-[60px] px-[20px] text-[20px] rounded-base" type="text" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  //  :class="{ backgroundImage: `url(${inputBg})` }"
</script>

<style scoped lang="scss"></style>
