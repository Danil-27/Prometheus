<template>
  <div
    class="container content flex justify-around items-center"
    :class="index % 2 === 0 ? 'fade-in-img-even' : 'fade-in-img-odd'"
    v-for="(img, index) in images"
    :key="img.id"
    ref="animateBlocks"
  >
    <ImageAnimationDrawing
      class="content__img animate-img"
      :img-src="img.src"
      :img-alt="img.alt"
    />
    <p class="content__quote animate-quote">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, minima!
    </p>
  </div>
</template>

<script setup lang="ts">
import { images } from './type'
const animateBlocks = ref([])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector('.animate-img')
        const quote = entry.target.querySelector('.animate-quote')

        if (img) {
          img.classList.add('fade-in-img') // Анимация для изображения
        }
        if (quote) {
          quote.classList.add('fade-in-quote') // Анимация для текста
        }
      } else {
        const img = entry.target.querySelector('.animate-img')
        const quote = entry.target.querySelector('.animate-quote')

        if (img) {
          img.classList.remove('fade-in-img') // Убираем анимацию для изображения
        }
        if (quote) {
          quote.classList.remove('fade-in-quote') // Убираем анимацию для текста
        }
      }
    })
  })

  animateBlocks.value.forEach((block) => {
    if (block) {
      observer.observe(block)
    }
  })
})
// const animateBlocks = ref<HTMLElement[]>([]) // Указываем тип для animateBlocks

// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const index = Array.from(animateBlocks.value).indexOf(
//         entry.target as HTMLElement,
//       ) // Явно указываем тип

//       if (entry.isIntersecting) {
//         const img = entry.target.querySelector('.animate-img') as HTMLElement // Указываем тип
//         const quote = entry.target.querySelector(
//           '.animate-quote',
//         ) as HTMLElement // Указываем тип

//         if (img) {
//           // Добавляем разные классы в зависимости от четности индекса
//           if (index % 2 === 0) {
//             img.classList.add('fade-in-img-even') // Четный
//           } else {
//             img.classList.add('fade-in-img-odd') // Нечетный
//           }
//         }
//         if (quote) {
//           quote.classList.add('fade-in-quote') // Анимация для текста
//         }
//       } else {
//         const img = entry.target.querySelector('.animate-img') as HTMLElement // Указываем тип
//         const quote = entry.target.querySelector(
//           '.animate-quote',
//         ) as HTMLElement // Указываем тип

//         if (img) {
//           img.classList.remove('fade-in-img-even') // Убираем анимацию для четного изображения
//           img.classList.remove('fade-in-img-odd') // Убираем анимацию для нечетного изображения
//         }
//         if (quote) {
//           quote.classList.remove('fade-in-quote') // Убираем анимацию для текста
//         }
//       }
//     })
//   })

//   animateBlocks.value.forEach((block) => {
//     if (block) observer.observe(block)
//   })
// })
</script>

<style scoped lang="scss">
.content {
  display: flex;
  height: 350px;
  &:nth-child(even) {
    .animate-quote {
      order: 1;
    }
    .animate-img {
      order: 2;
    }
  }
}

.fade-in-img-even {
  .animate-img {
    right: 50px;
  }
}
.fade-in-img-odd {
  .animate-img {
    left: 50px;
  }
}

.animate-quote,
.animate-img {
  position: relative;
  opacity: 0;
  transition: opacity 2s linear, right 2s linear, left 2s linear;
}

.fade-in-quote,
.fade-in-img {
  opacity: 1;
}

.fade-in-img-even {
  .fade-in-img {
    right: 0;
  }
}

.fade-in-img-odd {
  .fade-in-img {
    left: 0;
  }
}
</style>
