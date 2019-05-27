<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
          <div class="detail-item-title">物流编号</div>
          <div class="detail-block">1146563203203</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">物流状态</div>
          <div class="detail-block">已发货</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">物流详情</div>
          <div class="detail-block logist-detail-list">
            <div>
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
  margin-bottom: 10px;
}
</style>
