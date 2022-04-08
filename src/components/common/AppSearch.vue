<template>
    <div class="search-box">
        <div class="start-date-box">
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
        </div>
        <div class="end-date-box">
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
        </div>
        <div class="input-box">
            <v-text-field label="Search" v-model="searchText" @keydown.enter="searchAnalysis"></v-text-field>
        </div>
        <div class="modal-box">
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
                    @click="request"
                >
                    Request
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>
    </div>
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
        search(item){
            if(item == "review"){
                this.$store.dispatch("analysis/searchAnalysisList",{
                    pageNum: 1,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    searchText: this.searchText
                })
            } else if (item == "client") {
                this.$store.dispatch("client/searchClientList",{
                    pageNum: 1,
                    startDate: this.startDate,
                    endDate: this.endDate,
                    searchText: this.searchText
                })
            }
        },
        closeModal(){
            this.dialog = false
            this.asins = ""
            this.title = ""
        },
        request(){
            let asinsList = []
            const reviewAsins = this.asins
            asinsList = reviewAsins.split(/\n| /)
            
            console.log(reviewAsins)
            console.log(asinsList)

            axios.post('/api/review-anals/insert',{
                reviewAsins:asinsList,
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
.search-box{
    display: flex;
    border: 2px solid lightgray;
    margin-bottom: 10px;

    .start-date-box{
        width: 25%;
        padding: 10px;
    }

    .end-date-box{
        width: 25%;
        padding: 10px;
    }

    .input-box{
        width: 40%;
        padding: 10px;
    }  

    .modal-box{
        width: 10%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>