<template>
  <form method="post" class="flex flex-col gap-[20px]" @submit.prevent="sendData">
    <label for="name">*Имя</label>
    <input
      id="name"
      v-model="name"
      class="rounded-xs pl-[26px] pr-[66px] py-[18px] text-[18px] lg:text-[21px] xxl:text-[24px] mail-svg"
      type="text"
      placeholder="Имя"
      required
      autocomplete="given-name"
    />
    <label for="connections">*Способ связи</label>
    <input
      id="connections"
      v-model="number"
      class="rounded-xs pl-[26px] pr-[66px] py-[18px] text-[18px] lg:text-[21px] xxl:text-[24px] mail-svg"
      type="text"
      placeholder="Телефон"
      required
      autocomplete="given-number"
    />

    <p
      class="relative select-none mt-[22px] pl-[30px] xs:pl-[52px] max-lg:mx-auto lg:max-w-[370px] text-[18px]"
      @click="toggleCheck"
    >
      <span
        :class="{ 'bg-black': isCheckConsent, 'bg-white': !isCheckConsent }"
        class="absolute w-[26px] h-[26px] top-0 translate-y-2/4 left-[10px] rounded-[5px] bg-[url(~/assets/svg/arrow/consent.svg)] bg-no-repeat bg-[center] transition-all duration-500"
      ></span>
      <span class="text-[dimGray]">Соглашаюсь с&nbsp;</span>
      <span class="border-b-[1px]">правилами обработки персональных данных</span>
    </p>

    <BtnInput
      :isCheckConsent="isCheckConsent"
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

  const name = ref('');
  const number = ref('+7');
  const isCheckConsent = ref(false);

  const TOKEN = '7621374442:AAHPvgtfYqcbyQcnR5ECYiw7dZIZ0lQksJ8';
  const CHAT_ID = ref('-1002683829824');
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const sendData = async () => {
    const message = `Имя: ${name.value}\nТелефон: ${number.value}`;

    if (!name.value || !number.value) {
      console.error('Ошибка: имя и Телефон не могут быть пустыми!');
      return;
    }
    if (!isCheckConsent.value) {
      console.error('Ошибка: согласие на оброботку данных!');
      return;
    }

    try {
      const response = await $fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID.value,
          text: message
        })
      });

      console.log('Успешно отправлено:', response);

      name.value = '';
      number.value = '';
    } catch (error) {
      console.error('Ошибка при отправке:', error);
    }
  };

  function toggleCheck() {
    isCheckConsent.value = !isCheckConsent.value;
    console.log(isCheckConsent.value);
  }
</script>
