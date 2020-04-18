import axios from 'axios'

const apiProject = `${process.env.API_BASE_URL}/project`

export const state = () => ({
  navItemsProject: null
})

export const getters = {
  navItemsProject: (state) => {
    if (!state.navItemsProject) return null
    const { contents: projectContents } = state.navItemsProject
    return projectContents.map((content) => ({
      id: content.id,
      slug: content.projectSlug,
      name: content.projectHeadingEn
    }))
  }
}

export const mutations = {
  setNavItemsProject(state, payload) {
    state.navItemsProject = payload
  }
}

export const actions = {
  async init({ commit }, callback) {
    const { data: responseData } = await axios.get(apiProject, {
      headers: { 'X-API-KEY': process.env.API_KEY }
    })
    commit('setNavItemsProject', responseData)
  }
}
