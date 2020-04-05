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
      const _setMainHeight = () => {
        main.style.height = `${window.innerHeight}px`
      }
      window.addEventListener('load', _setMainHeight)
      window.addEventListener('resize', _setMainHeight)
    }
  }
}
</script>
