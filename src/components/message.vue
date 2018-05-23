<template>
    <div class="message">
        <div class="message-top">
                <span>消息</span>
                <span>通讯录</span>
                <span>+</span>
        </div>
        <div class="message-icon">
            <div class="message-logistics">
                <div><div></div></div>
                <span>交易物流</span>
            </div>
            <div class="message-infomation">
                <div><div></div></div>
                <span>通知</span>
            </div>
            <div class="message-interactive">
                <div><div></div></div>
                <span>互动</span>
            </div>
        </div>
        <div class="message-main">
            <ul>
                <li>
                    <div>
                        <img src = "../assets/images/冰棍.png" alt = ""/>
                        <div>
                            <i>冰棍</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/橘子.png" alt = ""/>
                        <div>
                            <i>橘子</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>

                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/火腿.png" alt = ""/>
                        <div>
                            <i>火腿</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>

                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <img src = "../assets/images/萝卜.png" alt = ""/>
                        <div>
                            <i>萝卜</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/青椒.png" alt = ""/>
                        <div>
                            <i>青椒</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/面包.png" alt = ""/>
                        <div>
                            <i>面包</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/鸡蛋.png" alt = ""/>
                        <div>
                            <i>鸡蛋</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/啤酒.png" alt = ""/>
                        <div>
                            <i>啤酒</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/柠檬.png" alt = ""/>
                        <div>
                            <i>柠檬</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/热狗.png" alt = ""/>
                        <div>
                            <i>热狗</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/披萨.png" alt = ""/>
                        <div>
                            <i>披萨</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li><li>
                    <div>
                        <img src = "../assets/images/蘑菇.png" alt = ""/>
                        <div>
                            <i>蘑菇</i>
                            <br/>
                            <span>[验收提醒]</span>
                            <s>18/05/01</s>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        <div class="message-footer"></div>
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
    .message {
        background-color: #eeeeee;
    }
.message-top {
    height: 50px;
    background-color: #FF852A;
    text-align: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;

}
.message-top span:nth-child(1) {
    font: 500 20px/50px 'microsoft yahei';
    color: #fff;
}
.message-top span:nth-child(2) {
    font: 400 16px/50px 'microsoft yahei';
    color: #fff;
    position: absolute;
    right: 30px;

}
.message-top span:nth-child(3) {
    color: #fff;
    font: 400 20px/50px 'microsoft yahei';
    position: absolute;
    right: 10px;
}
    /*icon部分*/

.message-icon {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    height: 85px;
}
.message-icon>div>div {
    /*background-color: blue;*/
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin: 15px auto 0;
}
.message-icon>div {
    text-align: center;
}
.message-icon>div>div>div {
    height: 35px;
    width: 35px;
    background-size: contain;
    margin: 0 auto;
    transform: translate(0,7px);
}
    .message-logistics>div{
        background-color: #29B2FF;
    }
    .message-infomation>div{
        background-color: #FCE86B;

    }
    .message-interactive>div{
        background-color: #76FF69;

    }
    .message-logistics>div>div {
        background: url('../assets/images/Logistics.png');
    }
    .message-infomation>div>div {
        background: url('../assets/images/infomation.png');
    }
    .message-interactive>div>div {
        background: url('../assets/images/interactive.png');
    }
    /*内容*/
    .message-main ul li {
        margin-top: 10px;
    }
    .message-main ul li>div {
        height: 60px;
        background-color: #fff;
        position: relative;
    }
    .message-main ul li>div img{
        float: left;
        width: 50px;
        height: 50px;
        margin: 5px auto 0 ;
    }
    .message-main ul li>div div {
        padding-left: 60px;
    }
    .message-main ul li>div i {
        font: 400 18px/30px 'microsoft yahei';
        color: #000;
    }
    .message-main ul li>div span {
        font: 400 15px/30px 'microsoft yahei';
        color: #aaa;
    }
    .message-main ul li>div s{
        position: absolute;
        right: 5px;
        top: 5px;
        color: #aaa;
    }
    .message-footer {
        height: 47px;
    }
</style>