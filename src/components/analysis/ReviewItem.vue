<template>
    <div class="item-box">
        <div>
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    props:["item"]
}
</script>

<style lang="scss" scoped>
.item-box{
    height: 25px;
    overflow: hidden;
    margin-bottom: 10px;
}
</style>