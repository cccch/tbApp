<template>
    <div class="content">
        <div class="top-search">
            <div></div>
            <div>
                <input type = "text" placeholder="寻找宝贝店铺">
                <div class="top-search-holder"></div>
            </div>
        </div>
        <div class="page-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="mint-swipe-item slide1"></mt-swipe-item>
                <mt-swipe-item class="mint-swipe-item slide2"></mt-swipe-item>
                <mt-swipe-item class="mint-swipe-item slide3"></mt-swipe-item>
                <mt-swipe-item class="mint-swipe-item slide4"></mt-swipe-item>
                <mt-swipe-item class="mint-swipe-item slide5"></mt-swipe-item>
                <mt-swipe-item class="mint-swipe-item slide6"></mt-swipe-item>
                <mt-swipe-item class="mint-swipe-item slide7"></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="logo">
            <ul>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>天猫</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>聚划算</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>天猫国际</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>外卖</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>天猫超市</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>充值中心</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>飞猪旅行</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>领金币</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>拍卖</span>
                </li>
                <li>
                    <a href = "javascript:"><div></div></a>
                    <span>分类</span>
                </li>

            </ul>
        </div>
        <div class="top-line">
            <div><img src = "../assets/images/taotoutiao.png" width="37px"/></div>
            <div class="top-line-banner">
                <div >
                    <img width="85px" src = "../assets/images/carimg.jpg" alt = ""/>
                    <span>汽车</span>
                        <span>此车上市有望成为黑马，售价8万左右</span>
                    <br/>
                        <span>垂钓</span>
                        <span>牢记这2种用饵技能，鲤鱼一钓就上瘾</span>
                </div>
                <div>
                    <img width="85px" src = "../assets/images/flower.jpg" alt = ""/>
                        <span>时尚</span>
                        <span>8种自带爆盆体质的多肉，你了解吗？</span>
                    <br/>
                        <span>运动</span>
                        <span>毕业典礼穿着？AJ11伽玛蓝终于释出</span>
                </div>
            </div>
        </div>
        <div class="list">
            <div class="list-1">
                <div class="list-title1"> <span>淘宝直播</span></div>
                <div class="list-1-1">
                    <div>
                        <router-link to="/buy10001">
                            <img  src= "../assets/images/phone.jpg" alt = ""/>
                            <span>全面屏手机时代，看下这三款</span>
                        </router-link>
                    </div>
                    <div>
                        <router-link  to="/buy10002">
                            <img src = "../assets/images/shoes.jpg" alt = ""/>
                            <span><i>女式休闲鞋</i></span>
                        </router-link>
                    </div>
                </div>
                <div class="list-1-2">
                    <div>
                        <span>潮男养成</span>
                        <i>有品有范有风尚</i>
                        <router-link to="/buy10003">
                            <img src= "../assets/images/product1.jpg" alt = ""/>
                        </router-link>
                        <router-link to="/buy10004">
                            <img src = "../assets/images/product2.jpg" alt = ""/>
                        </router-link>
                    </div>
                    <div>
                        <span>装备天地</span>
                        <i>武装你的兴趣爱好</i>
                        <router-link to="/buy10005">
                            <img src = "../assets/images/product3.jpg" alt = ""/>
                        </router-link>
                        <router-link to="/buy10006">
                            <img src = "../assets/images/product4.jpg" alt = ""/>
                        </router-link>
                    </div>
                    <div>
                        <span>科技前沿</span>
                        <i>发现智能数码</i>
                        <router-link to="/buy10007">
                            <img src = "../assets/images/product5.jpg" alt = ""/>
                        </router-link>
                        <router-link to="/buy10008">
                            <img src = "../assets/images/product6.jpg" alt = ""/>
                        </router-link>
                    </div>
                    <div>
                        <span>难得好货</span>
                        <i>潮流尖货，限时首发</i>
                        <router-link to="/buy10009">
                            <img src = "../assets/images/product7.jpg" alt = ""/>
                        </router-link>
                        <router-link to="/buy10010">
                            <img src = "../assets/images/product8.jpg" alt = ""/>
                        </router-link>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div class="list-2 street clearfix">
                <div class = "street-left">
                    <h3><img src = "../assets/images/youhaohuo.png" alt = "" width="90px"/><span>与品质生活不期而遇</span></h3>
                    <ul>
                        <li><img src = "../assets/images/shoe.jpg" alt = ""/>
                            <p>冬季棉拖鞋男士全包跟加厚底防滑室内家居家棉鞋毛绒保暖毛毛拖鞋</p>
                            <span>10人说好</span>
                        </li>
                        <li><img src = "../assets/images/imgbag.jpg" alt = ""/>
                            <p>冬季棉拖鞋男士全包跟加厚底防滑室内家居家棉鞋毛绒保暖毛毛拖鞋</p>
                            <span>10人说好</span>
                        </li>
                        <li><img src = "../assets/images/imgflower.jpg" alt = ""/>
                            <p>冬季棉拖鞋男士全包跟加厚底防滑室内家居家棉鞋毛绒保暖毛毛拖鞋</p>
                            <span>10人说好</span>
                        </li>
                        <li><img src = "../assets/images/imgring.jpg" alt = ""/>
                            <p>冬季棉拖鞋男士全包跟加厚底防滑室内家居家棉鞋毛绒保暖毛毛拖鞋</p>
                            <span>10人说好</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tao list-3">
                <h3>
                    <img src = "../assets/images/taoqianggou.png" alt = "" width="90px"/>
                    <span>距离结束：</span><i>00</i>:<i>00</i>:<i>00</i>
                    </h3>
                <ul class="clearfix">
                    <li>
                        <img src = "../assets/images/door.jpg" alt = ""/>
                        <p>TATA木门 现代简约时尚室内门</p>
                        <span>满额送实木凳</span>
                        <div class="tao-progress">
                            <div></div>
                        </div>
                        <p>40%<span>已售出1235件</span></p>
                        <p><span>￥1199</span><i>￥3666.00</i></p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-index"></div>

        </div>
    </div>
