<template>
    <div class="item-box">
        <div class="item" v-for="i in item" :key="i" :class="{'width': i == ''} ">
            {{ i }}
        </div>
        <div class="detail">
            <v-btn
                elevation="2"
                :disabled="item[item.length - 1] != 3"
                @click="detail('client')"
            >상세 보기</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type: Array,
            default: () => ([])
        },
    },
    created(){
        
    },
    methods:{
        async detail(item){
            try{
                let apiURL = ""
                let url = ""
                if(item == "review"){
                    apiURL = "analysis/searchAnalysisWithId"
                    url = "/analysis/1}"
                } else if (item == "client") {
                    apiURL = "client/searchClient"
                    url = "/client/1"
                }

                // 상세피이지 정보 가져오기
                await this.$store.dispatch(apiURL,{
                    reviewAnalsId: 1
                })
                
                // 상세페이지로 이동
                this.$router.push(url)

            }catch (error) {
                console.log(error)                
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.item-box{
    margin-bottom: 5px;
    display: flex;
    overflow: hidden;
    border: 2px solid lightgray;

    .item{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid lightgray;
    }

    .detail{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }

    .width{
        // width: 30%;
        background: red;
    }

    
}
</style>