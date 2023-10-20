<template>
  <v-app-bar color="" name="app-bar">
    <template v-slot:prepend>
      <v-img :width="130" src="/images/logo_ruedaz.svg"></v-img>
    </template>

    <v-spacer></v-spacer>

    <v-breadcrumbs
      v-if="!mobile"
      :items="itemsBreadcrumbs"
      divider="|"
    ></v-breadcrumbs>

    <v-spacer></v-spacer>
    <v-menu v-if="mobile" v-model="menu">
      <template v-slot:activator="{ props }">
        <v-btn :icon="menu ? 'mdi-close-circle' : 'mdi-menu'" v-bind="props" />
      </template>

      <v-list density="compact" :items="itemsMenu" class="px-5" />
      <v-list density="compact" class="pt-0">
        <v-list-item>
          <div class="d-flex justify-space-around">
            <v-btn icon variant="plain">
              <img width="30" src="/images/logotipo-de-apple.png" />
            </v-btn>
            <v-btn icon variant="plain">
              <img width="30" src="/images/google-play.png" />
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>

    <template v-slot:append v-if="!mobile">
      <v-btn icon>
        <img width="30" src="/images/logotipo-de-apple.png" />
      </v-btn>
      <v-btn icon>
        <img width="30" src="/images/google-play.png" />
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify';
import { ItemMenu } from '../../landing/models/models';

const { mobile } = useDisplay();

const menu = ref(false);

const itemsBreadcrumbs = [
  {
    title: 'Acerca de Ruedaz',
    href: 'breadcrumbs_dashboard'
  },
  {
    title: 'Planes',
    href: 'breadcrumbs_link_1'
  },
  {
    title: 'Corp',
    href: 'breadcrumbs_link_2'
  },
  {
    title: 'Partners',
    href: 'breadcrumbs_link_2'
  },
  {
    title: 'Blog',
    href: 'breadcrumbs_link_2'
  },
  {
    title: 'Ayuda',
    href: 'breadcrumbs_link_2'
  }
];

const itemsMenu = ref<ItemMenu[]>([]);

itemsBreadcrumbs.forEach((e) => {
  itemsMenu.value.push(e);
  itemsMenu.value.push({ type: 'divider', inset: true });
});
</script>
<style lang=""></style>
