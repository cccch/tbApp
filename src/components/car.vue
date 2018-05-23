<template>
    <div class="car">
        <div class="car-top">
            <span>购物车</span>
            <i>(0)</i>
        </div>
        <!--购物车无货物时-->
        <div class="car-em" v-if="JSON.stringify(car)=='{}'">
            <div class="car-empty  clearfix" >
                <div>
                    <div></div>
                </div>
                <p>购物车快饿瘪了T.T<p/>
                <i>主人快给我挑点宝贝吧</i>
                <br/>
                <p><router-link to="/"><mt-button type="default">快去购物</mt-button></router-link></p>
            </div>
        </div>
        <!--购物车主要部分-->
        <div class="car-main"v-if="JSON.stringify(car)!='{}'">
            <div v-for="(v,i) in car" >
                <input class="car-checkbot" type = "checkbox" :checked="v.checked" @click="upChecked(i)"/>
                    <div><img :src = "v.img" alt = ""/></div>
                    <div>
                        <p>{{v.title}}</p>
                        <span>{{v.style}}</span>
                        <i>￥{{v.total}}</i>
                        <div>
                            <mt-button class='car-btn' type="default" @click="carDecrease(i)">-</mt-button>
                            <s>{{v.num}}</s>
                            <mt-button class='car-btn' type="default" @click="carAdd(i)">+</mt-button>
                        </div>
                    </div>
                <span class="car-close" @click="close(i)">×</span>
            </div>

        </div>
        <div class="car-footer" v-if="JSON.stringify(car)!='{}'">
            <input type = "checkbox" @click="all" :checkbox="checkAll"/><span>全选</span>
            <i>合计：</i>
            <s>{{total}}</s>
            <div><span>结算({{total}})</span></div>

        </div>
        <div class="car-foot"></div>
        <div class="car-foot"></div>
    </div>
</template>

<script type = "text/ecmascript-6">
    import { Checklist } from 'mint-ui';
    import {mapActions,mapGetters} from 'vuex'

    export default {
        data: function () {
            return {
            }
        },
        computed:mapGetters([
                'car',
                'total',
                'checkAll'
        ]),
        methods:mapActions([
                'totaltest',
                'carAdd',
                'carDecrease',
                'all',
                'upChecked',
                'close'
        ]),

    }

</script>

<style>
    .car {
        background-color: #eeeeee;
        height: 100%;
    }
    .car-top {
        height: 50px;
        background-color: #FF852A;
        text-align: center;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .car-top span{
        font: 500 20px/50px 'microsoft yahei';
        color: #fff;
    }
    .car-top i {
        font: 400 18px/50px 'microsoft yahei';
        color: #fff;
    }
    .car-em .car-empty {
        /*height: 1000px;*/
        border: 1px solid #eee;
        text-align: center;
    }
    .car-empty>div {

        margin: 200px auto 0;
        background-color: #aaa;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .car-em .car-empty>div>div{
        width: 100px;
        height: 100px;
        background: url("../assets/images/emptycar.png") no-repeat 0 0;
        background-size: contain;
        transform: translate(25px,25px);
    }
    .car-em .car-empty p:nth-of-type(1) {
        font: 400 20px/20px 'microsoft yahei';
    }
    .car-em .car-empty i {
        color: #aaa;
        font: 400 16px/16px 'microsoft yahei';
    }
    .car-main>div {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        width: 100%;
        height: 140px;
        background-color: #fff;
        position: relative;
        padding: 8px;
        margin-top: 5px;
    }
    .car-main>div input {
         float: left;
        width: 30px;
        height: 30px;
     }
    .car-main>div>div:nth-of-type(1) {
        float: left;
    }
    .car-main>div>div:nth-of-type(1) img {
        width: 100px;
        height: 100px;
    }
    .car-main>div s{
        font: 400 15px/20px 'microsoft yahei';
    }
    .car-btn {
        font: 600 13px/25px 'microsoft yahei';
        /*width: 35px;*/
        height: 30px;
        text-align: center;

    }
    .car-main>div p {
        font: 400 15px/15px 'microsoft yahei';
        padding: 2px 5px 2px 5px;
        height: 40px;
        overflow: hidden;
    }
    .car-main>div span {
        /*display: block;*/
        font: 400 15px/15px 'microsoft yahei';
        padding: 5px;
        background-color: #eee;
        color: #aaa;
        height: 30px;
        overflow: hidden;
    }
    .car-main>div i {
        color: #FF332A;
        position: absolute;
        right: 200px;
        bottom: 10px;
    }
    .car-main>div>div>div{
        position: absolute;
        right: 15px;
        bottom: 10px;

    }
    .car-footer {
        position: fixed;
        bottom: 50px;
        left: 0;
        height: 50px;
        background-color: #fff;
        width: 100%;
    }
    .car-footer input {
        width: 30px;
        height: 30px;
        vertical-align: middle;
    }
    .car-footer>span {
        font: 400 15px/50px 'microsoft yahei';
        color: #444444;

    }
    .car-footer i {
        font: 400 17px/50px 'microsoft yahei';
        margin-left: 40px;
    }
    .car-footer s {
        font: 400 17px/50px 'microsoft yahei';
        color: #FF852A;
    }
    .car-footer>div {
        position: absolute;
        right: 0;
        top: 0;
        height: 50px;
        font: 400 20px/50px 'microsoft yahei';
        color: #fff;
        background-color: #FF852A;
        padding: 0 20px;
    }
    .car-foot {
        height: 50px;
        background-color: #eee;
    }
    .car-main .car-close {
        position: absolute;
        top: -4px;
        right: 0;
        display: block;
        height: 30px;
        width: 30px;
        font: 600 20px/30px 'microsoft yahei';
        background-color: #fff;
        opacity: 0.9;
        padding: 0;
        padding: 2px;
    }

</style>