<template>
  <div
    :class="{ header: IsHidenHeader }"
    class="fixed top-[-14rem] flex items-center w-full h-14 lg:h-20 z-10 transition-[top] delay-[700ms] ease-linear backdrop-blur-md bg-[rgba(255,255,255,0.5)] rounded-b-lg"
  >
    <div class="container mx-auto flex justify-between items-center">
      <Logo class="logo" />
      <div class="flex">
        <Nav :links="links" class="header-nav hidden lg:block" />
      </div>
    </div>
    <BtnBurger
      @click="toggleBurger"
      :isMenu="isMenu"
      class="absolute right-0 mr-4 z-50 lg:hidden p-1"
    />
    <Menu @nav-click="toggleLink" :isMenu="isMenu" />
  </div>
</template>

<script setup lang="ts">
import { links } from './type'

let isMenu = ref<boolean>(false)

function toggleBurger(event: MouseEvent) {
  isMenu.value = !isMenu.value
  toggleClassNoScrooll()
}

function toggleLink(event: MouseEvent) {
  isMenu.value = !isMenu.value
  toggleClassNoScrooll()
}

function toggleClassNoScrooll() {
  const element = document.querySelector('html')
  isMenu.value
  if (isMenu.value) {
    element?.classList.add('no-scroll')
  } else {
    element?.classList.remove('no-scroll')
  }
}

//

const IsHidenHeader = ref<boolean>(true)

function debounce<T extends (...args: any[]) => any>(
  callee: T,
  timeout: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timer: NodeJS.Timeout | null = null // Для Node.js
  // let timer: number | null = null; // Для браузера

  return function perform(...args: Parameters<T>): Promise<ReturnType<T>> {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer as NodeJS.Timeout) // Для Node.js
      // if (timer) clearTimeout(timer as number); // Для браузера

      timer = setTimeout(async () => {
        try {
          const result = await callee(...args)
          resolve(result)
        } catch (err) {
          reject(err)
        }
        clearTimeout(timer as NodeJS.Timeout) // Для Node.js
        // clearTimeout(timer as number); // Для браузера
        timer = null
      }, timeout)
    })
  }
}

const scrollPosition = ref<number>(0)
let previousScrollPosition = 0

watch(scrollPosition, (newPosition, oldPosition) => {
  previousScrollPosition = oldPosition
  console.log('Предыдущее значение:', previousScrollPosition)
  console.log('Новое значение:', newPosition)
  if (320 < newPosition) {
    if (newPosition > previousScrollPosition) {
      IsHidenHeader.value = false
    } else {
      IsHidenHeader.value = true
    }
  } else {
    IsHidenHeader.value = true
  }
})

const handleScrollDebounced = debounce(() => {
  scrollPosition.value = window.scrollY
  // Действия при прокрутке страницы
  console.log('Текущее значение:', scrollPosition.value)
}, 100) // Задержка в 0.2 секунды

onMounted(() => {
  window.addEventListener('scroll', handleScrollDebounced as EventListener)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollDebounced as EventListener)
})
</script>

<style scoped lang="scss">
.header {
  top: 0;
  left: 0;
  z-index: 10;
  transition: top 0.65s linear;
}

.header-nav :deep(.nav__block) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.header-nav :deep(.nav__link) {
  color: black;
}
</style>
