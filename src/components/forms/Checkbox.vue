<script setup lang="ts">
import type { WritableComputedRef } from 'vue'
import { computed } from 'vue'
import { getRandomString } from '@/utils/strings'

const props = defineProps<{
  modelValue: boolean
  label: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const value: WritableComputedRef<boolean> = computed({
  get: (): boolean => props.modelValue,
  set: (value: boolean): void => emit('update:modelValue', value) 
}) 

const id: string = `checkbox-${getRandomString(4)}`
</script>

<template>
  <div class="space-x-1">
    <input type="checkbox" :id="id" v-model="value" />
    <label :for="id">{{ label }}</label>
  </div>
</template>