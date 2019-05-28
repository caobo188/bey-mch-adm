<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>订单编号</label>
          <input type="text" placeholder="请填写订单编号"/>
        </div>
        <div class="inline-block">
          <label>下单时间</label>
          <div class="inline-block">
            <Date></Date>
          </div>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>支付方式</label>
          <select>
            <option value="">全部</option>
            <option value="">微信</option>
            <option value="">支付宝</option>
            <option value="">账户</option>
          </select>
        </div>
        <div class="inline-block">
          <label>付款时间</label>
          <div class="inline-block p-r-0">
            <Date></Date>
          </div>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>收货人</label>
          <input type="text" placeholder="请填写收货人姓名"/>
        </div>
        <div class="inline-block">
          <label>收货人电话</label>
          <input type="text" placeholder="请填写收货人电话"/>
        </div>
        <div class="inline-block">
          <button type="button" class="btn">搜 索</button>
        </div>
      </div>
      <div class="padding-top-15">
        <label class="form-label bill-state-label">订单状态</label>
        <label class="check-label"><input type="radio" name="demo" checked/> 全部订单</label>
        <label class="check-label"><input type="radio" name="demo"/> 待付款</label>
        <label class="check-label"><input type="radio" name="demo"/> 待发货</label>
        <label class="check-label"><input type="radio" name="demo"/> 已发货</label>
        <label class="check-label"><input type="radio" name="demo"/> 已收货</label>
        <label class="check-label"><input type="radio" name="demo"/> 退款中</label>
        <label class="check-label"><input type="radio" name="demo"/> 已退款</label>
        <label class="check-label"><input type="radio" name="demo"/> 退货中</label>
        <label class="check-label"><input type="radio" name="demo"/> 已退货</label>
      </div>
    </div>
    <div class="page-content">
      <table>
        <tbody v-for="(bill, idx) in billList" :key="idx">
          <tr>
            <td colspan="5" class="logist-list-title">
              <span>订单号：{{bill.billNo}}</span>
              <span>下单时间：2016-09-24 12:34:45</span>
              <span>付款时间：2016-09-24 12:35:45</span>
              <span>付款方式：支付宝</span>
            </td>
          </tr>
          <tr>
            <td>
              <div class="logist-list-main">
                <img src="../../../static/img/product.jpg" alt="" class="logist-pic"/>
                <a href="" class="name-info">OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待 </a>
                <i class="qty-info">&times;1</i>
                <b class="price-info">2249.00</b>
              </div>
              <div class="logist-list-main">
                <img src="../../../static/img/product.jpg" alt="" class="logist-pic"/>
                <a href="" class="name-info">OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待 </a>
                <i class="qty-info">&times;1</i>
                <b class="price-info">2249.00</b>
              </div>
            </td>
            <td>曹先生(1868926663)</td>
            <td>总额：<span class="font-bold color-red">{{bill.amt}}</span></td>
            <td>待发货</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail" class="margin-r-15">查看</a>
              <a href="javascript: void(0)">发货</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request"
export default {
  name: 'billList',
  data () {
    return {
      billList: []
    }
  },
  created () {
    this.getBillList()
  },
  methods: {
    getBillList () {
      request({
        url: './bill/list',
        method: "post",
        data: this.query
      })
      .then(rst => {
        if(rst.data.status == 'success') {
          this.billList = rst.data.data || []
        } else {
          this.$alert(rst.data.msg)
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    onDetail () {
      this.$layer.open('billDetail', '订单详情', {}, () => {})
    }
  },
  beforeCreate () {
  }
}
</script>
<style lang="less" scoped>
.bill-state-label{
  display: inline-block;
  width: 95px;
}
.logist-list-title{
  span{
    margin-right: 20px;
  }
}
</style>
