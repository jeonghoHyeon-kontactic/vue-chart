<template>
    <div class="list-box">
        <div v-if="analysisList.length == 0" class="no-data">
            No Data
        </div>
        <div v-else>
            <analysis-item v-for="item in analysisList" :key="item.reviewAnalsId" :item="item" />
        </div>
        <page-bar @pageNum="searchAnalysis" :length="length" />
    </div>
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
            return this.$store.state.analysis.startDate
        },
        endDate(){
            return this.$store.state.analysis.endDate
        }
    }
}
</script>

<style lang="scss" scoped>
.no-data{
    background:lightgray;
    color:gray;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
}

.list-box{
    padding: 10px;
}
</style>