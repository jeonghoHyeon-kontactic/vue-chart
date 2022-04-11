<template>
    <div class="tag-container">
        <div class="high-ignore-box">
            <div class="tag-list high-ignore">
                <div class="tag-item" v-for="item in highTagList" :key="item" @click="choice(item, $event, 5)">
                    {{ item }}
                </div>
            </div>
            <div class="tag-input high-input">
                <v-text-field label="5점 리뷰 불용어를 추가해주세요." v-model="highTag" @keydown.enter="highAddTag"></v-text-field>
            </div>
        </div>
        <div class="low-ignore-box">
            <div class="tag-list low-ignore">
                <div class="tag-item" v-for="item in lowTagList" :key="item" @click.self="choice(item, $event, 1)">
                    {{ item }}
                </div>
            </div>
            <div class="tag-input low-input">
                <v-text-field label="1점 리뷰 불용어를 추가해주세요." v-model="lowTag" @keydown.enter="lowAddTag"></v-text-field>
            </div>
            <div class="btn-box">
                <v-btn class="remove-btn" @click="remove" >삭제</v-btn>
                <v-btn class="ignore-btn" @click="updateAnalysis">업데이트</v-btn>
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
            highRemoveList:[],
            lowRemoveList:[],
            select: false
        }
    },
    created(){
        this.highTagList = this.highIgnoreKwd
        this.lowTagList = this.lowIgnoreKwd
    },
    methods:{
        choice(item,event,score){
            
            console.log(item)
            console.log(event)
            console.log(event.target.innerText)
            const target = event.target.innerText
            const test = event.target.attributes[1].value

            if(score == 5){
                if(test == "tag-item"){
                    event.target.attributes[1].value = "tag-item red"
                    this.highRemoveList.push(target)
                }else {
                    event.target.attributes[1].value = "tag-item"
                    this.cancle(item,score)
                }
            }else if(score == 1){
                if(test == "tag-item"){
                    event.target.attributes[1].value = "tag-item red"
                    this.lowRemoveList.push(target)
                }else {
                    event.target.attributes[1].value = "tag-item"
                    this.cancle(item,score)
                }
            }

        },
        cancle(ignore,score){
            
            if (score == 5){
                for (let i=0; i < this.highRemoveList.length; i++){
                    if(this.highRemoveList[i] === ignore){
                        this.highRemoveList.splice(i,1)
                        i-- 
                    }
                }
            } else if (score == 1) {
                for (let i=0; i < this.lowRemoveList.length; i++){
                    if(this.lowRemoveList[i] === ignore){
                        this.lowRemoveList.splice(i,1)
                        i-- 
                    }
                }
            }
            
        },
        remove(){
            // 5점 리뷰 불용어 삭제
            this.highRemoveList.forEach(item => {
                for (let i=0; i < this.highTagList.length; i++){
                    if(this.highTagList[i] === item){
                        this.highTagList.splice(i,1)
                        i-- 
                    }
                }
                
            })
            // 1점 리뷰 불용어 삭제
            this.lowRemoveList.forEach(item => {
                for (let i=0; i < this.lowTagList.length; i++){
                    if(this.lowTagList[i] === item){
                        this.lowTagList.splice(i,1)
                        i-- 
                    }
                }
                
            })

            this.updateAnalysis()
        },
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
        async updateAnalysis(){
            await this.$store.dispatch("analysis/updateAnalysis",{
                highIgnoreKwrd:this.highTagList,
                lowIgnoreKwrd:this.lowTagList,
                reviewAnalsId:this.$route.params.id
            })
            alert("업데이트 성공!")
            this.$router.go()
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

.red{
    background:red;
}
</style>