<template>
    <div id="chart">
        <div v-if="heatmapData != ''">
            <apexchart type="heatmap" height="350" :options="chartOptions" :series="heatmapData"></apexchart>
        </div>
        <div v-else class="no-data">
            No Data
        </div>
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
            colors: ["#ff7f00"],
            xaxis: {
                type: "category",
            },
        },
    };
},
methods: {
    generateData(count) {
        var i = 0;
        var series = [];
        while (i < count) {
        var x = `${i}:00`.toString();
        var y = 32

        series.push({
            x: x,
            y: y,
        });
        i++;
        }
        return series;
        },
    },
    computed:{
        heatmapData(){
            return this.$store.state.reports.heatMap
        }
    }
};

</script>

<style lang="scss" scoped>
.no-data{
    height: 400px;
    background: lightgray;
    color:gray;
    font-size: 100px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
