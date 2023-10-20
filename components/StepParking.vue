<template>
  <v-row class="mt-10">
    <v-col cols="12">
      <h2 class="title text-center">
        A solo <span class="text-cyan-accent-3">tres pasos</span> de cambiar tu
        <span class="text-cyan-accent-3">forma de parquear</span>
      </h2>
    </v-col>
    <v-col cols="12">
      <v-list :items="items" item-props lines="three" class="steps">
        <template v-slot:prepend="{ item }">
          <v-avatar color="grey-lighten-1" size="80" :image="item.avatar">
          </v-avatar>
        </template>
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle" class="text-step"></div>
        </template>
      </v-list>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
const items = [
  {
    avatar: '/images/beneficio_1.png',
    subtitle:
      'Elige el <span class="text-cyan-accent-3">plan</span> de tu preferencia y <span class="text-cyan-accent-3">registrate</span>!'
  },
  {
    avatar: '/images/beneficio_2.png',
    subtitle:
      'Descarga la <span class="text-cyan-accent-3">APP</span> y recarga tu <span class="text-cyan-accent-3">billetera</span>!'
  },
  {
    avatar: '/images/beneficio_2.png',
    subtitle:
      'Disfruta y <span class="text-cyan-accent-3">parquea</span> sin preocupación!'
  }
];
</script>
<style lang="scss">
.steps {
  background: none;
}

.text-step {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}

.v-list-item-subtitle {
  opacity: 1;
}
</style>
