<template>
  <div>
      <div class="nav-bar">
        <van-nav-bar title="搜索详情" :style="{ background: '	#FF6347'}" fixed/> 
      </div>
    <van-divider>搜索:{{val}}</van-divider>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
       v-model="loading"
        :finished="finished"
       finished-text="没有更多了"
       @load="onLoad"
     >
    <van-cell v-for="item in list" :key="item.productId">
      <van-card
      :title="item.productTitle"
      :thumb="picIp+item.productPic"
      />
    </van-cell>
    </van-list>

    </van-pull-refresh>
 
     
  </div>
  
</template>

<script>
export default {
  name: 'SearchList',
  data () {
    return {
          val:this.$route.params.value,
          picIp:"http://localhost:8080/pic/"  ,
          pageIndex: 1,
          list:[],
          loading:false,
          finished:false,
          refreshing:false,
    }
  },
  methods:{
    onLoad() {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        this.axios.get("c?op=query&q="+this.val+"&num="+this.pageIndex).then((response)=>{
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-multi-ellipsis--l2{
  overflow: visible;
}
.van-divider{
  margin: 10px 0px 10px 20px;
  font-size: 18px;
}
.van-card__title{
  font-size: 16px;
  line-height: 30px;
}
.van-card__desc{
  font-size:13px;
  line-height: 25px;
}
.van-card__thumb{
  width: 100px;
  height: 100%;
}
.van-card{
  padding: 4px 8px;
}

</style>
