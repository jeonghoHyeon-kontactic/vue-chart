<template>
    <div class="list-box">
        <div class="list-head">
            <div class="head-item">
                
            </div>
        </div>
        <div class="list-content">
            <client-item v-for="item in clientList" :key="item.clntCmpnyId" :item="item"/>
        </div>
    </div>
</template>

<script>
import ClientItem from './ClientItem.vue'
export default {
    components: { ClientItem },
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
.list-box{

    .list-head{
        
    }

    .list-content{

    }
}
</style>