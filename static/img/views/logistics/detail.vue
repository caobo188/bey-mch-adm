<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
          <div class="detail-item-title">运单编号</div>
          <div class="detail-block">1146563203203</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">快递公司</div>
          <div class="detail-block">顺丰快递</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">商品</div>
          <div class="detail-block">
            <div class="logist-pro-item">
              <img src="../../../static/img/product.jpg" alt=""/>
              <span>OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待 </span>
              <span>&times;1</span>
            </div>
            <div class="logist-pro-item">
              <img src="../../../static/img/product.jpg" alt=""/>
              <span>OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待 </span>
              <span>&times;1</span>
            </div>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">收货人</div>
          <div class="detail-block">曹先生(18966332222)</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">物流状态</div>
          <div class="detail-block">已发货</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">创建时间</div>
          <div class="detail-block">2018-09-20 15:57:00</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">物流详情</div>
          <div class="detail-block logist-detail-list">
            <div class="text-green">
              <span>2018-03-02/周五17:18:51</span>
              <span>【兰州市】 您的订单已签收。感谢您在京东购物，欢迎再次光临。参加评价还能赢取京豆哟</span>
            </div>
            <div>
              <span>2018-03-02/周五17:18:51</span>
              <span>【兰州市】 您的订单在京东【兰州分拨中心】发货完成，准备送往京东【朝速韵达邮政】</span>
            </div>
            <div>
              <span>2018-03-02/周五17:18:51</span>
              <span>【兰州市】 您的货物已分配给京东【朝速韵达邮政】，请等待京东【朝速韵达邮政】的配送员为您送货，货运单号为：1122369553614</span>
            </div>
            <div>
              <span>2018-03-02/周五17:18:51</span>
              <span>【兰州市】 您的订单在京东【兰州分拨中心】发货完成，准备送往京东【朝速韵达邮政】</span>
            </div>
            <div>
              <span>2018-03-02/周五17:18:51</span>
              <span>【兰州市】 您的货物已分配给京东【朝速韵达邮政】，请等待京东【朝速韵达邮政】的配送员为您送货，货运单号为：1122369553614</span>
            </div>
          </div>
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
.logist-detail-list{
  div{
    margin-bottom: 10px;
  }
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.logist-pro-item{
  img{
    width: 80px;
    height: 80px;
    vertical-align: middle;
  }
  span{
    margin-left: 15px;
  }
}
</style>
