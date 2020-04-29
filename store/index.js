import axios from 'axios'
import { nanoid } from 'nanoid'

const apiSubmenu = `${process.env.API_BASE_URL}/submenu`

export const state = () => ({
  submenuItems: null,
  swiperSetOnLoad: false,
})

export const getters = {
  submenuItems: (state) => {
    if (!state.submenuItems) return null
    const { contents: submenuContents } = state.submenuItems
    return submenuContents
      .map((content) => ({
        slug: content.submenuFlag,
        items: content.submenuItems,
      }))
      .map((submenuItem) =>
        submenuItem.items.map((item) => ({
          ...item,
          id: nanoid(),
          slug: submenuItem.slug,
        }))
      )[0]
  },
}

export const mutations = {
  setSubmenuItems(state, payload) {
    state.submenuItems = payload
  },
  setSwiperSetOnLoad(state, payload) {
    state.swiperSetOnLoad = payload
  },
}

export const actions = {
  async getSubmenuData({ commit }) {
    const { data: responseData } = await axios.get(apiSubmenu, {
      headers: { 'X-API-KEY': process.env.API_KEY },
    })
    commit('setSubmenuItems', responseData)
  },
  setSwiperSetOnLoad({ commit }, payload) {
    commit('setSwiperSetOnLoad', payload)
  },
}
