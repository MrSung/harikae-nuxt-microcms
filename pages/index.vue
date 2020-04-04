<template>
  <div ref="container" :class="$style.container">
    <div
      v-swiper:topSlider="swiperOption"
      :class="$style.swiperContainer"
      class="swiper-container"
    >
      <!-- Additional required wrapper -->
      <div :class="$style.swiperWrapper" class="swiper-wrapper">
        <!-- Slides -->
        <div
          v-for="swiperImage in swiperImages"
          :key="swiperImage.id"
          :class="$style.swiperSlide"
          class="swiper-slide"
        >
          <a
            href="javascript:void(0)"
            :class="$style.topSliderImage"
            :style="`background-image: url(${swiperImage.src})`"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId'

export default {
  data: () => ({
    swiperOption: {
      init: false,
      autoplay: 8500,
      direction: 'vertical',
      loop: true,
      speed: 800,
      mousewheel: {
        invert: false
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      }
    },
    swiperImages: [
      { id: uniqueId('topSlider_'), src: '/img/top-sample-image-1.jpg' },
      { id: uniqueId('topSlider_'), src: '/img/top-sample-image-2.jpg' },
      { id: uniqueId('topSlider_'), src: '/img/top-sample-image-3.jpg' }
    ],
    isContainerHeightSet: false
  }),
  watch: {
    isContainerHeightSet: {
      immediate: true,
      handler(val) {
        if (!val) return
        setTimeout(() => {
          this.topSlider.init()
        }, 100)
      }
    }
  },
  mounted() {
    const { container } = this.$refs
    const setContainerHeight = () => {
      container.style.height = `${window.innerHeight}px`
    }
    window.addEventListener('load', setContainerHeight)
    window.addEventListener('resize', setContainerHeight)
    this.isContainerHeightSet = true
  }
}
</script>

<style lang="scss" module>
.swiperContainer,
.swiperWrapper {
  height: 100%;
  width: 100%;
}

.topSliderImage {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 100%;
  width: 100%;

  @include mq(lg) {
    background-size: contain;
  }
}
</style>
