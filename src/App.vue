<template>
  <div id="app">
    <router-view></router-view>
    <foot class="foot"></foot>
  </div>
</template>

<script type="text/ecmascript-6">
  import foot from './components/footer.vue';
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'app',
    methods:mapActions([
      'getProductData'
    ]),
    components:{
      'foot':foot
    },
    mounted:function(){
      //触发获取产品列表函数
      this.getProductData();
    }
}
</script>


<style>
@import 'assets/css/main.css';
  .foot {
    position: fixed;
    bottom: 0;
    z-index: 1;
  }
  #app {
    height: 100%;
    /*min-width: 377px;*/
  }

</style>
