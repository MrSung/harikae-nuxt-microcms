<template>
  <div :class="$style.dualArticles">
    <article :class="$style.dualArticle">
      <h2 :class="$style.dualArticleHeading">
        {{ projectHeadingEn }}
      </h2>
      <div :class="$style.dualArticleParagraph" v-html="projectContentEn"></div>
    </article>
    <article :class="$style.dualArticle">
      <h2 :class="$style.dualArticleHeading">
        {{ projectHeadingJa }}
      </h2>
      <div :class="$style.dualArticleParagraph" v-html="projectContentJa"></div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    projectHeadingEn: {
      type: String,
      required: true,
    },
    projectContentEn: {
      type: String,
      required: true,
    },
    projectHeadingJa: {
      type: String,
      required: true,
    },
    projectContentJa: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.dualArticles {
  padding-top: 32px;

  @include mq(sm) {
    display: flex;
  }
}

.dualArticle {
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

.dualArticleHeading {
  margin-bottom: 0.6em;
}
</style>
