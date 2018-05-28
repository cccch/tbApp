<template>
    <div id="buy">
        <div class="buy-image">
            <img :src = "productData.result[this.$route.params.uid].prodcutImg" alt = ""/>
            <div><router-link to = "/car"><div class="buy-image-car"></div></router-link></div>
            <div><router-link to = "/"><div class="buy-image-arr"></div></router-link></div>
        </div>
        <div class="buy-msg">
            <div class="buy-msg-top">
                <p>
                    <span>￥{{productData.result[$route.params.uid].prodcutPriceNow}}</span>
                    <i>夏季大促销</i>
                    <i>淘金币减10%</i>
                    <br/>
                    <span>原价:</span><s>￥{{productData.result[$route.params.uid].prodcutPrice}}</s>
                </p>
                <p>{{productData.result[$route.params.uid].producttTitle}}</p>
                <p>
                    <span>快递：免运费</span>
                    <span>月销量：{{productData.result[$route.params.uid].producttVolume}}</span>
                    <span>{{productData.result[$route.params.uid].producttTitleLocation}}</span>
                </p>
            </div>
        </div>
        <div class="buy-info">
            <div><span>领券</span><s>店铺优惠券</s><i>满100减10优惠券</i><span>></span></div>
            <div><span>促销</span><s>积分</s><i>购买可得34积分</i><span>></span></div>
            <div><span>服务</span><s>vip卡</s><i>正品保证·急速退款</i><span>></span></div>
            <div><span>规格</span><s>自动推荐尺码</s><i>选择 尺寸，颜色分类</i><span>></span></div>
            <div><span>参数</span><s>工艺</s><i>品牌，产品等级</i><span>></span></div>
        </div>
        <div class="buy-seller">
            <div class="buy-seller-top">
                <div>
                    <img src = "../assets/images/myicon.jpg" />
                    <span>天猫旗舰店</span>
                </div>
                <s>进店逛逛</s>
                <i>全部宝贝</i>
            </div>
            <div class="buy-seller-bottom">
                <span>宝贝描述:4.9</span>
                <span>卖家服务:4.8</span>
                <span>物流服务:4.8</span>
            </div>
        </div>
        <div class="buy-footer">
            <div><img src = "../assets/images/store.png" alt = ""/><span>店铺</span></div>
            <div><img src = "../assets/images/旺旺.png" alt = ""/><span>客服</span></div>
            <div><img src = "../assets/images/收藏.png" alt = ""/><span>收藏</span></div>
            <div><i @click="myPop=!myPop">加入购物车</i><s>立即购买</s></div>
        </div>
        <div class="footer"></div>

        <mt-pop v-model="myPop" position="bottom" class="pop">
            <div class="pop-main">
                <div class="pop-top">
                    <div><img src = "../assets/images/myicon.jpg" alt = ""/></div>
                    <span>￥{{productData.result[$route.params.uid].prodcutPriceNow*productData.result[$route.params.uid].productNum}}</span>
                    <i>已选：{{productData.result[$route.params.uid].productName}}</i>
                </div>
                <div class="pop-middle">
                    <p>样式</p>
                    <div>
                        <div
                                @click="changeIndex(i)"
                                :class="{'pop-middle-select':i==nowIndex}"
                                 v-for="(v,i) in productData.result[this.$route.params.uid].productClass">{{v}}</div>
                    </div>
                </div>
                <div class="pop-num">
                    <span>购买数量:</span>
                    <div>
                        <mt-button class='pop-btn' type="default" @click="decrease($route.params.uid)">-</mt-button>
                        <i>{{productData.result[$route.params.uid].productNum}}</i>
                        <mt-button class='pop-btn' type="default" @click="add($route.params.uid)">+</mt-button>
                    </div>
                </div>
                <div class="pop-bottom" @click="upCar($route.params.uid)"><input type = "button" value="确定" @click="myPop=!myPop"/></div>
            </div>
        </mt-pop>


    </div>
