<template>
  <v-container>
    <home />

    <v-row>
      <v-col cols="12">
        <v-list :items="items" item-props lines="three">
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12">
        <h2>
          Elige el plan que mejor se ajuste a tus necesidades y comienza hoy
          mismo.
        </h2>
      </v-col>
      <v-col cols="12">
        <plan />
      </v-col>
      <v-col cols="12">
        <plan />
      </v-col>
    </v-row>

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
import { Plan, Videos, Help, Home } from '../components';

const items = [
  {
    prependAvatar: '/images/beneficio_1.png',
    title: 'Elige el plan de tu preferencia y registrate!'
  },
  {
    prependAvatar: '/images/beneficio_2.png',
    title: 'Descarga la APP y recarga tu billetera!'
  },
  {
    prependAvatar: '/images/beneficio_2.png',
    title: 'Disfruta y parquea sin preocupación!'
  }
];
</script>

<style lang="scss"></style>
