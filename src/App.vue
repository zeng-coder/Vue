<template>
  <div id="app" >
  <van-tabbar v-model="active" active-color="#FF6347" inactive-color="#000" >
  <van-tabbar-item class="iconfont icon-shouye " id="tab" to="/">首页</van-tabbar-item>
  <van-tabbar-item class="iconfont icon-fujin " id="tab" to="/nearby">附近</van-tabbar-item>
  <van-cell is-link @click="showPopup" class="iconfont icon-Group- tab" ></van-cell>
  <van-popup v-model="show" round position="bottom" :style="{ height: '65%' }" 
  close-on-popstate
  closeable
  close-icon-position="top-right" title="发布物品">
  <div class="van-action-sheet__header">发布商品</div>
  <van-form @submit="onSubmit">
  <van-cell-group>
  <van-field v-model="value3" label="物品标题" placeholder="请输入物品标题" />
    <van-field label="物品图片" readonly>
  <van-uploader v-model="fileList" multiple /></van-field>
  <van-uploader v-model="fileList" multiple :max-count="1" :before-read="beforeRead"/>
  <van-field
  readonly
  clickable
  label="宿舍区"
  :value="value"
  placeholder="选择宿舍区"
  @click="showPicker = true"
  />
<van-popup v-model="showPicker" round position="bottom">
  <van-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
    @change="onChange"
    
  />
</van-popup>
  <van-field v-model="value1" label="详细地址" placeholder="请输入详细地址" />
   <van-field v-model="value2" label="商品描述" placeholder="请输入商品描述" >
     <van-stepper v-model="value" />
   </van-field>
   <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" round style="margin-left: 22%; width: 50%;">
  立即发布
</van-button>
</van-cell-group>
</van-form>
  
  </van-popup>
  <van-tabbar-item class="iconfont icon-xiaoxi " id="tab" to="/chat">消息</van-tabbar-item>
  <van-tabbar-item class="iconfont icon-wode " id="tab" to="/my">我的</van-tabbar-item>
</van-tabbar>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import {Toast} from 'vant';
Vue.use(Toast);
Toast.setDefaultOptions({duration:2000});
export default {
  name: 'App',
  data() {
    return {
      
      productId:this.getRondom(),
      picIp:"http://localhost:8080/pic/",
      active:0,
      show:false,
      value: '',
      value1:'',
      value2:'',
      value3:'',
      fileList: [],
      showPicker: false,
      columns: ['议程学生公寓', '腾龙学生公寓', '女生大院', '其他'],
    }
  },
  methods: {
     onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      
      Toast(`当前选择：${value}`);
      return index;
    },
    

    getRondom(){
       return parseInt(new Date().getTime() / 1000);
       
    },
    beforeRead(file){
            if(file.type !=='image/jpeg'){
                Toast('请上传 jpg格式图片');
                return false;
            }
            return true;
        },
    onSubmit(values){
    var name=localStorage.getItem("username");
    if (name==null) {
        Toast('您未登陆，请登陆后发布！');
        return;
    } 
    console.log(name)
    let formData=new FormData();
    formData.append("imgFile",this.fileList[0].file);
    this.axios.post("c?op=addProduct&username="+name+"&productId="+this.productId+"&productTitle="+this.value3+"&address="+this.value+"&productTag="+this.value2,
    formData,{'Content-Type':'multipart/form-data'}).then((response) => {
        Toast('发布成功');
            })
    },
    showPopup() {
      this.show = true;
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

  },
}
</script>

<style>
#add{
  position: relative;
  font-size: 40px;
}
#tab{
  font-size: 10px;
}
.tab{
  width:22%;
  font-size: 50px;
  top: 0px;
  padding-top: 12px;
  
}
</style>
