<template>
    <div class="list-box">
        <review-item v-for="item in Review" :key="item" :item="item"/>
    </div>
</template>

<script>
import ReviewItem from "./ReviewItem"
export default {
    props:["Review"],
    components:{
        ReviewItem
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
.list-box{
    overflow: auto;
    height: 500px;
    width: 50%;
    margin: 10px;
    background:white;
}
</style>