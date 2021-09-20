import { computed } from 'vue'

export const useTimeText = (duration) => {
  const timeText = computed(() => {
    const minutes = Math.floor(duration / 60)
    const second = duration % 60
    return `${minutes} 分 ${second} 秒`
  })

  return { timeText }
}
