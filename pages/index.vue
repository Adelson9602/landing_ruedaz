<template>
  <v-container>
    <home />

    <step-parking />

    <videos />

    <v-row>
      <v-col cols="12">
        <h2>Ruedaz para Empresas</h2>
      </v-col>
      <v-col cols="12">
        <v-img
          src="https://picsum.photos/350/165?random"
          height="500"
          cover
          class="bg-grey-lighten-2"
        >
          <h1>RUEDAZ CORP</h1>
          <p>
            La oportunidad para ofrecer beneficios a tus clientes y empleados.
            Autogestión de planes a la medida del presupuesto.
          </p>
        </v-img>
      </v-col>
      <v-col cols="12">
        <v-img
          src="https://picsum.photos/350/165?random"
          height="500"
          cover
          class="bg-grey-lighten-2"
        >
          <h1>RUEDAZ PARTNERS</h1>
          <p>
            La oportunidad para ofrecer beneficios a tus clientes y empleados.
            Autogestión de planes a la medida del presupuesto.
          </p>
        </v-img>
      </v-col>

      <help />
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { Videos, Help, Home, StepParking } from '../components';
</script>

<style lang="scss"></style>
