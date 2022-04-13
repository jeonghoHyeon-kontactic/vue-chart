<template>
    <v-container class="heatmap-container">
        <div class="heatmap-box">
            <app-title title="HeatMap 상세페이지"/>
            <div class="input-box">
                <div class="select-box">
                    <div class="month-box">
                        <div class="start-date-box">
                            <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            :return-value.sync="startDate"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="startDate"
                                label="startDate"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="startDate"
                            type="month"
                            no-title
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu1 = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu1.save(startDate)"
                            >
                                OK
                            </v-btn>
                            </v-date-picker>
                        </v-menu>
                        </div>
                        <v-menu
                        ref="menu2"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :return-value.sync="endDate"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="endDate"
                            label="endDate"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="endDate"
                        type="month"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu2 = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu2.save(endDate)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                    </div>
                    <div class="radio-box">
                        <v-radio-group v-model="radioGroup" class="flex-center" row>
                            <v-radio
                                v-for="t in time"
                                :key="t"
                                :label="`${t}시간`"
                                :value="t"
                            ></v-radio>
                        </v-radio-group>
                    </div>
                </div>
                <div class="file-box">
                    <v-file-input
                    truncate-length="15"
                    id="file"
                    ></v-file-input>
                    <v-btn @click="upload">업로드</v-btn>
                </div>
            </div>
                <heat-map-chart />
        </div>
    </v-container>
</template>

<script>
import HeatMapChart from '@/components/apexcharts/HeatMapChart.vue'
import AppTitle from '@/components/common/AppTitle.vue'
import axios from 'axios'
export default {
    components: { HeatMapChart,AppTitle },
    data(){
        return{
            items:["2022","2021"],
            year:"2022",
            time:["1","2","3","4","6"],
            radioGroup:"1",
            checkbox: [1],
            startDate:"2022-04",
            endDate:"2022-04",
            menu1: false,
            menu2: false,
        }
    },
    methods:{
        allowedMonths: val => parseInt(val.split('-')[1], 10) % 2 === 0,
        
        async getData(clntCmpnyId,endDate,startDate,time){
            await this.$store.dispatch("reports/getHeatMap",{
                clntCmpnyId: clntCmpnyId ? clntCmpnyId : 1,
                endDate: endDate ? endDate : "2021-08",
                startDate: startDate ? startDate : "2021-08",
                time: time ? time : 1
            })
        },
        upload(){
            console.log(this.files)
            const formData = new FormData();
            const file = document.getElementById("file")
            formData.append("mFile",file.files[0])
            formData.append("clntCmpnyId",1)
            axios.post("/api/payments-report/upload", formData, { 
                headers: { 
                    "Content-Type" : "multipart/form-data" 
                } 
            }).then(res => {
                console.log(res)
                alert("업로드 성공!")
                this.$router.go()
            }).catch(err => {
                console.log(err)
                alert("업로드 실패!")
            })
        },
    },
    created(){
        this.getData()
    },
    computed:{
        heatmapData(){
            return this.$store.state.reports.heatMap
        }
    },
    watch:{
        radioGroup: function (val){
            this.getData(1,`${this.year}-${this.month}`,`${this.year}-${this.month}`,val)
        },
        startDate: function (){
            this.$refs.menu1.save(this.startDate)
            this.menu1 = false
        },
        endDate: function(val) {
            this.getData(1,this.startDate,val,this.radioGroup)
            this.$refs.menu2.save(this.endDate)
            this.menu2 = false
        },
    }
}
</script>

<style lang="scss" scoped>

.input-box{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    .select-box{
        display: flex;
    }
}

.start-date-box{
    margin-right: 20px;
}

.radio-box{
    margin-left:20px;
}

.year-box{
    margin: 3px;
}

.file-box{
    display: flex;
    width: 300px;
}

.month-box{
    display: flex;
    // flex-wrap: wrap;
    // width: 400px;
}

.month-list{
    display: flex;

    .month-item{
        margin: 3px;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid lightgray;
        border-radius: 50px;
        color: gray;
    }


}
</style>