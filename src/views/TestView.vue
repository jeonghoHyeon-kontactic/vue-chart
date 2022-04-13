<template>
    <v-container class="test-container">
        <app-title title="테스트 페이지" />
        <column-chart :series1="data1"/>
    </v-container>
</template>

<script>
import AppTitle from '@/components/common/AppTitle.vue'
import ColumnChart from '@/components/apexcharts/ColumnChart.vue'
export default {
components: { AppTitle, ColumnChart },
data(){
    return{
        data1:[30,40,45,50,49,60,70,91]
    }
},
methods:{
    
},
computed:{
    
},
created(){
    
}
}
</script>

<style lang="scss" scoped>
.test-container{
    padding: 10px;
}
</style>