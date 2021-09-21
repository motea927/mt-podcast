<template>
  <div
    class="grid items-center grid-cols-5 px-1 py-4 text-black  bg-gray-50 lg:rounded-b-xl sm:px-3 lg:px-1 xl:px-3 sm:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7"
  >
    <!-- 聲音控制 -->
    <button type="button" class="flex flex-wrap mx-auto mb-2">
      <svg
        t="1632203862632"
        class="mx-auto icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2409"
        width="24"
        height="24"
      >
        <path
          d="M430.1 163.9L256 320H115.2C86.9 320 64 342.9 64 371.2v281.6c0 28.3 22.9 51.2 51.2 51.2H256l174.1 156.1c33.8 25.3 81.9 1.2 81.9-41V204.9c0-42.2-48.2-66.3-81.9-41zM700 357.3c-19.6-17.2-51.5-17.2-71.1 0-9.8 8.5-14.7 19.8-14.7 31.1s4.9 22.5 14.7 31c28.4 24.8 45.7 57.9 45.7 93s-17.3 68.1-45.7 93c-19.6 17.2-19.6 45 0 62.2s51.4 17.1 71.1 0c47.4-41.5 73.5-96.6 73.5-155.2 0-58.6-26.1-113.7-73.5-155.1z"
          p-id="2410"
        ></path>
        <path
          d="M834.8 237.7c-20.2-18.3-52.8-18.3-73 0-10.1 9.1-15.1 21.1-15.1 33.1 0.1 12.7 5.6 24.7 15.1 33.1 61.2 55.6 98.3 129.5 98.3 208.1S823 664.5 761.8 720c-20.2 18.3-20.2 47.9 0 66.2s52.8 18.3 73 0C915.5 713 960 615.6 960 512s-44.5-201-125.2-274.3z"
          p-id="2411"
        ></path>
      </svg>
      <input
        type="range"
        class="w-full"
        step="1"
        min="0"
        max="100"
        :value="volume * 100"
        @input="onChangeVolume"
      />
    </button>

    <!-- 上一集 -->
    <button
      type="button"
      class="hidden mx-auto sm:block lg:hidden xl:block"
      :class="disabledPrevButton ? 'cursor-not-allowed text-gray-300' : ''"
      @click="onClickPrevEpisode"
      :disabled="disabledPrevButton"
    >
      <svg width="17" height="18">
        <path d="M0 0h2v18H0V0zM4 9l13-9v18L4 9z" fill="currentColor" />
      </svg>
    </button>

    <!-- 倒帶30秒 -->
    <button type="button" class="mx-auto" @click="onClickRewind">
      <svg width="34" height="39" fill="none">
        <path
          d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
          fill="currentColor"
        />
        <path
          d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
      </svg>
    </button>

    <!-- 播放 -->
    <button type="button" class="mx-auto" @click="onClickPlay">
      <svg v-show="isPlay" width="50" height="50" fill="none">
        <circle
          class="text-gray-300 dark:text-gray-500"
          cx="25"
          cy="25"
          r="24"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" />
      </svg>
      <svg
        v-show="!isPlay"
        t="1632127702018"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2403"
        width="50"
        height="50"
      >
        <path
          d="M512 0C227.555556 0 0 227.555556 0 512c0 284.444444 227.555556 512 512 512 284.444444 0 512-227.555556 512-512C1024 227.555556 796.444444 0 512 0zM716.8 551.822222l-244.622222 182.044444C438.044444 750.933333 398.222222 728.177778 398.222222 694.044444L398.222222 335.644444c0-34.133333 39.822222-56.888889 73.955556-39.822222l244.622222 176.355556C750.933333 489.244444 750.933333 534.755556 716.8 551.822222z"
          p-id="2404"
          fill="currentColor"
        ></path>
      </svg>
    </button>

    <!-- 快進三十秒 -->
    <button type="button" class="mx-auto" @click="onClickFastForward">
      <svg width="34" height="39" fill="none">
        <path
          d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z"
          fill="currentColor"
        />
        <path
          d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6"
          stroke="currentColor"
          stroke-width="1.5"
        />
        <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
      </svg>
    </button>

    <!-- 下一集 -->
    <button
      type="button"
      class="hidden mx-auto sm:block lg:hidden xl:block"
      :class="disabledNextButton ? 'cursor-not-allowed text-gray-300' : ''"
      @click="onClickNextEpisode"
      :disabled="disabledNextButton"
    >
      <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
        <path d="M17 0H15V18H17V0Z" fill="currentColor" />
        <path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
      </svg>
    </button>

    <!-- 播放速率 -->
    <button
      type="button"
      class="
        mx-auto
        border border-gray-300
        rounded-md
        text-sm
        font-medium
        py-0.5
        px-2
        text-gray-500
        dark:border-gray-600 dark:text-gray-400
        relative
      "
      @click="showPlaybackRateList = !showPlaybackRateList"
    >
      {{ playbackRate }}x

      <ul
        v-show="showPlaybackRateList"
        class="absolute left-0 text-white transform -translate-x-full bg-gray-800 rounded  bottom-8 opacity-80"
      >
        <li
          v-for="playbackRate in playbackRateList"
          :key="playbackRate"
          class="p-2"
          @click="onChangePlaybackRate(playbackRate)"
        >
          {{ playbackRate.toString() }}
        </li>
      </ul>
    </button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  props: {
    currentEpisode: {
      type: Object,
      required: true,
    },
    isPlay: {
      type: Boolean,
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
    currentIndex: {
      type: Number,
      required: true,
    },
    playbackRate: {
      type: Number,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const store = useStore()

    const onClickPlay = () => ctx.emit('onClickPlay')

    const onClickRewind = () => {
      const rewindTime = Math.round(props.currentTime - 30)
      const newTime = rewindTime < 0 ? 0 : rewindTime
      ctx.emit('onClickRewind', newTime)
    }

    const onClickFastForward = () => {
      const fastForwardTime = Math.round(props.currentTime + 30)
      const newTime =
        fastForwardTime > props.duration ? props.duration : fastForwardTime
      ctx.emit('onClickFastForward', newTime)
    }

    const playList = computed(() => store.state.playList)

    const disabledPrevButton = computed(() => {
      return props.currentIndex === 0
    })

    const disabledNextButton = computed(() => {
      return props.currentIndex === playList.value.length - 1
    })

    const onClickPrevEpisode = () => {
      if (props.currentIndex === 0 || props.currentIndex === -1) return

      const newEpisode = playList.value[props.currentIndex - 1]
      store.commit('setCurrentEpisode', newEpisode)
    }

    const onClickNextEpisode = () => {
      if (
        props.currentIndex === playList.value.length - 1 ||
        props.currentIndex === -1
      )
        return

      const newEpisode = playList.value[props.currentIndex + 1]
      store.commit('setCurrentEpisode', newEpisode)
    }

    const showPlaybackRateList = ref(false)
    const playbackRateList = [0.5, 0.75, 1.0, 1.25, 1.5]
    const onChangePlaybackRate = (playbackRate) => {
      ctx.emit('onChangePlaybackRate', playbackRate)
    }

    const onChangeVolume = (e) => {
      const newVolume = e.target.value / 100
      ctx.emit('onChangeVolume', newVolume)
    }

    return {
      onClickPlay,
      onClickRewind,
      onClickFastForward,
      disabledPrevButton,
      disabledNextButton,
      onClickPrevEpisode,
      onClickNextEpisode,
      playbackRateList,
      onChangePlaybackRate,
      showPlaybackRateList,
      onChangeVolume,
    }
  },
}
</script>

<style></style>