</template>

<script type = "text/ecmascript-6">
    //引入mintui的轮播图
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    export default {
        data: function () {
            return {}
        },
        mounted:function(){
            //头条滚动
            (function(){
                function animateself(obj,target){
                    clearInterval(obj.timer);
                    obj.timer = setInterval(function(){
                        var step = (target - obj.offsetTop)/10;
                        step = step > 0 ?   Math.ceil(step):Math.floor(step);
                        obj.style.top = obj.offsetTop + step + "px";
                        if(target == obj.offsetTop){
                            clearInterval(obj.timer);
                        }
                    },30)
                }

                var demo = document.querySelector('.top-line-banner').children;
                setInterval(function(){
                    if(demo[0].offsetTop==-65||demo[0].offsetTop==65){
                        demo[0].style.top = '65px';
                        animateself(demo[0],0)
                    }
                    else if(demo[0].offsetTop==0){
                        animateself(demo[0],-65)

                    }
                    if(demo[1].offsetTop==-65||demo[1].offsetTop==65){
                        demo[1].style.top = '65px';
                        animateself(demo[1],0)
                    }
                    else if(demo[1].offsetTop==0){
                        animateself(demo[1],-65)

                    }
                },2000)
            })();
            //倒计时事件
            (function(){
                var i = document.querySelectorAll('.tao h3 i');
                var time1 = +new Date()+18000000;
                var timer = null;
                timer = setInterval(function(){
                    var time2 = +new Date();
                    var h,m,s;
                    h = +Math.floor((time1-time2)/1000/60/60);
                    m = +Math.floor(((time1-time2)/1000/60)%60);
                    s = +Math.floor(((time1-time2)/1000)%60);
                    h = h<10?'0'+h:h;
                    s = s<10?'0'+s:s;
                    m = m<10?'0'+m:m;
                    i[0].innerHTML = h;
                    i[1].innerHTML = m;
                    i[2].innerHTML = s;
                    if((time1-time2)<=0){
                        clearInterval(timer);
                        h='00';
                        s='00';
                        m='00';
                        i[0].innerHTML = h;
                        i[1].innerHTML = m;
                        i[2].innerHTML = s;
                    }
                },1000)
            })();
        }
    }

</script>

