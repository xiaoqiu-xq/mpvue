<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="donate_title">
        <div class="title_cn">捐物登记</div>
        <div class="subtitle_en">
          Donation
          <span class="font_blue32 fr">查看店长手册</span>
        </div>
      </div>
      <div class="donate_form">
        <div class="donate_form_line">
          <div class="font_darkblue32 fl">物品</div>
          <div class="fr">
            <counter :count="1" :max="5" :min="1"></counter>
          </div>
        </div>
        <div class="donate_form_line">
          <div class="font_darkblue32 fl">书籍</div>
          <div class="fr">
            <counter :count="1" :max="5" :min="1"></counter>
          </div>
        </div>
        <div class="donate_form_line">
          <div class="font_darkblue32 fl">手机号</div>
          <div :class="{donate_form_input_d_grey:tag,donate_form_input_d_blue:!tag}">
            <input
              class="donate_form_input font_grey"
              maxlength="11"
              v-model="value"
              @focus="mobilefocus"
              @blur="mobileblue"
            />
          </div>
        </div>
        <div class="donate_form_submit_line">
          <button class="btn-form-submit" @click="submit">提交</button>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="font_darkblue32">登记备注</div>
      <div class="font_grey">
        1. 登记捐物是为了跟踪捐物销售并通知捐赠人
        <br />2. 只登记定价>50元的捐物，以及所有可上架的书籍
        <br />3. 按照登记品件数，打印捐赠人二维码黏贴到该捐物上，并进行手动标价
      </div>
    </div>
  </div>
</template>

<script>
import counter from "@/components/counter";
export default {
  components: {
    counter
  },
  data() {
    return {
      value: "",
      tag: true
    };
  },
  methods: {
    submit: function(e) {
      wx.navigateTo({ url: "../donateInsertSuccess/main" });
    },
    mobilefocus: function(e) {
      this.tag = false;
    },
    mobileblue: function(e) {
      this.tag = true;
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
.donate_form_line {
  height: 60rpx;
  width: 630rpx;
  margin: 50rpx 0rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  margin-top: 72rpx;
  padding: 60rpx 60rpx;
  background: #f4f5f7;
  height: 380rpx;
}
.donate_form_input_d_grey {
  width: 230rpx;
  border-bottom: #dadfe5 2rpx solid;
  float: right;
}
.donate_form_input_d_blue {
  width: 230rpx;
  border-bottom: #0041c4 2rpx solid;
  float: right;
}
.donate_form_input {
  width: 200rpx;
  padding-top: 10rpx;
  padding-right: 10rpx;
  text-align: right;
  font-size: 32rpx;
  float: right;
}
.donate_form_submit_line {
  margin-top: 80rpx;
}
</style>