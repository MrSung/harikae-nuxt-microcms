<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.project">
        <ul
          :class="[
            $style.projectThumbs,
            currentPathProject.projectModeLandscape &&
              $style['projectThumbs--landscape'],
          ]"
        >
          <li
            v-for="(projectItem, index) in projectGalleryImages"
            :key="projectItem.id"
            :class="[
              $style.projectThumb,
              currentPathProject.projectModeLandscape &&
                $style['projectThumb--landscape'],
              isMounted && $style['projectThumb--mounted'],
            ]"
          >
            <a
              href="#"
              :class="[
                $style.projectThumbLink,
                isMounted && $style['projectThumbLink--mounted'],
              ]"
              @click.prevent="openLightboxOnSlide(index + 1)"
            >
              <img
                ref="galleryImages"
                v-lazy-load
                :src="projectGalleryImagesUrl[index]"
                alt=""
              />
            </a>
          </li>
        </ul>

        <slot></slot>
      </div>
    </div>
    <FsLightbox
      :toggler="toggler"
      :slide="slide"
      :sources="projectGalleryImagesUrl"
    />
  </div>
</template>

<script>
import FsLightbox from 'fslightbox-vue'
import imagesloaded from 'imagesloaded'
import { nanoid } from 'nanoid'

export default {
  components: {
    FsLightbox,
  },
  props: {
    currentPathProject: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    toggler: false,
    slide: 1,
    isMounted: false,
  }),
  computed: {
    projectGalleryImages() {
      return this.currentPathProject.projectGalleryImages.map((obj) => ({
        ...obj,
        id: nanoid(),
      }))
    },
    projectGalleryImagesUrl() {
      return this.projectGalleryImages.map(
        (image) => image.projectGalleryImage.url
      )
    },
  },
  mounted() {
    this.$nextTick(() => {
      const { galleryImages } = this.$refs
      // After all gallery images are loaded
      imagesloaded(galleryImages, () => {
        this.isMounted = true
      })
    })
  },
  methods: {
    openLightboxOnSlide(number) {
      this.slide = number
      this.toggler = !this.toggler
    },
  },
}
</script>

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

.projectThumbs {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  [data-ua-smartphone] &--landscape {
    @include mq(xs) {
      position: relative;
    }
  }

  [data-ua-smartphone] &--landscape::after {
    @include mq(xs) {
      background-color: $color-ffffff;
      bottom: 0;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }
  }
}

.projectThumb {
  @include asr(3, 4);

  overflow-y: hidden;

  @include mq(sm) {
    width: 236px;
  }

  @include mq(xs) {
    width: 33.3333%;
  }

  &--landscape {
    @include asr(3, 2);

    @include mq(sm) {
      width: 295px;
    }

    @include mq(xs) {
      width: 50%;
    }
  }

  [data-ua-smartphone] &--landscape:nth-of-type(n + 3) {
    margin-top: -1px;
  }

  &--mounted::before {
    background-color: $color-000b47;
    content: '';
    display: block;
  }
}

.projectThumbLink {
  &--mounted {
    transition: opacity 0.2s $trans-timing-func;
  }

  &--mounted:hover {
    opacity: 0.1;
  }
}
</style>
