<template>
  <button
    class="text-white transition-[box-shadow,transform] duration-[600ms,100ms] max-lg:shadow-custom-black-btn"
    :class="{
      'bg-anthracite ': !isCheckConsent,
      'bg-Carbonic lg:hover:shadow-custom-black-btn active:scale-95 ': isCheckConsent
    }"
  >
    <p class="text-[16px] xs:text-[18px] md:text-[21px] xxl:text-[24px]">
      <slot name="text">text</slot>
    </p>
    <slot name="icon"></slot>
  </button>
</template>
<script setup lang="ts">
  defineProps<{
    isCheckConsent: boolean;
  }>();
</script>
