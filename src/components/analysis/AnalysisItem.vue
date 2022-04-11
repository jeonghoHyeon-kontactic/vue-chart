<template>
    <div class="item-box">
        <div class="date">
            {{ item.regDtm }}    
        </div>
        <div class="title-1">
            {{ item.reviewAnalsTitle}}
        </div>
        <div class="asin">
            {{ asins }}
        </div> 
        <div class="member">
            {{ item.regId }}
        </div>
        <div class="status">
            <div v-if="item.analsStatus == 1" class="stay">
                대기
            </div>
            <div v-if="item.analsStatus == 2" class="progress">
                진행
            </div>
            <div v-if="item.analsStatus == 3" class="complete">
                완료
            </div>
            <div v-if="item.analsStatus == 4" class="fail">
                실패
            </div>
        </div>
        <div class="detail">
            <v-btn
                elevation="2"
                :disabled="item.analsStatus != 3"
                @click="analysisDetail"
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
        }
    },
    methods:{
        async analysisDetail(){
            try{
                await this.$store.dispatch("analysis/searchAnalysisWithId",{
                    reviewAnalsId: this.item.reviewAnalsId
                })
                
                this.$router.push(`/analysis/${this.item.reviewAnalsId}`)
            }catch (error) {
                console.log(error)                
            }
        }
    },
    computed:{
        asins(){
            return this.item.reviewAsins.substr(0,43) + " ..."
        }
    }
}
</script>

<style lang="scss" scoped>
.item-box{
    margin-bottom: 5px;
    display: flex;
    overflow: hidden;
    border: 2px solid lightgray;
    .date{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid lightgray;
    }
    .title-1{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid lightgray;
    }
    .asin{
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid lightgray;
    }
    .member{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid lightgray;
    }
    .status{
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid lightgray;
        font-weight: bold;
        .stay{
            background: skyblue;
            border-radius: 5px;
            color: white;
            padding: 3px 5px 3px 5px;
        }

        .progress{
            background: orange;
            border-radius: 5px;
            color: white;
            padding: 3px 5px 3px 5px;
        }

        .complete{
            background: lightgreen;
            border-radius: 5px;
            color: white;
            padding: 3px 5px 3px 5px;
        }

        .fail{
            background: lightcoral;
            border-radius: 5px;
            color: white;
            padding: 3px 5px 3px 5px;
        }
    }
    .detail{
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }
}

.detail{
    padding: 0;
}
</style>