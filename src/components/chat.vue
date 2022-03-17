<template>
    <div id="header">

<div class="nav-header">
<van-nav-bar title="消息" :style="{ background: '	#FF6347'}">
  
  <template #right>
    <van-icon name="manager-o" size="24" />
  </template>
</van-nav-bar>
</div>
<div class="chat">
<van-grid :border="false" :gutter="20" :center="true" column-num=2 >
  <van-grid-item class="iconfont icon-jiaoyi"  text="交易消息" />
  <van-grid-item class="iconfont icon-tongzhi"  text="通知"  />
</van-grid>
<van-card
  tag="1"
  desc="宝贝还在吗？"
  title="秋恨所所"
  thumb="https://iconfont.alicdn.com/t/5c315ffc-d4b7-49c4-a362-ec741b9a0180.png"
/>
<van-card
  tag="1"
  desc="可以便宜一点嘛，我看东西还挺不错"
  title="飞天的鹰头猫"
  thumb="https://iconfont.alicdn.com/t/9ffe98a0-8384-42f2-bc64-57353c43acf7.png"
/>
<van-card
  desc="你在哪个公寓,义城还有吗？"
  title="会飞的皮卡丘"
  thumb="https://iconfont.alicdn.com/t/a1516a44-e09d-4858-a39c-2a4333371105.png"
/>
<van-card
  desc="在吗？"
  title="喵喵不会猫"
  thumb="https://iconfont.alicdn.com/t/28bb422c-550b-42e1-84e3-4030303347f9.png"
/>
<van-card
  desc="东西还在吗？"
  title="精神小伙"
  thumb="https://iconfont.alicdn.com/t/f1ddc341-a5e9-4258-a384-06ebd413bbfd.png"
/>
<van-card
  desc="冲冲冲冲冲冲冲"
  title="张三"
  thumb="https://iconfont.alicdn.com/t/138fb074-580d-4fa2-9f1e-77f7324056ad.png"
/>
<van-card
  desc="我不要了"
  title="李四"
  thumb="https://iconfont.alicdn.com/t/d1bc9792-0f47-4d59-9763-c48a87289843.png"
/>
<van-card
  desc="我想你啦"
  title="王五"
  thumb="https://iconfont.alicdn.com/t/8c8b71ba-e558-4f37-9ae0-0444c92e0797.png"
/>

</div>

    </div>

    
</template>
<style scoped>
.chat{
  margin-top: 32px;
  margin-bottom: 46px;
}
.nav-header{
      position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
}
.van-card__desc{
  position: absolute;
  top: 62%;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.van-tag--mark{
  border-radius: 50%;
}
.van-card__title{
  font-size: 18px;
  line-height: 40px;
}
</style>