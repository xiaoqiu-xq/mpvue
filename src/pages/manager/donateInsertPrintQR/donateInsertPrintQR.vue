<template>
  <div>
    <div class="container_bk"></div>
    <div class="container">
      <div class="print_card">
        <div class="print_card_title font_blue32">扫一扫</div>
        <div class="font_grey">了解捐赠人</div>
        <div class="print_card_item">
          <div class="item_QRCode"></div>
          <div class="item_title font_grey">物品/书籍</div>
        </div>
        <div class="print_card_item">
          <div class="item_QRCode"></div>
          <div class="item_title font_grey">物品/书籍</div>
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
  methods: {}
};
</script>

<style>
.print_card {
  margin-left: 30rpx;
  margin-right: 30rpx;
  margin-bottom:60rpx;
  width: 630rpx;
  background: #fff;
  box-shadow: 0px 4px 40px rgba(193, 199, 208, 0.35);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.print_card_title {
  margin-top: 40rpx;
}
.print_card_item{
  margin:24rpx auto; 
}
.item_QRCode{
  width:420rpx;
  height:420rpx;
  background:grey;
}
.item_title{
  margin-top: 32rpx;
  text-align: center;
}
</style>