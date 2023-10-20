<template>
  <v-row>
    <v-col cols="12">
      <h2 class="text-center">Cambiamos la manera convencional de parquear</h2>
    </v-col>
    <v-col cols="12">
      <v-carousel height="610" :show-arrows="false">
        <v-carousel-item height="920">
          <!-- <video-player src="/videos/0728.mp4" controls loop :volume="0.6" /> -->
          <video src="/videos/0728.mp4" controls autoplay loop></video>
        </v-carousel-item>

        <v-carousel-item height="920">
          <!-- <video-player src="/videos/0728.mp4" controls loop :volume="0.6" /> -->
          <video src="/videos/0729.mp4" controls autoplay loop></video>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup></script>
<style lang=""></style>
