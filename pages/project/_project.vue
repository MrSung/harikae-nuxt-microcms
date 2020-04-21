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
              isMounted && $style['projectThumb--mounted']
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
        <div :class="$style.dualArticles">
          <article :class="$style.dualArticle">
            <h2 :class="$style.dualArticleHeading">
              {{ currentPathProject.projectHeadingEn }}
            </h2>
            <div
              :class="$style.dualArticleParagraph"
              v-html="currentPathProject.projectContentEn"
            ></div>
          </article>
          <article :class="$style.dualArticle">
            <h2 :class="$style.dualArticleHeading">
              {{ currentPathProject.projectHeadingJa }}
            </h2>
            <div
              :class="$style.dualArticleParagraph"
              v-html="currentPathProject.projectContentJa"
            ></div>
          </article>
        </div>
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

export default {
  components: {
    FsLightbox
  },
  async asyncData({ $axios }) {
    const { contents: projectResponseData } = await $axios.$get(
      `${API_BASE_URL}/project`,
      {
        headers: { 'X-API-KEY': API_KEY }
      }
    )
    return { projectResponseData }
  },
  data: () => ({
    toggler: false,
    slide: 1,
    isMounted: false
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
        id: nanoid()
      }))
    },
    projectGalleryImagesUrl() {
      return this.projectGalleryImages.map(
        (image) => image.projectGalleryImage.url
      )
    }
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
    }
  }
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

  &--mounted::before {
    background-color: $color-001247;
  }
}

.projectThumbLink {
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.1;
  }
}

.dualArticles {
  padding-top: 32px;

  @include mq(sm) {
    display: flex;
  }
}

.dualArticle {
  @include mq(sm) {
    flex-basis: 50%;
  }

  &:not(:first-of-type) {
    @include mq(sm) {
      margin-left: 16px;
    }

    @include mq(xs) {
      margin-top: 28px;
    }
  }
}

.dualArticleHeading {
  margin-bottom: 0.6em;
}
</style>
