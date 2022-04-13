<template>
    <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series1"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts"
export default {
  components: {
        apexchart: VueApexCharts,
  },
  props:{
    series1:{
      type: Array,
      default: () => ([30,40,45,50,49,60,70,91])
    }
  },
  data(){
    return {
      chartOptions:{
        chart: { id: "basic-bar"},
        xaxis: { categories: [1991,1992,1994,1995,1996,1997,1998,2000]}
      },
      series: [
        {
          name: "series-1",
          data: [30,40,45,50,49,60,70,91]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>