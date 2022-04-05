<template>
    <div class="detail-container">
        <div class="input-box"> 
            <tag-input />
        </div>
        <div class="info-box">
            <analysis-info :rCount="analysis" :sCount="analysis" :pCount="analysis"/>
        </div>
        <div class="chart-box">
            <div class="high-chart-box">
                <bar-chart-test chart-id="high-chart" :labels="highItem.highLabel" :data="highItem.highData" color="skyblue" label="High Score Keyword"/>
            </div>
            <div class="low-chart-box" v-if="true">
                <bar-chart-test chart-id="low-chart" :labels="lowItem.lowLabel" :data="lowItem.lowData" color="pink" label="Low Score Keyword"/>
                <div class="download-btn-box">
                    <v-btn @click="saveImage">이미지 다운로드</v-btn>
                </div>
            </div>
        </div>
        <div class="mixture-box">
            <mixture-kwrd />
        </div>
        <div class="review-box"> 
            <div class="high-review" v-if="true">
                <data-table-test :reviewList="highReviewList" title="5점 리뷰 목록"/>
            </div>
            <div class="low-review" v-if="true">
                <data-table-test :reviewList="lowReviewList" title="1점 리뷰 목록" />
            </div> 
        </div>
    </div>
</template>

<script>
import BarChartTest from '../chart/BarChartTest.vue'
import TagInput from '../common/TagInput.vue'
import DataTableTest from '../DataTableTest.vue'
import AnalysisInfo from './AnalysisInfo.vue'
import MixtureKwrd from './MixtureKwrd.vue'


export default {
    components: { BarChartTest, AnalysisInfo, DataTableTest, TagInput, MixtureKwrd, }, 
    data () {
        return {
            chartData:{ labels: [], datasets: [] },
            options: {
                maintainAspectRatio: false
            },
        }
    },
    methods:{
        updateAnalysis(){
            this.$store.dispatch("analysis/updateAnalysis",{
                highIgnoreKwrd:this.highIgnoreKwrd,
                lowIgnoreKwrd:this.lowIgnoreKwrd,
                reviewAnalsId:this.$route.params.id
            })
            .then(() =>{
                alert("업데이트 성공!")
                // BarChartTest.update()
                location.replace(`/analysis/${this.$route.params.id}`)
                
            })
        },
        saveImage(){
            
            let canvas1 = document.getElementById('high-chart').toDataURL('image/png')
            let link1 = document.createElement('a')
            link1.download = 'high-chart'
            link1.href = canvas1
            link1.click()

            let canvas2 = document.getElementById('low-chart').toDataURL('image/png')
            let link2 = document.createElement('a')
            link2.download = 'low-chart'
            link2.href = canvas2
            link2.click()

        },
        
    },
    created(){
        alert(this.id)
        this.$store.dispatch("analysis/searchAnalysisWithId",{
            reviewAnalsId: this.id
        })
        console.log(this.id)
    },
    computed:{
        highItem(){
            return this.$store.state.analysis.highItem
        },
        lowItem(){
            return this.$store.state.analysis.lowItem
        },
        analysis(){
            return this.$store.state.analysis.analysis
        },
        highReviewList(){
            return this.$store.state.analysis.highReviewList
        },
        lowReviewList(){
            return this.$store.state.analysis.lowReviewList
        },
        id(){
            return this.$store.state.analysis.id
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-container{
    padding: 10px;
    background: lightgray;
    height: 100%;
    .input-box{
        display: flex;
        background: white;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;
        

        .update-btn{
            
        }
    }
    .info-box{
        
    }
    
    .mixture-box{
        background: white;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;
    }

    .chart-box{
        display: flex;
        box-sizing: border-box;
        
        .high-chart-box{
            width: 50%;
            background: white;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 10px;
        }

        .low-chart-box{
            width: 50%;
            margin-left: 10px;
            background: white;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 10px;
        }
    }

    .review-box{
        display: flex;
        background: white;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 10px;

        .high-review{
            width: 50%;
            
        }

        .low-review{
            width: 50%;
            margin-left: 10px;
            
        }

    }
}


.download-btn-box{
    display: flex;
    justify-content: right;
}

.download-box{
    display: flex;
    justify-content: right;
}
</style>