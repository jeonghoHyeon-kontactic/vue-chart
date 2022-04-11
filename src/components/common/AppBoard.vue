<template>
    <div class="list-box">
        <div v-if="itemList.length == 0" class="no-data">
            No Data
        </div>
        <div v-else>
            <div class="list-head">
                <div class="head-item" v-for="item in head" :key="item"> {{ item }}</div>
            </div>
            <div class="list-content">
                <app-item v-for="item in itemList" :key="item[4]" :item="item"/>
            </div>
            <page-bar :length="length" />
        </div>
    </div>
</template>

<script>
import PageBar from '@/components/common/PageBar.vue'
import AppItem from '@/components/common/AppItem.vue'

export default {
    created(){
        console.log("board화면")
        console.log(this.itemList)
        
    },
    props:{
        itemList:{
            type: Array,
            default: () => ([])
        },
        head:{
            type: Array,
            default: () => ([3,4])
        },
        length:{
            type: Number,
            default: () => (3)
        },
    },
    components: { PageBar, AppItem },
    methods:{
        // searchAnalysis(pageNum){
        //     this.$store.dispatch('analysis/searchAnalysisList',{
        //         pageNum: pageNum == null ? 1: pageNum,
        //         startDate: "2022-03-01",
        //         endDate: "2022-04-10",
        //         searchText: ""
        //     })
        // }
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
    .head-item{
        width:15%;
        border-right: 2px solid lightgray;
        padding: 5px;
    }
}

.list-content{
}
</style>