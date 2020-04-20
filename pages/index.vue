<template>
  <div
    v-swiper:topSlider="swiperOption"
    :class="$style.swiperContainer"
    class="swiper-container"
  >
    <!-- Additional required wrapper -->
    <div :class="$style.swiperWrapper" class="swiper-wrapper">
      <!-- Slides -->
      <div
        v-for="topItem in topResponseData"
        :key="topItem.id"
        :class="$style.swiperSlide"
        class="swiper-slide"
      >
        <a
          :href="topItem.topSliderLink"
          :class="$style.topSliderImage"
          :style="`background-image: url(${topItem.topSliderImage.url})`"
          @click="handleTopSliderLinkClick($event, topItem.topSliderLink)"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { API_BASE_URL, API_KEY } from '~/config/microcms'

export default {
  async asyncData({ $axios }) {
    const { contents: topResponseData } = await $axios.$get(
      `${API_BASE_URL}/top`,
      {
        headers: { 'X-API-KEY': API_KEY }
      }
    )
    return { topResponseData }
  },
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
    }
  }),
  mounted() {
    setTimeout(() => {
      this.topSlider.init()
    }, 100)
  },
  methods: {
    handleTopSliderLinkClick(event, link) {
      if (link === '#') event.preventDefault()
    }
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
