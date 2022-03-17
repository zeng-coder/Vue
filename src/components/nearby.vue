<template>
    <div class="nav">
    <div class="nav-bar">
  <van-nav-bar
  
  title="湖北理工学院二手交易平台"
  :style="{ background: '	#FF6347'}"
/>
  <van-dropdown-menu active-color="#1989fa">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
  <van-dropdown-item v-model="value3" :options="option3" />
</van-dropdown-menu>
</div>

<div class="goods-content">

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
<!-- <van-card
  desc="刚买来没几天，由于紧急情况需要钱。急转手，5299买来。保修单啥的都有。两块电池。买来才拍了几张照片。没怎么用。
联系我时，请说是在58同城看到的，谢谢！"
  title="数码相机"
  thumb="https://pic4.58cdn.com.cn/mobile/big/n_v29e38e6a888294626b97be8ad78ac666e.jpg?w=425&h=320"
>
  <template #tags>
    <van-tag plain type="danger">九成新</van-tag>
    <van-tag plain type="danger">距离50m</van-tag>
  </template>
</van-card>
<van-card
  desc="刚从笔记本电脑换下来的，我自己装了个8G的，联系我时，请说是在58同城看到的，谢谢！"
  title="笔记本三星内存条4G"
  thumb="https://pic2.58cdn.com.cn/p1/big/n_v24571e3a9f56e4f7d887cdc391a8a61ec.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">价格最低</van-tag>
    <van-tag plain type="danger">最多想要</van-tag>
  </template>
</van-card>
<van-card
  desc="二手闲置，可玩小游戏，经典款。联系我时，请说是在58同城看到的，谢谢！"
  title="SonyPSP1006"
  thumb="https://pic8.58cdn.com.cn/mobile/big/n_v26d97591025d5431297141bcd434f5637.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">85新</van-tag>
    <van-tag plain type="danger">距离200m</van-tag>
  </template>
</van-card>
<van-card
  desc="步步高点读机几乎没有怎么用，有需要联系，联系我时，请说是在58同城看到的，谢谢！"
  title="步步高点读机"
  thumb="https://pic1.58cdn.com.cn/mobile/big/n_v28cf6da121c044c0a819acae3efe4a93b.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">九成新</van-tag>
    <van-tag plain type="danger">价格优惠</van-tag>
  </template>
</van-card>
<van-card
  desc="2020年1月20号买的，女儿原本喜欢看书，结果疫情期间，更多的是看电视。现在很生气，没看五次，现低价出手！"
  title="kindle美版第四代8G"
  thumb="https://pic5.58cdn.com.cn/mobile/big/n_v2e7eee781879d4e56a94358c5ae7c77c5.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">八成新</van-tag>
    <van-tag plain type="danger">距离500m</van-tag>
  </template>
</van-card>
<van-card
  desc=" 八成新明基投影机灯泡（飞利浦）原装拆机件处理，适合:BX0104 MW817ST"
  title="原装明基投影机灯泡"
  thumb="https://pic7.58cdn.com.cn/mobile/big/n_v2c6d10a21253d4c5f8a98738f8055bd4e.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">八成新</van-tag>
    <van-tag plain type="danger">距离150m</van-tag>
  </template>
</van-card>
<van-card
  desc="有序言、原文、注释、译文。"
  title="中华传世名著经典丛书《尚书》"
  thumb="https://pic8.58cdn.com.cn/mobile/big/n_v22f0b6822f8354aa19409cc62dcae3ad6.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">九成新</van-tag>
    <van-tag plain type="danger">距离160m</van-tag>
  </template>
</van-card>
<van-card
  desc="出售几本闲置的学生校园课外读物，品相如图"
  title="老夫子小樱桃校园漫画"
  thumb="https://pic3.58cdn.com.cn/p1/big/n_v2629f4ed18f414bd78ee44026243587f0.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">价格最低</van-tag>
    <van-tag plain type="danger">距离50m</van-tag>
  </template>
</van-card>
<van-card
  desc="便宜拋一台20寸办公用液晶显示器，今年5月份买的"
  title="9.9成新显示器便宜卖"
  thumb="https://pic3.58cdn.com.cn/mobile/big/n_v25f615c62004d49a8a44203145ffb3eb3.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">官方保修</van-tag>
    <van-tag plain type="danger">距离200m</van-tag>
  </template>
</van-card>
<van-card
  desc="自用满血蓝宝石rx590，轻度使用，无暗病，本地实体店购买。还在质保期内"
  title="蓝宝石rx590 8G超白金版o"
  thumb="https://pic3.58cdn.com.cn/mobile/big/n_v29c5d512fb702487e8f9bb3087881e233.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">官方保修</van-tag>
    <van-tag plain type="danger">距离最近</van-tag>
  </template>
</van-card>
<van-card
  desc="手机开不了机，进不了系统"
  title="荣耀9i砖机出售"
  thumb="https://pic3.58cdn.com.cn/mobile/big/n_v2a52423aeca954105906a5596397c3c0a.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">全新未拆</van-tag>
    <van-tag plain type="danger">距离最近</van-tag>
  </template>
</van-card>
<van-card
  desc="电脑99成新 吃鸡 LOL专用电脑 配置如下 全套1350"
  title="白菜价女生自用两套"
  thumb="https://pic8.58cdn.com.cn/p1/big/n_v263a424c1ce864eceb3533504535da84a.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">全新未拆</van-tag>
    <van-tag plain type="danger">距离最近</van-tag>
  </template>
</van-card>
<van-card
  desc="未开封的华为手环，公司年会奖品"
  title="全新华为手环B5商务版"
  thumb="https://pic1.58cdn.com.cn/mobile/big/n_v26bf0616090364316bed37504e40cb589.jpg?w=338&h=253"
>
  <template #tags>
    <van-tag plain type="danger">全新未拆</van-tag>
    <van-tag plain type="danger">距离最近</van-tag>
  </template>
</van-card> -->


</div>

</div>
   
</template>
<script>
export default {
    data() {
        return {
      value1: 0,
      value2: 'a',
      value3: 0,
      option1: [
        { text: '综合排序', value: 0 },
        { text: '价格由低到高', value: 1 },
        { text: '价格由高到低', value: 2 },
        { text: '距离优先', value: 3 },
      ],
      option2: [
        { text: '不限', value: 'a' },
        { text: '议程学生公寓', value: 'b' },
        { text: '女生大院', value: 'c' },
        { text: '腾龙学生公寓', value: 'd' },
        { text: '其他', value: 'e' },
      ],
       option3: [
        { text: '全新', value: 0 },
        { text: '九成新', value: 1 },
        { text: '八五新', value: 2 },
        { text: '不限', value: 3 },
      ],
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
.goods-content{
margin-top: 97px;
margin-bottom: 46px;
}
.nav-bar{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
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