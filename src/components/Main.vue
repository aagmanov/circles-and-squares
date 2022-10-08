<script setup lang="ts">
import type { FigureColor, Figure } from '@/types'
import { visibleFigures } from '@/composables/useFigures'

const colors = {
  'blue': 'bg-blue-500',
  'green': 'bg-green-500',
  'red': 'bg-red-500',
  'yellow': 'bg-yellow-500',
}

const darkenedColors = {
  'blue': 'bg-blue-700',
  'green': 'bg-green-700',
  'red': 'bg-red-700',
  'yellow': 'bg-yellow-700',
}

const getFigureColor = (color: FigureColor, isDarkened: boolean): string => {
  return isDarkened ? darkenedColors[color] : colors[color]
}
</script>

<template>
  <main class="p-2 flex grow justify-center items-center">
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="figure in visibleFigures"
        class="w-[70px] h-[70px] flex justify-center items-center"
      >
        <div 
          :class="['w-full h-full', {'rounded-full': figure.shape == 'circle'},
                   getFigureColor(figure.color, figure.isDarkened)]"
        />
      </div>
    </div>
  </main>
</template>