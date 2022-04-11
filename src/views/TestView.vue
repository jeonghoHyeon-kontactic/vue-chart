<template>
    <v-container class="test-container">
        <app-title title="테스트 페이지" />
        <app-search />
        <app-board :itemList="boardList" :length="length" :head="head"/>
    </v-container>
</template>

<script>
import AppSearch from '@/components/common/AppSearch.vue'
import AppBoard from '@/components/common/AppBoard.vue'
import AppTitle from '@/components/common/AppTitle.vue'
export default {
    components: { AppSearch, AppBoard, AppTitle },
    data(){
        return {
            head:["날짜","제목","ASIN","요청자","상태","상세화면"],
            data:[],
        }
    },
    methods:{
        searchAnalysis(pageNum){
            this.$store.dispatch('analysis/searchAnalysisList',{
                pageNum: pageNum == null ? 1: pageNum,
                startDate: "2022-03-01",
                endDate: "2022-04-10",
                searchText: ""
            })
        }
    },
    computed:{
        length(){
            return this.$store.state.analysis.navPages
        },
        boardList(){
            return this.$store.state.analysis.boardList
        }
    },
    created(){
        this.searchAnalysis()
    }
}
</script>

<style lang="scss" scoped>
.test-container{
    padding: 10px;
}
</style>