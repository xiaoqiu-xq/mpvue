<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="donate_title">
        <div class="title_cn">申请</div>
        <div class="subtitle_en">Apply</div>
      </div>
      <div class="donate_form">
        <div class="donate_form_label font_darkblue32">所选分店</div>
        <div class="donate_form_info font_grey">1号店什么什么名</div>
        <div class="donate_form_label font_darkblue32">排班时间</div>
        <div class="donate_form_info font_grey">2019年11月4日 周一 上午</div>
        <div class="donate_form_label font_darkblue32">申请确认</div>
        <div
          class="donate_form_info font_grey"
        >您的保证出席对于慈善商店的正常运作非常重要，请输入您的手机号，并再次确认您的值守时间段。注意：无故缺席将被永久取消志愿者服务资格。</div>
        <input
          placeholder="请填写手机号"
          class="donate_form_input font_grey"
          maxlength="11"
          v-model="value"
        />
        <div class="apply_form_submit_line">
          <button class="btn-apply-back font_blue32" @click="back">返回</button>
          <button class="btn-apply-confirm" @click="confirm">确认申请</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    back: function(e) {
      wx.navigateBack();
    },
    confirm:function(e){
       wx.redirectTo({url:"../applyResult/main"})
    }
  }
};
</script>

<style>
.donate_title {
  margin: 0 30rpx;
}
.donate_form {
  margin: 0rpx 30rpx;
  margin-top: 70rpx;
}
.donate_form_title {
  margin-bottom: 16rpx;
}
.donate_form_info {
  margin-bottom: 40rpx;
}
.donate_form_line {
  height: 60rpx;
  width: 630rpx;
  margin: 50rpx 0rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.donate_form_input {
  border: 2rpx solid #DADFE5;
  width: 620rpx;
  height: 88rpx;
  padding-top: 10rpx;
  padding-left: 10rpx;
  text-align: left;
}
.apply_form_submit_line {
  margin-top: 80rpx;
  width:630rpx;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>