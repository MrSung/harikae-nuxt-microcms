<template>
  <div :class="$style.profileThumbs">
    <div
      v-for="aboutThumb in aboutThumbs"
      :key="aboutThumb.id"
      :class="$style.profileThumb"
    >
      <img v-lazy-load :src="aboutThumb.src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    aboutThumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.profileThumbs {
  @include mq(sm) {
    display: flex;
  }
}

.profileThumb {
  @include mq(xs) {
    margin-left: auto;
    margin-right: auto;
    max-width: 254px;
  }

  &:not(:first-of-type) {
    @include mq(sm) {
      margin-left: 1px;
    }

    @include mq(xs) {
      display: none;
    }
  }

  & > img {
    height: auto;
    max-width: 100%;
  }
}
</style>
