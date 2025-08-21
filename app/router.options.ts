import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) {
      // Ждём появления элемента до 1 секунды
      for (let i = 0; i < 20; i++) {
        const el = document.querySelector(to.hash) as HTMLElement;
        if (el) {
          // Определяем offset в зависимости от ширины экрана
          const offset = window.innerWidth < 992 ? 20 : 110;
          const y = el.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top: y, behavior: 'smooth' });
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }

    return { top: 0 };
  }
};
