<template>
    <div class="info-box">
        <div class="review-count-box box">
            <div class="icon-box">
                <span class="material-icons icon">
                    rate_review
                </span>
            </div>
            <div class="review-box">
                <div class="review-head">
                    리뷰 수
                </div>
                <div class="review-content">
                    
                    13
                </div>
            </div>
        </div>
        <div class="star-count-box box">
            <div class="icon-box">
                <span class="material-icons icon">
                    star
                </span>
            </div>
            <div class="star-box">
                <div class="star-head">
                    별점 수
                </div>
                <div class="star-content">
                    
                    52
                </div>
            </div>
        </div>
        <div class="product-count-box box">
            <div class="product-box">
                <span class="material-icons icon">
                    category
                </span>
            </div>
            <div class="product-box">
                <div class="product-head">
                    제품 수
                </div>
                <div class="product-content">
                    
                    3
                </div>
            </div>
        </div>
        <div class="download-box box">
    
        </div>
    </div>
</template>

<script>
export default {
    props:["rCount","sCount","pCount"]
}
</script>

<style lang="scss" scoped>
.info-box{
    display: flex;
    .review-count-box{
        display: flex;
        width: 25%;
        .icon-box{

        }

        
    }
    .star-count-box{
        display: flex;
        margin-left: 10px;
        width: 25%;
    }
    .product-count-box{
        display: flex;
        margin-left: 10px;
        width: 25%;
    }
    .download-box{
        display: flex;
        margin-left: 10px;
        width: 25%;
    }
}

.box{
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
}


.icon{
    color: gray;
    font-size: 70px;
}
</style>