<template>
  <div>
    <FramesGlobal
      :is-nav-menu-open="isNavMenuOpen"
      @handle-nav-button-mouse-over="navMenuShow"
      @handle-nav-button-mouse-leave="navMenuHide"
    />
    <nuxt />
    <NavGlobal
      :is-nav-menu-open="isNavMenuOpen"
      :is-dropdown-open="isDropdownOpen"
      @handle-nav-menu-mouse-over="navMenuShow"
      @handle-nav-menu-mouse-leave="navMenuHide"
      @handle-dropdown-click="toggleDropdown"
    />
  </div>
</template>

<script>
import FramesGlobal from './components/FramesGlobal.vue'
import NavGlobal from './components/NavGlobal'

export default {
  components: {
    FramesGlobal,
    NavGlobal
  },
  data: () => ({
    isNavMenuOpen: false,
    isDropdownOpen: false
  }),
  methods: {
    navMenuShow() {
      this.isNavMenuOpen = true
    },
    navMenuHide() {
      this.isNavMenuOpen = false
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    }
  }
}
</script>
