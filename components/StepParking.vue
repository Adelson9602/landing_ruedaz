import type { CustomAppConfig from 'nuxt/schema';
<template>
  <v-row class="mt-10">
    <v-col cols="12">
      <h2 class="title text-center">
        A solo <span class="important">tres pasos</span> de cambiar tu
        <span class="important">forma de parquear</span>
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
</template>
<script lang="ts" setup>
const items = [
  {
    avatar: '/images/beneficio_1.png',
    subtitle:
      'Elige el <span class="important text-important">plan</span> de tu preferencia y <span class="important text-important">registrate</span>!'
  },
  {
    avatar: '/images/beneficio_2.png',
    subtitle:
      'Descarga la <span class="important text-important">APP</span> y recarga tu <span class="important text-important">billetera</span>!'
  },
  {
    avatar: '/images/beneficio_2.png',
    subtitle:
      'Disfruta y <span class="important text-important">parquea</span> sin preocupación!'
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

@media (max-width: 575.98px) {
  .important {
    color: #00d2ea;
  }

  .text-important {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
