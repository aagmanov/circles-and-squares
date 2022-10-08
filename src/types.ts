export type FigureColor = 'blue' | 'green' | 'red' | 'yellow'
export type FigureShape = 'circle' | 'square'
export type FigureShade = 'normal' | 'darkened'

export interface FigureShapes {
  circle: boolean
  square: boolean
}

export interface FigureColors {
  blue: boolean
  green: boolean
  red: boolean
  yellow: boolean
}

export interface Figure {
  color: FigureColor
  shape: FigureShape
  isDarkened: boolean
}