<template>
  <section class="custom-container mt-[20px]">
    <div class="relative text-white rounded-base min-h-[25rem] lg:min-h-[540px] xxl:min-h-[700px] overflow-hidden">

      <NuxtImg class="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
        :src="obverse"
        sizes="(max-width: 640px) 380px, (max-width: 992px) 768px, 1200px"
        width="1200"
        format="webp"
        quality="80"
        alt="Прометей Несем свет, создаем эстетику, вдыхаем уют"
        preload
        priority />

      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.69)_0%,rgba(255,255,255,0)_100%)] bg-[rgba(0,0,0,0.36)] px-[1rem] py-[3.75rem] md:px-[2rem] md:py-[2.75rem] lg:pl-[58px] lg:pt-[130px] xl:pb-[9.375rem] rounded-base">

        <p class="font-jetExtraB text-[2.5rem] xs:text-[4rem] sm:text-[5.6rem] xl:text-[120px] xxl:text-[10rem] leading-[1]">
          Прометей
        </p>
        <div class="font-intertLight text-[20px] xs:text-[22px] md:text-[24px] mt-[20px] lg:text-[40px] xxl:text-[60px] leading-[102%]">
          <p>Несем свет</p>
          <p>Создаем эстетику</p>
          <p>Вдыхаем уют</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import obverse from '/images/obverse/obverse.jpg'
</script>

<style scoped lang="scss"></style>
