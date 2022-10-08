import type { FigureShape, FigureColor, Figure } from '@/types'
import { getRandomNumber } from '@/utils/numbers'

const shapes: FigureShape[] = ['circle', 'square']
const colors: FigureColor[] = ['blue', 'green', 'red', 'yellow']

export const generateFigures = (amount: number): Figure[] => {
  const figures: Figure[] = []

  for (let i = 0; i < amount; i++) {
    figures.push({
      shape: shapes[getRandomNumber(shapes.length - 1)],
      color: colors[getRandomNumber(colors.length - 1)],
      isDarkened: !!getRandomNumber(1)
    })
  }

  return figures
}
