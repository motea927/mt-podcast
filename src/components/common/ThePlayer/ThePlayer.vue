<template>
  <div class="fixed bottom-0 left-0 right-0 border-t">
    <ThePlayerSeekBar
      @onClickSeekBar="onMutationTime"
      :currentEpisode="currentEpisode"
      :currentTime="currentTime"
      :duration="duration"
    />

    <ThePlayerControlBar
      @onClickPlay="onClickPlay"
      @onClickFastForward="onMutationTime"
      @onClickRewind="onMutationTime"
      @onChangePlaybackRate="onChangePlaybackRate"
      @onChangeVolume="onChangeVolume"
      :isPlay="isPlay"
      :currentEpisode="currentEpisode"
      :currentTime="currentTime"
      :duration="duration"
      :currentIndex="currentIndex"
      :playbackRate="playbackRate"
      :volume="volume"
    />
  </div>
</template>

<script>
// Components
import ThePlayerSeekBar from '@/components/common/ThePlayer/ThePlayerSeekBar.vue'
import ThePlayerControlBar from '@/components/common/ThePlayer/ThePlayerControlBar.vue'

// Modules
import { computed, ref, toRefs } from '@vue/reactivity'
import { onBeforeUnmount, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  props: {
    currentEpisode: {
      type: Object,
      required: true,
    },
  },
  components: { ThePlayerSeekBar, ThePlayerControlBar },
  setup(props) {
    const store = useStore()
    const audio = document.createElement('audio')

    const currentTime = ref(0)
    const onTimeUpdate = () => {
      currentTime.value = audio.currentTime
    }

    const playList = computed(() => store.state.playList)

    const currentIndex = computed(() => {
      const index = playList.value.findIndex(
        (episode) => episode.guid === props.currentEpisode.guid
      )
      return index
    })

    const onEnded = () => {
      if (
        currentIndex.value === playList.value.length - 1 ||
        currentIndex.value === -1
      ) {
        return
      }

      const newEpisode = playList.value[currentIndex.value + 1]
      store.commit('setCurrentEpisode', newEpisode)
    }

    const onloadedmetadata = () => {
      duration.value = audio.duration
      if (!isPlay.value) return
      audio.play()
    }
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('loadedmetadata', onloadedmetadata)
    onBeforeUnmount(() => {
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('loadedmetadata', onloadedmetadata)
    })

    const onMutationTime = (newTime) => {
      currentTime.value = newTime
      audio.currentTime = newTime
    }

    const duration = ref(0)

    const isPlay = ref(false)

    const onClickPlay = () => {
      if (isPlay.value) {
        audio.pause()
        isPlay.value = false
        return
      }

      if (!isPlay.value) {
        audio.play()
        isPlay.value = true
        return
      }
    }

    const playbackRate = ref(1)
    const onChangePlaybackRate = (rate) => {
      playbackRate.value = rate
      audio.playbackRate = rate
    }

    const volume = ref(1)
    const onChangeVolume = (newVolume) => {
      volume.value = newVolume
      audio.volume = newVolume
    }

    const onChangeEpisode = (episode) => {
      audio.src = episode.enclosure.link
      audio.currentTime = 0
      audio.volume = volume.value
      audio.playbackRate = playbackRate.value
      isPlay.value = true
    }

    const { currentEpisode } = toRefs(props)
    watch(
      currentEpisode,
      (episode, prevEpisode) => {
        onChangeEpisode(episode)
      },
      {
        immediate: true,
      }
    )

    return {
      onClickPlay,
      currentTime,
      duration,
      onTimeUpdate,
      onMutationTime,
      isPlay,
      currentIndex,
      volume,
      onChangeVolume,
      playbackRate,
      onChangePlaybackRate,
    }
  },
}
</script>

<style>
input[type='range'] {
  -webkit-appearance: none !important;
  margin-top: 10px;
  padding: 0px;
  background: #f2eae4;
  height: 5px;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 5px;
}

input[type='range']::-ms-fill-lower {
  background: #f2eae4;
}

input[type='range']::-ms-fill-upper {
  background: #f2eae4;
}

input[type='range']::-moz-range-track {
  border: none;
  background: #f2eae4;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  background: #ddb059;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-shadow: -100vw 0 0 100vw #294c60;
}

input[type='range']::-moz-range-thumb {
  background: #ddb059;
  height: 10px;
  width: 10px;
  border-radius: 100%;
}

input[type='range']::-ms-thumb {
  -webkit-appearance: none !important;
  background: #ddb059;
  height: 10px;
  width: 10px;
  border-radius: 100%;
}
</style>
