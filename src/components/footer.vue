<template>
    <div class="footer">
        <router-link to="/">
            <div class="footer-home">
                <div></div>
                <span>主页</span>
            </div>
        </router-link>
        <router-link to="/mes">
            <div class="footer-message">
                <div></div>
                <span>消息</span>
            </div>
        </router-link>
        <router-link to="/car">
            <div class="footer-car">
                <div></div>
                <span>购物车</span>
            </div>
        </router-link>
        <router-link to="/my">
            <div class="footer-my">
                <div></div>
                <span>我的淘宝</span>
            </div>
        </router-link>
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
.footer {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ddd;
    padding-top: 3px;
    background-color: #fff;

}

.footer div>div {
    height: 23px;
    width: 23px;
    background-size: contain;
    margin:0 auto;

}
.footer span {
    color: #000;
}

.footer-home>div {
    background: url('../assets/images/home.png') no-repeat center center;
}
.footer-message>div {
    background: url('../assets/images/message.png') no-repeat center center;
}
.footer-car>div {
    background: url('../assets/images/car.png') no-repeat center center;
}
.footer-my>div {
    background: url('../assets/images/my.png') no-repeat center center;
}
</style>