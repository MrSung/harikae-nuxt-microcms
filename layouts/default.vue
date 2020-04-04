<template>
  <div :class="$style.wrapper">
    <div :class="$style.frames">
      <div :class="[$style.frame, $style['frame--rightTop']]">
        <div
          :class="$style.navButtonWrap"
          @mouseover="navMenuShow"
          @mouseleave="navMenuHide"
        >
          <button
            type="button"
            :class="[
              $style.navButton,
              isNavMenuOpen && $style['navButton--navMenuOpen']
            ]"
          >
            <span :class="$style.navButtonBar"></span>
            <span :class="$style.navButtonBar"></span>
            <span :class="$style.navButtonBar"></span>
          </button>
        </div>
      </div>
      <div :class="[$style.frame, $style['frame--rightBottom']]">
        <a href="javascript: void(0)" :class="$style.storeLink" target="_blank">
          <span :class="$style.storeLinkText">online store</span>
        </a>
      </div>
      <div :class="[$style.frame, $style['frame--leftTop']]">
        <nuxt-link to="/">
          <img
            src="~/assets/img/harikae-logo.svg"
            alt="Harikae"
            :class="$style.logoImg"
            width="200"
            height="32"
          />
        </nuxt-link>
      </div>
    </div>
    <nuxt />
    <nav
      :class="[$style.navMenu, isNavMenuOpen && $style['navMenu--navMenuOpen']]"
    >
      <div :class="$style.navMenuLogo">
        <img
          src="~/assets/img/harikae-logo-bright.svg"
          alt=""
          :class="[$style.navMenuLogoImg, $style.logoImg]"
          width="200"
          height="32"
        />
      </div>
      <ul
        :class="$style.navMenuUl"
        @mouseover="navMenuShow"
        @mouseleave="navMenuHide"
      >
        <li :class="$style.navMenuLi">
          <a href="about.html" :class="$style.navMenuAnchor">about</a>
        </li>
        <li :class="$style.navMenuLi">
          <a
            href="javascript: void(0)"
            :class="[
              $style.navMenuAnchor,
              isDropdownOpen && $style['navMenuAnchor--dropdownOpen']
            ]"
            @click="toggleDropdown"
          >
            project
          </a>
          <ul :class="$style.navMenuLiUl">
            <li :class="$style.navMenuLiLi">
              <a href="project1.html" :class="$style.navMenuLiAnchor"
                >POP CLASSIC</a
              >
            </li>
            <li :class="$style.navMenuLiLi">
              <a href="javascript: void(0)" :class="$style.navMenuLiAnchor"
                >Project 2</a
              >
            </li>
            <li :class="$style.navMenuLiLi">
              <a href="javascript: void(0)" :class="$style.navMenuLiAnchor"
                >Project 3</a
              >
            </li>
          </ul>
        </li>
        <li :class="$style.navMenuLi">
          <a href="process.html" :class="$style.navMenuAnchor">process</a>
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
  </div>
</template>

<script>
export default {
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

<style lang="scss" module>
.frame {
  position: fixed;

  &--rightTop {
    display: flex;
    right: 78px;
    top: 48px;
    z-index: $z-1020;

    @include mq(xs) {
      right: 15px;
      top: 20px;
    }
  }

  &--rightBottom {
    bottom: 48px;
    right: 36px;
    z-index: $z-1020;

    @include mq(xs) {
      bottom: 20px;
      right: 20px;
    }
  }

  &--leftBottom {
    bottom: 48px;
    left: 48px;
    z-index: $z-1000;

    @include mq(xs) {
      bottom: 20px;
      left: 20px;
    }
  }

  &--leftTop {
    left: 48px;
    top: 55px;
    z-index: $z-1000;

    @include mq(xs) {
      left: 15px;
      top: 26px;
    }
  }
}

.navButtonWrap {
  cursor: pointer;
  padding-bottom: 28px;
  padding-left: 28px;

  @include mq(xs) {
    padding: 0 4px;
  }
}

.navButton {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 44px;
  outline: none;
  padding: 0;
  position: relative;
  width: 40px;

  @include mq(xs) {
    height: 32px;
    width: 28px;
  }
}

.navButtonBar {
  background-color: $color-2b3278;
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.12s;
  transition-property: background-color;
  transition-timing-function: $trans-timing-func;
  width: 2px;

  &:nth-of-type(1) {
    left: 0;
  }

  &:nth-of-type(2) {
    left: 0;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    transition-duration: 0.24s;
    transition-property: height, transform;
    will-change: height;
  }

  &:nth-of-type(3) {
    right: 0;
  }

  .navButton--navMenuOpen > & {
    background-color: $color-ffffff;
  }

  .navButton--navMenuOpen > &:nth-of-type(2) {
    height: calc(100% - 4px);
    transform: rotate(90deg) translateX(2px);
  }
}

.storeLink {
  align-items: center;
  background-color: $color-2b3278;
  border: 2px solid $color-2b3278;
  color: $color-ffffff;
  display: flex;
  font-size: 12px;
  font-weight: normal;
  justify-content: center;
  overflow: hidden;
  padding: 1em 0;
  position: relative;
  text-transform: uppercase;
  width: 130px;

  @include mq(sm) {
    transition: color 0.24s $trans-timing-func;
  }

  &::before {
    @include mq(sm) {
      background-color: $color-ffffff;
      content: '';
      display: block;
      height: 200%;
      left: calc((200% + 6px) * (-1));
      position: absolute;
      transform-origin: right bottom;
      transition: transform 0.24s $trans-timing-func;
      width: calc(200% + 4px);
    }
  }

  &:hover {
    color: $color-2b3278;

    @include mq(xs) {
      color: $color-ffffff;
    }
  }

  &:hover::before {
    @include mq(sm) {
      transform: rotate(180deg) translateY(100%);
    }
  }
}

.storeLinkText {
  font-weight: bold;
  position: relative;
  z-index: $z-1000;
}

.logoImg {
  @include mq(xs) {
    width: 160px;
  }
}

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
  padding: 48px 48px 24px 28px;
  width: 150px;

  @include mq(xs) {
    padding: 0 16px 16px;
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
</style>
