<template>
  <div
    class="container content relative flex justify-around items-center"
    :class="index % 2 === 0 ? 'fade-in-img-even' : 'fade-in-img-odd'"
    v-for="(img, index) in images"
    :key="img.id"
    ref="animateBlocks"
  >
    <ImageAnimationDrawing
      class="content__img animate-img"
      :img-svg="img.src"
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
          img.classList.add('fade-in-img')
        }
        if (quote) {
          quote.classList.add('fade-in-quote')
        }
      }
      //  else {
      //   const img = entry.target.querySelector('.animate-img')
      //   const quote = entry.target.querySelector('.animate-quote')

      //   if (img) {
      //     img.classList.remove('fade-in-img')
      //   }
      //   if (quote) {
      //     quote.classList.remove('fade-in-quote')
      //   }
      // }
    })
  })

  animateBlocks.value.forEach((block) => {
    if (block) {
      observer.observe(block)
    }
  })
})
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
  position: absolute;
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
