<template>
  <Swiper @update-value="handleUpdate"></Swiper>
  <!-- <SwiperDeeper /> -->
</template>

<script setup lang="ts">
// import ClouseSvg from '~/assets/images/svg/x/cross.svg'
let indexSlide = ref<number | null>()

function handleUpdate(index: number) {
  indexSlide.value = 1 + index
  console.log('Slider updated to index:', indexSlide.value)
  toggleClassNoScrooll()
}

function toggleClassNoScrooll() {
  const element = document.querySelector('html')
  if (indexSlide.value) {
    element?.classList.add('no-scroll')
  } else {
    element?.classList.remove('no-scroll')
  }
}

function clouseSliderDeeper() {
  indexSlide.value = null
  toggleClassNoScrooll()
}
</script>

<style scoped lang="scss"></style>
