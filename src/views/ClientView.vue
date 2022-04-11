<template>
    <v-container class="client-container">
        <app-title title="고객사 목록"/>
        <app-search />
        <app-board :itemList="boardList" :length="length" :head="head"/>
    </v-container>
</template>

<script>
import AppTitle from '@/components/common/AppTitle.vue'
import AppSearch from '@/components/common/AppSearch.vue'
import AppBoard from '@/components/common/AppBoard.vue'
export default {
    components: { AppTitle, AppSearch, AppBoard },
    data(){
        return {
            head:["날짜","제목","ASIN","요청자","상태","상세화면"],
        }
    },
    methods: {
        // searchAnalysis(pageNum){
        //     this.$store.dispatch('analysis/searchAnalysisList',{
        //         pageNum: pageNum == null ? 1: pageNum,
        //         startDate: "2022-03-01",
        //         endDate: "2022-04-10",
        //         searchText: ""
        //     })
        // }
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
        // this.searchAnalysis()
        console.log("view화면")
        console.log(this.boardList)
    },
}
</script>

<style lang="scss" scoped>
.client-container{
    padding: 0 10px;
}
</style>