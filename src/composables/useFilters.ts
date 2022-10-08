import type { Ref } from 'vue'
import type { FigureShapes, FigureColors, FigureShade } from '@/types'
import { ref, reactive } from 'vue'

export const shapes: FigureShapes = reactive({
  circle: true,
  square: true
})

export const colors: FigureColors = reactive({
  blue: true,
  green: true,
  red: true,
  yellow: true
})

export const shade: Ref<FigureShade | 'all'> = ref('all')

export const x = (isDarkened: boolean): boolean => {
  if (shade.value === 'all') {
    return true
  }

  if (shade.value === 'normal' && !isDarkened) {
    return true
  }

  if (shade.value === 'darkened' && isDarkened) {
    return true
  }

  return false
}