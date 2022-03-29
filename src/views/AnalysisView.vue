<template>
    <v-container>
        <title-box title="리뷰 분석"/>
        <analysis-search />
        <analysis-list />
    </v-container>
</template>

<script>
import TitleBox from '@/components/TitleBox.vue'
import AnalysisSearch from '@/components/analysis/AnalysisSearch.vue'
import AnalysisList from '@/components/analysis/AnalysisList.vue'
export default {
    components: { TitleBox, AnalysisSearch, AnalysisList },
    
}
</script>

<style lang="scss" scoped>

</style>