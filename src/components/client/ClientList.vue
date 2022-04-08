<template>
    <div class="list-box">
        <div v-if="clientList.length == 1" class="no-data">
            No Data
        </div>
        <div v-else>
            <div class="list-head">
                <div class="head-item">회사명</div>
                <div class="head-item">담당자</div>
                <div class="head-item">계약 일</div>
                <div class="head-item">만료 일</div>
                <div class="head-item">만료 일</div>
                <div class="head-item">계약 상태</div>
                <div class="head-item">상세페이지</div>
            </div>
            <div class="list-content">
                <client-item v-for="item in clientList" :key="item.clntCmpnyId" :item="item"/>
            </div>
            <page-bar @pageNum="searchClient" :length="length"/>
        </div>
    </div>
</template>

<script>
import PageBar from '@/components/common/PageBar.vue'
import ClientItem from './ClientItem.vue'
export default {
    components: { ClientItem, PageBar },
    data(){
        return{
            head: [1,2]
        }
    },
    computed:{
        clientList(){
            return this.$store.state.client.clientList
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
    
    .list-head{
        border: 2px solid lightgray;
        margin-bottom: 5px;
        display: flex;
        text-align: center;

        .head-item{
            padding: 5px;
            border-right: 2px solid lightgray;
            width: 20%;
        }


    }

    .list-content{

    }
}
</style>