import { defineNuxtPlugin } from '#app';
import VueTheMask from 'vue-the-mask';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.vueApp.use(VueTheMask);
  }
});
