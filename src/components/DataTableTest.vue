<template>
  <v-data-table
    :headers="dessertHeaders"
    :items="desserts"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    :search="search"
    item-class="review-item"
    item-key="id"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        {{ item.content }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    props:['reviewList',"title"],
    data () {
      return {
        search:"",
        expanded: [],
        singleExpand: false,
        dessertHeaders: [
          {
            text: '리뷰 내용',
            align: 'start',
            sortable: false,
            value: 'subject',
          },
          { text: '', value: 'data-table-expand' },
        ],
        desserts: this.reviewList,
      }
    },
  }
</script>

<style lang="scss" scoped>
.review-item{
  height: 30px;
  overflow: hidden;
}

.text-start{
  height: 30px !important;
}

.elevation-1{
  
}
</style>