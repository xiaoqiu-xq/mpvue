<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <success v-bind="params"></success>
      <button class="btn btn-form-submit" @click="submit">返回</button>
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
        title: "取消",
        icon:"success",
        info:
          "您已成功取消2019年11月5日*点-*点的店长排班，您的保证出席对于慈善商店的正常运作非常重要，如在开始值守时点24小时之后取消，您需要联系小助手说明原因并紧急安排换班（微信号bbaltxzs,电话15021414581）注意：无故缺席将被永久取消志愿者服务资格。"
      }
    };
  },
  methods: {
      submit:function(e){
          wx.navigateBack()
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