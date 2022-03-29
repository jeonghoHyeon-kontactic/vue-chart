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
        nextPage(){
            this.$emit('pageNum', this.page)
        }
    },
    watch:{
        page: function () {
            this.nextPage()
        }
    },
    computed:{
    }
}
</script>

<style lang="scss" scoped>

</style>