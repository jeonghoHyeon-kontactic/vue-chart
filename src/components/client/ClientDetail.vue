<template>
    <div class="detail-container">
        <div class="detail-box">
            <div class="heatmap-box" @click="goHeatMap">HeatMap</div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goHeatMap(){
            this.$router.push(`/client/${this.$route.params.id}/heatmap`)
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-container{
    padding: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .detail-box{
        display: flex;
        
        .heatmap-box{
            font-size:50px;
            font-weight: bold;
            padding: 5px 10px;
            background: pink;
            color:lightcoral;
            border: 2px solid lightgray;
            border-radius: 5px;
        }
        .heatmap-box:hover{
            background:skyblue;
            color:blue;
        }
    }
}
</style>