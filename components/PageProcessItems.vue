<template>
  <ul :class="$style.processList">
    <li
      v-for="processItem in processResponseSorted"
      :key="processItem.id"
      :class="[$style.processItem, isMounted && $style['processItem--mounted']]"
    >
      <nuxt-link
        :to="`/process/${processItem.processSlug}`"
        :class="[
          $style.processItemLink,
          isMounted && $style['processItemLink--mounted'],
        ]"
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
        <h3 v-if="processItem.processSubtitle" :class="$style.processTitle">
          {{ processItem.processSubtitle }}
        </h3>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import imagesloaded from 'imagesloaded'

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
  props: {
    processResponseData: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    isMounted: false,
  }),
  computed: {
    processResponseSorted() {
      const deepCopy = (referenceValue) =>
        JSON.parse(JSON.stringify(referenceValue))
      const getEpochTime = (timeString) => new Date(timeString).getTime()
      const copiedResponse = deepCopy(this.processResponseData)
      return copiedResponse.sort(
        (a, b) => getEpochTime(b.processDate) - getEpochTime(a.processDate)
      )
    },
  },
  mounted() {
    this.$nextTick(() => {
      const { processImages } = this.$refs
      // After all process images are loaded
      imagesloaded(processImages, () => {
        this.isMounted = true
      })
    })
  },
}
</script>

<style lang="scss" module>
.processList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.processItem {
  @include asr(4, 3);

  @include mq(sm) {
    height: 272px;
    margin-bottom: 20px;
    max-width: 300px;
    width: 280px;
  }

  @include mq(xs) {
    height: 86vw;
    margin-bottom: 28px;
    width: 100%;
  }

  &--mounted::before {
    background-color: $color-000b47;
    content: '';
    display: block;
  }

  &:not(:nth-of-type(4n)) {
    @include mq(sm) {
      margin-right: 20px;
    }
  }
}

.processItemLink {
  &--mounted > img {
    transition: opacity 0.2s $trans-timing-func;
  }

  &--mounted:hover > img {
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
