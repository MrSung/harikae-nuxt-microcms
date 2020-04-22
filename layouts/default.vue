<template>
  <div>
    <LayoutFrame
      :is-nav-menu-open="isNavMenuOpen"
      :is-mobile="isMobile"
      @handle-nav-button-mouse-over="navMenuShow"
      @handle-nav-button-mouse-leave="navMenuHide"
      @handle-nav-button-click="navMenuClick"
    />
    <main ref="main">
      <nuxt />
    </main>
    <LayoutNavigation
      :is-nav-menu-open="isNavMenuOpen"
      :is-dropdown-open="isDropdownOpen"
      :is-mobile="isMobile"
      @handle-nav-menu-mouse-over="navMenuShow"
      @handle-nav-menu-mouse-leave="navMenuHide"
      @handle-dropdown-click="toggleDropdown"
    />
  </div>
</template>

<script>
import LayoutFrame from '~/components/LayoutFrame.vue'
import LayoutNavigation from '~/components/LayoutNavigation'

export default {
  components: {
    LayoutFrame,
    LayoutNavigation
  },
  data: () => ({
    isNavMenuOpen: false,
    isDropdownOpen: false,
    isMobile: false
  }),
  created() {
    const deviceType = this.$ua.deviceType()
    this.isMobile = deviceType === 'smartphone'
  },
  mounted() {
    this.setMainHeight()
  },
  methods: {
    navMenuShow() {
      this.isNavMenuOpen = true
    },
    navMenuHide() {
      this.isNavMenuOpen = false
    },
    navMenuClick() {
      this.isNavMenuOpen = !this.isNavMenuOpen
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    setMainHeight() {
      const { main } = this.$refs
      const handleMainHeight = () => {
        main.style.height = `${window.innerHeight}px`
      }
      window.addEventListener('load', handleMainHeight)
      window.addEventListener('resize', handleMainHeight)
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: $color-ffffff;
  color: $color-2b3278;
  /* stylelint-disable */
  font-family: Roboto, '游ゴシック', 'Yu Gothic', '游ゴシック体', 'YuGothic',
    'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'Meiryo UI', 'メイリオ',
    Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  /* stylelint-enable */
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.8;
}

::selection {
  background-color: $color-ccd0ff;
}

a {
  color: $color-2b3278;
  text-decoration: none;
  transition: color 0.2s $trans-timing-func;

  &:hover {
    color: rgba($color-2b3278, 0.7);
  }
}

img {
  vertical-align: bottom;
}

.page-project {
  .fslightbox-container {
    background: linear-gradient(rgba($color-001247, 0.9), $color-001247 1810%);
  }

  .fslightbox-slash {
    transform: rotate(0);
  }

  .fslightbox-toolbar-button[title^='Enter'] {
    display: none;
  }

  .fslightbox-slide-btn-previous-container {
    /* stylelint-disable */
    cursor: url(https://images.microcms-assets.io/protected/ap-northeast-1:6430d572-35e2-4419-beb4-b9bb9ee16ce7/service/harikae/media/icon_arrow-left.png),
      pointer;
    /* stylelint-enable */

    @include mq(sm) {
      padding-bottom: 240px;
      padding-right: 300px;
      padding-top: 240px;
    }

    @include mq(xs) {
      padding-bottom: 240px;
      padding-right: 160px;
      padding-top: 240px;
    }
  }

  .fslightbox-slide-btn-next-container {
    /* stylelint-disable */
    cursor: url(https://images.microcms-assets.io/protected/ap-northeast-1:6430d572-35e2-4419-beb4-b9bb9ee16ce7/service/harikae/media/icon_arrow-right.png),
      pointer;
    /* stylelint-enable */

    @include mq(sm) {
      padding-bottom: 240px;
      padding-left: 300px;
      padding-top: 240px;
    }

    @include mq(xs) {
      padding-bottom: 240px;
      padding-left: 160px;
      padding-top: 240px;
    }
  }

  .fslightbox-slide-btn {
    visibility: hidden;
  }
}

.page-process {
  background-color: $color-f1f1f1;
}
</style>
