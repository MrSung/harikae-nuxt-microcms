<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.process">
        <PageProcessItems :process-response-data="processResponseData" />
      </div>
    </div>
  </div>
</template>

<script>
import PageProcessItems from '~/components/PageProcessItems.vue'

export default {
  components: {
    PageProcessItems,
  },
  async asyncData({ $axios }) {
    const { contents: processResponseData } = await $axios.$get(
      `${process.env.API_BASE_URL}/process`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return { processResponseData }
  },
  head: () => ({
    title: 'Process',
    bodyAttrs: {
      class: 'page-process',
    },
  }),
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

.process {
  font-size: 12px;
  line-height: 1.6;
  width: 100%;
}
</style>
