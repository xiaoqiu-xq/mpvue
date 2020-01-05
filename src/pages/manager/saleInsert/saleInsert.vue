<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="donate_title">
        <div class="title_cn">售出登记</div>
        <div class="subtitle_en">
          Donation
          <span class="font_blue32 fr">查看店长手册</span>
        </div>
      </div>
      <div class="donate_form">
        <div class="donate_form_line">
          <div class="font_darkblue32 fl">物品</div>
          <div class="fr">
            <checkbox-group @change="checkboxChange">
              <checkbox value="item" :checked="itemChecked" />
            </checkbox-group>
          </div>
        </div>

        <div class="donate_form_line">
          <div class="font_darkblue32 fl">书籍</div>
          <div class="fr">
            <checkbox-group @change="checkboxChange">
              <checkbox value="book" :checked="bookChecked" />
            </checkbox-group>
          </div>
        </div>

        <div class="donate_form_line">
          <div class="font_darkblue32 fl">价格</div>
          <div :class="{donate_form_input_d_grey:tag,donate_form_input_d_blue:!tag}">
            <input
              class="donate_form_input font_grey"
              maxlength="11"
              v-model="value"
              @focus="focus"
              @blur="blue"
            />
          </div>
        </div>
        <div class="donate_form_submit_line">
          <button class="btn-form-submit" @click="submit">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: true,
      itemChecked: true,
      bookChecked: false,
      value: ""
    };
  },
  methods: {
    checkboxChange: function(e) {
      console.log(e);
      if (e.target.value[0] === "item") {
        this.itemChecked = true;
        this.bookChecked = false;
      } else {
        this.itemChecked = false;
        this.bookChecked = true;
      }
    },
    submit: function(e) {
      wx.navigateTo({ url: "../saleInsertSuccess/main" });
    },
    focus: function(e) {
      this.tag = false;
    },
    blue: function(e) {
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