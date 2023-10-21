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
      <plan-mobile
        url-image="/images/car_mobile.png"
        v-if="mobile"
        :plans="plans"
        color="yellow-darken-3"
      />
      <plan-desk v-else />
    </v-col>
    <v-col cols="12">
      <plan-mobile
        url-image="/images/motorcycle_mobile.png"
        v-if="mobile"
        :plans="plans"
        color="indigo-lighten-1"
      />
      <plan-desk v-else />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify';
import PlanDesk from './Plan.vue';
import PlanMobile from './PlanMobile.vue';
import { Plan } from '../models/models';

const { mobile } = useDisplay();

const plans: Plan[] = [
  {
    PLAN_TRIALTIMEDAY: 5,
    PLAN_FREQUENCY: 'MENSUAL',
    PLAN_TIMEMINUTESFREE: 180,
    PLAN_DISCOUNT: 0,
    PLAN_ISACTIVE: true,
    PLAN_TRIALDAYS: 5,
    PLAN_TIMEHOURSFREE: 3,
    PLAN_PRICE: 49900,
    PLAN_NAME: 'PLAN MOTO 3 HORAS',
    PLAN_DESCRIPTION: '1 PLACA, 3 HORAS GRATIS POR DÍA, SOLO PARA MOTOS',
    PLAN_ISGLOBAL: true,
    SK: 'PLAN#49900',
    PK: 'PLAN#PM3H',
    PLAN_HASINSURANCE: false,
    PLAN_APPLYDISCOUNT: false,
    PLAN_VEHICLETYPEALLOWED: ['MOTO']
  },
  {
    PLAN_TRIALTIMEDAY: 5,
    PLAN_FREQUENCY: 'MENSUAL',
    PLAN_TIMEMINUTESFREE: 60,
    PLAN_DISCOUNT: 0,
    PLAN_ISACTIVE: true,
    PLAN_TRIALDAYS: 5,
    PLAN_TIMEHOURSFREE: 1,
    PLAN_PRICE: 21900,
    PLAN_NAME: 'PLAN MOTO 1 HORA',
    PLAN_DESCRIPTION: '1 PLACA, 1 HORA GRATIS POR DÍA. SOLO PARA MOTOS',
    PLAN_ISGLOBAL: true,
    SK: 'PLAN#21900',
    PK: 'PLAN#PM1H',
    PLAN_HASINSURANCE: false,
    PLAN_APPLYDISCOUNT: false,
    PLAN_VEHICLETYPEALLOWED: ['MOTO']
  },
  {
    PLAN_TRIALTIMEDAY: 5,
    PLAN_FREQUENCY: 'MENSUAL',
    PLAN_TIMEMINUTESFREE: 120,
    PLAN_DISCOUNT: 0,
    PLAN_ISACTIVE: true,
    PLAN_TRIALDAYS: 5,
    PLAN_TIMEHOURSFREE: 2,
    PLAN_PRICE: 29900,
    PLAN_NAME: 'PLAN MOTO 2 HORAS',
    PLAN_DESCRIPTION: '1 PLACA, 2 HORAS GRATIS POR DÍA. SOLO PARA MOTOS',
    PLAN_ISGLOBAL: true,
    SK: 'PLAN#29900',
    PK: 'PLAN#PM2H',
    PLAN_HASINSURANCE: false,
    PLAN_APPLYDISCOUNT: false,
    PLAN_VEHICLETYPEALLOWED: ['MOTO']
  },
  {
    PLAN_TRIALTIMEDAY: 5,
    PLAN_FREQUENCY: 'MENSUAL',
    PLAN_TIMEMINUTESFREE: 120,
    PLAN_DISCOUNT: 0,
    PLAN_ISACTIVE: true,
    PLAN_TRIALDAYS: 5,
    PLAN_TIMEHOURSFREE: 2,
    PLAN_PRICE: 44900,
    PLAN_NAME: 'PLAN CARRO 2 HORAS',
    PLAN_DESCRIPTION: '1 PLACA, 2 HORAS GRATIS POR DÍA. SOLO PARA CARROS',
    PLAN_ISGLOBAL: true,
    SK: 'PLAN#44900',
    PK: 'PLAN#PC2H',
    PLAN_HASINSURANCE: false,
    PLAN_APPLYDISCOUNT: false,
    PLAN_VEHICLETYPEALLOWED: ['CARRO']
  },
  {
    PLAN_TRIALTIMEDAY: 5,
    PLAN_FREQUENCY: 'MENSUAL',
    PLAN_TIMEMINUTESFREE: 180,
    PLAN_DISCOUNT: 0,
    PLAN_ISACTIVE: true,
    PLAN_TRIALDAYS: 5,
    PLAN_TIMEHOURSFREE: 3,
    PLAN_PRICE: 10,
    PLAN_NAME: 'PLAN CARRO 3 HORAS',
    PLAN_DESCRIPTION: '1 PLACA, 3 HORAS GRATIS POR DÍA. SOLO PARA CARROS',
    PLAN_ISGLOBAL: true,
    SK: 'PLAN#59900',
    PK: 'PLAN#PC3H',
    PLAN_HASINSURANCE: false,
    PLAN_APPLYDISCOUNT: false,
    PLAN_VEHICLETYPEALLOWED: ['CARRO']
  },
  {
    PLAN_TRIALTIMEDAY: 5,
    PLAN_FREQUENCY: 'MENSUAL',
    PLAN_TIMEMINUTESFREE: 60,
    PLAN_DISCOUNT: 0,
    PLAN_ISACTIVE: true,
    PLAN_TRIALDAYS: 5,
    PLAN_TIMEHOURSFREE: 1,
    PLAN_PRICE: 29900,
    PLAN_NAME: 'PLAN CARRO 1 HORA',
    PLAN_DESCRIPTION: '1 PLACA, 1 HORAS GRATIS POR DIA. SOLO PARA CARROS',
    PLAN_ISGLOBAL: true,
    SK: 'PLAN#29900',
    PK: 'PLAN#PC1H',
    PLAN_HASINSURANCE: false,
    PLAN_APPLYDISCOUNT: false,
    PLAN_VEHICLETYPEALLOWED: ['CARRO']
  }
];
</script>
<style lang=""></style>
