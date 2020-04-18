<template>
  <nav
    :class="[$style.navMenu, isNavMenuOpen && $style['navMenu--navMenuOpen']]"
  >
    <div :class="$style.navMenuLogo">
      <img
        src="~/assets/img/harikae-logo-bright.svg"
        alt="Harikae"
        :class="[$style.navMenuLogoImg, $style.logoImg]"
        width="200"
        height="32"
      />
    </div>
    <ul
      :class="$style.navMenuUl"
      @mouseover="handleNavMenuMouseOver"
      @mouseleave="handleNavMenuMouseLeave"
    >
      <li :class="$style.navMenuLi">
        <nuxt-link to="/about" :class="$style.navMenuAnchor">
          about
        </nuxt-link>
      </li>
      <li :class="$style.navMenuLi">
        <a
          href="javascript: void(0)"
          :class="[
            $style.navMenuAnchor,
            isDropdownOpen && $style['navMenuAnchor--dropdownOpen']
          ]"
          @click="handleDropdownClick"
        >
          project
        </a>
        <ul v-if="navItemsProject" :class="$style.navMenuLiUl">
          <li
            v-for="navItemProject in navItemsProject"
            :key="navItemProject.id"
            :class="$style.navMenuLiLi"
          >
            <nuxt-link
              :to="`/project/${navItemProject.slug}`"
              :class="$style.navMenuLiAnchor"
            >
              {{ navItemProject.name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li :class="$style.navMenuLi">
        <nuxt-link to="/process" :class="$style.navMenuAnchor">
          process
        </nuxt-link>
      </li>
      <li :class="[$style.navMenuLi, $style['navMenuLi--last']]">
        <a href="javascript: void(0)" :class="$style.navMenuAnchor">
          <img
            src="~/assets/img/icon_instagram.svg"
            alt=""
            width="28"
            height="28"
          />
        </a>
        <a href="javascript: void(0)" :class="$style.navMenuAnchor">
          <img
            src="~/assets/img/icon_facebook.svg"
            alt=""
            width="24"
            height="24"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    isNavMenuOpen: {
      type: Boolean,
      required: true
    },
    isDropdownOpen: {
      type: Boolean,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters(['navItemsProject'])
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions(['init']),
    handleNavMenuMouseOver() {
      if (this.isMobile) return
      this.$emit('handle-nav-menu-mouse-over')
    },
    handleNavMenuMouseLeave() {
      if (this.isMobile) return
      this.$emit('handle-nav-menu-mouse-leave')
    },
    handleDropdownClick() {
      this.$emit('handle-dropdown-click')
    }
  }
}
</script>

<style lang="scss" module>
.navMenu {
  align-items: flex-start;
  background-color: $color-2b3278;
  bottom: 0;
  display: flex;
  left: 0;
  opacity: 0;
  padding: 72px 0 28px;
  position: fixed;
  right: 0;
  text-align: left;
  top: 0;
  transition-duration: 0.2s;
  transition-property: opacity, visibility;
  transition-timing-function: $trans-timing-func;
  visibility: hidden;
  z-index: $z-1000;

  &--navMenuOpen {
    opacity: 1;
    visibility: visible;
  }
}

.navMenuLogo {
  left: 48px;
  position: absolute;
  top: 55px;

  @include mq(xs) {
    left: 44px;
    top: 16px;
  }
}

.navMenuLogoImg {
  @include mq(xs) {
    transform: rotate(90deg);
    transform-origin: left top;
  }
}

.navMenuUl {
  display: inline-block;
  margin-left: auto;
  padding: 48px 8px 24px 28px;
  width: 150px;

  @include mq(xs) {
    padding: 0 8px 16px 16px;
    width: 108px;
  }
}

.navMenuLi {
  margin-bottom: 1em;

  @include mq(xs) {
    min-width: 60px;
  }

  &--last {
    display: flex;
    justify-content: space-between;
    max-width: 50px;
  }
}

.navMenuAnchor {
  color: $color-ffffff;
  display: block;
  text-transform: uppercase;

  &:hover {
    color: rgba($color-ffffff, 0.4);
  }

  & > img {
    transition-duration: 0.2s;
    transition-property: opacity, visibility;
    transition-timing-function: $trans-timing-func;
  }

  &:hover > img {
    opacity: 0.4;
  }

  .navMenuLi--last > & {
    min-width: 28px;
  }

  .navMenuLi--last > &:not(:last-of-type) {
    margin-right: 0.5em;
  }

  .navMenuLi--last > & > img {
    vertical-align: middle;
  }
}

.navMenuLiUl {
  display: none;
  margin-top: 0.75em;

  .navMenuAnchor--dropdownOpen + & {
    display: block;
  }
}

.navMenuLiLi {
  &:not(:first-of-type) {
    margin-top: 0.5em;
  }
}

.navMenuLiAnchor {
  color: $color-ffffff;
  font-size: 12px;
  line-height: 1.1;

  &:hover {
    color: rgba($color-ffffff, 0.4);
  }
}

.logoImg {
  @include mq(xs) {
    width: 160px;
  }
}
</style>
