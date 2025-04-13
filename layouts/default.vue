<template>
  <div class="flex flex-col min-h-[100vh]">
    <Header />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>
