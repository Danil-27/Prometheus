<template>
  <div class="relative container mt-[20px] xxl:mt-[35px]">
    <div class="relative bg-white rounded-base flex items-center h-[5rem] xxl:h-[6.25rem] z-10">
      <div class="flex justify-between items-center w-full px-[50px] xl:px-[100px]">
        <Logo class="logo" />
        <div class="flex">
          <Nav :links="links" class="header-nav hidden lg:block xxl:text-xs font-jetReg" />
        </div>
      </div>
    </div>
    <!-- <BtnBurger
      @click="toggleBurger"
      :isMenu="isMenu"
      class="absolute right-0 top-[50%] translate-y-[-50%] mr-4 z-50 lg:hidden p-1"
    /> -->
    <!-- <Menu :is-menu="isMenu" @nav-click="toggleLink" /> -->
  </div>
</template>

<script setup lang="ts">
  import { links } from './type';

  // let isMenu = ref<boolean>(false);

  // function toggleBurger() {
  //   isMenu.value = !isMenu.value;
  //   toggleClassNoScrooll();
  // }

  // function toggleLink() {
  //   isMenu.value = !isMenu.value;
  //   toggleClassNoScrooll();
  // }

  // function toggleClassNoScrooll() {
  //   const element = document.querySelector('html');
  //   isMenu.value;
  //   if (isMenu.value) {
  //     element?.classList.add('no-scroll');
  //   } else {
  //     element?.classList.remove('no-scroll');
  //   }
  // }

  // const IsHidenHeader = ref<boolean>(true)

  // function debounce<T extends (...args: any[]) => any>(
  //   callee: T,
  //   timeout: number,
  // ): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  //   let timer: NodeJS.Timeout | null = null // Для Node.js
  //   // let timer: number | null = null; // Для браузера

  //   return function perform(...args: Parameters<T>): Promise<ReturnType<T>> {
  //     return new Promise((resolve, reject) => {
  //       if (timer) clearTimeout(timer as NodeJS.Timeout) // Для Node.js
  //       // if (timer) clearTimeout(timer as number); // Для браузера

  //       timer = setTimeout(async () => {
  //         try {
  //           const result = await callee(...args)
  //           resolve(result)
  //         } catch (err) {
  //           reject(err)
  //         }
  //         clearTimeout(timer as NodeJS.Timeout)
  //         // clearTimeout(timer as number); // Для браузера
  //         timer = null
  //       }, timeout)
  //     })
  //   }
  // }

  // const scrollPosition = ref<number>(0)
  // let previousScrollPosition = 0

  // watch(scrollPosition, (newPosition, oldPosition) => {
  //   previousScrollPosition = oldPosition
  //   if (320 < newPosition) {
  //     if (newPosition > previousScrollPosition) {
  //       IsHidenHeader.value = false
  //     } else {
  //       IsHidenHeader.value = true
  //     }
  //   } else {
  //     IsHidenHeader.value = true
  //   }
  // })

  // const handleScrollDebounced = debounce(() => {
  //   scrollPosition.value = window.scrollY
  //   // console.log('Текущее значение:', scrollPosition.value)
  // }, 100)

  // onMounted(() => {
  //   window.addEventListener('scroll', handleScrollDebounced as EventListener)
  // })

  // onUnmounted(() => {
  //   window.removeEventListener('scroll', handleScrollDebounced as EventListener)
  // })
</script>

<style scoped lang="scss">
  .header-nav :deep(.nav__block) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

  .header-nav :deep(.nav__link) {
    color: var(--black);
    padding: 5px 5px;
  }

  @media screen and (min-width: 992px) {
    .header-nav :deep(.nav__block .nav__item:last-child .nav__link) {
      background-color: var(--black);
      color: var(--white);
      border-radius: 50px;
      padding: 10px 35px;
    }
  }
</style>
