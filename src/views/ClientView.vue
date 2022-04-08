<template>
    <div class="client-container">
        <title-box title="고객사"/>
        <client-search />
        <client-list />
    </div>
</template>

<script>
import ClientList from '@/components/client/ClientList.vue'
import ClientSearch from '@/components/client/ClientSearch.vue'
import TitleBox from '@/components/TitleBox.vue'
export default {
    components: { ClientList, ClientSearch, TitleBox },
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
    }
}
</script>

<style lang="scss" scoped>
.client-container{
    padding: 0 10px;
}
</style>