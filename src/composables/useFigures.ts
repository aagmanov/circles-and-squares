import type { ComputedRef } from 'vue'
import type { FigureShape, FigureColor, Figure } from '@/types'
import { computed } from 'vue'
import {
  shapes as filterShapes,
  colors as filterColors,
  x
} from '@/composables/useFilters'
import { getPseudoRandomNumber } from '@/utils/numbers'

const shapes: FigureShape[] = ['circle', 'square']
const colors: FigureColor[] = ['blue', 'green', 'red', 'yellow']

let figures: Figure[] = []

export const visibleFigures: ComputedRef<Figure[]> = computed(() =>
  figures.filter(figure =>
    filterShapes[figure.shape] && filterColors[figure.color] && x(figure.isDarkened)
  )
)

export const generateFigures = (amount: number): void => {
  for (let i = 0; i < amount; i++) {
    figures.push({
      shape: shapes[getPseudoRandomNumber(shapes.length - 1)],
      color: colors[getPseudoRandomNumber(colors.length - 1)],
      isDarkened: !!getPseudoRandomNumber(1)
    })
  }
}
