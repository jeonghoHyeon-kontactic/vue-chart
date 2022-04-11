<template>
    <div id="chart">
        <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts"
export default {
    components:{ 
        apexchart: VueApexCharts 
    },
    props:{
        data1:[],
    },
    data(){
        return {
            series: [
                {
                    name: '월요일',
                    data: [56, 23, 34,25, 46, 34,63, 78, 34,32, 19, 34, ]
                },
                {
                    name: '화요일',
                    data: [0, 0, 61]
                },
                {
                    name: '수요일',
                    data: [0, 0, 24]
                },
                {
                    name: '목요일',
                    data: [0, 0, 82]
                },
                {
                    name: '금요일',
                    data: [0, 0, 32]
                },
                {
                    name: '토요일',
                    data: [0, 0, 24]
                },
                {
                    name: '일요일',
                    data: [0, 0, 73]
                },   
            ],
            chartOptions: {
                chart: {
                height: 350,
                type: 'heatmap',
                },
                dataLabels: {
                enabled: false
                },
                colors: ["#008FFB"],
                title: {
                text: '시간대 별 분'
                },
            },
        }
    },
    methods: {
        generateData(count,data) {
            var i = 0;
            var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y = data
            series.push({
                x: x,
                y: y
            });
            i++;
        }
        console.log(series)
        return series;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>