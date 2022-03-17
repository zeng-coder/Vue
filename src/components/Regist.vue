<template>
 <div>
     <div class="userinfo">
         <h2>注册</h2>
                <van-form @submit="onSubmit">
                  <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                  />
                   <van-field
                    readonly
                    clickable
                    label="性别"
                    :value="value"
                    placeholder="选择性别"
                    @click="showPicker = true"
                    />
                    <van-popup v-model="showPicker" round position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="columns"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                    />
                    </van-popup>
                  <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                  />
                  <van-field
                    v-model="password1"
                    type="password"
                    name="确认密码"
                    label="确认密码"
                    placeholder="确认密码"
                    :rules="[{ required: true, message: '请填写确认密码' }]"
                  />
                  <van-field name="uploader" label="用户头像">
                      <template #input>
                          <van-uploader v-model="uploader" :max-count="1" :before-read="beforeRead" />
                      </template>
                  </van-field>
                  <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                      提交
                    </van-button>
                  </div>
                </van-form>
     </div>
 </div>
    
</template>

<script>
import Vue from 'vue';
import {Toast} from 'vant';
Vue.use(Toast);
Toast.setDefaultOptions({duration:2000});
export default{
    name:'Regist',
    data(){
        return{
            active:0,
            show:false,
            value: '',
            showPicker: false,
            username:'',
            password:'',
            password1:'',
            uploader:[],
            picIp:"http://localhost:8080/pic/",
            columns: ['男', '女'],
        }
    },
    methods:{
        check(username){
            this.axios.post("c?op=check")
        },
        beforeRead(file){
            if(file.type !=='image/jpeg'){
                Toast('请上传 jpg 格式图片');
                return false;
            }
            return true;
        },
        onSubmit(values){
            if(this.password!=this.password1){
                Toast('密码和确认密码不一致');
                return;
            }
            let formData=new FormData();
            formData.append("imgFile",this.uploader[0].file);
            this.axios.post("c?op=regist&username="+this.username+"&password="+this.password+"&sex="+this.value,
            formData,{'Content-Type':'multipart/form-data'}).then((response) => {
                Toast('注册成功')
                this.$router.push("my");
            })
        },
        showPopup() {
      this.show = true;
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    }
}
</script>