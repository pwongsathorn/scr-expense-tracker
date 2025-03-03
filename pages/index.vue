<script setup lang="ts">
import { useLocale } from 'vuetify'
import ExpenseForm from '@/components/forms/ExpenseForm.vue'

const { current, t } = useLocale()

function changeLocale(locale: string) {
  current.value = locale
}
</script>

<template>
  <h1>
    <span>
      {{ current }}
    </span>
  </h1>
  <v-card> </v-card>
  <ExpenseForm />
</template>
