import { computed } from 'vue'

export const useTimeTextWithChinese = (duration) => {
  const timeText = computed(() => {
    const minutes = Math.floor(duration.value / 60)
    const second = duration.value % 60
    return `${minutes} 分 ${second} 秒`
  })

  return { timeText }
}

export const useTimeTextWithColon = (duration) => {
  const timeText = computed(() => {
    const minutes = Math.floor(duration.value / 60)
    const formatMinutes =
      minutes.toString().length >= 2 ? minutes : `0${minutes}`
    const second = Math.ceil(duration.value % 60)
    const formatSecond = second.toString().length >= 2 ? second : `0${second}`

    return `${formatMinutes}:${formatSecond}`
  })

  return { timeText }
}
