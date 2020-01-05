<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <success v-bind="params"></success>
     
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
        title: "售出登记",
        icon:"success",
        info:
          "请什么什么什么（提醒文案）"
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

</style>