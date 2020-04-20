import axios from 'axios'
import { nanoid } from 'nanoid'

const apiSubmenu = `${process.env.API_BASE_URL}/submenu`

export const state = () => ({
  submenuItems: null
})

export const getters = {
  submenuItems: (state) => {
    if (!state.submenuItems) return null
    const { contents: submenuContents } = state.submenuItems
    const filteredContents = submenuContents.map((content) => ({
      slug: content.submenuFlag,
      items: content.submenuItems
    }))
    return filteredContents.map((submenuItem) =>
      submenuItem.items.map((item) => ({
        ...item,
        id: nanoid(),
        slug: submenuItem.slug
      }))
    )[0]
  }
}

export const mutations = {
  setSubmenuItems(state, payload) {
    state.submenuItems = payload
  }
}

export const actions = {
  async init({ commit }, callback) {
    const { data: responseData } = await axios.get(apiSubmenu, {
      headers: { 'X-API-KEY': process.env.API_KEY }
    })
    commit('setSubmenuItems', responseData)
  }
}
