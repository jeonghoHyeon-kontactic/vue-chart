<template>
    <v-container>
        <v-row class="test">
            <v-col cols="3">
                <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="startDate"
                        label="Start Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="startDate"
                    @input="menu1 = false"
                    ></v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="3">
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="endDate"
                        label="End Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="endDate"
                    @input="menu2 = false"
                    ></v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="5">
                <v-text-field label="Search" v-model="searchText" @keydown.enter="searchAnalysis"></v-text-field>
            </v-col>
            <v-col cols="1" align-self="center">
                <v-dialog
                v-model="dialog"
                width="500"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="black lighten-2"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    분석 요청
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                        분석 요청 
                    </v-card-title>

                    <v-card-text class="card-content">
                        <v-text-field label="분석 제목을 입력해주세요." v-model="title"></v-text-field>
                        <v-textarea
                        outlined
                        name="input-7-4"
                        label="분석할 ASIN"
                        v-model="asins"
                        ></v-textarea>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="closeModal"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="primary"
                        text
                        @click="requestAnalysis"
                    >
                        Request
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        dialog: false,
        asins:"",
        startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * -1400000)).toISOString().substring(0, 10),
        endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10),
        menu1: false,
        menu2: false,
        searchText:"",
        title:""
    }),
    methods:{
        closeModal(){
            this.dialog = false
            this.asins = ""
            this.title = ""
        },
        searchAnalysis(){
            this.$store.dispatch("analysis/searchAnalysisList",{
                pageNum: 1,
                startDate: this.startDate,
                endDate: this.endDate,
                searchText: this.searchText
            })
        },
        requestAnalysis(){
            axios.post('/api/review-anals/insert',{
                reviewAsins:this.asins,
                reviewAnalsTitle:this.title
            })
            .then(res => {
                alert("요청 성공")
                console.log(res)
                this.closeModal()
                location.replace('/analysis')
            })
            .catch(err => {
                alert("요청에 실패했습니다.")
                console.log(err)
                this.closeModal()
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.test{
    border: 2px solid lightgray;
    margin-bottom: 0px;
}
.card-content{
    padding: 20px 20px 0 20px !important;
    
}
</style>