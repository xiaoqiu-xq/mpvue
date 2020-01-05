<template>
  <div class="success-container">
    <div v-if="icon==='success'" class="success-icon"></div>
    <div v-if="icon==='fail'" class="fail-icon"></div>
    <div v-if="icon==='success'" class="success-title font_blue32">{{title}}成功</div>
    <div v-if="icon==='fail'" class="success-title font_blue32">{{title}}失败</div>
    <div class="success-info font_grey">{{info}}</div>
  </div>
</template>

<script>
export default {
    props: ["title","icon","info"]
};
</script>

<style>
.success-container {
  margin-top: 20rpx;
  margin-left: 30rpx;
  margin-right: 30rpx;
}
.success-icon {
  width: 100rpx;
  height: 100rpx;
  margin: 0 auto;
  background: url("./images/icon-success.svg") no-repeat center center;
}
.fail-icon {
  width: 100rpx;
  height: 100rpx;
  margin: 0 auto;
  background: url("./images/icon-fail.svg") no-repeat center center;
}
.success-title {
  margin-top: 32rpx;
  text-align: center;
}
.success-info {
  margin: 0 40rpx;
  margin-top: 32rpx;
  text-align:justify;
}
</style>
