<template>
  <v-row class="justify-center">
    <v-col cols="12" md="11">
      <v-card color="#1d1d1d" theme="dark" class="pa-5">
        <v-row no-gutters>
          <v-col cols="9">
            <h1>
              Ahorra
              <b class="text-cyan-accent-3">
                con la única suscripción para parquear
              </b>
            </h1>

            <p class="mt-5">
              Por un valor fijo mensual, puedes parquear en más de 120 puntos de
              servicio de la red de parqueaderos más grande del país. ¡Elige tu
              plan y disfruta de Ruedaz a precios increíbles !
            </p>

            <v-row class="mt-5">
              <v-col cols="12" md="6">
                <v-btn class="text-none" block size="x-large">
                  <template #prepend>
                    <div>
                      <img width="30" src="/images/logotipo-de-apple.png" />
                    </div>
                  </template>
                  App Store
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn class="text-none" block size="x-large">
                  <template #prepend>
                    <div>
                      <img width="30" src="/images/google-play.png" />
                    </div>
                  </template>
                  Google Play
                </v-btn>
              </v-col>
              <v-col cols="12">
                <p>Disponible para IPhone & Android. ¡Descárgalo ya!</p>
              </v-col>
            </v-row>

            <p class="text-decoration-underline" v-if="!mobile">
              <img src="/images/parking_icon.png" alt="Logo parking" />
              conoce nuestra red de parqueaderos con parking.
            </p>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <img
    src="/images/phone_mobile.png"
    alt="Imagen de un celular con aplicación de ruedaz"
    class="phone"
    v-if="mobile"
  />
  <img
    src="/images/phone.png"
    alt="Imagen de un celular con aplicación de ruedaz"
    class="phone"
    v-else
  />

  <v-row>
    <v-col cols="9" class="align-self-start" v-if="mobile">
      <p class="text-decoration-underline">
        <img src="/images/parking_icon.png" alt="Logo parking" />
        conoce nuestra red de parqueaderos con parking.
      </p>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col cols="12">
      <h2>A solo tres pasos de cambiar tu forma de parquear</h2>
    </v-col>
    <v-col>
      <v-sheet class="pa-2 ma-2"> .v-col-auto </v-sheet>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
</script>
<style lang="scss">
@media (max-width: 575.98px) {
  img.phone {
    position: absolute;
    right: -8px;
    height: 56%;
    top: 93px;
  }
}
</style>
