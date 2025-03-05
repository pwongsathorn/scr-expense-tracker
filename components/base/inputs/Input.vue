<script setup lang="ts">
import type { InputProps } from '@/types/components/base/input'
const { type = 'text', label = 'Input', ...props } = defineProps<InputProps>()
</script>

<template>
  <v-text-field :label="label" :type="type" :suffix="props.suffix" />
</template>
