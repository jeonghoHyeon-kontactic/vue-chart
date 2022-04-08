<template>
    <v-container class="client-container">
        <app-title title="고객사 목록"/>
        <app-search />
        <app-board :itemList="clientList" :length="length" :head="head"/>
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
            head:["회사명","담당자","계약일","만료일","계약상태"]
        }
    },
    methods: {
        async resetData(){
            await this.$store.dispatch("client/searchClientList",{
                pageNum: 1,
                searchText: ""
            })
        }
    },
    created(){
        this.resetData()
    },
    computed:{
        clientList(){
            return this.$store.state.client.clientList
        },
        length(){
            return this.$store.state.client.navPages
        },
    }
}
</script>

<style lang="scss" scoped>
.client-container{
    padding: 0 10px;
}
</style>