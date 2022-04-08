<template>
    <v-container>
        <v-row class="title-box">
            <v-col>
                {{ title }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: ["title"]
}
</script>

<style lang="scss" scoped>
.title-box{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: grey;
}
</style>