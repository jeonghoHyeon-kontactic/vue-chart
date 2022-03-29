<template>
  <v-container class="home-container">
    <v-row class="home-box">
      <v-col>
        Home
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .home-box{
        color: lightgrey;
        font-size:100px;
        font-weight: bold;
        text-align: center;
    }
}
</style>
