<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <!--商品-->
        <!--<a v-link="{path:'/goods'}">商品</a>-->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <!--评论-->
        <!--<a v-link="{path:'/ratings'}">评论</a>-->
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <!--商家-->
        <!--<a v-link="{path:'/seller'}">商家</a>-->
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <!--<div class="content">-->
    <!--content-->
    <!--</div>-->
  </div>
</template>

<script>
import header from "./components/header/header.vue";
const ERR_OK = 0;
export default {
  name: "App",
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get("api/seller").then((response) => {
      response=response.body;
      if(response.errno ===ERR_OK){
        this.seller=response.data;
        console.log(this.seller)
      }
    });
  },
  components: {
    "v-header": header
  }
};
</script>

<style scoped>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}

.tab-item {
  flex: 1;
  text-align: center;
}
.tab-item a {
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.tab-item a.active {
  color: rgb(240, 20, 20);
}
</style>
