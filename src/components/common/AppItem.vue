<template>
    <div class="item-box">
        <div class="item" v-for="i in item1" :key="i" :class="{'width': i == ''} ">
            {{ i }}
        </div>
        <div class="detail">
            <v-btn
                elevation="2"
                @click="detail('client')"
            >상세 보기</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            default: () => ({})
        },
        item1:{
            type: Array,
            default: () => ([])
        }
    },
    methods:{
        async detail(item){
            try{

                if(item == "review"){

                    // 리뷰 분석 상세페이지 정보 가져오기
                    await this.$store.dispatch("analysis/searchAnalysisWithId",{
                        reviewAnalsId: this.item.reviewAnalsId
                    })
                    
                    // 리뷰 분석 상세페이지 이동
                    this.$router.push(`/analysis/${this.item.reviewAnalsId}`)

                } else if (item == "client") {

                    // 고객사 상세피이지 정보 가져오기
                    await this.$store.dispatch("client/searchClient",{
                        reviewAnalsId: this.item.reviewAnalsId
                    })
                    
                    // 고객사 상세페이지로 이동
                    this.$router.push(`/client/${this.item.clntCmpnyId}`)
                }

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