import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      currentEpisode: null,
      playList: [],
    }
  },
  mutations: {
    setCurrentEpisode(state, episode) {
      state.currentEpisode = episode
    },
    setPlayList(state, playList) {
      state.playList = playList
    },
  },
})

export default store
