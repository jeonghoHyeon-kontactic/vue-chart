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
            <v-btn @click="saveImage">이미지 다운로드</v-btn>
        </div>
        <div class="chart-box">
            <div class="keyword-chart">
                <bar-chart-test  :chart-id="high-chart" :labels="highItem.highLabel" :data="highItem.highData" label="High Score Keyword"/>
            </div>
            <div class="k-chart" >
                <bar-chart-test  :chart-id="low-chart" :labels="lowItem.lowLabel" :data="lowItem.lowData" label="Low Score Keyword"/>
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
            lowIgnoreKwrd:"",
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
        },
        saveImage(){

            // let list = ['high','low']
            
            let canvas1 = document.getElementById("high-chart").toDataURL('image/png')

            // let canvas2 = document.getElementById(`low-chart`).toDataURL('image/png')

            let link = document.createElement('a')
            link.download = 'image'
            link.href = canvas1
            link.click()
            
            // link.href = canvas2
            // link.click()

                
         

            // let canvas = document.getElementById(`${high}-chart`).toDataURL('image/png')
            
            // let canvas = []
            // canvas = document.getElementsByClassName('chart').toDataURL('image/png');

            // // canvas.forEach(element => console.log(element));
            //     let link = document.createElement('a')
            //     link.download = 'image'
            //     link.href = canvas
            //     link.click()

        },
        printChart() {
            var canvasEle = document.getElementById('bar-chart');
            var win = window.open('', 'Print', 'height=600,width=800');
            win.document.write("<br><img src='" + canvasEle.toDataURL() + "' />");
            setTimeout(function(){ //giving it 200 milliseconds time to load
                    win.document.close();
                    win.focus()
                    win.print();
                    win.location.reload()
            }, 200);  
        },
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