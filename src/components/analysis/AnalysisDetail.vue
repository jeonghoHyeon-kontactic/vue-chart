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
                <column-chart :item="highItem" color="#87ceeb"/>
            </div>
            <div class="low-chart-box">
                <column-chart :item="lowItem"  color="#ffc0cb"/>
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
import ColumnChart from '../apexcharts/ColumnChart.vue'
import TagInput from '../common/TagInput.vue'
import DataTableTest from '../DataTableTest.vue'
import AnalysisInfo from './AnalysisInfo.vue'
import MixtureKwrd from './MixtureKwrd.vue'


export default {
    components: { AnalysisInfo, DataTableTest, TagInput, MixtureKwrd, ColumnChart},
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
            padding: 10px 10px 0 10px;
        }

        .low-chart-box{
            width: 50%;
            margin-left: 10px;
            background: white;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 10px 10px 0 10px;
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