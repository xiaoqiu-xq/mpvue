<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <success v-bind="params"></success>
      <div class="operation">
        <button class="btn-mid-blue" @click="keepInsert">继续登记</button>
        <button class="btn-mid-green" @click="printQRCode">打印二维码</button>
      </div>
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
        title: "捐物登记",
        icon:"success",
        info:
          "您已登记xx本捐书，xx件捐物，请确认登记数量正确，下一步打印捐赠人二维码黏贴到该捐赠品上，并对每件物品进行手动标价。"
      }
    };
  },
  methods: {
      keepInsert:function(e){
          wx.redirectTo({url:"../donateInsert/main"})
      },
      printQRCode:function(e){
          wx.navigateTo({url:"../donateInsertPrintQR/main"}) 
      }
  }
};
</script>

<style>
.operation {
  display: flex;
  justify-content:space-between;
  width: 562rpx;
  margin:0 auto;
  margin-top:72rpx;
}
</style>