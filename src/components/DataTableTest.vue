<template>
  <v-data-table
    :headers="dessertHeaders"
    :items="desserts"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    :search="search"
    item-key="name"
    show-expand
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>리뷰 목록</v-toolbar-title>
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
        More info about {{ item.name }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        search:"",
        expanded: [],
        singleExpand: false,
        dessertHeaders: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '', value: 'data-table-expand' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt1Frozen',
          },
          {
            name: 'Frozen Yogurt2',
          },
          {
            name: 'Frozen Yogurt3',
          },
          {
            name: 'Frozen Yogurt4',
          },
          {
            name: 'Frozen Yogurt5',
          },
          {
            name: 'Frozen Yogurt6',
          },
        ],
      }
    },
  }
</script>