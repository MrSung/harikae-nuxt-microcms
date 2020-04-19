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
          class="processArticleContent"
          :class="$style.processArticleContent"
          v-html="currentPathProcess.processContent"
        ></div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    formatDate(date) {
      return new Date(date).toISOString().split('T')[0]
    }
  },
  async asyncData({ $axios }) {
    const { contents: processResponseData } = await $axios.$get(
      `${process.env.API_BASE_URL}/process`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY }
      }
    )
    return { processResponseData }
  },
  computed: {
    currentPathProcess() {
      // TODO: null(404)のときの処理
      const { process: processName } = this.$route.params
      return this.processResponseData.find(
        (obj) => obj.processSlug === processName
      )
    }
  },
  head: () => ({
    bodyAttrs: {
      class: 'page-process'
    }
  })
}
</script>

<style lang="scss">
.processArticleContent img {
  margin-bottom: 15px;

  &:not(:first-child) {
    margin-top: 15px;
  }
}
</style>

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

.processArticleContent {
  padding-top: 15px;
}
</style>
