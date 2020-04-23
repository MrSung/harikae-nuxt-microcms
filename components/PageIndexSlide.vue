<template>
  <div class="swiper-slide">
    <a
      :href="topItem.topSliderLink"
      :class="$style.topSliderImage"
      :style="`background-image: url(${topItem.topSliderImage.url})`"
      @click="handleTopSliderLinkClick($event, topItem.topSliderLink)"
    ></a>
  </div>
</template>

<script>
export default {
  props: {
    topItem: {
      type: Object,
      required: true
    }
  }
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
