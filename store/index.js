import axios from 'axios'
import { nanoid } from 'nanoid'

const apiSubmenuProject = `${process.env.API_BASE_URL}/submenu/amrAc0nY1`

export const state = () => ({
  submenuProjectItems: null,
  swiperSetOnLoad: false,
})

export const getters = {
  submenuProjectItems: (state) => {
    if (!state.submenuProjectItems) return null
    return state.submenuProjectItems.map((submenuItem) => ({
      ...submenuItem,
      id: nanoid(),
    }))
  },
}

export const mutations = {
  setSubmenuProjectItems(state, payload) {
    state.submenuProjectItems = payload
  },
  setSwiperSetOnLoad(state, payload) {
    state.swiperSetOnLoad = payload
  },
}

export const actions = {
  async getSubmenuProjectItems({ commit }) {
    const { data: responseDataProject } = await axios.get(apiSubmenuProject, {
      headers: { 'X-API-KEY': process.env.API_KEY },
    })
    commit('setSubmenuProjectItems', responseDataProject.submenuItems)
  },
  setSwiperSetOnLoad({ commit }, payload) {
    commit('setSwiperSetOnLoad', payload)
  },
}
