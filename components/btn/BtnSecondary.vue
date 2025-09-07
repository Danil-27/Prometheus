<template>
  <button class="bg-carbonic text-white transition-[box-shadow,transform] duration-[600ms,100ms] active:scale-95 hover:shadow-custom-black-btn"
    :class="{ 'bg-Onyx': isCheckSecondaryProject || isCheckSecondaryOffer }">
    <p class="text-[18px] md:text-[21px] xxl:text-[24px]">
      <slot name="text">text</slot>
    </p>
    <slot name="icon"></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isCheckSecondaryProject?: boolean;
  isCheckSecondaryOffer?: boolean;
}>();
</script>

<style scoped lang="scss"></style>
