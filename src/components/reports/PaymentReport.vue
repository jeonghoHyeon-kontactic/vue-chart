<template>
    <div class="heatmap-container">
        <div class="heatmap-box">
            <title-box title="HeatMap 상세페이지"/>
            <div class="btn-box">
                <v-btn>보고서 등록</v-btn>
            </div>
            <heat-map-chart />
            <dir class="heatmap-list">
                <dir class="heatmap-item">
                    <div class="">
                        
                    </div>
                </dir>
            </dir>
        </div>
    </div>
</template>

<script>
import HeatMapChart from '@/components/apexcharts/HeatmapChart.vue'
import TitleBox from '@/components/common/AppTitle.vue'
export default {
    components: { HeatMapChart,TitleBox }    
}
</script>

<style lang="scss" scoped>
.heatmap-list{

}
</style>