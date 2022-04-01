<template>
    <v-card>
        <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        ></v-data-table>
    </v-card>
</template>

<script>
export default {
props:["search1","header1",""],
data () {
    return {
    search: '',
    headers: [
        {
        text: '리뷰 목록 (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
        },

    ],
    desserts: [
          {
          name: '리뷰 내용',
          },
          {
          name: '리뷰 내용',
          },
          {
          name: '리뷰 내용',
          },
          {
          name: '리뷰 내용',
          },
          {
          name: '리뷰 내용',
          },
          {
          name: '리뷰 내용',
          },
          {
          name: '리뷰 내용',
          },
          {
          name: '리뷰 내용',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>