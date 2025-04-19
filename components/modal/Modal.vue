<template>
  <Teleport to="body">
    <Transition :name="transitionValue">
      <div
        v-if="modelValue"
        class="fixed top-0 left-0 flex justify-center items-center w-full h-full z-[100] bg-[rgba(0,0,0,0.4)] backdrop-blur-lg"
        @click="close"
      >
        <div
          :class="[customClassWrapp]"
          class="relative max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] xl:max-w-[40vw] max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <slot name="content">Default content</slot>
          <div :class="[customClassClose]" class="cursor-pointer z-20" @click="close">
            <slot name="close">X</slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: boolean;
    customClassWrapp: string;
    customClassClose: string;
    transitionValue: string;
  }>();

  const emit = defineEmits(['update:modelValue']);

  const close = () => {
    emit('update:modelValue', false);
  };

  watch(
    () => props.modelValue,
    (newValue) => {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      const scrollWidth = `${window.innerWidth - document.documentElement.clientWidth}px`;
      if (newValue) {
        bodyElement.style.marginRight = scrollWidth;
        htmlElement.style.overflow = 'hidden';
      } else {
        setTimeout(() => {
          htmlElement.style.overflow = '';
          bodyElement.style.marginRight = '';
        }, 300);
      }
    }
  );
</script>

<style scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.4s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
</style>