<style>
.content {
    background-color: #ddd;
}
    /*顶部搜索栏部分*/
    .top-search {
        background-color: #FF852A;
        height: 34px;
        padding-left: 5px;
        padding-top: 5px;
    }
    .top-search>div:nth-of-type(1) {
        width: 37px;
        height: 27px;
        background: url(data:image/png;base64,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) no-repeat 0 0;
        background-size: contain;
        float: left;
    }
    .top-search div:nth-of-type(2){
        margin: 0px 20px 0px 57px;
        height: 22px;
        background-color: #ff4e22;
        border-radius: 5px;
        padding-top: 5px;
        width: auto;
        overflow: hidden;
        position: relative;
        padding-left: 10px;
    }
    .top-search div:nth-of-type(2) input{
        display: block;
        width: 100%;
        height: 15px;
        background-color: #ff4e22;
        padding-left: 20px;
        color: #fff;
        margin: 0 20px 0 5px;
    }
    .top-search .top-search-holder {
        content: '';
        display: block;
        background: url(../assets/images/search.png) no-repeat 0 0;
        width: 25px;
        height: 25px;
        background-size: contain;
        position: absolute;
        top: 2px;

    }
    .top-search div:nth-of-type(2) input::after {
        content: '';
        display: block;
    }

    /*swipe样式*/
    .page-swipe .mint-swipe {
        height: 128px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .page-swipe .mint-swipe-item {
        line-height: 200px;
    }
    .page-swipe .slide1 {
        background: url(../assets/images/swipe1.jpg);
        background-size: cover;
    }
    .page-swipe .slide2 {
        background: url(../assets/images/swipe2.jpg);
        background-size: cover;
    }
    .page-swipe .slide3 {
        background: url(../assets/images/swipe3.jpg);
        background-size: cover;
    }
    .page-swipe .slide4 {
        background: url(../assets/images/swipe4.jpg);
        background-size: cover;
    }
    .page-swipe .slide5 {
        background: url(../assets/images/swipe5.jpg);
        background-size: cover;
    }
    .page-swipe .slide6 {
        background: url(../assets/images/swipe6.jpg);
        background-size: cover;
    }
    .page-swipe .slide7 {
        background: url(../assets/images/swipe7.jpg);
        background-size: cover;
    }
    /*logo*/
    .logo {
        background-color: #fff;
    }
    .logo ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .logo ul li{
        text-align: center;
        width: 18%;
        height: 67px;

    }
    .logo ul li span {
        font-size: 11px;
        color: rgb(102, 102, 102);
    }
    .logo ul li div{
        height: 48px;
    }
    .logo ul li:nth-child(1) div{
        background: url(../assets/images/icon1.png) no-repeat 0 0;
        background-size: cover;

    }
    .logo ul li:nth-child(2) div{
        background: url(../assets/images/icon2.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(3) div{
        background: url(../assets/images/icon3.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(4) div{
        background: url(../assets/images/icon4.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(5) div{
        background: url(../assets/images/icon5.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(6) div{
        background: url(../assets/images/icon6.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(7) div{
        background: url(../assets/images/icon7.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(8) div{
        background: url(../assets/images/icon8.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(9) div {
        background: url(../assets/images/icon9.png) no-repeat 0 0;
        background-size: cover;
    }
    .logo ul li:nth-child(10) div{
        background: url(../assets/images/icon10.png) no-repeat 0 0;
        background-size: cover;
    }
    /*头条*/
    .top-line {
        height: 60px;
        overflow: hidden;
        background-color: #fff;
    }
    .top-line>div:nth-child(1) {
        height: 100%;
        text-align: center;
        float: left;
        width: 60px;
    }
    .top-line>div:nth-child(1) img{
        margin-top: 11px;

    }
    .top-line-banner {
        height: 100%;
        padding-left: 60px;
        position: relative;
        top: 0;
    }
    .top-line-banner img {
        float: right;
    }
    .top-line-banner>div{
        height: 100%;
        padding-top: 8px;
        position: absolute;
    }
    .top-line-banner>div:nth-child(1){
        top: 0px;
    }
    .top-line-banner>div:nth-child(2){
        top: 65px;
    }
    .top-line-banner div span{
        font-size: 12px;
    }
    .top-line-banner div span:nth-of-type(2n-1){
        border-radius: 5px;
        border: 1px solid rgb(230, 10, 30);
        color: rgb(230, 10, 30);
    }
    /*list部分*/
    .list-1 {
        background-color: #fff;
        height: 400px;
        position: relative;
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        margin-top: 15px;

    }
    .list-title1 {
        width: 30%;
        height: 30px;
        background: linear-gradient(to right,#FF68A0 0%,#FF2E64 100%);
        border-radius: 0 15px 15px 0;
        text-align: center;
        opacity: 0.9;
        position: absolute;
        left: 0;
        top: -15px;
        padding-left: 10px;
    }
    .list-title1 span {
        color: #fff;
        font: 500 16px/30px 'microsoft yahei';
    }
    .list-1>div:nth-of-type(2){
        width: 100%;
    }
    .list-1>div {
        display: flex;
        justify-content: space-around;
    }
    .list-1 div img{
        height: 125px;
        display: block;
    }
    .list-1>div:nth-child(2) img:nth-child(1){
        flex: 2;
    }.list-1>div:nth-child(2) img:nth-child(2){
        flex: 1;
    }



    .list-1-1>div img{
        height: 135px;
    }
     .list-1-1>div:nth-child(1) span {
         color: #fff;
         position: absolute;
         top: 100px;
         font: 400 12px/13px 'microsoft yahei';
         margin-left: 10px;
     }
     .list-1-1>div:nth-child(2) span {
         text-align: center;
         background-color: #FF2E64;
         display: block;
         height: 20px;
         border-radius: 10px;
         width: 60%;
         position: relative;
         margin: -30px auto 0 auto;
         opacity: 0.8;
         height: 21px;
     }
    .list-1-1>div:nth-child(2) i {
        /*font: 400 12px/0px 'microsoft yahei';*/
        font-size: 12px;
        color: #fff;
    }


    .list-1-2 {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

    }
    .list-1-2>div{
        width: 50%;
        display: flex;
        justify-content: space-around;
        position: relative;
        height: 125px;
        padding-top: 55px;

    }
    .list-1-2>div img {
        width: 70px;
        height: 70px;
        display: inline-block;

    }
    .list-1-2>div img:nth-of-type(1){
        left: 0;
    }
    .list-1-2>div img:nth-of-type(2){
        right: 0;
    }
    .list-1-2>div span{
        position: absolute;
        top: 10px;
        font: 400 16px/13px 'microsoft yahei';
        color: #333333;
        left:10px;

    }
    .list-1-2>div i{
        position: absolute;
        top: 30px;
        left:10px;

        font: 400 12px/13px 'microsoft yahei';
        color: #aaa;


    }
    /*.list-1-2>div:nth-child(2n){*/
        /*flex:1;*/
        /*width: 45%;*/

    /*}*/
    /*street部分*/
    .street {
        margin: 10px auto 0 auto;
        background-color: #fff;
        padding-top: 5px;

    }
    .street .street-left {
        float: left;
        width: 100%;
    }
    .street .street-left h3 span{
        font: 400 12px 'microsoft yahei';
        color: #999;
        margin-left: 20px;
    }
    .street .street-left h3 span:nth-child(3) {
        float: right;
        margin: 10px 40px 0 0 ;

    }

    .street ul li {
        float: left;
        width: 50%;
        overflow: hidden;
        text-align: center;
        margin-top: 20px;
    }
    .street ul li:hover img {
        filter: grayscale(40%);
        transition: all 0.3s;
    }
    .street ul li:hover p {
        color: #f40;
    }
    .street ul li img {
        height: 148px;
    }
    .street ul li p {
        color: #999;
        font-size: 14px;
    }
    .street ul li span {
        color: #35b1ff;
        font-size: 14px;
    }

    /*tao部分*/
    .tao {
        width: 100%;
        margin: 10px auto 0 auto;
        padding: 20px;
        background-color: #fff;
    }
    .tao h3 span {
        font: 400 13px 'microsoft yahei';
        color: #999;
    }
    .tao h3 i {
        background-color: pink;
        color: #ff5400;
    }

    .tao ul {
        width: 100%;
    }
    .tao ul li {
        float: left;
        width: 100%;
        height: 180px;
        position: relative;
        margin-left: 10px;
    }
    .tao ul li:hover>p {
        color: #f40;
    }
    .tao ul li:hover>img {
        opacity: 0.8;
        transition: all 0.3s;
    }
    .tao ul li img {
        float: left;
        padding-right: 6px;
        width: 55%;
    }
    .tao ul li>span {
        font-size: 13px;
        color: #999;
    }
    .tao .tao-progress {
        width: 25%;
        background-color: #ff5400;
        height: 6px;
        position: absolute;
        right: 33px;
        top: 95px;
        border-radius: 10px;
    }
    .tao .tao-progress div {
        width: 40%;
        height: 100%;
        background-color: #ff9955;
        border-radius: 10px;

    }
    .tao ul li p:nth-of-type(2) {
        color: #ff9900;
    }
    .tao ul li p:nth-of-type(2) span{
        float: right;
        font-size: 12px;
        margin-right: 15px;
    }
    .tao ul li p:nth-of-type(3) span {
        font: 500 18px 'microsoft yahei';
        color: #ff5400
    }
    .tao ul li p:nth-of-type(3) i {
        font: 400 12px 'microsoft yahei';
        color: #999;
        text-decoration: line-through;
        margin-left: 20px;
    }
    .footer-index {
        height: 42px;
    }
</style>