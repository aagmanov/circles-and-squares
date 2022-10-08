<script setup lang="ts">
import { shapes } from '@/composables/useFilters'
import Checkbox from '@/components/forms/Checkbox.vue'

const emit = defineEmits<{
  (e: 'burgerButtonClick'): void 
}>()
</script>

<template>
  <header class="p-1 flex justify-between">
    <button @click="emit('burgerButtonClick')">burger</button>
    <div class="flex gap-x-2">
      <Checkbox v-model="shapes.circle" label="show circles" />
      <Checkbox v-model="shapes.square" label="show squares" />
    </div>
  </header>
</template>