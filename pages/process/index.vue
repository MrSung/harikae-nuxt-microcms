<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.process">
        <ul :class="$style.processList">
          <li
            v-for="processItem in processResponseData"
            :key="processItem.id"
            :class="[$style.processItem, $style['processItem--mounted']]"
          >
            <nuxt-link
              :to="`/process/${processItem.processSlug}`"
              :class="$style.processItemLink"
            >
              <img
                ref="processImages"
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
import imagesloaded from 'imagesloaded'
import { API_BASE_URL, API_KEY } from '~/config/microcms'

export default {
  filters: {
    formatDate: (date) =>
      new Date(date)
        .toISOString()
        .split('T')[0]
        .split('-')
        .map((str) => str.slice(-2))
        .join('.'),
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
  data: () => ({
    isMounted: false,
  }),
  mounted() {
    // Defer the callback to be executed after the next DOM update cycle
    this.$nextTick(() => {
      const { processImages } = this.$refs
      // After all process images are loaded
      imagesloaded(processImages, () => {
        this.isMounted = true
      })
    })
  },
  head: () => ({
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

.processList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.processItem {
  @include asr(4, 3);

  @include mq(sm) {
    height: 272px;
    margin-bottom: 16px;
    max-width: 300px;
    width: 280px;
  }

  @include mq(xs) {
    height: 80vw;
    margin-bottom: 32px;
    width: 100%;
  }

  &::before {
    background-color: $color-ffffff;
    content: '';
    display: block;
  }

  &--mounted::before {
    background-color: $color-001247;
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
    opacity: 0.1;
  }
}

.processThumb {
  margin-bottom: 10px;
}

.processDate {
  @include ellipses;

  font-size: 10px;
  margin-bottom: 4px;
}

.processTitle {
  @include ellipses;

  line-height: 1.4;
}
</style>
