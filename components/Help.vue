<template>
  <v-row>
    <v-col>
      <h2>¿Tienes Dudas?</h2>
    </v-col>
    <v-col cols="12">
      <div class="text-subtitle-2 mb-2">Default</div>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(e, i) in help"
          :key="i"
          :title="e.title"
          :text="e.text"
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
const help = [
  {
    text: '/images/beneficio_1.png',
    title: '¿Cómo registro mi entrada a un parqueadero?'
  },
  {
    text: '/images/beneficio_2.png',
    title: '¿Cómo funciona el ingreso mediante QR?'
  },
  {
    text: '/images/beneficio_2.png',
    title: '¿Cómo registro mi salida del parqueadero?'
  },
  {
    text: '/images/beneficio_2.png',
    title: '¿Existen otros medios de pago aparte de tarjetas?'
  }
];
</script>
<style lang=""></style>
