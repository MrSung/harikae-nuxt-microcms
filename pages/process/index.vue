<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.process">
        <ul :class="$style.processList">
          <li
            v-for="processItem in processItems"
            :key="processItem.id"
            :class="$style.processItem"
          >
            <img :src="processItem.src" alt="" :class="$style.processThumb" />
            <p :class="$style.processDate">{{ processItem.time }}</p>
            <h2 :class="$style.processTitle">{{ processItem.title }}</h2>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  data: () => ({
    processItems: [
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS multiple row title comes here'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS multiple row title comes here'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS multiple row title comes here'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS'
      },
      {
        id: `processItem_${nanoid()}`,
        src: 'https://via.placeholder.com/600x450',
        time: '19.11.05',
        title: 'Inspiration of product: 20SS multiple row title comes here'
      }
    ]
  }),
  head: () => ({
    bodyAttrs: {
      class: 'page-process'
    }
  })
}
</script>

<style>
.page-process {
  background-color: #f1f1f1;
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
