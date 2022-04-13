<template>
    <div>
        <div class="nav-item-box" v-for="i in nav" :key="i.name">
            <div class="nav-item-link" @click="test(1,i.href)">
                <div class="nav-item">
                    {{ i.name }}
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nav: [
                {
                    name: "Review",
                    href: "/analysis"
                },
                {
                    name: "Mypage",
                    href: "/mypage"
                },
                {
                    name: "HeatMap",
                    href: "/heatmap"
                },
                {
                    name: "TestPage",
                    href: "/demo"
                },
            ]
        }
    },
    methods:{
        async test(pageNum,href){

            if (href == "/client"){

                await this.$store.dispatch('analysis/searchAnalysisList',{
                    pageNum: pageNum == null ? 1: pageNum,
                    startDate: "2022-03-01",
                    endDate: "2022-04-10",
                    searchText: ""
                })
            }

            this.$router.push(href)
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-item-box{
    text-align: center;
    border-bottom: 2px solid lightgray;
    padding: 10px 0 10px 0;
    .nav-item-link{
        text-decoration: none;
        color: black;
        font-size:24px;
        font-weight: bold;
        .nav-item{
            width: 100%;
            height: 100%;
        }
    }
}

.nav-item-box:hover{
    background: lightgray;
}
</style>