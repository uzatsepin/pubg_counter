import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useStore = defineStore('main', () => {
  const totalValue = ref(0)
  const level = ref(1)
  const flyImages = ref([])
  const progressBar = ref(0)
  const currentLevelName = ref('Алмаз')

  const levelThresholds = [
    { value: 100, name: 'Алмаз' },
    { value: 500, name: 'Диамант' },
    { value: 1000, name: 'Рубин' },
    { value: 3000, name: 'Сапфир' },
    { value: 5000, name: 'Изумруд' }
  ]

  const incrementCounter = () => {
    totalValue.value++
  }

  const updateProgressBar = () => {
    let currentLevelThreshold = 0
    let nextLevelThreshold = levelThresholds[0].value

    for (let i = 0; i < level.value - 1; i++) {
      currentLevelThreshold = levelThresholds[i].value
      nextLevelThreshold = levelThresholds[i + 1]?.value || currentLevelThreshold
    }

    if (totalValue.value >= nextLevelThreshold && level.value < levelThresholds.length) {
      level.value++
      currentLevelThreshold = nextLevelThreshold
      nextLevelThreshold = levelThresholds[level.value]?.value || currentLevelThreshold
    }

    const progressInCurrentLevel = totalValue.value - currentLevelThreshold
    const progressToNextLevel = nextLevelThreshold - currentLevelThreshold
    progressBar.value = (progressInCurrentLevel / progressToNextLevel) * 100
    currentLevelName.value = levelThresholds[level.value - 1]?.name || ''
  }

  watch(totalValue, updateProgressBar)

  return {
    level,
    flyImages,
    incrementCounter,
    totalValue,
    progressBar,
    currentLevelName
  }
})
