import type { ComputedRef } from 'vue'
import type { Figure } from '@/types'
import { computed } from 'vue'
import {
  shapes as filterShapes,
  colors as filterColors,
  filterShade
} from '@/composables/useFilters'
import { generateFigures } from '@/data/figures'

export const figures: Figure[] = generateFigures(24)

export const visibleFigures: ComputedRef<Figure[]> = computed(() =>
  figures.filter(figure =>
    filterShapes[figure.shape] 
      && filterColors[figure.color] 
      && filterShade[figure.isDarkened ? 'darkened' : 'normal']
  )
)
