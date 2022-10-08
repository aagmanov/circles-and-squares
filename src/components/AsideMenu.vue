<script setup lang="ts">
import { colors, shade } from '@/composables/useFilters'
import Checkbox from '@/components/forms/Checkbox.vue'
import Radio from '@/components/forms/Radio.vue'
</script>

<template>
  <aside class="absolute left-0 top-8 w-40 bg-slate-800 bg-opacity-75 space-y-2">
    <div>
      <Checkbox v-model="colors.blue" label="blue" />
      <Checkbox v-model="colors.green" label="green" />
      <Checkbox v-model="colors.red" label="red" />
      <Checkbox v-model="colors.yellow" label="yellow" />
    </div>
    <div>
      <Radio v-model="shade" value="all" label="all" />
      <Radio v-model="shade" value="normal" label="normal" />
      <Radio v-model="shade" value="darkened" label="darkened" />
    </div>
  </aside>
</template>