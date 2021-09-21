import { ref } from '@vue/reactivity'
import { axiosInstance } from '@/composable/api/axios'
import router from '@/router'
import store from '@/store'

const episodeAPI = axiosInstance()

export const useEpisodeDetail = () => {
  const error = ref('')
  const isLoading = ref('')
  const episodeDetail = ref(null)

  const url = encodeURI(import.meta.env.VITE_RSS_FEED_URL)

  const getEpisodeDetail = async (guid) => {
    isLoading.value = true
    error.value = ''

    try {
      if (!guid) throw new Error('請輸入guid')
      const response = await episodeAPI.get('', {
        params: {
          rss_url: url,
        },
      })
      const episode = response.data.items.find(
        (episode) => episode.guid === guid
      )

      if (!episode) {
        router.push({ name: 'Home' })
        isLoading.value = false
        return
      }

      const playList = [...response.data.items].reverse()

      episodeDetail.value = episode
      store.commit('setPlayList', playList)
      isLoading.value = false
    } catch (e) {
      isLoading.value = false
      error.value = e.message || e.response.data
    }
  }

  return { episodeDetail, error, getEpisodeDetail, isLoading }
}
