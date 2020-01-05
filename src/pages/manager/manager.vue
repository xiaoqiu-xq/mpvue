<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="manager_card">
        <img src="../../static/images/manager.svg" />
        <p>今天我是早班店长</p>
        <div class="manager_card_btnLine">
          <button class="btn-mid-blue" @click="bindDonateInsert">捐物登记</button>
          <button class="btn-mid-green" @click="bindSaleInsert">售出登记</button>
        </div>
      </div>
      <div class="info">
        <div class="info_title">
          <div class="info_title_line"></div>
          <div>申请店长</div>
          <div class="info_title_line"></div>
        </div>
        <div
          class="info_content"
        >欢迎您成为一日店长。您售出的每一件物品都将直接为精准捐衣项目筹款。欢迎您成为一日店长。您售出的每一件物品都将直接为精准捐衣项目筹款。欢迎您成为一日店长。您售出的每一件物品都将直接为精准捐衣项目筹款。欢迎您成为一日店长。您售出的每一件物品都将直接为精准捐衣项目筹款。</div>
      </div>
      <div class="schedule_title">
        <div class="title_cn">店长排班</div>
        <div class="subtitle_en">Schedule</div>
      </div>
      <scheduleList :text="test"></scheduleList>
    </div>
  </div>
</template>

<script>
import scheduleList from "@/components/scheduleList";
export default {
  components: {
    scheduleList
  },
  data() {
    return {};
  },
  methods: {
    bindDonateInsert: function(e) {
      wx.navigateTo({ url: "./donateInsert/main" });
    },
    bindSaleInsert: function(e) {
      wx.scanCode({
        // onlyFromCamera: true,
        success(res) {
          console.log(res);
          if (res.errMsg === "scanCode:ok") {
            wx.navigateTo({ url: "./saleInsert/main" });
          } else {
            wx.showToast({
              title: "扫码失败",
              icon: "none",
              duration: 2000
            });
          }
        }
      });
    }
  }
};
</script>

<style>
.manager_card {
  margin-left: 30rpx;
  margin-right: 30rpx;
  margin-bottom: 80rpx;
  width: 630rpx;
  height: 350rpx;
  background: #fff;
  box-shadow: 0px 4px 40px rgba(193, 199, 208, 0.35);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.manager_card img {
  margin-top: 48rpx;
  margin-bottom: 20rpx;
  width: 72rpx;
  height: 72rpx;
}
.manager_card p {
  font-style: normal;
  font-weight: 500;
  font-size: 32rpx;
  line-height: 44rpx;
  color: #002251;
  margin-bottom: 32rpx;
}
.manager_card_btnLine {
  display: flex;
  justify-content: space-between;
  width: 562rpx;
  margin: 0 auto;
}

.info {
  margin-left: 30rpx;
  margin-right: 30rpx;
}
.info_title {
  height: 44rpx;
  margin-bottom: 32rpx;
  font-style: normal;
  font-weight: 500;
  font-size: 32rpx;
  line-height: 44rpx;
  text-align: center;
  color: #002251;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.info_title_line {
  width: 64rpx;
  height: 0rpx;
  margin: 21rpx 16rpx;
  border: 2rpx solid #c1c7d0;
}

.info_content {
  height: 392rpx;
  font-style: normal;
  font-weight: normal;
  font-size: 32rpx;
  line-height: 56rpx;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #7a869a;
}
.schedule_title {
  padding-top: 68rpx;
  margin-left: 30rpx;
  height: 176rpx;
}
</style>