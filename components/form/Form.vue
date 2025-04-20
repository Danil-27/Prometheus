<template>
  <form novalidate method="post" class="flex flex-col gap-[20px]" @submit.prevent="sendData">
    <div class="sm:mx-auto sm:w-[86%] md:w-[76%] lg:w-full">
      <label for="name" class="mx-auto"></label>
      <div class="relative">
        <span
          :class="{
            'text-springGreen': nameError === 'Успешно',
            'text-crimson': nameError !== 'Успешно'
          }"
          class="text-[12px] absolute top-0"
        >
          *
        </span>
        <span class="pl-[10px] text-dimGray">Имя</span>
      </div>
      <div class="relative">
        <input
          id="name"
          v-model="name"
          :class="{
            'bg-mistyrose': nameError !== 'Успешно' && nameError !== ''
          }"
          class="w-full mt-[10px] mb-[8px] rounded-xs pl-[26px] pr-[66px] py-[18px] text-[18px] lg:text-[21px] xxl:text-[24px]"
          type="text"
          placeholder="Ваше Имя"
          required
          autocomplete="given-name"
        />
        <mail class="absolute top-[50%] -translate-y-2/4 right-[26px]" />
      </div>
      <div class="min-h-[26px]">
        <transition name="error">
          <p
            v-if="nameError"
            :class="{
              'text-springGreen': nameError === 'Успешно',
              'text-crimson': nameError !== 'Успешно'
            }"
            class="text-[16px] flex items-center gap-[6px]"
          >
            <errorOrSuccess class="w-[22px] h-[22px]" />
            {{ nameError }}
          </p>
        </transition>
      </div>
    </div>
    <ClientOnly>
      <div class="sm:mx-auto sm:w-[86%] md:w-[76%] lg:w-full">
        <label for="number"></label>
        <div class="relative">
          <span
            :class="{
              'text-springGreen': numberError === 'Успешно',
              'text-crimson': numberError !== 'Успешно'
            }"
            class="text-[12px] absolute top-0"
          >
            *
          </span>
          <span class="pl-[10px] text-dimGray">Способ связи</span>
        </div>
        <div class="relative">
          <input
            id="number"
            v-model="number"
            v-mask="'+7 (###) ### ## ##'"
            :class="{
              'bg-mistyrose border-crimson': numberError !== 'Успешно' && numberError !== ''
            }"
            class="w-full mt-[10px] mb-[8px] rounded-xs pl-[26px] pr-[66px] py-[18px] text-[18px] lg:text-[21px] xxl:text-[24px]"
            type="text"
            placeholder="+7 ( ___ ) ___ __ __"
            required
            autocomplete="given-number"
          />

          <mail class="absolute top-[50%] -translate-y-2/4 right-[26px]" />
        </div>
        <div class="max-sm:min-h-[50px] min-h-[26px]">
          <transition name="error">
            <p
              v-if="numberError"
              :class="{
                'text-springGreen': numberError === 'Успешно',
                'text-crimson': numberError !== 'Успешно'
              }"
              class="text-[16px] flex items-center gap-[6px]"
            >
              <errorOrSuccess class="w-[22px] h-[22px]" />
              {{ numberError }}
            </p>
          </transition>
        </div>
      </div>
    </ClientOnly>

    <p class="relative select-none pl-[50px] pr-[20px] max-lg:mx-auto text-[16px] xs:text-[18px]" @click="toggleCheck">
      <span
        :class="{ 'bg-black ': isCheckConsent, 'bg-[transparent]': !isCheckConsent }"
        class="flex items-center justify-center border-[2px] absolute w-[26px] h-[26px] top-[6px] xs:top-[50%] xs:-translate-y-2/4 left-[10px] rounded-[5px] transition-all duration-500 shadow-[1px_1px_3px_rgba(0,0,0,0.4)]"
      >
        <checkConsent
          :class="{
            'fill-white stroke-white text-white': isCheckConsent,
            'fill-[transparent] stroke-[transparent] text-[transparent] ': !isCheckConsent
          }"
          class="w-[16px] h-[14px] transition-all duration-500"
        />
      </span>
      <span class="text-dimGray">Соглашаюсь с&nbsp;</span>
      <span class="border-b-[1px]">правилами обработки персональных данных</span>
    </p>

    <BtnForm
      :isCheckConsent="isCheckConsent"
      class="flex gap-[10px] justify-between items-center md:gap-[70px] px-7 py-3 xs:w-[400px] xs:mx-auto lg:w-[auto] lg:mx-[0] max-lg:mt-[18px]"
      type="submit"
    >
      <template #text>
        Отправить
        <span class="max-[350px]:hidden">заявку</span>
      </template>
      <template #icon><IconBtn /></template>
    </BtnForm>
  </form>
</template>

<script setup>
  import IconBtn from '@/assets/svg/arrow/arrow-right-btn.svg';
  import checkConsent from '@/assets/svg/check/consent.svg';
  import errorOrSuccess from '@/assets/svg/check/errorOrSuccess.svg';
  import mail from '@/assets/svg/input/mail.svg';

  const name = ref('');
  const nameError = ref('');
  const numberError = ref('');
  const number = ref('+7');
  const isCheckConsent = ref(false);

  const TOKEN = '7621374442:AAHPvgtfYqcbyQcnR5ECYiw7dZIZ0lQksJ8';
  const CHAT_ID = ref('-1002683829824');
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  watch(name, (newVal) => {
    if (newVal.length > 0) {
      const onlyLetters = newVal.replace(/\d/g, '');
      name.value = onlyLetters.charAt(0).toUpperCase() + onlyLetters.slice(1);
    }
  });

  function validateName(value) {
    const regex = /^[А-Яа-яA-Za-z\s-]{2,}$/;
    return regex.test(value.trim());
  }

  function validateNumber(value) {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 11;
  }

  const sendData = async () => {
    nameError.value = '';
    numberError.value = '';

    if (!validateName(name.value)) {
      if (name.value.length == 0) {
        nameError.value = 'Поле пустое';
      } else if (name.value.length == 1) {
        nameError.value = 'Не менее двух букв';
      } else {
        nameError.value = 'Введите корректное имя';
      }
    } else {
      nameError.value = 'Успешно';
    }

    if (!validateNumber(number.value)) {
      numberError.value = 'Введите корректный номер телефона';
      return;
    } else {
      numberError.value = 'Успешно';
    }

    if (!isCheckConsent.value) {
      console.warn('Ошибка: согласие на обработку данных!');
      return;
    }

    const message = `Имя: ${name.value}\nТелефон: ${number.value.replace(/[()\s]/g, '')}`;

    if (numberError.value === 'Успешно' && nameError.value === 'Успешно' && isCheckConsent.value) {
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
    }
  };

  function toggleCheck() {
    isCheckConsent.value = !isCheckConsent.value;
  }
</script>

<style lang="scss" scoped>
  .error-enter-active,
  .error-leave-active {
    transition: all 0.6s;
  }
  .error-enter-from,
  .error-leave-to {
    opacity: 0;
  }
</style>
