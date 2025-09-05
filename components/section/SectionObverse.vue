<template>
  <section class="obverse">
    <div class="obverse__wrapper ">

      <NuxtImg class="obverse__nuxt-img"
        fetchpriority="high"
        :src="obverse"
        sizes="(max-width: 640px) 380px, (max-width: 992px) 768px, 1200px"
        width="1200"
        format="webp"
        quality="80"
        alt="Прометей Несем свет, создаем эстетику, вдыхаем уют"
        preload
        priority />

      <div class="obverse__bg">

        <p class="obverse__heading ">
          Прометей
        </p>
        <div class="obverse__text">
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
import '~/assets/css/preloadingMainBlock.css'
</script>

<style scoped lang="scss"></style>
