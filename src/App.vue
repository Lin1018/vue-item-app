<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <router-link to="/goods" class="tab-item">商品</router-link>
      <router-link to="/ratings" class="tab-item">评论</router-link>
      <router-link to="/seller" class="tab-item">商家</router-link>
    </div>
    <!-- keep-alive优化使组件避免每次请求数据 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './components/header/Header.vue'
import {urlParse} from './common/js/util.js'

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      }
    };
  },
  created() {
    axios.get('/api/seller?id='+this.seller.id).then((res) => {
        if (res.data.errno === ERR_OK){
          this.seller = Object.assign({}, this.seller, res.data.data);
        }        
    });
  },
  components: {
    'v-header': Header
  }
}
</script>
<style scoped>
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 0.5px solid rgba(7, 17, 27,0.1);
} 
.tab-item{
  flex: 1; 
  text-align: center;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.router-link-active{
  color: red;
}
</style>
