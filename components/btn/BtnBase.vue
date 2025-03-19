<template>
  <button
    :class="[
      { 'bg-white-80': isCheckBaseProject || isCheckBasePrice },
      ' bg-white w-full flex items-center justify-between font-jetReg text-primary py-[15px] px-[20px] text-black  rounded-base mt-[30px] transition-[box-shadow,transform] duration-[600ms,100ms] active:scale-95  hover:shadow-custom-white-btn',
    ]"
  >
    <span class="text-primary"><slot name="text"></slot></span>
    <slot name="icon">isCheck</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isCheckBaseProject?: boolean;
  isCheckBasePrice?: boolean;
}>();
</script>
