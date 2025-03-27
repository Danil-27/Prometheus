<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        :class="['modal-overlay', customClass]"
        class="fixed top-0 left-0 w-[100vw] h-[100vh] z-10 bg-fill flex justify-center items-center"
        @click="close"
      >
        <div class="modal-content overflow-y-auto bg-white p-[20px] rounded-[8px] relative min-w-[300px]" @click.stop>
          <button
            class="modal-close absolute top-[10px] right-[10px] border-none text-[100px] bg-main cursor-pointer z-20"
            @click="close"
          >
            X
          </button>

          <slot name="content">content</slot>

          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  const props = defineProps<{ modelValue: boolean; customClass: string }>();
  const emit = defineEmits(['update:modelValue']);

  const close = () => {
    emit('update:modelValue', false);
  };

  watch(
    () => props.modelValue,
    (newValue) => {
      const element = document.querySelector('html');
      if (newValue) {
        element?.classList.add('no-scroll');
      } else {
        element?.classList.remove('no-scroll');
      }
      console.log('Статус модалки:', newValue);
    }
  );
</script>

<style scoped></style>
