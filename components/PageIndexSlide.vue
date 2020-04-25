<template>
  <div class="swiper-slide">
    <a
      :href="topSliderLink"
      :class="$style.topSliderImage"
      :target="topSliderTargetBlank && '_blank'"
      :style="`background-image: url(${topSliderImageUrl})`"
      @click="handleTopSliderLinkClick($event, topSliderLink)"
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    topSliderLink: {
      type: String,
      required: true,
    },
    topSliderTargetBlank: {
      type: Boolean,
      required: true,
    },
    topSliderImageUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleTopSliderLinkClick(event, sliderLink) {
      this.$emit('handle-top-slider-link-click', event, sliderLink)
    },
  },
}
</script>

<style lang="scss" module>
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
