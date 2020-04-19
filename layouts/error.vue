<template>
  <div :class="$style.error">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="90"
      fill="#ccd0ff"
      viewBox="0 0 48 48"
    >
      <path
        d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
      />
    </svg>
    <p :class="$style.errorMessage">
      This page could not be found<br />ページが見つかりませんでした
    </p>
    <p :class="$style.errorBottom">
      <nuxt-link to="/">Back to the home page<br />ホームに戻る</nuxt-link>
    </p>
  </div>
</template>

<style lang="scss" module>
.error {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.errorMessage {
  font-size: 1.5rem;
  margin-top: 15px;
  color: $color-2b3278;
  margin-bottom: 8px;
}

.errorBottom {
  margin-bottom: 10px;

  & > a {
    display: inline-block;
  }
}
</style>
