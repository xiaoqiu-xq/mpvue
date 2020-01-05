<template>
  <view class="count_box">
    <view class="count_group">
      <view :class="{count_btn_minus:value,count_btn_minus_disable:!value}" @click="tapBtnMinus"></view>
      <!-- <view :v-else class="count_btn_minus_disable" @click="tapBtnMinus"></view> -->
      <view class="count_input">
        <input
          class="count_input_i font_grey"
          v-model="value"
          @input="inputHandle"
          @blur="blurHandle"
        />
      </view>
      <view class="count_btn_plus" @click="tapBtnPlus"></view>
    </view>
  </view>
</template>

<script>
export default {
  props: ["count", "max", "min"],
  data() {
    return {
      value: 0
    };
  },

  methods: {
    tapBtnPlus: function(e) {
      this.value = this.value + 1;
    },
    tapBtnMinus: function(e) {
      if (this.value > 0) {
        this.value = this.value - 1;
      }
    },
    blurHandle: function(e) {
      this.value = Number(e.target.value);
    },
    inputHandle: function(e) {
      this.value = Number(e.target.value);
    }
  }
};
</script>

<style>
.count_box {
  width: 180rpx;
}
.count_group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.count_btn_minus_disable {
  width: 60rpx;
  height: 60rpx;
  background-image: url("./images/icon-minus-disable.svg");
}
.count_btn_minus {
  width: 60rpx;
  height: 60rpx;
  background-image: url("./images/icon-minus.svg");
}
.count_btn_minus {
  width: 60rpx;
  height: 60rpx;
  background-image: url("./images/icon-minus-disable.svg");
}
.count_btn_plus {
  width: 60rpx;
  height: 60rpx;
  background-image: url("./images/icon-plus.svg");
}
.count_input {
  width: 60rpx;
  height: 60rpx;
}
.count_input_i {
  width: 60rpx;
  padding-top: 10rpx;
  text-align: center;
  font-size: 32rpx;
}
</style>
