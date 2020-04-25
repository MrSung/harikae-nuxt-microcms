<template>
  <PageSubProjectLightbox :current-path-project="currentPathProject">
    <PageSubProjectArticles
      :project-heading-en="currentPathProject.projectHeadingEn"
      :project-content-en="currentPathProject.projectContentEn"
      :project-heading-ja="currentPathProject.projectHeadingJa"
      :project-content-ja="currentPathProject.projectContentJa"
    />
  </PageSubProjectLightbox>
</template>

<script>
import { API_BASE_URL, API_KEY } from '~/config/microcms'
import PageSubProjectLightbox from '~/components/PageSubProjectLightbox.vue'
import PageSubProjectArticles from '~/components/PageSubProjectArticles.vue'

export default {
  components: {
    PageSubProjectLightbox,
    PageSubProjectArticles,
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
  computed: {
    currentPathProject() {
      const { project: projectName } = this.$route.params
      return this.projectResponseData.find(
        (obj) => obj.projectSlug === projectName
      )
    },
  },
  head: () => ({
    bodyAttrs: {
      class: 'page-project',
    },
  }),
}
</script>
