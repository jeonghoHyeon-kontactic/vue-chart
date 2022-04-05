<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="true"
      v-model="drawer"
      app
    >
      <NavItem />
    </v-navigation-drawer>

    <v-app-bar app v-if="token">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/home" class="title">
          Kontactic
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="logout-box">
        <v-btn @click="logout">로그아웃</v-btn>
      </div>
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
  computed: {
    token(){
      return this.$store.state.login.token
    }
  },
  methods:{
    logout(){
      this.$store.dispatch("login/logout")
      console.log(this.token)
      alert("로그아웃 성공")
      this.$router.push("/")
    }
  }
};
</script>

<style lang="scss" scoped>
.title{
  text-decoration: none;
  color: gray;
  font-weight: bold;
}
#inspire{
  box-sizing: border-box;
}

</style>