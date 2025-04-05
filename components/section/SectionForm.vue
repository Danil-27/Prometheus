<template>
  <article id="form" class="custom-container section-margin-top scroll-m-[20px]">
    <div class="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-[20px] lg:rounded-base">
      <div class="w-full max-lg:hidden lg:content-center">
        <img class="h-full" src="~/assets/images/input/img-input.png" alt="img-input" />
      </div>
      <div class="w-full bg-yellow px-[20px] py-[30px] lg:pt-[35px] lg:pb-[30px] lg:px-[36px] rounded-base">
        <h2
          class="font-jetBold mx-auto text-center uppercase text-[24px] leading-[100%] xs:text-[clamp(30px,4vw,40px)] xxl:text-[50px]"
        >
          <span class="block">Оставьте заявку</span>
          <span class="block">на дизайн проект</span>
        </h2>
        <div class="mt-[22px]">
          <Form />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
