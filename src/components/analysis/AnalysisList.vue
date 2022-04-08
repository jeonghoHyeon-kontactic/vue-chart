<template>
    <div class="list-box">
        <div v-if="analysisList.length == 0" class="no-data">
            No Data
        </div>
        <div v-else>
            <div class="list-head">
                <div class="head-item date">날짜</div>
                <div class="head-item title-1">제목</div>
                <div class="head-item asin">ASIN</div>
                <div class="head-item member">요청자</div>
                <div class="head-item status">상태</div>
                <div class="head-item detail">상세화면</div>
            </div>
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
    data(){
        return {
            // startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * -1400000)).toISOString().substring(0, 10),
            // endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
        }
    },
    methods:{
        searchAnalysis(pageNum){
            this.$store.dispatch('analysis/searchAnalysisList',{
                pageNum: pageNum == null ? 1 : pageNum,
                startDate: this.startDate,
                endDate: this.endDate,
                searchText: this.searchText
            })
        },
        resetList(){
            this.$store.dispatch('analysis/searchAnalysisList',{
                pageNum: 1,
                startDate: this.startDate,
                endDate: this.endDate,
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
    box-sizing: border-box;
}

.list-box{
    box-sizing: border-box;
}

.list-head{
    border: 2px solid lightgray;
    margin-bottom: 5px;
    display: flex;
    text-align: center;
    .date{
        width: 15%;
        border-right: 2px solid lightgray;
        padding: 5px;
    }
    .title-1{
        width: 15%;
        border-right: 2px solid lightgray;
        padding: 5px;
    }
    .asin{
        width: 30%;
        border-right: 2px solid lightgray;
        padding: 5px;
    }
    .member{
        width: 15%;
        border-right: 2px solid lightgray;
        padding: 5px;
    }
    .status{
        width: 10%;
        border-right: 2px solid lightgray;
        padding: 5px;
    }
    .detail{
        width: 15%;
        padding: 5px;
    }
}
</style>