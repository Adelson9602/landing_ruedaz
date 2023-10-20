<template>
  <v-row>
    <v-col cols="12">
      <h2 class="title text-center">
        <span class="text-cyan-accent-3 h4-a"> Elige el plan que mejor</span> se
        ajuste a tus necesidades y
        <span class="text-cyan-accent-3 h4-a">comienza hoy mismo</span>.
      </h2>
    </v-col>
    <v-col cols="12">
      <plan-mobile v-if="mobile" />
      <plan v-else />
    </v-col>
    <v-col cols="12">
      <plan-mobile v-if="mobile" />
      <plan v-else />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify';
import Plan from './Plan.vue';
import PlanMobile from './PlanMobile.vue';

const { mobile } = useDisplay();
</script>
<style lang=""></style>
