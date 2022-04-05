<template>
    <div>
        <heat-map-chart />
        <tag-input />
    </div>
</template>

<script>
import HeatMapChart from '@/components/chart/HeatMapChart.vue'
import TagInput from '@/components/common/TagInput.vue'
export default {
    components: { HeatMapChart, TagInput }    
}
</script>

<style lang="scss" scoped>

</style>