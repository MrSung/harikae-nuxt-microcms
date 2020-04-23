import axios from 'axios'
import { nanoid } from 'nanoid'
import { API_BASE_URL, API_KEY } from '~/config/microcms'

const apiSubmenu = `${API_BASE_URL}/submenu`

export const state = () => ({
  submenuItems: null,
  loadedFirstTime: false,
})

export const getters = {
  submenuItems: (state) => {
    if (!state.submenuItems) return null
    const { contents: submenuContents } = state.submenuItems
    const filteredContents = submenuContents.map((content) => ({
      slug: content.submenuFlag,
      items: content.submenuItems,
    }))
    return filteredContents.map((submenuItem) =>
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
  setLoadedFirstTime(state, payload) {
    state.loadedFirstTime = payload
  },
}

export const actions = {
  async init({ commit }) {
    const { data: responseData } = await axios.get(apiSubmenu, {
      headers: { 'X-API-KEY': API_KEY },
    })
    commit('setSubmenuItems', responseData)
  },
  setLoadedFirstTime({ commit }, payload) {
    commit('setLoadedFirstTime', payload)
  },
}
