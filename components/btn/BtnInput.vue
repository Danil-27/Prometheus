<template>
  <button
    class="bg-Carbonic text-white transition-[box-shadow,transform] duration-[600ms,100ms] active:scale-95 hover:shadow-custom-black-btn"
  >
    <p class="text-[18px] md:text-[21px] xxl:text-[24px]">
      <slot name="text">text</slot>
    </p>
    <slot name="icon"></slot>
  </button>
</template>
