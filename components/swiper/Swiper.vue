<template>
  <div class="swiperMain relative">
    <ClientOnly>
      <swiper-container
        class="h-[500px] sm:h-[600px] xl:h-[auto] sm:px-[20px] lg:px-[100px] xl:px-[0px]"
        :init="false"
        ref="swiperMainRef"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="swiperMain-slide flex justify-center py-[50px] xl:py-[100px]"
        >
          <div
            class="swiperMain__content relative h-[100%] w-[100%] sm:rounded-xl shadow-image"
          >
            <img
              class="swiperMain__img h-[100%] w-[100%] object-cover"
              :src="slide.src"
              :alt="slide.alt"
            />
            <div
              class="swiperMain__overlay absolute opacity-0 flex justify-center w-full h-[30%] bottom-0 left-0 transition-opacity ease-out duration-500"
            >
              <button
                @click="isOpen = true"
                class="swiperMain__buttom flex gap-3 self-center bg-[rgba(241,218,208,.9)] px-[30px] py-[10px] rounded-lg transition-[color,background,box-shadow,scale] hover:shadow-buttom duration-300 ease-out hover:bg-[rgba(241,218,208,1)] active:scale-[0.97]"
              >
                <p class="text-black">Подробнее</p>
                <ArrowDetailsSvg class="fill-black" />
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <!--* Modal ------------------------ -->
      <Modal customClass="modal-swiper" v-model="isOpen">
        <template #content>
          <SwiperDeeper />
        </template>
      </Modal>
    </ClientOnly>
    <button class="swiperMain-button-prev">
      <ArrowLeftSvg class="w-full" />
    </button>
    <button class="swiperMain-button-next">
      <ArrowRightSvg class="w-full" />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowDetailsSvg from '~/assets/images/svg/arrow/arrowDetailsSvg.svg'
import ArrowRightSvg from '~/assets/images/svg/arrow/right-swiper.svg'
import ArrowLeftSvg from '~/assets/images/svg/arrow/left-swiper.svg'
import { images } from './type'
const isOpen = ref(false) // изначально false
const slides = ref(images)
const swiperMainRef = ref(null)

const swiperMain = useSwiper(swiperMainRef, {
  effect: 'slide',
  loop: true,
  spaceBetween: 70,
  slidesPerView: 1,
  grabCursor: true,
  speed: 600,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiperMain-button-next',
    prevEl: '.swiperMain-button-prev',
  },
  autoplay: {
    disableOnInteraction: true,
    delay: 5000000,
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
})

onMounted(() => {
  setTimeout(() => {
    console.log(swiperMain.instance)
  }, 0)
})

const emit = defineEmits(['updateValue'])
function projectDeeper(index: number) {
  emit('updateValue', index)
}
</script>

<style lang="scss">
.modal-swiper {
  .modal-content {
    padding: 20px;
    margin: 100px;
  }
}

.swiperMain__content:hover {
  .swiperMain__overlay {
    opacity: 1;
  }
}

.swiperMain-button-next,
.swiperMain-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  max-width: 50px;
  height: 100px;
  background-color: rgb(207, 181, 134);
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.swiperMain-button-next {
  right: 10px;
}

.swiperMain-button-prev {
  left: 10px;
}

@media screen and (min-width: 1280px) {
  .swiperMain {
    .swiperMain-slide {
      height: 700px;
      transition: transform 0.8s ease, opacity 0.8s ease;
      transform: scale(0.8);
      opacity: 0.6;
    }

    .swiper-slide-active {
      transform: scale(1.2);
      opacity: 1;
      z-index: 10;
    }

    .swiper-slide-prev,
    .swiper-slide-next {
      transform: scale(0.9);
      opacity: 0.8;
    }
  }
}
</style>
