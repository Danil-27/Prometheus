<template>
  <div class="flex px-[1.875rem] rounded-base bg-yellow">
    <p class="font-jetBold">
      <slot name="text">text</slot>
    </p>
    <p class="font-jetExtraB text-lg">
      <slot name="number">number</slot>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
