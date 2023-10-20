<template>
  <v-layout ref="app" class="rounded rounded-md">
    <app-bar />

    <v-main class="d-flex align-center justify-center">
      <NuxtPage />
    </v-main>

    <v-footer app name="footer">
      <p class="text-center">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </p>
    </v-footer>
  </v-layout>
</template>
<script lang="ts" setup>
import { AppBar } from './components';
</script>
