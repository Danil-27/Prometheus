<template>
  <button
    :class="[
      { 'bg-white-80': checkProject || checkPrice },
      ' bg-white w-full flex items-center justify-between font-jetReg text-primary py-[15px] px-[20px] text-black  rounded-base mt-[30px] transition-[box-shadow,transform] duration-[600ms,100ms] active:scale-95  hover:shadow-[0_4px_4px_rgba(0,0,0,0.25),_inset_0_4px_4px_rgba(0,0,0,0.25)]',
    ]"
  >
    <span class="text-primary"><slot name="text"></slot></span>
    <slot name="icon">isCheck</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  checkProject?: boolean;
  checkPrice?: boolean;
}>();
</script>
