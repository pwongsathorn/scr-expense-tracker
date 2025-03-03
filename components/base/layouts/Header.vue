<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const currentTheme = theme.name
</script>

<template>
  <v-app-bar :theme="currentTheme" flat color="background" density="compact">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>Title</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

  <v-divider></v-divider>
</template>