</template>

<script type = "text/ecmascript-6">
//    import Vue from 'vue';
    import { Indicator } from 'mint-ui';
    import { Popup } from 'mint-ui'
    import {mapActions,mapState,mapGetters} from 'vuex'

    export default {
        data: function () {
            return {
                myPop:false,
            }
        },
        computed:mapGetters([
            'productData',
             'nowIndex'
        ]),
        methods:mapActions([
            'getProductData',
             'changeIndex',
             'add',
             'decrease',
             'upCar'
        ]),

        components:{
            'mt-pop':Popup,
        },
        mounted:function(){

        }
    }

</script>

<style>
    #buy {
        background-color: #eee;
        width: 100%;
    }
    /*大图片部分*/
    .buy-image {
        width: 100%;
        height: 390px;
        /*background: url('../assets/images/shoe.jpg') no-repeat 0 0;*/
        /*background-size: contain;*/
        position: relative;
    }
    .buy-image>img{
        width: 100%;
        height: 380px;
    }
    .buy-image>div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        background-color: #333333;
        opacity: 0.6;

    }
    .buy-image>div:nth-of-type(1){
        right: 20px;
        top: 15px;
    }
    .buy-image>div:nth-of-type(2){
        left: 20px;
        top: 15px;
    }
    .buy-image .buy-image-car {
        width: 25px;
        height: 25px;
        background: url('../assets/images/Wcar.png') no-repeat 0 0;
        background-size: contain;
        margin-top: 12px;
        margin-left: 12px;
    }
    .buy-image .buy-image-arr {
        width: 25px;
        height: 25px;
        background: url('../assets/images/arr.png') no-repeat 0 0;
        background-size: contain;
        margin-top: 12px;
        margin-left: 12px;
    }

    /*商品信息部分*/
    .buy-msg {
        background-color: #fff;
    }
    .buy-msg-top>p:nth-child(1){
        padding-left: 10px;
        margin-top: 5px;
    }
    .buy-msg-top>p:nth-child(1) span:nth-of-type(1){
        font: 600 22px/20px 'microsoft yahei';
        color: #FF4522;
    }
    .buy-msg-top>p:nth-child(1) i{
        font: 400 14px/12px 'microsoft yahei';
        color: #FF1122;
        display: inline-block;
        background-color: #FF999A;
        padding: 3px;
    }
    .buy-msg-top>p:nth-child(1) span:nth-of-type(2){
        margin-top: 6px;
        color: #aaa;
        font-size: 17px;
    }
    .buy-msg-top>p:nth-child(1) s{
        margin: 6px 0 0 10px;
        color: #aaa;
        font-size: 17px;
        text-decoration: line-through;
    }
    .buy-msg-top>p:nth-child(2){
        font: 700 18px/18px 'microsoft yahei';
        color: #111111;
        padding-left: 10px;
    }
    .buy-msg-top>p:nth-child(3){
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }
    .buy-msg-top>p:nth-child(3) span{
        color: #aaa;
        font-size: 15px;
    }
    .buy-info {
        background-color: #fff;
    }
    .buy-info div {
        padding: 13px 10px;
    }
    .buy-info div span:nth-of-type(1){
        color: #aaa;
        font-size: 17px;
        padding-right: 20px;
    }
    .buy-info div s{
        font: 400 14px/12px 'microsoft yahei';
        color: #FF1122;
        display: inline-block;
        background-color: #FEB54B;
        padding:3px;
        border-radius: 2px;

    }
    .buy-info div i{
        color: #000;
        font-size: 17px;
        margin-left: 5px;
    }
    .buy-info div span:nth-of-type(2){
        font: 400 20px/13px 'microsoft yahei';
        float: right;
        margin: 3px 20px 0 0;
    }
    .buy-seller {
        margin-top: 10px;
        background-color: #fff;
        width: 100%;
    }
    .buy-seller-top {
        height: 60px;
        padding: 10px;
    }
    .buy-seller-top div {
        float: left;
    }
    .buy-seller-top div img{
        vertical-align: middle;
        width: 45px;
        height: 45px;
    }
    .buy-seller-top div span {
        font: 400 17px/17px 'microsoft yahei';
        vertical-align: middle;
    }
    .buy-seller-top i{
        display: inline-block;
        padding: 5px;
        border: 1px solid #FDB348;
        border-radius: 10px;
        margin: 15px 15px 0 0 ;
        float: right;
    }
    .buy-seller-top s{
        display: inline-block;
        padding: 5px;
        background-color: #FDB348;
        border-radius: 10px;
        color: #fff;
        margin: 15px 0 0 0 ;
        float: right;
    }
    .buy-seller-bottom {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding: 20px 10px 10px;
        width: 100%;
    }
    .buy-seller-bottom span {
        font-size: 14px;
        flex: 1;
    }
    .buy-footer {
        height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #eee;
    }
    .buy-footer {
        display: flex;
    }
    .buy-footer>div {
        position: relative;
        text-align: center;
        flex: 1;
    }
    .buy-footer>div img {
        width: 24px;
        height: 24px;
    }
    .buy-footer>div span{
        font-size: 12px;
        display: block;
    }
    .buy-footer div:nth-child(4){
        flex: 4;
        display: flex;
        padding-top: 3px;
    }
    .buy-footer div i {
        height: 44px;
        background-color: #FDB348;
        flex: 1;
        border-radius: 22px 0 0 22px;
        font: 500 16px/44px 'microsoft yahei';
        color: #fff;
    }
    .buy-footer div s {
        flex: 1;
        background-color: #FF999A;
        border-radius: 0 22px 22px 0;
        height: 44px;
        font: 500 16px/44px 'microsoft yahei';
        color: #fff;

    }
    /*pop样式*/
    .pop {
        width: 100%;
    }
    .pop-main {
        width: 100%;
    }
    .pop-top div {
        width: 100px;
        height: 100px;
        padding: 10px;
        /*float: left;*/
        vertical-align: middle;
        display: inline-block;

    }
    .pop-top div img {
        width: 80px;
        height: 80px;
        vertical-align: middle;

    }
    .pop-top span {
        color: #FF1122;
        font: 700 18px/18px 'microsoft yahei';
        /*display: block;*/
        margin-top: 10px;
        vertical-align: middle;
    }
    .pop-top i {
        font: 500 18px/18px 'microsoft yahei';
        /*display: block;*/
        margin-top: 20px;
        vertical-align: middle;

    }
    .pop-middle {
        padding: 20px;
    }
    .pop-middle>div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }
    .pop-middle>div div{
        /*flex:1;*/
        padding: 8px 10px;
        border-radius: 10px;
        background-color: #ccc;
        margin: 10px;
        color: #fff;
        font: 300 15px/13px 'microsoft yahei';

    }
    .pop-main .pop-middle .pop-middle-select {
        background-color: #FF4E22;
    
    }
    .pop-num {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        height: 70px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }
    .pop-num span {
        font: 400 22px/70px 'microsoft yahei';
        padding-left:10px;
    }
    .pop-num div {
        display: inline-block;
        margin-top: 16px;
    }
    .pop-num div i{
        font: 400 22px/20px 'microsoft yahei';
    }
    .pop-btn {
        font: 600 27px/20px 'microsoft yahei';

    }
    .pop-bottom {
        width: 95%;
        margin-top: 20px;
    }
    .pop-bottom input {
        width: 100%;
        background-color: #FF852A;
        color: #ffffff;
        border-radius: 30px;
        height: 50px;
        font: 600 25px/50px 'microsoft yahei';
    }
    .pop-bottom input:active {
        background-color: #ccc;
    }




</style>