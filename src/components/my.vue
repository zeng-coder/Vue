<template>
    <div class="user">
        <div class="nav-bar">
        <van-nav-bar title="个人中心" :style="{ background: '	#FF6347'}" fixed/> 
        </div>
        <div class="content">
    <van-row @click="showLogin=true">
      <van-col span="4" v-if="showImg">
        <img :src="img" style="border-radius: 50%;">
      </van-col>
      <van-col span="10" offset="4">
        <p class="name">{{name}}</p>
      </van-col>
    </van-row>
            <van-cell-group class="userList"  >
                <van-cell class="yuyue" icon="clock" title="我发布的"  @click="fabu" />
                <van-cell class="dindan" icon="balance-list" title="订单详情"  @click="kanjia" />
                <van-cell class="baoxian" icon="umbrella-circle" title="我卖出的"  @click="maichu" />
                <van-cell class="tousu" icon="service" title="投诉建议"   @click="tousu"/>
                <van-cell class="tongzhi" icon="bell" title="通知详情"   @click="tongzhi"/>
                <van-cell class="kanjia" icon="descending" title="砍价" @click="kanjia" />
                <van-cell class="xiugai" icon="edit" title="修改个人信息"  @click="xiugai"/>
            </van-cell-group>

            <van-button class="cardBtn" type="default" size="small" @click="quit" >退出登录</van-button>
        </div>
           
          <van-overlay :show="showLogin" @click="showLogin = false">
            <div class="wrapper" @click.stop>
              <div class="block" >
                <h2>登录</h2>
                <van-form @submit="onSubmit">
                  <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                  />
                  <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                  />
                  <div>
                    <van-button round block type="info" native-type="submit" class="login">
                      登录
                    </van-button>
                    <van-button round type="info" @click="gotoRegist" native-type="submit" class="regist">注册</van-button>
                  </div>
                </van-form>
              </div>
            </div>
          </van-overlay>

<!-- 弹出登录注册层 -->
  <!-- <van-dialog v-model="show" title="登录"  :show-confirm-button="close" :overlay="showLogin">
                <van-form @submit="onSubmit">
                  <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                  />
                  <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                  />
                  <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                      登录
                    </van-button>
                  </div>
                </van-form>
    </van-dialog> -->

    </div>
</template>

<script>
import Vue from 'vue'
import {Toast} from 'vant';
import { Dialog } from 'vant';
Vue.use(Dialog);
Vue.use(Toast);
Toast.setDefaultOptions({duration:2000});
export default{
    name:'my',
    data(){
        return{
            name:"登录/注册",
            showImg:false,
            img:"",
            showLogin:false,
            username:'',
            password:'',
            picIp:"http://localhost:8080/pic/"
        }
    },
     created(){
    var name=localStorage.getItem("username");
    if(name!=null){
      this.name=name;
      this.showImg=true;
      this.img=this.picIp+localStorage.getItem("userImg");
    }
  },
    methods:{
      gotoRegist(){
      this.$router.push("Regist");
    },
    quit(){
      localStorage.removeItem("username");
      localStorage.removeItem("userImg");
      this.showImg=false;
      this.name="未登录，请点击登录";
      this.img="";  
    },
    onSubmit(values){
      this.axios.post("c?op=login&username="+this.username+"&password="+this.password).then((response)=>{
        var result=response.data;
        if(result=="error"){
          Toast('用户名密码错误，请重新输入');
        }else{
          this.showLogin=false;
          Toast('登录成功');
          this.name=this.username;
          this.img=this.picIp+result;
          localStorage.setItem("username",this.name);
          localStorage.setItem("userImg",result);
          this.showImg=true;
        }
      })
    
    },
        fabu(){
            this.$toast("你还未发布内容，无法查看！")
        },
        maichu(){
            this.$toast("你还卖出东西，无法查看！")
        },
        tousu(){
            this.$toast("请选择投诉的订单")
        },
        tongzhi(){
            this.$toast("请前往消息查看")
        },
        kanjia(){
            this.$toast("你还未购买东西，无法查看！")
        },
        xiugai(){
            this.$toast("修改不了")
        }
    }
}   
</script>

<style  scoped>
.regist{
  position: absolute;
    padding: 0 15px;
    left: 51%;
    font-size: 14px;
    width: 30%;
    margin-top: 8%;
}
.login{
      display: block;
    width: 30%;
    position: absolute;
    left: 20%;
    margin-top: 8%;
}

.cardBtn{
    position: relative;
    left: 41%;
    top: 20px;
}
.content{
    margin-top: 50px;
}
.van-grid-item__icon{
    font-size: 30px;
}

    .userTop {
        display: block;
        margin: 0 auto;

    }

    .userList {
        text-align: left;
    }
.van-image{
    width: 90px;
    height: 90px;
}
.van-icon__image{
    border-radius: 50%;
}


    .van-cell {
        line-height: 38px;
    }

    .van-icon {
        font-size: 20px;
        top: 7px;
    }
.van-cell .yuyue{
        color: #59a2fc;
}
.userinfo{
  margin: 8px;
}
.userinfo img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.van-icon{
  color: #c10707;
}

p.name{
  margin: 30px 0px;
}
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block{
  width: 70%;
  height: 47%;
  background-color: #fff;
}
.block h2{
  text-align: center;
}


</style>