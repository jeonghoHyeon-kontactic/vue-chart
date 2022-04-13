<template>
    <v-container class="test-container">
        <app-title title="테스트 페이지" />
        <tag-input />
        <column-chart :cateList="highCate" :dataList="highData"/>
    </v-container>
</template>

<script>
import AppTitle from '@/components/common/AppTitle.vue'
import ColumnChart from '@/components/apexcharts/ColumnChart.vue'
import TagInput from '@/components/common/TagInput.vue'
export default {
components: { AppTitle, ColumnChart, TagInput },
data(){
    return{
        series1:[
            { data: [30,40,45,50,49,60,70,12]}
        ]
    }
},
methods:{
    
},
computed:{
    highCate(){
        return this.$store.state.analysis.highItem.highLabel
    },
    highData(){
        return this.$store.state.analysis.highItem.highData
    }
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