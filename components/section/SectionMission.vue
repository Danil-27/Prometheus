<template>
  <section id="about"
    class="relative section-margin-top">
    <div class="custom-container z-[1] grid grid-cols-1 grid-rows-[auto,300px,auto,auto] min-[505px]:grid-cols-2 min-[505px]:grid-rows-[auto,400px,auto] lg:grid-cols-[40%_1fr_1fr] lg:grid-rows-1 gap-[0.75rem] xxl:gap-[1.125rem]">

      <div class="relative bg-cover bg-no-repeat p-[30px] rounded-base min-[505px]:col-span-2 md:bg-[100%] max-md:bg-white md:pr-[110px] md:bg-[url('@/assets/svg/mission/background-md.svg')] lg:order-2 lg:bg-[url('@/assets/svg/mission/background-lg.svg')] xl:bg-[url('@/assets/svg/mission/background.svg')] xxl:p-[30px_60px_60px_60px]">
        <missionArrow class="max-md:hidden absolute w-[95px] h-[95px] xl:w-[90px] xl:h-[90px] xxl:w-[125px] xxl:h-[125px] bottom-[0px] right-[0px] lg:bottom-[-6px] lg:right-[-6px] xl:bottom-[0px] xl:right-[0px] xxl:bottom-[-10px] xxl:right-[-0px]" />
        <h2 class="relative inline-block font-jetExtraB mb-5 text-[28px] md:text-[40px] xl:text-[3.4375rem]">
          Прометей
          <MissionIcon class="absolute top-[36px] right-[-15px] md:top-[50px] md:right-[-20px] xl:top-[66px] xl:right-[-25px] w-[80px] md:w-[100px] xl:w-[130px]" />
        </h2>
        <p class="text-primary">
          Мы – команда увлеченных дизайнеров интерьера, превращающих пространства в отражение Вашей индивидуальности и
          стиля жизни.
        </p>
      </div>

      <div class="w-full xs:w-[90%] lg:w-full justify-self-center content-center min-[505px]:col-span-2 lg:col-span-1 lg:row-span-2 lg:order-1 rounded-base overflow-hidden">
        <NuxtImg class="w-full h-full object-cover rounded-base"
          :src="apartment"
          alt="Квартира"
          format="webp"
          quality="80" />
      </div>

      <div class="text-center bg-white rounded-base p-[15px] md:py-[20px] md:px-[16px] xxl:p-[30px] lg:order-3">
        <h3 class="font-jetExtraB text-[28px] xl:text-[2.5rem] xxl:text-[3rem] mb-[0.625rem]">Наша миссия</h3>
        <p class="Missins-text text-primary">
          Осуществление полного спектра услуг по дизайну интерьера, от концепции до реализации
        </p>
      </div>

      <div class="text-center bg-white rounded-base p-[15px] md:py-[20px] md:px-[16px] xxl:p-[30px] lg:order-4">
        <h3 class="font-jetExtraB text-[28px] xl:text-[2.5rem] xxl:text-[3rem] mb-[0.625rem]">Наша цель</h3>
        <p class="text-primary">Создавать интерьеры, в которых хочется жить и творить, и в которые хочется возвращаться</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MissionIcon from '@/assets/svg/mission/mission.svg';
import missionArrow from '@/assets/svg/mission/arrow-mission.svg';
import apartment from '/images/mission/apartment.webp';
</script>
