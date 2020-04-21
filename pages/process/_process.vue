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
        <h4 :class="$style.processArticleDate">
          {{ currentPathProcess.processDate | formatDate }}
        </h4>
        <div
          v-for="processArticleItem in processArticle"
          :key="processArticleItem.id"
          :class="$style.processArticleItem"
        >
          <img
            v-lazy-load
            :class="$style.processArticleImage"
            :src="processArticleItem.processImage1.url"
            alt=""
          />
          <img
            v-if="processArticleItem.processImage2"
            v-lazy-load
            :class="$style.processArticleImage"
            :src="processArticleItem.processImage2.url"
            alt=""
          />
          <div :class="$style.processArticleTexts">
            <div
              :class="$style.processArticleText"
              v-html="processArticleItem.processTextEn"
            ></div>
            <div
              :class="$style.processArticleText"
              v-html="processArticleItem.processTextJa"
            ></div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { API_BASE_URL, API_KEY } from '~/config/microcms'

export default {
  filters: {
    formatDate(date) {
      return new Date(date).toISOString().split('T')[0]
    }
  },
  async asyncData({ $axios }) {
    const { contents: processResponseData } = await $axios.$get(
      `${API_BASE_URL}/process`,
      {
        headers: { 'X-API-KEY': API_KEY }
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
        id: nanoid()
      }))
    }
  },
  head: () => ({
    bodyAttrs: {
      class: 'page-process'
    }
  })
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

.processArticleDate {
  font-size: 13px;
}

.processArticleItem {
  padding-top: 15px;
}

.processArticleImage {
  margin-bottom: 15px;
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
      margin-top: 12px;
    }
  }
}
</style>
