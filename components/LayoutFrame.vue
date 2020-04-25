<template>
  <div :class="$style.frames">
    <div :class="[$style.frame, $style['frame--rightTop']]">
      <div
        :class="$style.navButtonWrap"
        @mouseover="handleNavButtonMouseOver"
        @mouseleave="handleNavButtonMouseLeave"
        @click="handleNavButtonClick"
      >
        <button
          type="button"
          :class="[
            $style.navButton,
            isNavMenuOpen && $style['navButton--navMenuOpen'],
          ]"
        >
          <span :class="$style.navButtonBar"></span>
          <span :class="$style.navButtonBar"></span>
          <span :class="$style.navButtonBar"></span>
        </button>
      </div>
    </div>
    <div
      v-show="$route.name === 'index'"
      :class="[$style.frame, $style['frame--rightBottom']]"
    >
      <a
        href="https://store.harikae-co.com/"
        :class="$style.storeLink"
        target="_blank"
      >
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
</template>

<script>
export default {
  props: {
    isNavMenuOpen: {
      type: Boolean,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleNavButtonMouseOver() {
      if (this.isMobile) return
      this.$emit('handle-nav-button-mouse-over')
    },
    handleNavButtonMouseLeave() {
      if (this.isMobile) return
      this.$emit('handle-nav-button-mouse-leave')
    },
    handleNavButtonClick() {
      if (!this.isMobile) return
      this.$emit('handle-nav-button-click')
    },
  },
}
</script>

<style lang="scss" module>
.frame {
  position: fixed;

  &--rightTop {
    display: flex;
    right: 50px;
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

  &--leftTop > a {
    display: inline-block;
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
</style>
