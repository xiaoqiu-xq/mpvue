<template>
  <div class="tab_container">
    <div
      v-for="(item,i) in titles"
      :key="i"
      :id="i"
      :class="[i===index?'tab_item_active':'tab_item']"
      @click="selectThis"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ["titles"],
  data() {
    return {
        index:0
    };
  },

  methods: {
    selectThis: function(e) {
      this.index = Number(e.target.id)
    }
  }
};
</script>

<style>
.tab_container {
  margin-left: 30rpx;
  width: 630rpx;
  height: 80rpx;
  mix-blend-mode: normal;
  opacity: 0.75;
  border-bottom: 1px solid #eaebed;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.tab_item {
  height: 72rpx;
  margin-right: 50rpx;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size: 32rpx;
  line-height: 50rpx;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  color: #c1c7d0;
}
.tab_item_active {
  height: 72rpx;
  margin-right: 50rpx;
  font-family: PingFang SC;
  font-style: normal;
  font-weight: 500;
  font-size: 32rpx;
  line-height: 50rpx;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  color: #0041c4;

  border-bottom: 8rpx solid #0141c3;
}
</style>
