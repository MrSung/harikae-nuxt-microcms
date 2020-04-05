<template>
  <div :class="$style.container">
    <div :class="$style.containerInner">
      <div :class="$style.profile">
        <div :class="$style.profileThumbs">
          <div
            v-for="profileThumb in profileThumbs"
            :key="profileThumb.id"
            :class="$style.profileThumb"
          >
            <img :src="profileThumb.src" alt="" />
          </div>
        </div>
        <div :class="$style.profileArticles">
          <article :class="$style.profileArticle">
            <h2 :class="$style.profileArticleHeading">
              Profile
            </h2>
            <p :class="$style.profileArticleParagraph">
              Established in 2016. <br />Chiko Hashimoto who has engaged in
              textiles, knitting, patterns, and Nao Harikae who has engaged in
              interior, architectural design have developed a collection.
              <br />Harikae create the contemporary fashion in which "yarns,
              fabrics, silhouettes" harmonized while exploring Japanese
              tradition and way of life.
            </p>
          </article>
          <article :class="$style.profileArticle">
            <h2 :class="$style.profileArticleHeading">
              プロフィール
            </h2>
            <p :class="$style.profileArticleParagraph">
              2016年、Harikae設立。<br />デザイナーの橋本千子、クリエイティブディレクターで建築家の張替那麻によりデザインを展開。ハリカエは、シルエットの美しさや着心地の良さを感じられるように、編みや織り、染めやプリントによる素材づくり、それを活かすフォルムを大事にしている。<br />さらに持ち主が長く使い続けられるように、じっくり味わえるディテールや着方の自由度の高さを大切にしている。
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId'

export default {
  data: () => ({
    profileThumbs: [
      { id: uniqueId('profileThumb_'), src: '/img/about-thumb.jpg' },
      { id: uniqueId('profileThumb_'), src: '/img/about-thumb.jpg' },
      { id: uniqueId('profileThumb_'), src: '/img/about-thumb.jpg' }
    ]
  })
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

.profileThumbs {
  @include mq(sm) {
    display: flex;
  }
}

.profileThumb {
  @include mq(xs) {
    margin-left: auto;
    margin-right: auto;
    max-width: 254px;
  }

  &:not(:first-of-type) {
    @include mq(sm) {
      margin-left: 1px;
    }

    @include mq(xs) {
      display: none;
    }
  }

  & > img {
    height: auto;
    max-width: 100%;
  }
}

.profileArticles {
  padding-top: 32px;

  @include mq(sm) {
    display: flex;
  }
}

.profileArticle {
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

.profileArticleHeading {
  margin-bottom: 0.6em;
}
</style>
