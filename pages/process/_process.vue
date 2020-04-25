<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <article :class="$style.processArticle">
        <h2 :class="$style.processArticleTitle">
          {{ currentPathProcess.processTitle }}
        </h2>
        <h3 :class="$style.processArticleSubtitle">
          {{ currentPathProcess.processSubtitle }}
        </h3>
        <PageSubProcessArticleItem
          v-for="processArticleItem in processArticle"
          :key="processArticleItem.id"
          :process-image-url-first="processArticleItem.processImage1.url"
          :process-image-url-second="
            processArticleItem.processImage2
              ? processArticleItem.processImage2.url
              : ''
          "
          :process-text-en="processArticleItem.processTextEn"
          :process-text-ja="processArticleItem.processTextJa"
        />
      </article>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { API_BASE_URL, API_KEY } from '~/config/microcms'
import PageSubProcessArticleItem from '~/components/PageSubProcessArticleItem.vue'

export default {
  components: {
    PageSubProcessArticleItem,
  },
  async asyncData({ $axios }) {
    const { contents: processResponseData } = await $axios.$get(
      `${API_BASE_URL}/process`,
      {
        headers: { 'X-API-KEY': API_KEY },
      }
    )
    return { processResponseData }
  },
  computed: {
    currentPathProcess() {
      const { process: processName } = this.$route.params
      return this.processResponseData.find(
        (obj) => obj.processSlug === processName
      )
    },
    processArticle() {
      return this.currentPathProcess.processArticle.map((obj) => ({
        ...obj,
        id: nanoid(),
      }))
    },
  },
  head() {
    const title = this.currentPathProcess
      ? this.currentPathProcess.processTitle
      : 'Process article'
    return {
      title,
      bodyAttrs: {
        class: 'page-process',
      },
    }
  },
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

.processArticleTitle {
  font-size: 16px;
}

.processArticleSubtitle {
  font-size: 14px;
}
</style>
