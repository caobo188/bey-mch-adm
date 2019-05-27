<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
        <div class="detail-item-title">订单编号</div>
        <div class="detail-block">1146233551666</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">商品</div>
        <div class="detail-block">
          <div class="bill-pro-item">
            <img src="../../../static/img/product.jpg" alt="" />
            <a href="">OPPO R9 4GB+64GB内存版 雪岩灰</a>
            <span>&times;1</span>
            <span>2249.00</span>
          </div>
          <div class="bill-pro-item">
            <img src="../../../static/img/product.jpg" alt="" />
            <a href="">OPPO R9 4GB+64GB内存版 雪岩灰</a>
            <span>&times;1</span>
            <span>2249.00</span>
          </div>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">总金额</div>
        <div class="detail-block font-bold color-red">4450.00</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">订单来源</div>
        <div class="detail-block">学子通教育</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">下单人</div>
        <div class="detail-block">agan（18689213782）</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">支付状态</div>
        <div class="detail-block">已支付</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">支付方式</div>
        <div class="detail-block">微信支付</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">收货人</div>
        <div class="detail-block">DrayMond（18689213782）</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">收货地址</div>
        <div class="detail-block">广东省深圳市南山区西丽街道365</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">物流状态</div>
        <div class="detail-block">已发货</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">下单时间</div>
        <div class="detail-block">2018-04-09 15:44:01</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">支付时间</div>
        <div class="detail-block">2018-04-09 15:44:01</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cfg', 'idx'],
  data () {
    return {
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.bill-pro-item{
  img{
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
  span{
    margin-left: 15px;
  }
}
</style>
