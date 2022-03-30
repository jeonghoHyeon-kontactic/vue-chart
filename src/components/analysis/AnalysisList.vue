<template>
    <v-container>
        <analysis-item v-for="item in analysisList" :key="item.reviewAnalsId" :item="item" />
        <page-bar @pageNum="searchAnalysis" :length="length" />
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
                pageNum: pageNum == null ? 1 : pageNum,
                startDate: this.startDate,
                endDate: this.endDate,
                searchText: this.searchText
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
        },
        searchText(){
            return this.$store.state.analysis.searchText
        },
        startDate(){
            return this.$store.getters["analysis/startDate"]
        },
        endDate(){
            return this.$store.state.analysis.endDate
        }
    }
}
</script>

<style lang="scss" scoped>

</style>