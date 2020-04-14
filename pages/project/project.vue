<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.project">
        <ul :class="$style.projectThumbs">
          <li
            v-for="(projectItem, index) in projectItems"
            :key="projectItem.id"
            :class="$style.projectThumb"
          >
            <a
              href="#"
              :class="$style.projectThumbLink"
              @click.prevent="openLightboxOnSlide(index + 1)"
            >
              <img :src="projectItem" alt="" />
            </a>
          </li>
        </ul>
        <div :class="$style.dualArticles">
          <article :class="$style.dualArticle">
            <h2 :class="$style.dualArticleHeading">POP CLASSIC</h2>
            <p :class="$style.dualArticleParagraph">
              Chiko Hashimoto who has engaged in textiles, knitting, patterns,
              and Nao Harikae who has been engaged in interior, architectural
              design have developed a collection.<br />
              Harikae careate the contemporary Japanese tradition and way of
              life.
            </p>
          </article>
          <article :class="$style.dualArticle">
            <h2 :class="$style.dualArticleHeading">POP CLASSIC</h2>
            <p :class="$style.dualArticleParagraph">
              デザイナーの橋本千子、クリエイティブディレクターで建築家の張替那麻によりデザインを展開。ハリカエは、シルエットの美しさや着心地の良さを感じられるように、編みや織り、染めやプリントによる素材づくり、それを活かすフォルムを大事にしている。<br />
              されに持ち主が長く使い続けられるように、じっくり味わえるディテールや着方の自由度の高さを大切にしている。
            </p>
          </article>
        </div>
      </div>
    </div>
    <FsLightbox :toggler="toggler" :slide="slide" :sources="projectItems" />
  </div>
</template>

<script>
import FsLightbox from 'fslightbox-vue'

export default {
  components: {
    FsLightbox
  },
  data: () => ({
    toggler: false,
    slide: 1,
    projectItems: [
      '/img/project-pop-classic-00.jpg',
      '/img/project-pop-classic-01.jpg',
      '/img/project-pop-classic-02.jpg',
      '/img/project-pop-classic-03.jpg',
      '/img/project-pop-classic-04.jpg',
      '/img/project-pop-classic-05.jpg',
      '/img/project-pop-classic-06.jpg',
      '/img/project-pop-classic-07.jpg',
      '/img/project-pop-classic-08.jpg',
      '/img/project-pop-classic-09.jpg',
      '/img/project-pop-classic-10.jpg',
      '/img/project-pop-classic-11.jpg',
      '/img/project-pop-classic-12.jpg',
      '/img/project-pop-classic-13.jpg',
      '/img/project-pop-classic-14.jpg'
    ]
  }),
  methods: {
    openLightboxOnSlide(number) {
      this.slide = number
      this.toggler = !this.toggler
    }
  }
}
</script>

<style lang="scss">
.fslightbox-slash {
  transform: rotate(0);
}

.fslightbox-toolbar-button[title^='Enter'] {
  display: none;
}

.fslightbox-slide-btn-previous-container {
  cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTcxIiB2aWV3Qm94PSIwIDAgODcgMTcxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bGluZSB4MT0iODYuMTQ1NyIgeTE9IjE2OS41NiIgeDI9IjEuMjkyODkiIHkyPSI4NC43MDcxIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9IjEuMjkyOTIiIHkxPSI4Ni4xNDU3IiB4Mj0iODYuMTQ1NyIgeTI9IjEuMjkyOTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K),
    pointer;
}

.fslightbox-slide-btn-next-container {
  cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTcxIiB2aWV3Qm94PSIwIDAgODcgMTcxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bGluZSB4MT0iMC43MDcxMzciIHkxPSIxLjI5Mjg5IiB4Mj0iODUuNTYiIHkyPSI4Ni4xNDU3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGxpbmUgeDE9Ijg1LjU1OTkiIHkxPSI4NC43MDcxIiB4Mj0iMC43MDcxMDgiIHkyPSIxNjkuNTYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K),
    pointer;
}

.fslightbox-slide-btn {
  visibility: hidden;
}

.fslightbox-slide-btn-previous-container {
  @include mq(sm) {
    padding-bottom: 120px;
    padding-right: 120px;
    padding-top: 120px;
  }
}

.fslightbox-slide-btn-next-container {
  @include mq(sm) {
    padding-bottom: 120px;
    padding-left: 120px;
    padding-top: 120px;
  }
}
</style>

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
    background-color: $color-2f3fef;
    content: '';
    display: block;
  }
}

.projectThumbLink {
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.3;
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
