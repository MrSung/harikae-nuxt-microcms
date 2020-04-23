<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.profile">
        <PageAboutThumbs :about-thumbs="aboutThumbs" />
        <PageAboutProfileArticles
          :heading-en="aboutResponseData.aboutHeadingEn"
          :content-en="aboutResponseData.aboutContentEn"
          :heading-ja="aboutResponseData.aboutHeadingJa"
          :content-ja="aboutResponseData.aboutContentJa"
        />
        <PageAboutProfileArticles
          :heading-en="aboutResponseData.contactHeadingEn"
          :content-en="aboutResponseData.contactContentEn"
          :heading-ja="aboutResponseData.contactHeadingJa"
          :content-ja="aboutResponseData.contactContentJa"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { API_BASE_URL, API_KEY } from '~/config/microcms'
import PageAboutThumbs from '~/components/PageAboutThumbs.vue'
import PageAboutProfileArticles from '~/components/PageAboutProfileArticles.vue'

export default {
  components: {
    PageAboutThumbs,
    PageAboutProfileArticles
  },
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
</style>
