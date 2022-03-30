<template>
    <v-container>
        <v-pagination
        v-model="page"
        :length="length"
        ></v-pagination>
    </v-container>
</template>

<script>
export default {
    props:["length"],
    emits:["pageNum"],
    data () {
        return {
            page: 1,
        }
    },
    methods:{
        movePage(){
            this.$emit('pageNum', this.page)
            // // this.$emit('searchText', this.searchText)
            // this.$store.dispatch('analysis/searchAnalysisList',{
            //     pageNum: 1,
            //     startDate: "2022-03-10",
            //     endDate: "2022-03-19",
            //     searchText: ""
            // })
        }
    },
    watch:{
        page: function () {
            this.movePage()
        }
    },
    computed:{
        searchText(){
            return this.$store.state.analysis.searchText
        },
    }
}
</script>

<style lang="scss" scoped>

</style>