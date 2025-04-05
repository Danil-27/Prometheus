<template>
  <div v-for="topic in topics" :key="topic.index">
    <ol class="border-b-2 border-black pb-[2px] xxl:pb-[16px]">
      <li class="sm:flex sm:items-center text-[20px]">
        <div class="sm:flex items-center gap-[20px] lg:gap-[50px] xl:gap-[100px]">
          <div class="font-jetReg text-[40px] lg:text-[55px]">{{ topic.index }}</div>
          <div class="sm:w-[230px] font-jetBold text-[26px] xl:text-[30px] whitespace-pre-line leading-[100%]">
            {{ topic.title }}
          </div>
        </div>
        <div class="mt-[20px] sm:mt-[0px] sm:ml-[auto] sm:w-[540px] font-jetReg text-[1.125rem] xl:text-[21px]">
          {{ topic.content }}
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    topics: { index: number; title: string; content: string }[];
  }>();
</script>

<style scoped lang="scss"></style>
