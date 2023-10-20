<template>
  <v-row class="justify-center">
    <v-col cols="12" md="11">
      <v-card color="#1d1d1d" theme="dark" class="pa-5">
        <v-row no-gutters>
          <v-col cols="9">
            <h1 class="title">
              Ahorra
              <span class="text-cyan-accent-3">
                con la única suscripción para parquear
              </span>
            </h1>

            <p class="mt-5 text-main">
              Por un valor fijo mensual, puedes parquear en
              <b class="text-points">más de 120 puntos de servicio</b> de la red
              de parqueaderos más grande del país.
              <b class="text-choose"
                >¡Elige tu plan y disfruta de Ruedaz a precios increíbles!</b
              >
            </p>

            <v-row class="mt-5">
              <v-col cols="12" md="6">
                <v-btn class="text-none btn-store" size="large">
                  <template #prepend>
                    <div>
                      <img width="20" src="/images/logotipo-de-apple.png" />
                    </div>
                  </template>
                  App Store
                </v-btn>
              </v-col>
              <v-col cols="12" md="6">
                <v-btn class="text-none btn-store" size="large">
                  <template #prepend>
                    <div>
                      <img width="20" src="/images/google-play.png" />
                    </div>
                  </template>
                  Google Play
                </v-btn>
              </v-col>
              <v-col cols="12">
                <p>
                  Disponible para IPhone & Android.
                  <b class="text-download">¡Descárgalo ya!</b>
                </p>
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
      <p class="text-decoration-underline text-parkings">
        <img src="/images/parking_icon.png" alt="Logo parking" />
        conoce nuestra red de parqueaderos con parking.
      </p>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
</script>
<style lang="scss">
@media (max-width: 575.98px) {
  p {
    font-weight: 200;
    font-style: normal;
    line-height: normal;
  }

  img.phone {
    position: absolute;
    right: -8px;
    height: 70%;
    top: 93px;
  }

  p.text-main {
    font-size: 16px;
  }

  b {
    font-size: 17px;
  }

  b.text-points {
    color: #ffa000;
    font-weight: 500;
  }

  b.text-choose {
    color: #5d63ec;
    font-weight: 600;
  }

  b.text-download {
    color: #00d2ea;
  }

  .text-parkings {
    font-size: 10px;
    font-weight: 600;
  }

  .btn-store {
    width: 167px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #08090b;
  }
}
</style>
