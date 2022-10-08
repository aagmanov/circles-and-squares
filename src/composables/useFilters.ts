import type { Ref } from 'vue'
import type { FigureShapes, FigureColors, FigureShade } from '@/types'
import { ref, reactive, computed } from 'vue'

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

export const filterShade = reactive({
  normal: computed(() => ['all', 'normal'].includes(shade.value)),
  darkened: computed(() => ['all', 'darkened'].includes(shade.value)),
})
