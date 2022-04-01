<template>
    <v-card>
        <v-card-title>
            리뷰 목록
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        ></v-data-table>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            search: '',
            headers: [],
            desserts: [],
        }
    },
    methods: {
        getReview(){
            alert("안녕")
            this.header = this.headers1
            this.desserts = this.desserts1
            alert(this.headers)
        },
        getTest(){
            
        }
    },
    computed:{
        headers1(){
            return this.$store.state.analysis.headers
        },
        desserts1(){
            return this.$store.state.analysis.desserts
        }
    },
    created(){
        this.getReview()
    }
}
</script>

<style lang="scss" scoped>

</style>