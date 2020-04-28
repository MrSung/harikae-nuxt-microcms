<template>
  <div
    v-swiper:topSlider="swiperOption"
    :class="$style.swiperContainer"
    class="swiper-container"
  >
    <!-- Additional required wrapper -->
    <div :class="$style.swiperWrapper" class="swiper-wrapper">
      <!-- Slides -->
      <PageIndexSlide
        v-for="topItem in topResponseData"
        :key="topItem.id"
        :top-slider-link="topItem.topSliderLink"
        :top-slider-target-blank="topItem.topSliderTargetBlank"
        :top-slider-image-url="topItem.topSliderImage.url"
        @handle-top-slider-link-click="handleTopSliderLinkClick"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageIndexSlide from '~/components/PageIndexSlide.vue'

let observer

export default {
  components: {
    PageIndexSlide,
  },
  async asyncData({ $axios }) {
    const { contents: topResponseData } = await $axios.$get(
      `${process.env.API_BASE_URL}/top`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return { topResponseData }
  },
  data: () => ({
    swiperOption: {
      init: false,
      autoplay: { delay: 8500 },
      direction: 'vertical',
      loop: true,
      speed: 800,
      mousewheel: {
        invert: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    },
  }),
  computed: {
    ...mapState(['swiperSetOnLoad']),
  },
  mounted() {
    const main = document.getElementById('main') || null
    if (!main) return
    // eslint-disable-next-line no-console
    console.log('swiperSetOnLoad', this.swiperSetOnLoad)
    if (!this.swiperSetOnLoad) {
      const MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver
      const config = {
        attributes: true,
      }
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'style'
          ) {
            // eslint-disable-next-line no-console
            console.log('Mutated')
            this.topSlider.init()
            this.setSwiperSetOnLoad(true)
          }
        })
      })
      observer.observe(main, config)
      return
    }
    // eslint-disable-next-line no-console
    console.log('Not mutated', this.swiperSetOnLoad)
    this.topSlider.init()
  },
  beforeDestroy() {
    if (observer) observer.disconnect()
  },
  methods: {
    ...mapActions(['setSwiperSetOnLoad']),
    handleTopSliderLinkClick(event, link) {
      if (link === '#') event.preventDefault()
    },
  },
  head: () => ({
    title: 'Top',
  }),
}
</script>

<style lang="scss" module>
.swiperContainer,
.swiperWrapper {
  height: 100%;
  width: 100%;
}
</style>
