<script setup lang="ts">
import Header from '@/components/base/layouts/Header.vue'
</script>

<template>
  <v-responsive>
    <v-app>
      <v-main>
        <Header />
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
