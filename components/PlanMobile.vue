<template>
  <v-card flat class="mx-auto bg-transparent" max-width="344">
    <v-img class="img" :src="urlImage" height="75px" cover>
      <div class="h-100 w-100 text-center d-flex justify-center">
        <p class="align-self-center h4-a">PLAN CARRO</p>
      </div>
    </v-img>
    <v-row class="justify-center">
      <v-col cols="10">
        <v-list variant="plain" density="compact" nav class="bg-transparent">
          <v-list-item
            v-for="(item, i) in plans"
            :key="i"
            :value="item"
            :color="color"
            :base-color="color"
            :active-class="`bg-${color} text-red`"
            v-model="toggle"
          >
            <template v-slot="{ isActive }">
              <div
                class="w-100 d-flex justify-space-around"
                :class="isActive ? 'text-black' : 'text-white'"
              >
                <p class="h4-a text-center">
                  {{ item.PLAN_TIMEHOURSFREE }}
                  {{ item.PLAN_TIMEHOURSFREE == 1 ? 'Hora' : 'Horas' }}
                </p>
                <p class="h4-a text-center">
                  {{ item.PLAN_PRICE }}
                </p>
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12">
        <v-btn
          size="x-large"
          class="text-none"
          :color="color"
          rounded="lg"
          block
        >
          Iniciar proceso de pago
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { Plan } from '../models/models';

defineProps({
  urlImage: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  plans: {
    type: Array as PropType<Plan[]>,
    default: () => [],
    required: true
  }
});

const show = ref(false);
const toggle = ref(null);

watch(toggle, (val) => {
  console.log(val);
});
</script>
<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
.img {
  border-radius: 20px;
}

.v-list-item--nav {
  height: 58px;
  border: 1px solid;
  border-radius: 15px;
}

.v-list-item--nav .v-list-item-title {
  font-size: 26px !important;
}
</style>
