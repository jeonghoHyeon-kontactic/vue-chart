<template>
    <div class="item-box">
        <div class="name">
            {{ item.clntCmpnyKorNm}}
        </div>
        <div class="status">
            {{ }}
        </div>
        <div class="detail">
            <v-btn @click="clientDetail">상세보기</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            default: () => ({})
        }
    },
    methods:{
        async clientDetail(){
            try{
                await this.$store.dispatch("client/searchClient",{
                    clntCmpnyId: this.item.clntCmpnyId
                })
                this.$router.push(`/client/${this.item.clntCmpnyId}`)
            }catch (err){
                console.log(err)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.item-box{
    display: flex;
}
</style>