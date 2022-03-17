<template>
<div>
  <div class="nav-bar">
        <van-nav-bar title="商品详情" :style="{ background: '	#FF6347'}" fixed/> 
        </div>
  <div class="info">
    <div class="ico_image">
      <van-row v-for="item in user" :key="item.productId">
        <van-col span="6">
        <van-image
          round
          width="5rem"
          height="5rem"
          :src="picIp+item.image"
        />
         <p class="user">
          发布人：{{item.username}}
        </p>
      </van-col>
      </van-row>
    </div>
    <h2>{{product.productTitle}}</h2>
    <p class="time">{{product.productstime|dateFormat}}</p>
    <van-image
          width="100%"
          :src="picIp+product.productPic"
    />
    <p class="content" v-html="product.productTag"></p>
    <van-row v-for="item in commentList" :key="item.commentId">
      <van-col span="6">
        <van-image
          round
          width="5rem"
          height="5rem"
          :src="picIp+item.image"
        />
      </van-col>
      <van-col span="18">
        <p class="user">
          {{item.userName}}---{{item.commentTime|dateFormat}}
        </p>
        <p class="user">{{item.content}}</p>
      </van-col>
    </van-row>
    <van-form @submit="onSubmit">
      <van-field
        v-model="content"
        :clearable=clearable
        placeholder="请输入评论内容"
        :rules="[{required: true,message:'请输入评论内容'}]"
        style="margin: 20px 5px 26px 0;"
      />
      <div style="margin: 20px 0px 40px 0px;position:relative;bottom: 25px;">
        <van-button round block type="info" native-type="submit">
          发表
        </van-button>
      </div>
    </van-form>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import {Toast} from 'vant';
Vue.use(Toast);
Toast.setDefaultOptions({duration:2000});
export default{
  name:'productInfo',
  data(){
    return{
      productId:this.$route.params.productId,
      content:"",
      clearable:true,
      product:{},
      picIp:"http://localhost:8080/pic/",
      commentList:[],
      user:[]

      
    }
  },
  created(){
  //console.log(this.productId)
   this.getNewsInfo();
   this.getComments();
   this.getImage();
  },

  methods:{
    getImage(){
      this.axios.post("c?op=getImage&productId="+this.productId).then((response)=>{
        this.user = response.data;
        console.log(response.data)
      })
    },
    onSubmit(values){
      var name=localStorage.getItem("username");
      if(name==null){
        Toast('您未登陆，请登陆后发表评论！');
        return;
      }
      this.axios.post("c?op=addComment&productId="+this.productId+"&content="+this.content+"&userName="+name).then((response)=>{
        this.getComments(); 
        this.content="";
      })
    },
    getNewsInfo(){
      this.axios.get("c?op=getInfo&productId="+this.productId).then((response)=>{
        this.product=response.data;
        
      })
    },
    getComments(){
      this.axios.get("c?op=getComments&productId="+this.productId).then((response)=>{
        this.commentList=response.data;
        //console.log(response.data)
      })
    },
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ico_image{
  position: relative;
  top: 46px;
}
.info{
  margin: 0 10px;
}
.info h2{
  text-align: center;
  margin: 60px 0px 20px 0px;
  font-weight: 500;
  font-size: 20px;
}
.info h4{
  text-align: center;
  font-weight: 500;
  font-size: 16px;
}
p.time{
  text-align: center;
}
p.content{
  line-height: 1.5;
  text-indent: 15px;
}
p.user{
  font-size: 14px;
  margin: 5px;
}
</style>
