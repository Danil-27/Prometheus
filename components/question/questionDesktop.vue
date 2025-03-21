<template>
  <section class="container section-margin-top">
    <h1 class="font-jetBold text-[40px] md:text-[60px] xl:text-[100px] leading-[100%]">Популярные вопросы</h1>
    <div class="relative flex max-lg:justify-center gap-[20px] mt-[90px]">
      <div class="flex flex-col w-full gap-[20px]">
        <div class="relative question" ref="questionsElement" v-for="(question, index) in questions" :key="question.id">
          <div
            :class="{
              'bg-white': !isCheck[index],
              'bg-grayLight': isCheck[index],
              '!bg-green': index == itemQuestion,
            }"
            @click="numElement(index)"
            class="lg:w-4/12 rounded-3xl py-[25px] px-[35px]"
          >
            <h3 class="font-jetReg text-primary">{{ question.question }}</h3>
          </div>

          <TransitionGroup name="fade">
            <div
              :key="question.id"
              v-show="index === itemQuestion"
              :class="{
                'top-[100%] translate-y-[-100%]': index >= 3,
              }"
              class="absolute lg:w-[calc(66.666667%-20px)] right-[0] top-0 rounded-3xl bg-white py-[25px] px-[35px]"
            >
              <h3 class="font-jetBold text-[30px]">{{ question.question }}</h3>
              <p class="font-jetReg text-primary mt-[40px]">{{ question.answer }}</p>
            </div>
          </TransitionGroup>
        </div>
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

onMounted(() => {
  useStorageCheckContent('CheckQuestionDesctop', isCheck);
  numElement(0);
});

function numElement(index: number): void {
  itemQuestion.value = index;
  isCheck.value[index] = true;
  sessionStorage.setItem('CheckQuestionDesctop', JSON.stringify(isCheck.value));
}
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
