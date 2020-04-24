<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.project">
        <ul :class="$style.projectThumbs">
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
              :class="$style.projectThumbLink"
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
        <PageSubProjectArticles
          :project-heading-en="currentPathProject.projectHeadingEn"
          :project-content-en="currentPathProject.projectContentEn"
          :project-heading-ja="currentPathProject.projectHeadingJa"
          :project-content-ja="currentPathProject.projectContentJa"
        />
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
import { API_BASE_URL, API_KEY } from '~/config/microcms'
import PageSubProjectArticles from '~/components/PageSubProjectArticles.vue'

export default {
  components: {
    PageSubProjectArticles,
    FsLightbox,
  },
  async asyncData({ $axios }) {
    const { contents: projectResponseData } = await $axios.$get(
      `${API_BASE_URL}/project`,
      {
        headers: { 'X-API-KEY': API_KEY },
      }
    )
    return { projectResponseData }
  },
  data: () => ({
    toggler: false,
    slide: 1,
    isMounted: false,
  }),
  computed: {
    currentPathProject() {
      const { project: projectName } = this.$route.params
      return this.projectResponseData.find(
        (obj) => obj.projectSlug === projectName
      )
    },
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
    // Defer the callback to be executed after the next DOM update cycle
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
  head: () => ({
    bodyAttrs: {
      class: 'page-project',
    },
  }),
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

  &::before {
    background-color: $color-ffffff;
    content: '';
    display: block;
  }

  &--landscape {
    @include asr(3, 2);

    @include mq(sm) {
      width: 393.3333px;
    }

    @include mq(xs) {
      width: 50%;
    }
  }

  &--mounted::before {
    background-color: $color-001247;
  }
}

.projectThumbLink {
  transition: opacity 0.2s $trans-timing-func;

  &:hover {
    opacity: 0.1;
  }
}
</style>
