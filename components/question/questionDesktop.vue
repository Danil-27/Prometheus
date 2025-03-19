<template>
  <section class="container section-margin-top">
    <h1 class="font-jetBold text-[40px] md:text-[60px] xl:text-[100px] leading-[100%]">Популярные вопросы</h1>
    <div class="relative flex max-lg:justify-center gap-[20px] mt-[90px]">
      <div class="lg:w-4/12 flex flex-col gap-[20px]">
        <div
          class="rounded-3xl py-[25px] px-[35px]"
          :class="{
            'bg-white': !isCheck[index],
            'bg-grayLight': isCheck[index],
            '!bg-green': index == itemQuestion,
          }"
          v-for="(question, index) in questions"
          :key="question.id"
          @click="numElement(index)"
        >
          <h3 class="font-jetReg text-primary">{{ question.question }}</h3>
        </div>
      </div>
      <div class="max-lg:hidden lg:w-8/12">
        <TransitionGroup name="fade">
          <div
            v-for="(question, idx) in questions"
            :key="question.id"
            v-show="idx === itemQuestion"
            class="absolute rounded-3xl bg-white py-[25px] px-[35px]"
          >
            <h3 class="font-jetBold text-[30px]">{{ question.question }}</h3>
            <p class="font-jetReg text-primary mt-[40px]">{{ question.answer }}</p>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  questions: { id: number; question: string; answer: string }[];
}>();

let itemQuestion = ref<number>(0);
let isCheck = ref<boolean[]>(new Array(props.questions.length).fill(false));

function numElement(index: number): void {
  itemQuestion.value = index;
  isCheck.value[index] = true;
}

onMounted(() => {
  numElement(0);
});
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: opacity 0.8s ease-out;
}

.fade-leave-active {
  transition: opacity 0s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
