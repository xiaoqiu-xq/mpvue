<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <success v-bind="params"></success>
      <button class="btn btn-form-submit" @click="submit">生成分享海报</button>
    </div>
  </div>
</template>

<script>
import success from "@/components/success";
export default {
  components: {
    success
  },
  data() {
    return {
      params: {
        title: "申请",
        icon:"fail",
        info:"您选择的班次已被人申请，请返回重新选择。"
          // "请添加小助手微信号bbaltxzs，注明时间、班次。"
      }
    };
  },
  methods: {
      submit:function(e){
          
      }
  }
};
</script>

<style>
.btn{
  margin-top: 72rpx;
  margin-left: 30rpx;
}
</style>