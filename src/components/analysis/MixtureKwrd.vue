<template>
    <div class="mixture-container">    
        <div class="high-mixture-box">
            <div class="high-mixture-list">
                <div class="high-mixture-item" v-for="item in highMixture" :key="item">
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="low-mixture-box">
            <div class="low-mixture-list">
                <div class="low-mixture-item"  v-for="item in lowMixture" :key="item">
                    {{ item }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            highMixture: ["안녕 / 바보"],
            lowMixture: ["별로 / 짜증"] 
        }
    },
    computed:{
        highWordMixtureList(){
            return this.$store.state.analysis.highWordMixtureList
        },
        lowWordMixtureList(){
            return this.$store.state.analysis.lowWordMixtureList
        }
    },
    created(){
        this.highMixture = this.highWordMixtureList
        this.lowMixture = this.lowWordMixtureList
    }
}
</script>

<style lang="scss" scoped>

.mixture-container{
    display: flex;
    .high-mixture-box{
        border: 2px solid lightgray;
        border-radius: 5px;
        height: 200px;
        width: 50%;
        overflow: auto;
        
        
        .high-mixture-list{
            display: flex;
            flex-wrap: wrap;
            .high-mixture-item{
                padding: 5px 10px;
                margin: 5px;
                background: rgb(202, 231, 245);
                color: gray;
                font-weight: bold;
                border-radius: 10px;
            }
        }
    
    }
    
    
    .low-mixture-box{
        border: 2px solid lightgray;
        border-radius: 5px;
        height: 200px;
        width: 50%;
        margin-left: 10px;
        overflow: auto;
        .low-mixture-list{
            display: flex;
            flex-wrap: wrap;
            .low-mixture-item{
                padding: 5px 10px;
                margin: 5px;
                background: rgb(250, 192, 202);
                color: gray;
                font-weight: bold;
                border-radius: 10px;
            }
        }
    
    }
}
</style>