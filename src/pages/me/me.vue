<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="me-info">
        <div class="me-info-avatar"></div>
        <div class="me-info-name">用户名</div>
      </div>
      <div class="me-list">
        <div class="me-list-item" @click="myDonation">
          <span>我的捐赠</span>
          <span class="arrow">></span>
        </div>
        <div class="me-list-item" @click="mySchedule">
          <span>我的店长轮班</span>
          <span class="arrow">></span>
        </div>
        <div class="me-list-item">
          <span>个人资料</span>
          <span class="arrow">></span>
        </div>
        <div class="me-list-item">
          <span>关于</span>
          <span class="arrow">></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    myDonation: function(e) {
      wx.navigateTo({url:"./myDonation/main"})
    },
    mySchedule: function(e) {
      wx.navigateTo({url:"./mySchedule/main"})
    }
  }
};
</script>

<style>
.me-info {
  height: 240rpx;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.me-info-avatar {
  height: 140rpx;
  width: 140rpx;
  background: #ccc;
  border-radius: 100rpx;
}
.me-info-name {
  margin-top: 20rpx;
  height: 25rpx;
  opacity: 0.75;
  font-size: 28rpx;
}
.me-list-item {
  height: 108rpx;
  border-bottom: 1px solid #eaebed;
  opacity: 0.75;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30rpx;
  padding-right: 30rpx;
}
</style>