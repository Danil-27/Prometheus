<template>
  <div
    class="accordion container flex justify-center flex-col gap-[20px] mt-10"
  >
    <Question
      class="border-2 border-indigo-600 p-[8px]"
      v-for="(question, index) in questions"
      :key="question.id"
    >
      <template v-slot:question>
        <h3 class="text-[20px] mb-4" @click="toggleAnswer(index)">
          {{ question.question }}
        </h3>
      </template>
      <template v-slot:answer>
        <div
          class="accordion__content transition-max-height duration-700 ease-in-out"
          :class="{
            'max-h-0': !isAnswer[index],
            'max-h-[1000px]': isAnswer[index],
          }"
          style="overflow: hidden"
        >
          <p
            class="transition ease-linear duration-600"
            :class="{ activeAnswer: isAnswer[index] }"
          >
            {{ question.answer }}
          </p>
        </div>
      </template>
    </Question>
  </div>
</template>

<script setup lang="ts">
import { questions } from './type'

let isAnswer = ref<boolean[]>(Array(questions.length).fill(false))

function toggleAnswer(index: number) {
  isAnswer.value[index] = !isAnswer.value[index]
}
</script>

<style scoped lang="scss">
.activeAnswer {
  background-color: blanchedalmond;
  color: rgb(59, 46, 156);
}
</style>
