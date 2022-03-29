<template>
    <v-container>
        <analysis-item v-for="item in analysisList" :key="item.reviewAnalsId" :item="item" />
        <page-bar @pageNum="searchAnalysis" :length="length"/>
    </v-container>
</template>

<script>
import PageBar from '../PageBar.vue'
import AnalysisItem from './AnalysisItem.vue'

export default {
    components: { AnalysisItem, PageBar },
    methods:{
        searchAnalysis(pageNum){
            this.$store.dispatch('analysis/searchAnalysisList',{
                pageNum,
                startDate: "2022-03-10",
                endDate: "2022-03-19",
                searchText: ""
            })
        }
    },
    created(){
        this.searchAnalysis()
    },
    computed:{
        analysisList(){
            return this.$store.state.analysis.analysisList
        },
        length(){
            return this.$store.state.analysis.navPages
        }
    }
}
</script>

<style lang="scss" scoped>

</style>