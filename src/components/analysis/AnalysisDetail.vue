<template>
    <v-container>
        <v-row>
            <v-card replace="true">
                <v-tabs
                v-model="tab"
                background-color="pink"
                dark
                >
                <v-tab
                    v-for="item in items"
                    :key="item.tab"
                >
                    {{ item.tab }}
                </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                <v-tab-item
                    v-for="item in items"
                    :key="item.tab"
                >
                    <v-card flat >
                    <v-card-text>
                        <div v-if="item.tab == 'High'">
                            <bar-chart-test :labels="highItem.highLabel" :data="highItem.highData" />
                        </div>
                        <div v-else>
                            <bar-chart-test :labels="lowItem.lowLabel" :data="lowItem.lowData" />
                        </div>
                        <area-chart />
                        <rader-chart />
                        <line-chart />
                        <pie-chart />
                    </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import AreaChart from '../chart/AreaChart.vue'
import BarChartTest from '../chart/BarChartTest.vue'
import LineChart from '../chart/LineChart.vue'
import RaderChart from '../chart/RaderChart.vue'
import PieChart from '../chart/PieChart.vue'
export default {
    components: { BarChartTest, AreaChart, RaderChart, LineChart, PieChart},
    data () {
        return {
            tab: null,
            items: [
                { tab: 'High', content: '' },
                { tab: 'Low', content: '' },
            ],
            
        }
    },
    methods:{

    },
    created(){
        this.$store.dispatch("analysis/searchAnalysisWithId",{
            reviewAnalsId: this.$route.params.id
        })
    },
    computed:{
        highItem(){
            return this.$store.state.analysis.highItem
        },
        lowItem(){
            return this.$store.state.analysis.lowItem
        }

    }
}
</script>

<style lang="scss" scoped>

</style>