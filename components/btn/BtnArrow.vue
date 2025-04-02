<template>
  <button
    :class="{
      'bg-[var(--yellow)]': isHover,
      'bg-[var(--white)]': !isHover
    }"
    class="absolute right-0 w-[70px] h-[70px] xxl:w-[80px] xxl:h-[80px] ml-auto rounded-full transition-transform duration-150 ease-out active:scale-95 active:transition-transform"
  >
    <IconCard class="transition-all duration-300 ease-out" />
  </button>
</template>

<script setup lang="ts">
  import IconCard from '@/assets/svg/arrow/arrow-card.svg';

  defineProps<{
    isHover: boolean;
    index: number;
  }>();
</script>

<style></style>
