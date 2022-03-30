<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <NavItem />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" class="title">
          Kontactic
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavItem from './components/NavItem';

export default {
  name: 'App',
  data: () => ({ drawer: null }),
  components: { NavItem },
};
</script>

<style lang="scss" scoped>
.title{
  text-decoration: none;
  color: gray;
  font-weight: bold;
}
</style>