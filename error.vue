<script setup lang="ts">
import type { NuxtError } from '#app'


const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <Header />

  <div class="custom-container mt-10 min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-220px)] flex flex-col justify-center items-center ">

    <div class="p-6 lg:p-12 bg-[linear-gradient(135deg,#fadda5,#ffffff)]
    flex flex-col justify-center items-center rounded-[50px] shadow-lg 
    w-[100%] min-h-[50vh]
    md:w-[80%]
    lg:w-[70%]
    ">

      <h1 class="text-red-700 text-[70px] lg:text-[100px] m-0 ">
        {{ error?.statusCode ?? 'Oops!' }}
      </h1>
      <p class=" text-center text-[16px] lg:text-[22px] break-all">
        {{ error?.message ?? 'Что-то пошло не так, но мы скоро всё починим.' }}
      </p>
      <button class="px-5 py-4 mt-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
        @click="handleError">
        Вернуться на главную
      </button>

    </div>

  </div>

  <Footer />
</template>

<style scoped></style>
