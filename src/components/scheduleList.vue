<template>
  <div class="schedule_list">
    <div class="schedule_item_line">
      <div class="schedule_item_col1 schedule_item_line_title">日期</div>
      <div class="schedule_item_col2 schedule_item_line_title">早班</div>
      <div class="schedule_item_col3 schedule_item_line_title">晚班</div>
    </div>
    <div class="schedule_item_line">
      <div class="schedule_item_col1">11月4日 周一</div>
      <div class="schedule_item_col2">
        <img src="../static/images/avatar.svg" />
        <p>Joseph</p>
      </div>
      <div class="schedule_item_col3">
        <button class="schedule_btnApply" @click="apply">申请</button>
      </div>
    </div>
    <div class="schedule_item_line">
      <div class="schedule_item_col1">11月5日 周二</div>
      <div class="schedule_item_col2" >
        <button class="schedule_btnCancel" @click="cancel">取消</button>
      </div>
      <div class="schedule_item_col3">
        <img src="../static/images/avatar.svg" />
        <p>Joseph</p>
      </div>
    </div>
    <div class="schedule_item_line">
      <div class="schedule_item_col1">11月6日 周三</div>
      <div class="schedule_item_col2">
        <img src="../static/images/avatar.svg" />
        <p>Joseph</p>
      </div>
      <div class="schedule_item_col3">
        <img src="../static/images/avatar.svg" />
        <p>Joseph</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {};
  },
  methods: {
    apply: function(e) {
      wx.navigateTo({ url: "./apply/main" });
    },
    cancel: function(e) {
      wx.navigateTo({ url: "./cancel/main" });
    }
  }
};
</script>

<style>
</style>
