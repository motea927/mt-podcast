<template>
  <div
    class="w-full p-4 mb-5 duration-300 ease-in-out bg-white rounded shadow-lg cursor-pointer  hover:transform hover:-translate-y-1 ransition"
  >
    <div
      class="flex flex-col items-center justify-center h-full text-center  sm:flex-row sm:justify-start sm:text-left"
    >
      <img
        alt="team"
        class="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg  sm:mb-0"
        :src="image"
      />
      <div class="flex-grow sm:pl-8">
        <h2 class="text-lg font-medium text-gray-900 title-font">
          {{ title }}
        </h2>
        <h3 class="mb-3 text-gray-500">{{ pubDate }}</h3>
        <p class="mb-4 episode-description">
          {{ description }}
        </p>
        <span class="inline-flex">{{ timeText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
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
    description: {
      type: String,
      required: true,
    },
    pubDate: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const timeText = computed(() => {
      const minutes = Math.floor(props.duration / 60)
      const second = props.duration % 60
      return `${minutes} 分 ${second} 秒`
    })

    return { timeText }
  },
}
</script>

<style>
.episode-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
