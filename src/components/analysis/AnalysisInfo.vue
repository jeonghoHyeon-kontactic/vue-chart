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
                    전체 리뷰
                </div>
                <div class="review-content">
                    {{ reviewCount }}개
                </div>
            </div>
        </div>
        <div class="high-count-box box">
            <div class="icon-box">
                <span class="material-icons icon">
                    insert_emoticon
                </span>
            </div>
            <div class="high-box">
                <div class="high-head">
                    5점 리뷰
                </div>
                <div class="high-content">
                    {{ highReview }}개
                </div>
            </div>
        </div>
        <div class="low-count-box box">
            <div class="icon-box">
                <span class="material-icons icon">
                    sentiment_very_dissatisfied
                </span>
            </div>
            <div class="low-box">
                <div class="low-head">
                    1점 리뷰
                </div>
                <div class="low-content">
                    {{ lowReview }}개
                </div>
            </div>
        </div>
        <div class="product-count-box box">
            <div class="icon-box">
                <span class="material-icons icon">
                    category
                </span>
            </div>
            <div class="product-box">
                <div class="product-head">
                    상품 수
                </div>
                <div class="product-content">
                    {{ productCount }}개
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        highReview(){
            return this.$store.state.analysis.highReviewList.length
        },
        lowReview(){
            return this.$store.state.analysis.lowReviewList.length
        },
        reviewCount(){
            return this.highReview + this.lowReview
        },
        productCount(){
            return this.$store.state.analysis.reviewAsinsList.length
        }
    }
}
</script>

<style lang="scss" scoped>
.info-box{
    display: flex;
    .product-count-box{
        display: flex;
        margin-left: 10px;
        width: 25%;
        .product-box{
            text-align: center;
            width: 100%;
            .product-head{
                height: 50%;
                font-size:1.3em;
                font-weight: bold;
            }
            .product-content{
                height: 50%;
                font-size:1.2em;
            }
        }
    }
    .review-count-box{
        display: flex;
        width: 25%;
        .review-box{
            text-align: center;
            width: 100%;
            .review-head{
                height: 50%;
                font-size:1.3em;
                font-weight: bold;
            }
            .review-content{
                height: 50%;
                font-size:1.2em;
            }
        }
    }
    .high-count-box{
        display: flex;
        margin-left: 10px;
        width: 25%;
        .high-box{
            text-align: center;
            width: 100%;
            .high-head{
                height: 50%;
                font-size:1.3em;
                font-weight: bold;
            }
            .high-content{
                height: 50%;
                font-size:1.2em;
            }
        }

    }
    .low-count-box{
        display: flex;
        margin-left: 10px;
        width: 25%;
        .low-box{
            text-align: center;
            width: 100%;
            .low-head{
                height: 50%;
                font-size:1.3em;
                font-weight: bold;
            }
            .low-content{
                height: 50%;
                font-size:1.2em;
            }
        }
    }
}

.box{
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
}

.icon{
    font-size: 70px;
    color: gray
}
</style>