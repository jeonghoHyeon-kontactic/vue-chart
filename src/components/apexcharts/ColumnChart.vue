<template>
    <div id="chart">
        <apexchart ref="columnChart" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts"
export default {
  components: {
        apexchart: VueApexCharts,
  },
  props:{
    dataList:{
      type: Array,
      default: () => ([])
    },
    cateList:{
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
        xaxis: { categories: [1991,1992,1994,1995,1996,1997,1998,2000,1991,1992,1994,1995,1996,1997,1998,2000,1991,1992,1994,1995,1996,1997,1998,2000,1994,1995,1996,1997,1998,2000]},
  
      },
      series: [
        {
          name: 'series-1',
          data: [30,40,45,50,49,60,70,91,30,40,45,50,49,60,70,91,30,40,45,50,49,60,70,91,45,50,49,60,70,91]
        }
      ]
    }
  },
  created(){
    this.updateChart()
  },
  methods:{
    updateChart(){

      this.chartOptions = {
        xaxis:{
          categories: this.cateList
        },
        colors: [this.color]
      }

      this.series = [{
        data: this.dataList
      }]
    }
  },
  watch:{
    dataList: function () {
      this.updateChart()
    }
  }
}
</script>
