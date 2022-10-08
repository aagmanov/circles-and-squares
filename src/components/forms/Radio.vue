<script setup lang="ts">
import type { WritableComputedRef } from 'vue'
import { computed } from 'vue'
import { getRandomString } from '@/utils/strings'

const props = defineProps<{
  modelValue: string
  value: string
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const model: WritableComputedRef<string> = computed({
  get: (): string => props.modelValue,
  set: (value: string): void => emit('update:modelValue', value) 
}) 

const id: string = `radio-${getRandomString(4)}`
</script>

<template>
  <div class="space-x-1">
    <input
      type="radio"
      :id="id"
      :value="value"
      v-model="model"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>