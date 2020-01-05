<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="donate_title">
        <div class="title_cn">我的捐赠</div>
        <div class="subtitle_en">
          My Donation
        </div>
      </div>

      <tab v-bind="tabData"></tab>
    
    </div>
  </div>
</template>

<script>
import tab from "@/components/tab";
export default {
  components: {
    tab
  },
  data() {
    return {
      tabData:{
        titles:["所有捐赠","已售爱心捐物"],
      }
    };
  },
  methods: {

  }
};
</script>

<style>
.donate_title {
  margin: 0 30rpx;
  margin-bottom: 76rpx;
}


</style>