<template>
    <div>
  <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
    :style="{ background: '	#FF6347', 'border-radius':'8px 10px 15px 15px'}"
  />
<van-row>
        <van-col span="10"><span style="font-family=微软雅黑">
             历史记录
            </span></van-col>
        <van-col span="2" offset="12">
          <van-icon name="delete" @click="clearHistory"/>
        </van-col>
      </van-row>
        <van-row gutter="20">
          <van-row gutter="20">
            <van-col span="12" v-for="item in historyList" :key="item">
              {{item}}
            </van-col>
          </van-row>
           </van-row>
</form>
    </div>
</template>
<script>
export default {
    data() {
    return {
      value: '',
      historyList:[]
    };
  },
    created(){
    var history=localStorage.getItem("history");
    if(history!=null)
    {
      this.historyList=history.split(",");
    }
  },
  methods: {
      clearHistory(){
     this.historyList=[];
     localStorage.setItem("history","");
   },
    onSearch(val) {
       for(var i=0;i<this.historyList.length;i++){
       if(this.historyList[i]==val){
         this.historyList.splice(i,1);
         break;
       }
     }
     this.historyList.splice(0,0,val);
     localStorage.setItem("history",this.historyList.toString());
     this.$router.push("searchList/"+val);
    },
    onCancel() {
       this.$router.push({path:"/"})
    },
  },
}
</script>
<style>
    
</style>