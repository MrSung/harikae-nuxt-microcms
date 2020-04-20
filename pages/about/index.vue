<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.profile">
        <div :class="$style.profileThumbs">
          <div
            v-for="aboutThumb in aboutThumbs"
            :key="aboutThumb.id"
            :class="$style.profileThumb"
          >
            <img v-lazy-load :src="aboutThumb.src" alt="" />
          </div>
        </div>
        <div :class="$style.profileArticles">
          <article :class="$style.profileArticle">
            <h2 :class="$style.profileArticleHeading">
              {{ aboutResponseData.aboutHeadingEn }}
            </h2>
            <div
              :class="$style.profileArticleParagraph"
              v-html="aboutResponseData.aboutContentEn"
            ></div>
          </article>
          <article :class="$style.profileArticle">
            <h2 :class="$style.profileArticleHeading">
              {{ aboutResponseData.aboutHeadingJa }}
            </h2>
            <div
              :class="$style.profileArticleParagraph"
              v-html="aboutResponseData.aboutContentJa"
            ></div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { API_BASE_URL, API_KEY } from '~/config/microcms'

export default {
  async asyncData({ $axios }) {
    const aboutResponseData = await $axios.$get(`${API_BASE_URL}/about`, {
      headers: { 'X-API-KEY': API_KEY }
    })
    return { aboutResponseData }
  },
  computed: {
    aboutThumbs() {
      const { url: aboutImageUrl } = this.aboutResponseData.aboutImage
      return [
        { id: `profileThumb_${nanoid()}`, src: aboutImageUrl },
        { id: `profileThumb_${nanoid()}`, src: aboutImageUrl },
        { id: `profileThumb_${nanoid()}`, src: aboutImageUrl }
      ]
    }
  }
}
</script>

<style lang="scss" module>
.container {
  @include mq(sm) {
    padding: 136px 28px 100px;
  }

  @include mq(xs) {
    padding: 84px 16px;
  }
}

.containerInner {
  margin-left: auto;
  margin-right: auto;

  @include mq(sm) {
    width: 1180px;
  }
}

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
