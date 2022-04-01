<template>
    <div class="detail-container">
        <div class="input-box"> 
            <v-textarea
            outlined
            name="input-7-4"
            label="Outlined textarea"
            v-model="highIgnoreKwrd"
            ></v-textarea>
            <v-textarea
            outlined
            name="input-7-4"
            label="Outlined textarea"
            v-model="lowIgnoreKwrd"
            ></v-textarea>
            <v-btn class="update-btn" @click="updateAnalysis">텍스트 필터</v-btn>
        </div>
        <div class="info-box">
            <analysis-info :rCount="analysis" :sCount="analysis" :pCount="analysis"/>
        </div>
        <div class="chart-box">
            <div class="keyword-chart">
                <bar-chart-test class="chart" :labels="highItem.highLabel" :data="highItem.highData" label="High Score Keyword"/>
            </div>
            <div class="k-chart" >
                <bar-chart-test :labels="lowItem.lowLabel" :data="lowItem.lowData" label="Low Score Keyword"/>
            </div>
        </div>
        <div v-if="true" class="review-box"> 
            <div class="high-review" v-if="true">
                <data-table-test />
            </div>
            <div class="low-review" v-if="true">
                <data-table />
            </div> 
        </div>
    </div>
</template>

<script>
import BarChartTest from '../chart/BarChartTest.vue'
import DataTable from '../DataTable.vue'
import DataTableTest from '../DataTableTest.vue'
import AnalysisInfo from './AnalysisInfo.vue'


export default {
    components: { BarChartTest, AnalysisInfo, DataTableTest, DataTable, },
    data () {
        return {
            highIgnoreKwrd:"",
            lowIgnoreKwrd:""
        }
    },
    methods:{
        updateAnalysis(){
            this.$store.dispatch("analysis/updateAnalysis",{
                highIgnoreKwrd:this.highIgnoreKwrd,
                lowIgnoreKwrd:this.lowIgnoreKwrd,
                reviewAnalsId:this.id
            })
            .then(() =>{
                alert("업데이트 성공!")
                // BarChartTest.update()
                location.replace(`/analysis/${this.id}`)
                
            })
        }
    },
    created(){
        this.highIgnoreKwrd = this.highIgnoreKwd
        this.lowIgnoreKwrd = this.lowIgnoreKwd
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
        highIgnoreKwd(){
            return this.$store.state.analysis.highIgnoreKwd
        },
        lowIgnoreKwd(){
            return this.$store.state.analysis.lowIgnoreKwd
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
    .info-box{
        background: white;
        
        padding: 10px;
    }
    .input-box{
        display: flex;
        background: white;
        padding: 10px;
        

        .update-btn{
            
        }
    }
    .chart-box{
        display: flex;
        background: white;
        padding: 10px;
        .keyword-chart{
            width: 50%;
        }

        .k-chart{
            width: 50%;
        }
    }
    .review-box{
        

    }
}
.download-box{
    display: flex;
    justify-content: right;
}
</style>