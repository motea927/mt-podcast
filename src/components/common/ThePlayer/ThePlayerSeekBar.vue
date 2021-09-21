<template>
  <div
    class="p-4 pb-6 space-y-6 bg-white  sm:p-8 lg:p-4 lg:pb-6 xl:p-8 sm:space-y-8 lg:space-y-6 xl:space-y-8"
  >
    <router-link
      :to="{
        name: 'EpisodeDetail',
        query: {
          guid: currentEpisode.guid,
        },
      }"
    >
      <div
        class="
          flex
          items-center
          space-x-3.5
          sm:space-x-5
          lg:space-x-3.5
          xl:space-x-5
          hover:transform hover:-translate-y-1
          transition-transform
          ease-in-out
          duration-300
        "
      >
        <img
          :src="currentEpisode.thumbnail"
          :alt="currentEpisode.title"
          class="flex-none object-contain w-20 h-20 bg-gray-100 rounded-lg"
        />
        <div class="min-w-0 flex-auto space-y-0.5">
          <p
            class="text-sm font-semibold uppercase  text-lime-600 dark:text-lime-400 sm:text-base lg:text-sm xl:text-base"
          >
            {{ currentEpisode.title }}
          </p>
          <h2
            class="text-base font-semibold text-black truncate  dark:text-white sm:text-xl lg:text-base xl:text-xl"
          >
            {{ currentEpisode.author }}
          </h2>
        </div>
      </div>
    </router-link>

    <div class="space-y-2">
      <input
        type="range"
        class="w-full"
        step="1"
        min="0"
        :max="duration"
        :value="currentTime"
        @input="onClickSeekBar"
      />

      <div
        class="flex justify-between text-sm font-medium text-gray-500  dark:text-gray-400 tabular-nums"
      >
        <div>{{ currentTimeText }}</div>
        <div>{{ durationTimeText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'
import { useTimeTextWithColon } from '@/composable/utils/useTimeText'

export default {
  props: {
    currentEpisode: {
      type: Object,
      required: true,
    },
    currentTime: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const onClickSeekBar = (e) => {
      const newSecond = Math.round(e.target.value)

      let newTime = newSecond
      if (newSecond >= props.duration) {
        newTime = props.duration - 0.1
      }
      if (newSecond <= 0) {
        newTime = 0
      }

      ctx.emit('onClickSeekBar', newTime)
    }

    const { currentTime, duration } = toRefs(props)

    const { timeText: currentTimeText } = useTimeTextWithColon(currentTime)
    const { timeText: durationTimeText } = useTimeTextWithColon(duration)

    return {
      onClickSeekBar,
      currentTimeText,
      durationTimeText,
    }
  },
}
</script>

<style></style>
