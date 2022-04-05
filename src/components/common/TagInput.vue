<template>
    <div class="tag-container">
        <div class="high-ignore-box">
            <div class="tag-list high-ignore">
                <div class="tag-item" :class="{ 'select': select }" v-for="item in highTagList" :key="item" @click="choice">
                    {{ item }}
                </div>
            </div>
            <div class="tag-input high-input">
                <v-text-field label="5점 리뷰 불용어를 추가해주세요." v-model="highTag" @keydown.enter="highAddTag"></v-text-field>
            </div>
        </div>
        <div class="low-ignore-box">
            <div class="tag-list low-ignore">
                <div class="tag-item" :class="{ 'select': select }" v-for="item in lowTagList" :key="item" @click="choice">
                    {{ item }}
                </div>
            </div>
            <div class="tag-input low-input">
                <v-text-field label="1점 리뷰 불용어를 추가해주세요." v-model="lowTag" @keydown.enter="lowAddTag"></v-text-field>
            </div>
            <div class="btn-box">
                <v-btn class="remove-btn" @click="remove" >삭제</v-btn>
                <v-btn class="ignore-btn" @click="updateAnalysis">불용어 추가</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            highTagList:[],
            lowTagList:[],
            highTag: "",
            lowTag:"",
            select: false
        }
    },
    created(){
        this.highTagList = this.highIgnoreKwd
        this.lowTagList = this.lowIgnoreKwd
    },
    methods:{
        highAddTag(){
            if (this.highTag == ""){
                alert("태그를 입력해주세요.")
            } else if (this.highTagList.indexOf(this.highTag) != -1) {
                alert("이미 존재하는 값입니다.")
                console.log(this.highTagList)
            } else {
                this.highTagList.push(this.highTag) 
                this.highTag = ""
            }
        },
        lowAddTag(){
            if (this.lowTag == ""){
                alert("태그를 입력해주세요.")
            } else if (this.lowTagList.indexOf(this.lowTag) != -1) {
                alert("이미 존재하는 값입니다.")
                console.log(this.lowTagList)
            } else {
                this.lowTagList.push(this.lowTag) 
                this.lowTag = ""
            }
        },
        remove(){
            this.tagList = []
        },
        choice(){
            this.select = true
            alert(this.select)
        },
        updateAnalysis(){
            this.$store.dispatch("analysis/updateAnalysis",{
                highIgnoreKwrd:this.highTagList,
                lowIgnoreKwrd:this.lowTagList,
                reviewAnalsId:this.id
            })
            .then(() =>{
                alert("업데이트 성공!")
                // BarChartTest.update()
                location.replace(`/analysis/${this.id}`)
                
            })
        },
    },
    computed:{
        highIgnoreKwd(){
            return this.$store.state.analysis.highIgnoreKwd
        },
        lowIgnoreKwd(){
            return this.$store.state.analysis.lowIgnoreKwd
        },
        id(){
            return this.$store.state.analysis.id
        },
    }
}
</script>

<style lang="scss" scoped>
.tag-container{
    display: flex;
    width: 100%;
    .tag-list{
        min-height: 30px;
        border-radius: 5px;
        display: flex;
        flex-wrap: wrap;
        padding: 5px 0;
        .tag-item{
            padding: 5px 10px;
            margin: 5px;
            background: rgb(202, 231, 245);
            color: gray;
            font-weight: bold;
            border-radius: 10px;
            height: 35px;
        }
    }

    .tag-input{

    }
}

.btn-box{
    display: flex;
    justify-content: right;
}

.ignore-btn{
    margin-left: 10px;
}

.low-ignore-box{
    margin-left: 10px;
    width: 50%;
}
.high-ignore-box{
    width: 50%;
}

.high-ignore{
    background: skyblue;
    
}

.low-ignore{
    background: pink;
}

.select{
    background:red;
}
</style>