<template>
  <section class="container flex flex-col lg:flex-row justify-between items-center gap-5 section-margin-top">
    <div class="lg:w-8/12">
      <h4 class="font-interReg text-primary">Специальное предложение</h4>
      <div class="w-6/12 h-[3px] mt-[10px] bg-gradient-to-r from-black to-transparent"></div>
      <h2
        class="font-jetReg text-center lg:text-start text-[25px] md:text-[40px] xl:text-[60px] mt-[30px] sm:mt-[60px]"
      >
        <span
          class="inline-block relative top-[-5px] left-2 md:top-[-4px] md:left-3 xl:top-[-8px] xl:left-3 w-[10px] h-[10px] md:w-[20px] md:h-[20px] xl:w-[32px] xl:h-[32px] bg-black rounded-[50%]"
        ></span>
        Закажи 3D-визуализацию интерьера и поучи чертеж планировки бессплатно
      </h2>
      <p class="font-interReg text-center lg:text-start md:text-[20px] xl:text-[30px] mt-[25px] lg:mt-[50px]">
        Бесплатный чертеж планировки-Ваш надежный фундамент для идеального ремонта. Оставьте заявку для использования
        специального предожения
      </p>
      <nuxt-link to="#"></nuxt-link>
      <BtnSecondary
        :isCheckSecondaryOffer="checkSecondaryBtn"
        @click="toggleSecondary()"
        class="flex items-center mx-auto lg:mx-0 mt-[50px] gap-[70px] px-7 py-3"
      >
        <template v-slot:text>Смотреть все</template>
      </BtnSecondary>
    </div>
    <div class="lg:w-4/12">
      <img class="h-[400px] lg:h-auto" src="@/assets/images/img/offer/furniture.png" alt="furniture" />
    </div>
  </section>
</template>

<script setup lang="ts">
let checkSecondaryBtn = ref<boolean>(false);

function toggleSecondary() {
  checkSecondaryBtn.value = true;
  sessionStorage.setItem('checkSecondaryOffer', JSON.stringify(checkSecondaryBtn.value));
}

onMounted(() => {
  useStorageCheckContent('checkSecondaryOffer', checkSecondaryBtn);
});
</script>

<style scoped lang="scss"></style>
