<template>
  <nav
    :class="[$style.navMenu, isNavMenuOpen && $style['navMenu--navMenuOpen']]"
  >
    <div
      v-if="isMobile"
      :class="$style.navBackdrop"
      @click="handleNavMenuBackdropClick"
    ></div>
    <div :class="$style.navCurtain"></div>
    <div :class="$style.navMenuLogo">
      <template v-if="isMobile">
        <nuxt-link to="/" :class="$style.navMenuLogoLink">
          <img
            src="~/assets/img/harikae-logo-bright.svg"
            alt="Harikae"
            :class="[$style.navMenuLogoImg, $style.logoImg]"
            width="200"
            height="32"
          />
        </nuxt-link>
      </template>
      <template v-else>
        <img
          src="~/assets/img/harikae-logo-bright.svg"
          alt="Harikae"
          :class="[$style.navMenuLogoImg, $style.logoImg]"
          width="200"
          height="32"
        />
      </template>
    </div>
    <ul
      :class="[$style.navMenuUl, isMobile && $style['navMenuUl--isMobile']]"
      @mouseover="handleNavMenuMouseOver"
      @mouseleave="handleNavMenuMouseLeave"
    >
      <li
        v-if="
          Array.isArray(submenuProjectItems) && submenuProjectItems.length > 0
        "
        :class="[
          $style.navMenuLi,
          isDropdownOpen && $style['navMenuLi--dropdownOpen'],
        ]"
      >
        <a
          href="javascript: void(0)"
          :class="[
            $style.navMenuAnchor,
            isDropdownOpen && $style['navMenuAnchor--dropdownOpen'],
          ]"
          @click="handleDropdownClick"
        >
          project
        </a>
        <ul :class="$style.navMenuLiUl">
          <li
            v-for="submenuItem in submenuProjectItems"
            :key="submenuItem.id"
            :class="$style.navMenuLiLi"
          >
            <nuxt-link
              :to="`/project/${submenuItem.submenuItemLink}`"
              :class="$style.navMenuLiAnchor"
            >
              {{ submenuItem.submenuItemTitle }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li :class="$style.navMenuLi">
        <nuxt-link to="/process" :class="$style.navMenuAnchor">
          process
        </nuxt-link>
      </li>
      <li :class="$style.navMenuLi">
        <nuxt-link to="/about" :class="$style.navMenuAnchor"> about </nuxt-link>
      </li>
      <li :class="$style.navMenuLi">
        <a
          :href="$options.staticData.LINK_ONLINE_STORE"
          :class="$style.navMenuAnchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          online store
        </a>
      </li>
      <li :class="[$style.navMenuLi, $style['navMenuLi--last']]">
        <a
          :href="$options.staticData.LINK_INSTAGRAM"
          :class="$style.navMenuAnchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="~/assets/img/icon_instagram.svg"
            alt="Instagram"
            width="28"
            height="28"
          />
        </a>
        <a
          :href="$options.staticData.LINK_FACEBOOK"
          :class="$style.navMenuAnchor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="~/assets/img/icon_facebook.svg"
            alt="Facebook"
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
import {
  LINK_INSTAGRAM,
  LINK_FACEBOOK,
  LINK_ONLINE_STORE,
} from '~/config/externalLinks'

export default {
  props: {
    isNavMenuOpen: {
      type: Boolean,
      required: true,
    },
    isDropdownOpen: {
      type: Boolean,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  staticData: {
    LINK_INSTAGRAM,
    LINK_FACEBOOK,
    LINK_ONLINE_STORE,
  },
  computed: {
    ...mapGetters(['submenuProjectItems']),
  },
  created() {
    this.getSubmenuProjectItems()
  },
  methods: {
    ...mapActions(['getSubmenuProjectItems']),
    handleNavMenuMouseOver() {
      if (this.isMobile) return
      this.$emit('handle-nav-menu-mouse-over')
    },
    handleNavMenuMouseLeave() {
      if (this.isMobile) return
      this.$emit('handle-nav-menu-mouse-leave')
    },
    handleNavMenuBackdropClick() {
      if (!this.isMobile) return
      this.$emit('handle-nav-menu-backdrop-click')
    },
    handleDropdownClick() {
      this.$emit('handle-dropdown-click')
    },
  },
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
  overflow-y: scroll;
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

.navBackdrop {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 60px;
}

.navCurtain {
  background-color: $color-2b3278;
  content: '';
  display: block;
  height: 120px;
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100% - 300px);
  z-index: $z-2;

  @include mq(xs) {
    height: 72px;
    width: calc(100% - 64px);
  }
}

.navMenuLogo {
  left: 48px;
  position: fixed;
  top: 55px;

  @include mq(xs) {
    left: 44px;
    top: 16px;
  }
}

.navMenuLogoLink {
  display: inline-block;
  transform: rotate(90deg);
  transform-origin: left top;
}

.navMenuLogoImg {
  @include mq(xs) {
    transform: rotate(90deg);
    transform-origin: left top;
  }

  .navMenuLogoLink > & {
    transform: none;
  }
}

.navMenuUl {
  display: inline-block;
  margin-left: auto;
  padding: 48px 48px 24px 28px;

  @include mq(xs) {
    padding: 6px 16px 16px;
  }

  &--isMobile {
    position: relative;
    z-index: $z-1;
  }
}

.navMenuLi {
  margin-bottom: 1rem;
  text-align: right;

  &--dropdownOpen {
    margin-bottom: 1.35rem;
  }

  &--last {
    display: flex;
    justify-content: flex-end;
  }
}

.navMenuAnchor {
  @include ellipses;

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
    width: 28px;
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
  @include ellipses;

  color: $color-ffffff;
  display: block;
  font-size: 12px;
  line-height: 1.4;
  text-transform: uppercase;

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
