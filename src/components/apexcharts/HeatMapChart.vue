<template>
    <div id="chart">
        <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>



<script>
import VueApexCharts from "vue-apexcharts"
export default {
    components:{
        apexchart : VueApexCharts
    },
    data: function () {
        return {
        chartOptions: {
            dataLabels: {
                enabled: true,
            },
            chart: {
                toolbar: {
                    show: false,
                },
            },
            colors: ["#008FFB"],
            xaxis: {
                type: "category",
            },
        },
        series: [
            {
                name: "Sun",
                data: [
                    { x : 1 , y : 13},
                    { x : 2 , y : 13},
                    { x : 3 , y : 13},
                    { x : 4 , y : 13},
                    { x : 5 , y : 13},
                    { x : 6 , y : 13},
                    { x : 7 , y : 13},
                    { x : 8 , y : 13},
                    { x : 9 , y : 13},
                    { x : 10 , y : 13},
                    { x : 11 , y : 13},
                    { x : 12 , y : 13},
                    { x : 13 , y : 13},
                    { x : 14 , y : 13},
                    { x : 15 , y : 13},
                    { x : 16 , y : 13},
                    { x : 17 , y : 13},
                    { x : 18 , y : 13},
                    { x : 19 , y : 13},
                    { x : 20 , y : 13},
                    { x : 21 , y : 13},
                    { x : 22 , y : 13},
                    { x : 23 , y : 13},
                    { x : 24 , y : 13},
                ],
            },
            {
                name: "Sat",
                data: [
                    { x : 1 , y : 13},
                    { x : 2 , y : 13},
                    { x : 3 , y : 13},
                    { x : 4 , y : 13},
                    { x : 5 , y : 13},
                    { x : 6 , y : 13},
                    { x : 7 , y : 13},
                    { x : 8 , y : 13},
                    { x : 9 , y : 13},
                    { x : 10 , y : 13},
                    { x : 11 , y : 13},
                    { x : 12 , y : 13},
                    { x : 13 , y : 13},
                    { x : 14 , y : 13},
                    { x : 15 , y : 13},
                    { x : 16 , y : 13},
                    { x : 17 , y : 13},
                    { x : 18 , y : 13},
                    { x : 19 , y : 13},
                    { x : 20 , y : 13},
                    { x : 21 , y : 13},
                    { x : 22 , y : 13},
                    { x : 23 , y : 13},
                    { x : 24 , y : 13},
                ],
            },
            {
                name: "Fri",
                data: [
                    { x : 1 , y : 13},
                    { x : 2 , y : 13},
                    { x : 3 , y : 13},
                    { x : 4 , y : 13},
                    { x : 5 , y : 13},
                    { x : 6 , y : 13},
                    { x : 7 , y : 13},
                    { x : 8 , y : 13},
                    { x : 9 , y : 13},
                    { x : 10 , y : 13},
                    { x : 11 , y : 13},
                    { x : 12 , y : 13},
                    { x : 13 , y : 13},
                    { x : 14 , y : 13},
                    { x : 15 , y : 13},
                    { x : 16 , y : 13},
                    { x : 17 , y : 13},
                    { x : 18 , y : 13},
                    { x : 19 , y : 13},
                    { x : 20 , y : 13},
                    { x : 21 , y : 13},
                    { x : 22 , y : 13},
                    { x : 23 , y : 13},
                    { x : 24 , y : 13},
                ],
            },
            {
                name: "Thu",
                data: [
                    { x : 1 , y : 13},
                    { x : 2 , y : 13},
                    { x : 3 , y : 13},
                    { x : 4 , y : 13},
                    { x : 5 , y : 13},
                    { x : 6 , y : 13},
                    { x : 7 , y : 13},
                    { x : 8 , y : 13},
                    { x : 9 , y : 13},
                    { x : 10 , y : 13},
                    { x : 11 , y : 13},
                    { x : 12 , y : 13},
                    { x : 13 , y : 13},
                    { x : 14 , y : 13},
                    { x : 15 , y : 13},
                    { x : 16 , y : 13},
                    { x : 17 , y : 13},
                    { x : 18 , y : 13},
                    { x : 19 , y : 13},
                    { x : 20 , y : 13},
                    { x : 21 , y : 13},
                    { x : 22 , y : 13},
                    { x : 23 , y : 13},
                    { x : 24 , y : 13},
                ],
            },
            {
                name: "Wed",
                data: [
                    { x : 1 , y : 13},
                    { x : 2 , y : 13},
                    { x : 3 , y : 13},
                    { x : 4 , y : 13},
                    { x : 5 , y : 13},
                    { x : 6 , y : 13},
                    { x : 7 , y : 13},
                    { x : 8 , y : 13},
                    { x : 9 , y : 13},
                    { x : 10 , y : 13},
                    { x : 11 , y : 13},
                    { x : 12 , y : 13},
                    { x : 13 , y : 13},
                    { x : 14 , y : 13},
                    { x : 15 , y : 13},
                    { x : 16 , y : 13},
                    { x : 17 , y : 13},
                    { x : 18 , y : 13},
                    { x : 19 , y : 13},
                    { x : 20 , y : 13},
                    { x : 21 , y : 13},
                    { x : 22 , y : 13},
                    { x : 23 , y : 13},
                    { x : 24 , y : 13},
                ],
            },
            {
                name: "Tue",
                data: [
                    { x : 1 , y : 13},
                    { x : 2 , y : 13},
                    { x : 3 , y : 13},
                    { x : 4 , y : 13},
                    { x : 5 , y : 13},
                    { x : 6 , y : 13},
                    { x : 7 , y : 13},
                    { x : 8 , y : 13},
                    { x : 9 , y : 13},
                    { x : 10 , y : 13},
                    { x : 11 , y : 13},
                    { x : 12 , y : 13},
                    { x : 13 , y : 13},
                    { x : 14 , y : 13},
                    { x : 15 , y : 13},
                    { x : 16 , y : 13},
                    { x : 17 , y : 13},
                    { x : 18 , y : 13},
                    { x : 19 , y : 13},
                    { x : 20 , y : 13},
                    { x : 21 , y : 13},
                    { x : 22 , y : 13},
                    { x : 23 , y : 13},
                    { x : 24 , y : 13},
                ],
            },
            {
                name: "Mon",
                data: [
                    { x : 1 , y : 13},
                    { x : 2 , y : 13},
                    { x : 3 , y : 13},
                    { x : 4 , y : 13},
                    { x : 5 , y : 13},
                    { x : 6 , y : 13},
                    { x : 7 , y : 13},
                    { x : 8 , y : 13},
                    { x : 9 , y : 13},
                    { x : 10 , y : 63},
                    { x : 11 , y : 13},
                    { x : 12 , y : 24},
                    { x : 13 , y : 13},
                    { x : 14 , y : 13},
                    { x : 15 , y : 64},
                    { x : 16 , y : 13},
                    { x : 17 , y : 13},
                    { x : 18 , y : 13},
                    { x : 19 , y : 13},
                    { x : 20 , y : 13},
                    { x : 21 , y : 13},
                    { x : 22 , y : 13},
                    { x : 23 , y : 13},
                    { x : 24 , y : 13},
                ],
            },
        ],
    };
  },
  methods: {
    generateData(count,test) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = `${i}:00`.toString();
        var y = test

        series.push({
          x: x,
          y: y,
        });
        i++;
      }
      return series;
    },
  },
};
</script>
