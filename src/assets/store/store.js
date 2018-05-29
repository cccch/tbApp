import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
    //产品信息列表
    productData:{},
    //管理购买页面购物车select样式
    nowIndex:0,
    //管理购物车列表信息
    car:{},
    //总价
    total:0,
    //全选
    checkAll:false
}
const getters = {

    productData:function(state){
        return state.productData;
    },
    nowIndex:function(state){
        return state.nowIndex;
    },
    car:function(state){
        return state.car
    },
    total:function(){
        let total = 0;
        for(let k in state.car){
            if(state.car[k].checked==true){
                total+=state.car[k].total;
            }
        }
        state.total = total;
        return state.total;
    },
    checkAll:function(state){
        return state.checkAll;
    }
}
const mutations = {
    getProductData:function(){
        Vue.http.get('./src/assets/data/data.json').then(function(res){
            state.productData = res.data;
        })
    },
    changeIndex:function(Store,index){
        state.nowIndex = index;
    },
    //数量增加减少
    add:function(store,uid){
        state.productData.result[uid].productNum++
        console.log(state.productData.result[uid].productNum);

    },
    decrease:function(store,uid){
        state.productData.result[uid].productNum--


    },
    //更新购物车列表
    upCar:function(store,uid){
        let list = {}
        list.num = state.productData.result[uid].productNum;
        list.style = state.productData.result[uid].productClass[state.nowIndex];
        list.total = list.num*state.productData.result[uid].prodcutPriceNow;
        list.img = state.productData.result[uid].prodcutImg;
        list.title = state.productData.result[uid].producttTitle;
        list.checked = true;
        state.car[uid] = list;
        //更新总价
        getters.total();
    },
    carAdd:function(store,uid){
        state.productData.result[uid].productNum++
        ++state.car[uid].num
        //更新total
        state.car[uid].total = state.car[uid].num*state.productData.result[uid].prodcutPriceNow;
        getters.total();
    },
    carDecrease:function(store,uid){
        state.productData.result[uid].productNum--
        --state.car[uid].num
        //更新total
        state.car[uid].total = state.car[uid].num*state.productData.result[uid].prodcutPriceNow;
        getters.total();
    },
    all:function(){
        state.checkAll = !state.checkAll;
        if(state.checkAll){
            for(let k in state.car){
                state.car[k].checked = true;
                state.car[k].total = state.car[k].num*state.productData.result[k].prodcutPriceNow;
            }
            getters.total();
        }
        else {
            for(let k in state.car){
                state.car[k].checked = false;
                state.car[k].total = state.car[k].num*state.productData.result[k].prodcutPriceNow;
            }
            getters.total();
        }


    },
    upChecked:function(store,uid){
        state.car[uid].checked = !state.car[uid].checked;
        console.log(state.car[uid].checked);
        //更新total
        getters.total()
    },
    close:function(store,uid){
        delete state.car[uid];
        getters.total();
    },
    //头条滚动
    headRolling:function(store,arr){

        clearInterval(arr[0].timer);
        arr[0].timer = setInterval(function(){

            var step = (arr[1] - arr[0].offsetTop)/10;
            step = step > 0 ?   Math.ceil(step):Math.floor(step);
            arr[0].style.top = arr[0].offsetTop + step + "px";
            if(arr[1] == arr[0].offsetTop){
                clearInterval(arr[0].timer);
            }
        },30)
    },
    //倒计时事件
    countDown:function(store,dom){
        let i = dom.getElementsByTagName('i');
        let time1 = +new Date()+18000000;
        let timer = null;
                timer = setInterval(function(){
                    let time2 = +new Date();
                    let h,m,s;
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
    }

}
const actions = {
    //获取商品列表
    getProductData:function(context){
        if(JSON.stringify(state.productData==='')){
            context.commit('getProductData')
        }
    },
    changeIndex:function(context,index){
        context.commit('changeIndex',index)
    },
    //数量增加减少
    add:function(context,uid){
        if(state.productData.result[uid].productNum<99){
            context.commit('add',uid)
        }
    },
    decrease:function(context,uid){
        if(state.productData.result[uid].productNum>1){
            context.commit('decrease',uid)
        }
    },
    carAdd:function(context,uid){
        if(state.car[uid].num<99){
            context.commit('carAdd',uid)
        }
    },
    carDecrease:function(context,uid){
        if(state.car[uid].num>1){
            context.commit('carDecrease',uid)
        }
    },
    //更新购物车列表
    upCar:function(context,uid){
        context.commit('upCar',uid)
        },
    //全选
    all:function(context){
        context.commit('all')
    },
    upChecked:function(context,uid){
        context.commit('upChecked',uid)
    },
    close:function(context,uid){
        context.commit('close',uid)

    },
    //头条滚动判断
    headRolling:function(context,dom){
        setInterval(function(){
            if(dom.offsetTop==-65||dom.offsetTop==65){
                dom.style.top = '65px';
                context.commit('headRolling',[dom,0]);
            }
            else if(dom.offsetTop==0){
                context.commit('headRolling',[dom,-65]);
            }
        },2000)
    },
    //倒计时事件
    countDown:function(context,dom){
        this.commit('countDown',dom)
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

