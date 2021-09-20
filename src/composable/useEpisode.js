import { ref } from '@vue/reactivity'
import { axiosInstance } from '@/composable/axios'

const episodeAPI = axiosInstance()

export const useEpisode = () => {
  const error = ref('')
  const isLoading = ref('')
  const episodes = ref(null)
  const feed = ref(null)

  const url =
    'https://api.soundon.fm/v2/podcasts/954689a5-3096-43a4-a80b-7810b219cef3/feed.xml'

  const getEpisode = async () => {
    isLoading.value = true
    error.value = ''

    try {
      const response = await episodeAPI.post(
        `https://api.rss2json.com/v1/api.json?rss_url=${url}`
      )

      episodes.value = response.data.items
      feed.value = response.data.feed
      isLoading.value = false
    } catch (e) {
      isLoading.value = false
      error.value = e.response.data || e.message
    }
  }

  return { episodes, feed, error, getEpisode, isLoading }
}
