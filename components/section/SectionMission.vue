<template>
  <section class="custom-container section-margin-top">
    <div
      class="grid grid-cols-1 grid-rows-[auto,auto,auto,auto] min-[505px]:grid-cols-2 min-[505px]:grid-rows-[auto,auto,auto] lg:grid-cols-[40%_1fr_1fr] lg:grid-rows-1 gap-[0.75rem] xxl:gap-[1.125rem]"
    >
      <div
        class="relative bg-cover bg-no-repeat p-[30px] rounded-base min-[505px]:col-span-2 md:bg-[100%] max-md:bg-white md:bg-[url('@/assets/svg/mission/background-md.svg')] lg:p-[42px_30px_30px_30px] lg:order-2 lg:bg-[url('@/assets/svg/mission/background-lg.svg')] xl:p-[30px] xl:bg-[url('@/assets/svg/mission/background.svg')] xxl:p-[30px_60px_60px_60px]"
      >
        <missionArrow
          class="max-md:hidden absolute w-[95px] h-[95px] lg:w-[100px] lg:h-[100px] xl:w-[90px] xl:h-[90px] xxl:w-[125px] xxl:h-[125px] bottom-[0px] right-[0px] lg:bottom-[-6px] lg:right-[-6px] xl:bottom-[0px] xl:right-[0px] xxl:bottom-[-10px] xxl:right-[-0px]"
        />
        <h2 class="relative inline-block font-jetExtraB mb-5 text-[28px] md:text-[40px] xl:text-[3.4375rem]">
          Prometheus
          <MissionIcon
            class="absolute top-[36px] right-[-15px] md:top-[50px] md:right-[-20px] xl:top-[66px] xl:right-[-25px] w-[80px] md:w-[100px] xl:w-[130px]"
          />
        </h2>
        <p class="text-primary max-w-[600px] lg:max-w-[550px] xxl:max-w-[600px]">
          Мы – команда увлеченных дизайнеров интерьера, превращающих пространства в отражение Вашей индивидуальности и
          стиля жизни.
        </p>
      </div>
      <div
        class="w-full justify-self-center content-center min-[505px]:col-span-2 lg:col-span-1 lg:row-span-2 lg:order-1"
      >
        <img class="h-full rounded-base" src="@/assets/images/mission/apartment.jpg" alt="" />
      </div>
      <div class="text-center bg-white rounded-base p-[15px] md:py-[30px] md:px-[16px] xxl:p-[30px] lg:order-3">
        <h3 class="font-jetExtraB text-[28px] xl:text-[2.5rem] xxl:text-[3rem] mb-[0.625rem]">Наша миссия</h3>
        <p class="Missins-text text-primary">
          Осуществление полного спектра услуг по дизайну интерьера, от концепции до реализации
        </p>
      </div>
      <div class="text-center bg-white rounded-base p-[15px] md:py-[30px] md:px-[16px] xxl:p-[30px] lg:order-4">
        <h3 class="font-jetExtraB text-[28px] xl:text-[2.5rem] xxl:text-[3rem] mb-[0.625rem]">Наша цель</h3>
        <p class="text-primary">Осуществление полного спектра услуг по дизайну интерьера, от концепции до реализации</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import MissionIcon from '@/assets/svg/mission/mission.svg';
  import missionArrow from '@/assets/svg/mission/arrow-mission.svg';
</script>

<style scoped lang="scss"></style>
