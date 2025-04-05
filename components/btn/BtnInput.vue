<template>
  <button
    class="text-white transition-[box-shadow,transform] duration-[600ms,100ms] active:scale-95 max-lg:shadow-custom-black-btn"
    :class="{
      'bg-anthracite ': !isCheckConsent,
      'bg-Carbonic lg:hover:shadow-custom-black-btn': isCheckConsent
    }"
  >
    <p class="text-[18px] md:text-[21px] xxl:text-[24px]">
      <slot name="text">text</slot>
    </p>
    <slot name="icon"></slot>
    {{ isCheckConsent }}
  </button>
</template>
<script setup lang="ts">
  defineProps<{
    isCheckConsent: boolean;
  }>();
</script>
