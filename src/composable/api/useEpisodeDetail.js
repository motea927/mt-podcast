import { ref } from '@vue/reactivity'
import { axiosInstance } from '@/composable/api/axios'
import router from '@/router'

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
        return router.push({ name: 'Home' })
      }

      episodeDetail.value = episode
      isLoading.value = false
    } catch (e) {
      isLoading.value = false
      error.value = e.message || e.response.data
    }
  }

  return { episodeDetail, error, getEpisodeDetail, isLoading }
}
