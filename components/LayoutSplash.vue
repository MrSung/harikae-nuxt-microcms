<template>
  <transition name="splash">
    <div v-if="showSplash" class="splash" :class="$style.splash">
      <transition name="splashLogo">
        <div v-show="showSplashLogo" :class="$style.splashInner">
          <img
            src="~/assets/img/harikae-logo.svg"
            alt="Harikae"
            :class="$style.splashLogo"
            width="200"
            height="32"
          />
          <p :class="$style.splashMessage">fashion, architecture, ...</p>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showSplash: {
      type: Boolean,
      required: true,
    },
    showSplashLogo: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.7s $easeInOutCirc;
}

.splashLogo-enter-active,
.splashLogo-leave-active {
  transition: opacity 0.3s $trans-timing-func;
}

.splashLogo-enter,
.splashLogo-leave-to {
  opacity: 0;
}

.splash-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" module>
.button {
  left: 0;
  position: fixed;
  top: 0;
  z-index: 10000;
}

.splash {
  align-items: center;
  background-color: $color-ffffff;
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: $z-1040;
}

.splashInner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;

  @include mq(sm) {
    align-items: flex-end;
    flex-direction: row;
  }
}

.splashLogo {
  margin-bottom: 8px;

  @include mq(sm) {
    margin-bottom: 0;
    margin-right: 20px;
  }
}

.splashMessage {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;

  @include mq(sm) {
    line-height: 1;
  }
}
</style>
