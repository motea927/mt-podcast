<template>
  <main class="container p-5 mx-auto pb-96">
    <FeedSkeleton v-if="isLoading" class="mb-5" />

    <Feed
      v-else
      :image="feed.image"
      :title="feed.title"
      :description="feed.description"
      :author="feed.author"
      class="mb-5"
    />

    <section class="flex flex-wrap">
      <template v-if="isLoading">
        <EpisodeSkeleton v-for="i in 5" :key="i" />
      </template>

      <template v-else>
        <Episode
          v-for="episode in episodes"
          :key="episode.guid"
          :title="episode.title"
          :image="episode.thumbnail"
          :description="episode.description"
          :pubDate="episode.pubDate"
          :duration="episode.enclosure.duration"
          :guid="episode.guid"
        />
      </template>
    </section>
  </main>
</template>

<script>
// Components
import Feed from '@/components/Home/Feed.vue'
import FeedSkeleton from '@/components/Home/FeedSkeleton.vue'
import Episode from '@/components/Home/Episode.vue'
import EpisodeSkeleton from '@/components/Home/EpisodeSkeleton.vue'

// Api
import { useEpisode } from '@/composable/api/useEpisode'

export default {
  components: { Feed, FeedSkeleton, Episode, EpisodeSkeleton },
  setup() {
    const { episodes, feed, error, getEpisodes, isLoading } = useEpisode()
    getEpisodes()

    return { episodes, feed, isLoading }
  },
}
</script>

<style></style>
