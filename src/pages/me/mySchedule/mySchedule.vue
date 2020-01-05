<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="schedule_title">
        <div class="title_cn">我的店长轮班</div>
        <div class="subtitle_en">My Schedule</div>
      </div>
      <tab v-bind="tabData"></tab>
    </div>
  </div>
</template>

<script>
import tab from "@/components/tab";
export default {
  components: {
    tab
  },
  data() {
    return {
      tabData: {
        titles: ["所有轮班", "未开始", "已完成", "已取消"]
      }
    };
  },
  methods: {}
};
</script>

<style>
.schedule_title {
  margin: 0 30rpx;
  margin-bottom: 76rpx;
}
</style>