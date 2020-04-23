<template>
  <div :class="$style.profileArticles">
    <article :class="$style.profileArticle">
      <h2 :class="$style.profileArticleHeading">
        {{ headingEn }}
      </h2>
      <div :class="$style.profileArticleParagraph" v-html="contentEn"></div>
    </article>
    <article :class="$style.profileArticle">
      <h2 :class="$style.profileArticleHeading">
        {{ headingJa }}
      </h2>
      <div :class="$style.profileArticleParagraph" v-html="contentJa"></div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    headingEn: {
      type: String,
      required: true,
    },
    contentEn: {
      type: String,
      required: true,
    },
    headingJa: {
      type: String,
      required: true,
    },
    contentJa: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.profileArticles {
  padding-top: 32px;

  @include mq(sm) {
    display: flex;
  }
}

.profileArticle {
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

.profileArticleHeading {
  margin-bottom: 0.6em;
}
</style>
