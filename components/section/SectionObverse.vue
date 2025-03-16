<template>
  <section class="container mt-[20px]">
    <div
      class="relative text-[white] rounded-base xl:bg-green min-h-[25rem] xl:min-h-[43.75rem] bg-[url('~/assets/images/img/obverse/obverse.png')] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="obverse-bg absolute px-[1rem] py-[3.75rem] md:px-[2rem] md:py-[2.75rem] xl:pl-[6.25rem] xl:pt-[8.75rem] xl:pb-[9.375rem] rounded-base"
      >
        <p
          class="font-jetExtraB text-[2.8rem] xs:text-[4.5rem] sm:text-[6rem] lg:text-[8rem] xxl:text-[10rem] leading-[118%]"
        >
          Prometheus
        </p>
        <!-- нужно SEO H1 -->
        <div
          class="text-[1.5rem] sm:text-[2rem] xl:text-[3rem] xxl:text-[3.75rem] leading-[110%]"
        >
          <p>Несем свет</p>
          <p>Создаем эстетику</p>
          <p>Вдыхаем уют</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.obverse-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.69) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background-color: rgba(0, 0, 0, 0.36);
}
</style>
