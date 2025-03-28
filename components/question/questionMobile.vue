<template>
  <div class="flex justify-center flex-col gap-[20px]">
    <div
      v-for="(question, index) in questions"
      :key="question.id"
      class="rounded-3xl py-[10px] px-[16px]"
      :class="{
        'bg-white': !isCheck[index],
        'bg-grayLight': isCheck[index],
        '!bg-green': isAnswer[index]
      }"
      @click="toggleAnswer(index)"
    >
      <h3 class="relative font-jetBold text-[18px] xs:text-[22px] mr-[45px] max-[370px]:mr-[25px]">
        {{ question.question }}
        <IconCross
          class="absolute top-[50%] translate-y-[-50%] right-[-45px] transition-all ease-linear w-[30px] h-[30px] max-[370px]:right-[-30px] max-[370px]:h-[20px] max-[370px]:w-[20px]"
          :class="{ 'rotate-45': !isAnswer[index] }"
        />
      </h3>

      <div
        class="accordion-content min-h-0 overflow-hidden transition-max-height duration-700 ease-in-out"
        :style="{ maxHeight: isAnswer[index] ? `${contentHeight[index]}px` : '0' }"
        style="overflow: hidden"
      >
        <p class="text-[18px] transition ease-linear duration-600 p-[5px]" :class="{ activeAnswer: isAnswer[index] }">
          {{ question.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import IconCross from '~/assets/svg/cross/cross.svg';

  const props = defineProps<{
    questions: { id: number; question: string; answer: string }[];
  }>();

  const isAnswer = ref<boolean[]>(Array(props.questions.length).fill(false));
  const contentHeight = ref<number[]>(Array(props.questions.length).fill(0));
  const itemQuestion = ref<number | null>(null);
  const isCheck = ref<boolean[]>(new Array(props.questions.length).fill(false));

  function toggleAnswer(index: number) {
    isAnswer.value.fill(false);
    isAnswer.value[index] = !isAnswer.value[index];
    isCheck.value[index] = true;
    itemQuestion.value = index;
    sessionStorage.setItem('CheckQuestionMobile', JSON.stringify(isCheck.value));
  }

  onMounted(() => {
    useStorageCheckContent('CheckQuestionMobile', isCheck);
    props.questions.forEach((el, index) => {
      const contentElement = document.querySelectorAll('.accordion-content')[index];
      contentHeight.value[index] = contentElement ? contentElement.scrollHeight : 0;
    });
  });
</script>

<style scoped lang="scss"></style>
