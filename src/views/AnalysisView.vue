<template>
    <v-container>
        <app-title title="리뷰 분석 목록"/>
        <analysis-search />
        <analysis-list />
    </v-container>
</template>

<script>
import AppTitle from '@/components/common/AppTitle.vue'
import AnalysisSearch from '@/components/analysis/AnalysisSearch.vue'
import AnalysisList from '@/components/analysis/AnalysisList.vue'
export default {
    components: { AppTitle, AnalysisSearch, AnalysisList },
    
}
</script>

<style lang="scss" scoped>

</style>