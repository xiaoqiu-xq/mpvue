<template>
  <div>
    <div class="container">
      <div class="donate-form">
        <div class="donate-form-label">选择发货日期</div>
        <picker mode="date" start="2019-01-01" end="2050-12-31" @change="bindDateChange">
          <div class="donate-form-date-picker">
            <span>{{date}}</span>
            <span class="arrow">></span>
          </div>
        </picker>
        <div class="donate-form-label">选择收件店</div>
        <radio-group class="donate-form-radio-group">
          <radio
            class="donate-form-radio"
            v-for="(item,index) in shops"
            :key="index"
            :value="item.value"
            :checked="item.checked"
          >
            <text>{{item.name}}</text>
          </radio>
        </radio-group>
      </div>
      <div class="donate-info">
        <div class="donate-form-label">邮寄信息</div>
        <div class="donate-info-content">
          上海市什么区什么路几号
          <br />什么慈善书店 收
          <br />手机号：1234567890
        </div>
        <div class="donate-form-label">捐物须知</div>
        <div class="donate-info-content">
          捐赠品需8成新以上的书籍或小型闲置物品：
          <br />请保证...
        </div>
      </div>
      <button class="btn-form-submit">提交</button>
    </div>
  </div>
</template>

<script>
import { todayDate } from '@/utils/formatDateTime.js'
export default {
  data() {
    return {
      date: todayDate(),
      shops: [
        { name: "1号店 什么街什么路多少号", value: "1", checked: "true" },
        { name: "2号店 什么街什么路多少号", value: "2" }
      ]
    };
  },

  methods: {
    bindDateChange: function(e) {
      this.date = e.target.value;
    }
  }
};
</script>

<style>
.donate-form {
  /* height: 440rpx; */
  padding-top: 28rpx;
  opacity: 0.75;
  border-bottom: 1px solid #eaebed;
}
.donate-form-label {
  font-style: normal;
  font-weight: 500;
  font-size: 32rpx;
  line-height: 44rpx;
  padding-left: 30rpx;
  color: #002251;
  margin-bottom: 16rpx;
}
.donate-form-date-picker {
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 32rpx;
  line-height: 38rpx;
  /* identical to box height */
  font-feature-settings: "pnum" on, "lnum" on;
  color: #7a869a;
}

.donate-form-date-picker {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 30rpx;
  padding-right: 30rpx;
  margin-bottom: 48rpx;
}
.donate-form-radio-group {
  padding-left: 30rpx;
  margin-bottom: 48rpx;
}
.donate-form-radio {
  font-style: normal;
  font-weight: normal;
  font-size: 32rpx;
  line-height: 70rpx;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #7a869a;
}
.donate-info {
  margin-top: 48rpx;
  margin-bottom: 40rpx;
}
.donate-info-content {
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 32rpx;
  line-height: 56rpx;
  /* or 175% */

  font-feature-settings: "pnum" on, "lnum" on;

  color: #7a869a;
  padding-left: 30rpx;
  margin-bottom: 32rpx;
}

</style>