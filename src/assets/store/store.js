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
    total:0,
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
        },function(){})
    },
    changeIndex:function(Store,index){
        state.nowIndex = index;
    },
    //数量增加减少
    add:function(store,uid){
        state.productData.result[uid].productNum++

    },
    decrease:function(store,uid){
        state.productData.result[uid].productNum--


    },
    //更新购物车列表
    upCar:function(store,uid){
        state.car[uid] = {};
        state.car[uid].num = state.productData.result[uid].productNum;
        state.car[uid].style = state.productData.result[uid].productClass[state.nowIndex];
        state.car[uid].total = state.car[uid].num*state.productData.result[uid].prodcutPriceNow;
        state.car[uid].img = state.productData.result[uid].prodcutImg;
        state.car[uid].title = state.productData.result[uid].producttTitle;
        state.car[uid].checked = true;
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
    }

}
const actions = {
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

    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

