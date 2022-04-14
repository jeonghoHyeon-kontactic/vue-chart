<template>
    <div id="chart">
        <div class="input-box">
          <div class="switch-box">
            <v-switch
              v-model="switch1"
              label="빈도수 정렬"
            ></v-switch>
          </div>
          <v-radio-group v-model="radioGroup" row>
            <v-radio
              v-for="n in radio"
              :key="n"
              :label="`${n}개`"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </div>
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts"
export default {
  components: {
        apexchart: VueApexCharts,
  },
  props:{
    item:{
      type: Array, 
      default: () => ([])
    },
    color:{
      type: String,
      default: () => ("")
    }
  },
  data(){
    return {
      chartOptions:{
        chart: { id: "basic-bar"},
        xaxis: { categories: []},
  
      },
      series: [
        {
          name: '빈도수',
          data: []
        }
      ],
      radioGroup: 30,
      radio:[10,20,30],
      switch1: false,
      sortList:[],
      cateList:[],
      dataList:[],
      update:false
    }
  },
  created(){
    this.updateChart(this.switch1, this.radioGroup)
  },
  methods:{
    updateChart(switch1, radio){
      
      this.sortList = this.sortChart(switch1, radio)
      console.log(this.sortList) 
      this.cateList = []
      this.dataList = []
      this.sortList.forEach(item => {
        this.cateList.push(item.cate),
        this.dataList.push(item.data)
      })

      this.chartOptions = {
        xaxis:{
          categories: this.cateList
        },
        colors: [this.color]
      }

      this.series = [{
        data: this.dataList
      }]

      console.log(this.test)
    },
    sortChart(switch1, radio){
      
      let itemList = this.item
      let sortList = []

      sortList = itemList.sort(function(a, b) {
        return b.data - a.data
      })


      let testList = sortList.slice(0,radio)

      if (switch1 == false){
        sortList = testList.sort(function(a, b) {
          let x = a.cate.toLowerCase()
          let y = b.cate.toLowerCase()
          if (x < y) {
            return -1
          }
          if (x > y) {
            return 1;
          }
          return 0
        })
      } else if (switch1 == true) {
        sortList = testList.sort(function(a, b) {
          return b.data - a.data
        })
      }
      return sortList
    }
  },
  watch:{
    switch1: function (val) {
      this.updateChart(val, this.radioGroup)
    },
    radioGroup: function (val) {
      this.updateChart(this.switch1, val)
    },
    // update: function () {
    //   alert("안녕")
    //   this.updateChart(this.switch1, this.radioGroup)
    // }
  }
}
</script>


<style lang="scss" scoped>
.input-box{
  display: flex;
  justify-content: space-between;
}
</style>