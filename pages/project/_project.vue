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
import PageSubProjectLightbox from '~/components/PageSubProjectLightbox.vue'
import PageSubProjectArticles from '~/components/PageSubProjectArticles.vue'

export default {
  components: {
    PageSubProjectLightbox,
    PageSubProjectArticles,
  },
  async asyncData({ $axios }) {
    const { contents: projectResponseData } = await $axios.$get(
      `${process.env.API_BASE_URL}/project`,
      {
        headers: { 'X-API-KEY': process.env.API_KEY },
      }
    )
    return { projectResponseData }
  },
  head() {
    const title = this.currentPathProject
      ? this.currentPathProject.projectHeadingEn
      : 'Project showcase'
    return {
      title,
      bodyAttrs: {
        class: 'page-project',
      },
    }
  },
  computed: {
    currentPathProject() {
      const { project: projectName } = this.$route.params
      return this.projectResponseData.find(
        (obj) => obj.projectSlug === projectName
      )
    },
  },
}
</script>
