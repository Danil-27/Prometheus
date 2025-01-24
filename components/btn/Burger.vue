<template>
  <div
    :class="{ openMenu: props.isMenu }"
    class="burger flex decoration flex-col gap-1"
  >
    <div class="burger__lineTop flex">
      <div class="burger__lineTop_left h-0.5 w-3 bg-black rounded-l-lg"></div>
      <div class="burger__lineTop_right h-0.5 w-3 bg-black rounded-r-lg"></div>
    </div>
    <div class="burger__lineMedium flex">
      <div
        class="burger__lineMedium_left h-0.5 w-3 bg-black rounded-l-lg"
      ></div>
      <div
        class="burger__lineMedium_right h-0.5 w-3 bg-black rounded-r-lg"
      ></div>
    </div>
    <div class="burger__lineBottom flex">
      <div
        class="burger__lineBottom_left h-0.5 w-3 bg-black rounded-l-lg"
      ></div>
      <div
        class="burger__lineBottom_right h-0.5 w-3 bg-black rounded-r-lg"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isMenu: boolean
}>()
</script>

<style scoped lang="scss">
.burger {
  .burger__lineTop_left,
  .burger__lineTop_right,
  .burger__lineMedium_left,
  .burger__lineMedium_right,
  .burger__lineBottom_left,
  .burger__lineBottom_right {
    position: relative;
    transition: transform 0.5s ease, right 0.8s ease-in, left 0.8s ease-in,
      opacity 1s ease;
  }

  .burger__lineMedium {
    opacity: 1;
    transition: right 0.8s ease, left 0.8s ease, opacity 1s ease;
    &_left {
      right: 0;
    }
    &_right {
      left: 0;
    }
  }
}

.openMenu {
  gap: 0.125rem;
  .burger__lineTop_left,
  .burger__lineTop_right,
  .burger__lineBottom_left,
  .burger__lineBottom_right {
    border-radius: 1rem;
  }
  .burger__lineBottom_left,
  .burger__lineTop_left {
    left: 0.125rem;
  }
  .burger__lineBottom_right,
  .burger__lineTop_right {
    right: 0.125rem;
  }

  .burger__lineTop {
    &_left {
      transform: rotate(45deg);
    }
    &_right {
      transform: rotate(-45deg);
    }
  }

  .burger__lineMedium {
    opacity: 0;
    &_left {
      right: 0.4375rem;
    }
    &_right {
      left: 0.4375rem;
    }
  }

  .burger__lineBottom {
    &_left {
      transform: rotate(-45deg);
    }
    &_right {
      transform: rotate(45deg);
    }
  }
}
</style>
