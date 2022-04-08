<template>
    <div class="search-box">
        <div class="input-box">
            <v-text-field label="Search" v-model="searchText" @keydown.enter="searchAnalysis"></v-text-field>
        </div>
        <div class="btn-box">
            <v-btn>고객사 추가</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchText:"",
        }
    }
}
</script>

<style lang="scss" scoped>
.search-box{
    display: flex;
    border: 2px solid lightgray;
}
</style>