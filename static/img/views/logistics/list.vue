<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>运单编号</label>
          <input type="text" placeholder="请填写运单编号"/>
        </div>
        <div class="inline-block">
          <label>物流状态</label>
          <select>
            <option value="">全部</option>
            <option value="">待发货</option>
            <option value="">待收货</option>
            <option value="">已签收</option>
          </select>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>收货人</label>
          <input type="text" placeholder="请填写收货人名称"/>
        </div>
        <div class="inline-block">
          <label>收货人电话</label>
          <input type="text" placeholder="请填写收货人电话"/>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>快递公司</label>
          <input type="text" placeholder="请填写快递公司"/>
        </div>
        <div class="inline-block">
          <label>创建时间</label>
          <div class="inline-block p-r-0">
            <Date></Date>
          </div>
        </div>
        <div class="inline-block">
          <button type="button" class="btn">搜 索</button>
        </div>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th>运单编号</th>
            <th>快递公司</th>
            <th>商品</th>
            <th>收货人</th>
            <th>物流状态</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10004201808200365</td>
            <td>顺丰快递</td>
            <td>
              <div class="logist-list-main">
                <img src="../../../static/img/product.jpg" alt="" class="logist-pic"/><span class="name-info">OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待 </span>
                <i class="qty-info">&times;1</i>
              </div>
              <div class="logist-list-main">
                <img src="../../../static/img/product.jpg" alt="" class="logist-pic"/><span class="name-info">OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待 </span>
                <i class="qty-info">&times;1</i>
              </div>
            </td>
            <td>曹先生(18656986632)</td>
            <td>已发货</td>
            <td>2018-09-20 15:57:00</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail">查看</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'logisticsList',
  data () {
    return {
      msg: ''
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    onDetail () {
      this.$layer.open('logisticsDetail', '物流详情', {}, () => {})
    }
  }
}
</script>
<style lang="less" scoped>
.logist-list-title{
  background: #F5F5F6;
  span{
    display: inline-block;
    width: 23%;
    font-size: 13px;
  }
}
.logist-pic{
  width: 60px;
  height: 60px;
  vertical-align: middle;
  margin-right: 10px;
}
.logist-list-main{
  margin-bottom: 10px;
  .name-info{
    display: inline-block;
    width: 220px;
  }
  .qty-info{
    padding: 0 10px;
  }
  .price-info{
    padding: 0 10px;
  }
}
</style>
