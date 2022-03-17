<template>
    <div>
      <div id="nav">

  <div id="search">
      <form action="/">
  <van-search
    v-model="value"
    @focus="onSearch"
    placeholder="请输入你想搜索的商品"
     :style="{ background: '	#FF6347'}"
  />
</form>
 <van-notice-bar left-icon="volume-o" :scrollable="false">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :show-indicators="false"
  >
      <van-swipe-item>用户“爱在心头”发布新商品</van-swipe-item>
    <van-swipe-item>用户180******90成功购买了华为P40</van-swipe-item>
    <van-swipe-item>用户176******20成功购买了小米10</van-swipe-item>
     <van-swipe-item>用户151******14成功购买了健身卡</van-swipe-item>
  </van-swipe>
</van-notice-bar>
  </div>
      </div>
 
 <div class="content">
<van-grid :border="false">
  <van-grid-item class="iconfont icon-shouji"  text="二手手机" center/>
  <van-grid-item class="iconfont icon-diannao"  text="二手电脑" />
  <van-grid-item class="iconfont icon-tushu"  text="二手图书" />
  <van-grid-item class="iconfont icon-jinritemai"  text="校园特卖" />
</van-grid>
<van-grid :border="false">
  <van-grid-item class="iconfont icon-ziyuan"  text="物流信息" />
  <van-grid-item class="iconfont icon-shangdian"  text="合作店铺" />
  <van-grid-item class="iconfont icon-huodong"  text="校园活动" />
  <van-grid-item class="iconfont icon-quanbu-" text="全部" />
</van-grid>

<div>
 <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
       v-model="loading"
      :finished="finished"
       finished-text="没有更多了"
       @load="onLoad"
     >
    <van-cell v-for="item in list" :key="item.productId">
      <van-card @click="getInfo(item.productId)"
       :title="item.productTitle"
       :thumb="picIp+item.productPic"
     />
    </van-cell>
   </van-list>
</van-pull-refresh>

 </div>

</div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data() {
    return {
      pageIndex: 1,
      list:[],
      loading:false,
      finished:false,
      refreshing:false,
      images: [],
      items:'',
      productTitle:"",
      productPic:"",
      productTag:"",
      username:"",
      price:"",
      picIp:"http://localhost:8080/pic/",
      show:false,
      active: 2,
      value: '',
    }
  },
  methods: {
    onSearch() {
           this.$router.push({path:"/search"})
    },
    onShow(){
        this.show = true;
        
    },
    getInfo(productId){
      this.$router.push("productInfo/"+productId)
    },
    onLoad() {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        
        this.axios.get("c?op=listAll&num="+this.pageIndex).then((response)=>{
          this.list=this.list.concat(response.data.records);
          this.loading= false;
          if(this.pageIndex>=response.data.totalPages){
            this.finished=true;
          }
          this.pageIndex++;
        })
        
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      this.pageIndex=1;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },




  },
}
</script>
<style>
 .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .van-search__content{
    border-radius: 58px;
  }
  .van-search{
        border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
     border-radius: 8px 8px 15px 15px;
  }
  .van-nav-bar{
    border-radius: 15px 15px 0 0;
  }
 #search{
       position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
 }
 .content{
   
   top: 20px;
   margin-top: 94px;
   margin-bottom: 64px;
 }
.van-card__title{
  font-size: 17px;
  line-height: 40px;
}
 .van-card__desc{
  position: absolute;
  top: 62%;
  font-size: 15px;
  white-space:pre-wrap;
}
</style>