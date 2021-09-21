<template>
  <main class="container p-5 mx-auto pb-96">
    <OverviewSkeleton v-if="isLoading" />
    <Overview
      v-else
      :image="episodeDetail.thumbnail"
      :title="episodeDetail.title"
      :author="episodeDetail.author"
      :duration="episodeDetail.enclosure.duration"
      :pubDate="episodeDetail.pubDate"
      @onClickPlay="onClickPlay"
      class="mb-5"
    />

    <DescriptionSkeleton v-if="isLoading" />
    <Description v-else :description="episodeDetail.description" />
  </main>
</template>

<script>
// Components
import Overview from '@/components/EpisodeDetail/Overview.vue'
import OverviewSkeleton from '@/components/EpisodeDetail/OverviewSkeleton.vue'
import Description from '@/components/EpisodeDetail/Description.vue'
import DescriptionSkeleton from '@/components/EpisodeDetail/DescriptionSkeleton.vue'

// Modules
import { useRoute, useRouter } from 'vue-router'

// Api
import { useEpisodeDetail } from '@/composable/api/useEpisodeDetail'
import { useStore } from 'vuex'
import { watchEffect } from '@vue/runtime-core'

export default {
  components: {
    Overview,
    OverviewSkeleton,
    Description,
    DescriptionSkeleton,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    const { episodeDetail, error, getEpisodeDetail, isLoading } =
      useEpisodeDetail()
    watchEffect(() => {
      const { guid } = route.query
      if (!guid) {
        router.push({ name: 'Home' })
        return
      }
      getEpisodeDetail(guid)
    })

    const onClickPlay = () => {
      store.commit('setCurrentEpisode', episodeDetail.value)
    }

    return { episodeDetail, isLoading, onClickPlay }
  },
}
</script>

<style></style>
