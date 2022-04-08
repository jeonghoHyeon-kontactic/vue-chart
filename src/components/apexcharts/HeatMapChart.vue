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
    data(){
        return {
            series: [
            {
                name: 'Metric1',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric2',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric3',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric4',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric5',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric6',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric7',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric8',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            },
            {
                name: 'Metric9',
                data: this.generateData(18, {
                min: 0,
                max: 90
                })
            }
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
        generateData(count, yrange) {
            var i = 0;
            var series = [];
        while (i < count) {
            var x = (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>