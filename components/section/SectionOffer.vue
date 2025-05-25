<template>
  <section class="bg-circle-3 section-padding-y custom-container flex flex-col lg:flex-row justify-between items-center gap-5">
    <div class="lg:w-8/12">
      <h4 class="font-interReg text-primary">Специальное предложение</h4>
      <div class="w-6/12 h-[3px] mt-[10px] bg-gradient-to-r from-black to-transparent"></div>
      <h2 class="font-jetReg text-center lg:text-start text-[25px] md:text-[40px] lg:text-[45px] xxl:text-[60px] mt-[30px] sm:mt-[60px] leading-[150%]">
        <span class="inline-block relative top-[-5px] left-2 md:top-[-4px] md:left-3 xl:top-[-2px] xl:left-3 w-[10px] h-[10px] md:w-[20px] md:h-[20px] xxl:w-[32px] xxl:h-[32px] bg-black rounded-[50%]"></span>
        Закажите 3D-визуализацию интерьера и получите чертеж планировки
        <span class="border-[3px] rounded-base px-[16px] py-[2px]">бесплатно</span>
      </h2>
      <p class="font-interReg text-center leading-[130%;] mt-[35px] md:mt-[46px] md:text-[21px] lg:text-start lg:max-w-[640px] xxl:max-w-[1000px] xxl:text-[30px] xxl:mt-[50px]">
        Бесплатный чертеж планировки - Ваш надежный фундамент для идеального ремонта. Оставьте заявку и воспользуйтесь
        специальным предложением
      </p>

      <BtnSecondary onclick="location.href='#social'" :is-check-secondary-offer="checkSecondaryBtn" class="flex items-center mx-auto lg:mx-0 mt-[35px] md:mt-[46px] px-9 py-3 xxl:mt-[60px]" @click="toggleSecondary()">
        <template #text>Заказать</template>
      </BtnSecondary>
    </div>
    <div class="lg:w-4/12">
      <img class="h-[400px] lg:h-auto" src="@/assets/images/offer/furniture.png" alt="furniture" />
    </div>
  </section>
</template>

<script setup lang="ts">
const checkSecondaryBtn = ref<boolean>(false);

function toggleSecondary() {
  checkSecondaryBtn.value = true;
  sessionStorage.setItem('checkSecondaryOffer', JSON.stringify(checkSecondaryBtn.value));
}

onMounted(() => {
  useStorageCheckContent('checkSecondaryOffer', checkSecondaryBtn);
});
</script>

<style scoped lang="scss"></style>
