import { ref } from '@vue/reactivity'
import { axiosInstance } from '@/composable/api/axios'

const episodeAPI = axiosInstance()

export const useEpisode = () => {
  const error = ref('')
  const isLoading = ref('')
  const episodes = ref(null)
  const feed = ref(null)

  const url = encodeURI(import.meta.env.VITE_RSS_FEED_URL)

  const getEpisodes = async () => {
    isLoading.value = true
    error.value = ''

    try {
      const response = await episodeAPI.get('', {
        params: {
          rss_url: url,
        },
      })

      episodes.value = response.data.items
      feed.value = response.data.feed
      isLoading.value = false
    } catch (e) {
      isLoading.value = false
      error.value = e.response.data || e.message
    }
  }

  return { episodes, feed, error, getEpisodes, isLoading }
}
