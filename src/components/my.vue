<template>
    <div class="my">
        <div class="my-top">
            <div></div>
        </div>
        <div class="my-list1">
            <div><span>0</span><span>收藏的宝贝</span></div>
            <div><span>0</span><span>收藏的店铺</span></div>
            <div><span>0</span><span>我的宝贝</span></div>
        </div>
        <div class="my-logo">
            <div><div></div><span>待付款</span></div>
            <div><div></div><span>待发货</span></div>
            <div><div></div><span>待收货</span></div>
            <div><div></div><span>待评价</span></div>
            <div><div></div><span>退款/售后</span></div>
        </div>
        <div class="my-list-2">
            <ul>
                <li>
                    <div><img src = "../assets/images/全部订单.png" alt = ""/></div>
                    <span>全部订单</span>

                    <i>></i>
                </li>
                <li>
                    <div><img src = "../assets/images/购物车.png" alt = ""/></div>
                    <span>购物车</span>

                    <i>></i>
                </li>
                <li>
                    <div><img src = "../assets/images/搜索.png" alt = ""/></div>
                    <span>搜索</span>

                    <i>></i>
                </li>
                <li>
                    <div><img src = "../assets/images/支付宝.png" alt = ""/></div>
                    <span>支付宝</span>

                    <i>></i>
                </li>
                <li>
                    <div><img src = "../assets/images/旺旺.png" alt = ""/></div>
                    <span>旺旺</span>

                    <i>></i>
                </li>
                <li>
                    <div><img src = "../assets/images/机票.png" alt = ""/></div>
                    <span>我的机票</span>

                    <i>></i>
                </li>
                <li>
                    <div><img src = "../assets/images/彩票.png" alt = ""/></div>
                    <span>我的彩票</span>

                    <i>></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type = "text/ecmascript-6">
    export default {
        data: function () {
            return {}
        }
    }

</script>

<style>
    .my {
        background-color: #eeeeee;
    }
    /*my-top*/
    .my-top {
        height: 130px;
        background: url('../assets/images/mybg.jpg') no-repeat 0 0;
        background-size: cover;
        position: relative;
    }
    .my-top div:nth-child(1) {
        position: absolute;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background: url('../assets/images/myicon.jpg') no-repeat 0 0;
        background-size: contain;
        left: 10px;
        bottom: -35px;
    }
    /*my-list*/
    .my .my-list1{
        padding-top:5px;
        height: 60px;
        background-color: #fff;
        display: flex;
        padding-left: 80px;
        justify-content: space-around;
    }
    .my .my-list1 div {
        text-align: center;
    }
    .my .my-list1 div span {
        font-size: 13px;
    }
    .my .my-list1 div span:nth-child(1){
        display: block;
    }
    /*my-logo*/
    .my .my-logo {
        margin-top: 12px;
        height: 70px;
        display: flex;
        justify-content: space-around;
        background-color: #fff;
        padding-top: 12px;
    }
    .my .my-logo>div {
        text-align: center;
    }
    .my .my-logo>div>div{
        width: 30px;
        height: 30px;
        margin: 0 auto;

    }
    .my .my-logo>div>span {
        font-size: 12px;
    }
    .my .my-logo>div:nth-child(1)>div{
        background: url('../assets/images/待付款.png') no-repeat 0 0;
        background-size: contain;

    }.my .my-logo>div:nth-child(2)>div{
        background: url('../assets/images/待发货.png') no-repeat 0 0;
        background-size: contain;
    }
    .my .my-logo>div:nth-child(3)>div{
        background: url('../assets/images/待收货.png') no-repeat 0 0;
        background-size: contain;
    }
    .my .my-logo>div:nth-child(4)>div{
        background: url('../assets/images/待评价.png') no-repeat 0 0;
        background-size: contain;
    }
    .my .my-logo>div:nth-child(5)>div{
        background: url('../assets/images/退款.png') no-repeat 0 0;
        background-size: contain;
    }
/*mt-list2*/
    .my .my-list-2 {
        margin-top: 10px;
    }
    .my .my-list-2>ul li {
        height: 40px;
        background-color: #fff;
        padding: 6px 0 0 15px;
    }
    .my .my-list-2>ul li img {
        width: 18px;
        margin: 0 auto;
        display: block;

    }
    .my .my-list-2>ul li>div{
        float: left;
        width: 28px;
        height: 28px;
        padding-top: 5px;
        border-radius: 3px;
    }
    .my .my-list-2>ul li:nth-of-type(1)>div {
        background-color: #5090CD;
    }.my .my-list-2>ul li:nth-of-type(2)>div {
        background-color: #E7A200;

    }.my .my-list-2>ul li:nth-of-type(3)>div {
        background-color: #5090CD;

    }.my .my-list-2>ul li:nth-of-type(4)>div {
        background-color: #56C9F4;
    }.my .my-list-2>ul li:nth-of-type(5)>div {
        background-color: #56C9F4;
    }.my .my-list-2>ul li:nth-of-type(6)>div {
        background-color: #E64C2E;
    }.my .my-list-2>ul li:nth-of-type(7)>div {
        background-color: #56C9F4;
    }
    .my .my-list-2>ul li i{
        float: right;
        font: 700 20px/40px 'microsoft yahei';
        color: #aaa;
    }
    .my .my-list-2>ul li span {
        padding-left: 15px;
        font: 400 16px/25px 'microsoft yahei';
    }
</style>