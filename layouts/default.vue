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
      @handle-nav-menu-backdrop-click="navMenuHide"
      @handle-dropdown-click="toggleDropdown"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LayoutFrame from '~/components/LayoutFrame.vue'
import LayoutNavigation from '~/components/LayoutNavigation'

export default {
  components: {
    LayoutFrame,
    LayoutNavigation,
  },
  data: () => ({
    isNavMenuOpen: false,
    isDropdownOpen: false,
    isMobile: false,
  }),
  mounted() {
    const deviceType = this.$ua.deviceType()
    this.isMobile = deviceType === 'smartphone'
    if (this.isMobile && document.body) {
      document.body.setAttribute('data-ua-smartphone', '')
    }
    this.setMainHeight()
    this.$nextTick(() => {
      window.addEventListener('load', () => {
        this.setLoadedFirstTime(true)
      })
    })
  },
  methods: {
    ...mapActions(['setLoadedFirstTime']),
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
    },
  },
}
</script>

<style lang="scss">
// Base
// ----------------------------------------
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

// Page - Project
// ----------------------------------------
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
  }

  &:not([data-ua-smartphone]) .fslightbox-slide-btn-previous-container {
    height: calc(100vh - 80px);
    padding: 0;
    width: 50%;
  }

  &[data-ua-smartphone] .fslightbox-slide-btn-previous-container {
    display: none;
  }

  .fslightbox-slide-btn-next-container {
    /* stylelint-disable */
    cursor: url(https://images.microcms-assets.io/protected/ap-northeast-1:6430d572-35e2-4419-beb4-b9bb9ee16ce7/service/harikae/media/icon_arrow-right.png),
      pointer;
    /* stylelint-enable */
  }

  &:not([data-ua-smartphone]) .fslightbox-slide-btn-next-container {
    height: calc(100vh - 80px);
    padding: 0;
    width: 50%;
  }

  &[data-ua-smartphone] .fslightbox-slide-btn-next-container {
    display: none;
  }

  .fslightbox-slide-btn {
    visibility: hidden;
  }
}

// Page - Process
// ----------------------------------------
.page-process {
  background-color: $color-d9d9d9;
}
</style>
