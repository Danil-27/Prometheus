<template>
  <section class="container section-margin-top">
    <div
      class="grid grid-cols-1 grid-rows-[auto,auto,auto,auto] xs:grid-cols-2 xs:grid-rows-[auto,auto,auto] lg:grid-cols-[40%_1fr_1fr] lg:grid-rows-2 gap-[1.125rem]"
    >
      <div
        class="relative xs:col-span-2 lg:order-2 rounded-base p-[30px] md:p-[48px] lg:p-[42px_30px_0px_30px] xl:p-[30px] xxl:p-[30px_60px_60px_60px] md:bg-[url('@/assets/images/svg/mission/background.svg')] max-md:bg-white bg-cover lg:bg-contain bg-no-repeat bg-bottom"
      >
        <missionArrow
          class="max-md:hidden absolute w-[95px] h-[95px] min-[900px]:w-[110px] min-[900px]:h-[110px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] xxl:w-[125px] xxl:h-[125px] bottom-[0px] right-[0px] lg:bottom-[-6px] lg:right-[-6px] xl:bottom-[0px] xl:right-[0px] xxl:bottom-[-10px] xxl:right-[-0px]"
        />
        <h2 class="relative inline-block font-jetExtraB mb-5 text-[28px] md:text-[40px] xl:text-[3.4375rem]">
          Prometheus
          <MissionIcon
            class="absolute top-[36px] right-[-15px] md:top-[50px] md:right-[-20px] xl:top-[66px] xl:right-[-25px] w-[80px] md:w-[100px] xl:w-[130px]"
          />
        </h2>
        <p class="text-primary max-w-[600px]">
          Мы – команда увлеченных дизайнеров интерьера, превращающих пространства в отражение Вашей индивидуальности и
          стиля жизни.
        </p>
      </div>
      <div class="rounded-base justify-self-center content-center xs:col-span-2 lg:col-span-1 lg:row-span-2 lg:order-1">
        <img class="h-full" src="@/assets/images/img/slider/main.png" alt="" />
      </div>
      <div class="text-center bg-white rounded-base p-[15px] md:p-[30px] lg:order-3">
        <h3 class="font-jetExtraB text-[28px] xl:text-[2.5rem] xxl:text-[3rem] mb-[0.625rem]">Наша миссия</h3>
        <p class="Missins-text text-primary">
          Осуществление полного спектра услуг по дизайну интерьера, от концепции до реализации
        </p>
      </div>
      <div class="text-center bg-white rounded-base p-[15px] md:p-[30px] lg:order-4">
        <h3 class="font-jetExtraB text-[28px] xl:text-[2.5rem] xxl:text-[3rem] mb-[0.625rem]">Наша цель</h3>
        <p class="text-primary">Осуществление полного спектра услуг по дизайну интерьера, от концепции до реализации</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MissionIcon from '@/assets/images/svg/mission/mission.svg';
import missionArrow from '@/assets/images/svg/mission/arrow-mission.svg';
</script>

<style scoped lang="scss"></style>
