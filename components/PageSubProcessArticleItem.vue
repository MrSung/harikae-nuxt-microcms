<template>
  <div :class="$style.processArticleItem">
    <img
      v-lazy-load
      :class="$style.processArticleImage"
      :src="processImageUrlFirst"
      alt=""
    />
    <img
      v-if="processImageUrlSecond"
      v-lazy-load
      :class="$style.processArticleImage"
      :src="processImageUrlSecond"
      alt=""
    />
    <div :class="$style.processArticleTexts">
      <div :class="$style.processArticleText" v-html="processTextEn"></div>
      <div :class="$style.processArticleText" v-html="processTextJa"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    processImageUrlFirst: {
      type: String,
      required: true,
    },
    processImageUrlSecond: {
      type: String,
      default: '',
    },
    processTextEn: {
      type: String,
      required: true,
    },
    processTextJa: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.processArticleItem {
  padding-top: 28px;
}

.processArticleImage {
  margin-bottom: 15px;

  .processArticleItem > &:last-of-type {
    margin-bottom: 28px;
  }
}

.processArticleTexts {
  @include mq(sm) {
    display: flex;
  }
}

.processArticleText {
  @include mq(sm) {
    flex-basis: 50%;
  }

  &:not(:first-of-type) {
    @include mq(sm) {
      margin-left: 16px;
    }

    @include mq(xs) {
      margin-top: 28px;
    }
  }
}
</style>
