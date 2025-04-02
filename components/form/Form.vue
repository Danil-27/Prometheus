<template>
  <form action="" method="" class="flex flex-col gap-[20px]">
    <label for="connections">*Способ связи</label>
    <input
      id="connections"
      v-model="email"
      class="rounded-xs pl-[26px] pr-[66px] py-[18px] text-[18px] lg:text-[21px] xxl:text-[24px] mail-svg"
      type="email"
      placeholder="Email"
      required
    />

    <label for="name">*Имя</label>
    <input
      id="name"
      v-model="name"
      class="rounded-xs pl-[26px] pr-[66px] py-[18px] text-[18px] lg:text-[21px] xxl:text-[24px] mail-svg"
      type="text"
      placeholder="Имя"
      required
    />

    <p class="select-none mt-[22px] pl-[30px] xs:pl-[52px] max-lg:mx-auto lg:max-w-[370px] text-[18px]">
      <label class="relative" for="agree">
        <input
          id="agree"
          class="absolute text-[black] left-[-30px] w-[20px] h-[20px] xs:left-[-44px] top-[50%] translate-y-[-50%] xs:w-[26px] xs:h-[26px]"
          type="checkbox"
          name="agree"
          checked
        />
        <span class="text-[dimGray]">Соглашаюсь с</span>
        <span class="border-b-[1px]">правилами обработки персональных данных</span>
      </label>
    </p>
    <BtnInput
      class="flex justify-between items-center md:gap-[70px] px-7 py-3 md:w-[400px] md:mx-auto lg:w-[auto] lg:mx-[0] max-lg:mt-[18px]"
      type="submit"
    >
      <template #text>Отправить заявку</template>
      <template #icon><IconBtn /></template>
    </BtnInput>
  </form>
</template>
<script setup>
  import IconBtn from '@/assets/svg/arrow/arrow-right-btn.svg';
  import { ref } from 'vue';

  const name = ref('');
  console.log(name);
  const email = ref('');
  // https://www.youtube.com/watch?v=rQ8eoNahWV4
  // const message = ref('');
  // @submit.prevent="submitForm"
  //   const submitForm = () => {
  //     console.log('Имя:', name.value);
  //     console.log('Email:', email.value);
  //     console.log('Сообщение:', message.value);
  //   };
</script>
