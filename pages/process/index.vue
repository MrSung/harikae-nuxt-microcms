<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.process">
        <ul :class="$style.processList">
          <li
            v-for="processItem in processResponseData"
            :key="processItem.id"
            :class="$style.processItem"
          >
            <nuxt-link
              :to="`/process/${processItem.processSlug}`"
              :class="$style.processItemLink"
            >
              <img
                v-lazy-load
                :src="processItem.processThumbnail.url"
                alt=""
                :class="$style.processThumb"
              />
              <p :class="$style.processDate">
                {{ processItem.processDate | formatDate }}
              </p>
              <h2 :class="$style.processTitle">
                {{ processItem.processTitle }}
              </h2>
              <h3 :class="$style.processTitle">
                {{ processItem.processSubtitle }}
              </h3>
            </nuxt-link>
          </li>
        </ul>
      </div>
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
  head: () => ({
    bodyAttrs: {
      class: 'page-process'
    }
  })
}
</script>

<style>
.page-process {
  background-color: $color-f1f1f1;
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

.process {
  font-size: 12px;
  line-height: 1.6;
  width: 100%;
}

.processList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.processItem {
  @include mq(sm) {
    margin-bottom: 16px;
    max-width: 300px;
    width: 280px;
  }

  @include mq(xs) {
    margin-bottom: 32px;
  }

  &:not(:nth-of-type(4n)) {
    @include mq(sm) {
      margin-right: 20px;
    }
  }
}

.processItemLink {
  & > img {
    transition: opacity 0.2s $trans-timing-func;
  }

  &:hover > img {
    opacity: 0.7;
  }
}

.processThumb {
  margin-bottom: 6px;
}

.processDate {
  font-size: 11px;
  margin-bottom: 1px;
}

.processTitle {
  line-height: 1.4;
}
</style>
