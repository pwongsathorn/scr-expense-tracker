<script setup lang="ts">
import { useLocale } from 'vuetify'

const { t } = useLocale()
</script>

<template>
  <v-text-field label="title"></v-text-field>
  <v-text-field label="Amount" type="number" :suffix="t('utils.inputs.currencies.unit')" />
</template>
