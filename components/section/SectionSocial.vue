<template>
  <section id="social" class="custom-container section-margin-top section-scroll-mt">
    <h2 class="font-jetBold text-heading mb-[60px]">«Свяжитесь с нами»</h2>
    <div class="flex flex-col lg:flex-row xxl:max-w-[1400px] mt-[240px] xs:mt-[270px] min-[580px]:mt-[320px] lg:mt-[100px] xxl:mx-auto bg-[url('@/assets/svg/social/bg-social-block.svg')] bg-[position:right,center]  bg-no-repeat bg-white lg:pr-[50px] p-[20px] xs:p-[30px] lg:py-[45px] rounded-base">
      <div class="lg:w-6/12 relative">
        <div @click="toggleNum(1)" :class="[
          'absolute w-[170px] xs:w-[200px] min-[580px]:w-[250px] lg:w-[300px] min-[1100px]:w-[350px] xl:w-[410px] top-[-200px] xs:top-[-230px] min-[580px]:top-[-286px] lg:top-[26%] lg:-translate-y-1/2 left-[30%] min-[700px]:left-[36%]  lg:left-[30%] translate-x-[-50%] aspect-[1] rotate-[-5deg] transition-all duration-500 ease-in-out cursor-pointer',
          toggleLink === 1 ? 'z-[20] scale-[1.05]' : 'z-[10] scale-[0.95] opacity-70'
        ]" class="absolute w-[150px] top-[-170px] left-[30%] translate-x-[-50%] aspect-[1] rotate-[-5deg]">
          <img :src="Julia" alt="Julia" class="relative z-[1] rounded-[35px]" />
          <p class="absolute bottom-[10px] px-[20px] z-10 text-white font-interReg">
            <span class="block font-InterBold md:text-[20px] xl:text-[34px] tracking-[2px]">Юлия</span>
            <span class="block text-[10px] font-InterBold md:text-[14px] xl:text-[20px]">Генеральный дизайнер</span>
            <span class="hidden min-[580px]:block mt-[4px] text-[12px] xl:text-[18px] font-interReg">План превращаю в ощущение жизни, уюта и смысла.</span>
          </p>
        </div>
        <div @click="toggleNum(0)" :class="[
          'absolute w-[170px] xs:w-[200px] min-[580px]:w-[250px] lg:w-[300px] min-[1100px]:w-[350px] xl:w-[410px] top-[-200px] xs:top-[-230px] min-[580px]:top-[-286px] lg:top-[70%] lg:-translate-y-1/2 left-[70%] min-[700px]:left-[64%] lg:left-[58%] translate-x-[-50%] aspect-[1] rotate-[4deg] transition-all duration-500 ease-in-out cursor-pointer',
          toggleLink === 0 ? 'z-[20] scale-[1.05]' : 'z-[10] scale-[0.95] opacity-70'
        ]" class="absolute w-[150px] top-[-170px] left-[70%] translate-x-[-50%] aspect-[1] rotate-[4deg]">
          <img :src="Daniil" alt="Daniil" class="relative z-[1] rounded-[35px]" />
          <p class="absolute bottom-[10px] px-[20px] z-10 text-white">
            <span class="block font-InterBold md:text-[20px] xl:text-[34px] tracking-[2px]">Данил</span>
            <span class="block text-[10px] font-InterBold md:text-[14px] xl:text-[20px]">Дизайнер</span>
            <span class="hidden min-[580px]:block mt-[4px] text-[12px] xl:text-[19px]  font-interReg">Создаю пространства, где идеи встречаются с реальностью.</span>
          </p>

        </div>
      </div>
      <div class="lg:w-6/12 xl:pl-[20px] xxl:pl-[0px] flex flex-col gap-y-[40px] pt-[20px] lg:gap-y-[70px] font-jetBold md:text-[30px] lg:text-[36px] text-[20px] xs:text-[26px] xl:text-[50px] ">
        <div class="content" v-for="content, i in SocialContent" :key="i">
          <a :href="content.socialLink[toggleLink]" target="_blank">
            <div class="relative flex items-center gap-[20px] xs:gap-[40px] lg:gap-[70px] pb-[34px] before:content-[''] before:w-full before:h-[2px] before:bg-black before:absolute before:bottom-0 ">
              <arrowSocial class="content__iconArrow w-[60px] xs:w-[80px] xl:w-[100px]" />
              <p class="content__text">{{ content.socialText }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import arrowSocial from '~/assets/svg/arrow/arrow-social.svg'
import Daniil from '~/assets/images/social/Daniil.png';
import Julia from '~/assets/images/social/Julia.png';
import { SocialContent } from './type'

const toggleLink = ref(0)

function toggleNum(num: number) {
  toggleLink.value = num
}
</script>

<style scoped lang="scss">
.content {
  .content__iconArrow {

    transition: .3s;
    position: relative;
    left: 0;
  }

  .content__text {
    transition: .3s;
    position: relative;
    left: 0;
  }

  &:active {
    .content__iconArrow {
      left: 40px;
    }

    .content__text {
      left: 40px;
    }
  }
}

@media screen and (min-width:992px) {
  .content {
    .content__iconArrow {
      position: static;
      transition: .6s;
      scale: 1;
    }

    .content__text {
      transition: .6s;
      left: 0;
    }

    &:hover {
      .content__iconArrow {
        scale: 1.1;
      }

      .content__text {

        left: 20px;
      }
    }
  }
}
</style>
