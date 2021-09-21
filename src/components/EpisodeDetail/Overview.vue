<template>
  <section
    class="container flex flex-col items-center p-5 mx-auto text-white rounded shadow-lg  md:flex-row md:items-start bg-primary"
  >
    <div class="w-48 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" :src="image" />
    </div>

    <div
      class="flex flex-col items-center text-center  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
    >
      <h1 class="mb-4 text-3xl font-medium title-font sm:text-4xl">
        {{ title }}
      </h1>

      <h2 class="flex items-center justify-start mb-5">
        <svg
          class="w-5 h-5 mr-2 text-white"
          t="1631894931945"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3143"
          width="128"
          height="128"
        >
          <path
            d="M998.4 972.8a51.2 51.2 0 1 1-102.4 0c0-197.568-160.832-358.4-358.4-358.4a358.848 358.848 0 0 0-358.4 358.4 51.2 51.2 0 1 1-102.4 0c0-187.776 113.024-349.312 274.368-421.12-74.24-56-123.072-144.256-123.072-244.48a307.2 307.2 0 0 1 614.4 0c0 99.456-48 187.008-121.408 243.2 163.008 71.04 277.312 233.536 277.312 422.4zM535.296 102.4a205.056 205.056 0 0 0-204.8 204.8c0 112.96 91.904 204.8 204.8 204.8 112.96 0 204.8-91.84 204.8-204.8 0-112.96-91.84-204.8-204.8-204.8z"
            fill="currentcolor"
            p-id="3144"
          ></path>
        </svg>
        {{ author }}
      </h2>

      <p class="mb-5">{{ pubDate }}</p>
      <p class="mb-5 leading-relaxed whitespace-pre-wrap">{{ timeText }}</p>

      <button @click="onClickPlay">
        <svg
          t="1632127702018"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2403"
          width="40"
          height="40"
        >
          <path
            d="M512 0C227.555556 0 0 227.555556 0 512c0 284.444444 227.555556 512 512 512 284.444444 0 512-227.555556 512-512C1024 227.555556 796.444444 0 512 0zM716.8 551.822222l-244.622222 182.044444C438.044444 750.933333 398.222222 728.177778 398.222222 694.044444L398.222222 335.644444c0-34.133333 39.822222-56.888889 73.955556-39.822222l244.622222 176.355556C750.933333 489.244444 750.933333 534.755556 716.8 551.822222z"
            p-id="2404"
            fill="#ffffff"
          ></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { useTimeTextWithChinese } from '@/composable/utils/useTimeText'
import { toRefs } from '@vue/reactivity'

export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    pubDate: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const { duration } = toRefs(props)
    const { timeText } = useTimeTextWithChinese(duration)

    const onClickPlay = () => {
      ctx.emit('onClickPlay')
    }

    return { timeText, onClickPlay }
  },
}
</script>

<style></style>
