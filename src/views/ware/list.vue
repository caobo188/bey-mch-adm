<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>商品名称</label>
          <input type="text" placeholder="请填写商品名称"/>
        </div>
        <div class="inline-block">
          <label>商户名称</label>
          <input type="text" placeholder="请填写商户名称"/>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>分类名称</label>
          <input type="text" placeholder="请填写分类名称"/>
        </div>
        <div class="inline-block">
          <label>品牌名称</label>
          <input type="text" placeholder="请填写品牌名称"/>
        </div>
      </div>
      <div class="padding-top-15">
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
      <div class="padding-top-15">
        <label class="form-label pro-state-label">商品状态</label>
        <label class="check-label"><input type="radio" name="demo" checked/> 全部</label>
        <label class="check-label"><input type="radio" name="demo"/> 待审核</label>
        <label class="check-label"><input type="radio" name="demo"/> 已审核</label>
        <label class="check-label"><input type="radio" name="demo"/> 已拒绝</label>
        <label class="check-label"><input type="radio" name="demo"/> 未上架</label>
        <label class="check-label"><input type="radio" name="demo"/> 已上架</label>
        <label class="check-label"><input type="radio" name="demo"/> 已下架</label>
      </div>
    </div>
    <div class="page-content">
      <table class="product-list">
        <tbody>
          <tr>
            <td colspan="2">
              <img src="../../../static/img/product.jpg" alt="" class="list-img"/>
              <span class="list-name">OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待 </span>
            </td>
            <td>
              <a href="javascript: void(0)" @click="onMch">小米官方旗舰店</a>
            </td>
            <td colspan="2">
              <div class="list-info">
                <p><span>商品编号：</span>2016100956745345435</p>
                <p><span>商品分类：</span>手机数码/手机通讯/拍照手机</p>
                <p><span>品牌：</span>小米</p>
                <p><span>创建时间：</span>2016-09-24 12:34:45</p>
              </div>
            </td>
            <td class="text-green">已上架</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail" class="margin-r-15">查看</a>
              <a href="javascript: void(0)">下架</a>
            </td>
          </tr>
          <tr class="list-item-title">
            <td>颜色</td>
            <td>大小</td>
            <td>供货价</td>
            <td>市场价</td>
            <td>零售价</td>
            <td>库存</td>
            <td>已售</td>
          </tr>
          <tr>
            <td>红色</td>
            <td>XL</td>
            <td>20.00</td>
            <td>25.00</td>
            <td>24.00</td>
            <td>50</td>
            <td>22</td>
          </tr>
          <tr>
            <td>红色</td>
            <td>XL</td>
            <td>20.00</td>
            <td>25.00</td>
            <td>24.00</td>
            <td>50</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'productList',
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
      this.$layer.open('productDetail', '商品详情', {}, () => {})
    },
    onMch () {
      this.$layer.open('mchDetail', '商户详情', {}, () => {})
    }
  }
}
</script>
<style lang="less" scoped>
.product-list{
  .list-img{
    width: 80px;
    height: 80px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .list-name{
    width: 200px;
    display: inline-block;
  }
  .list-info{
    p{
      padding: 2px 0;
      span{
        display: inline-block;
        width: 110px;
        color: #999;
      }
    }
  }
  .list-item-title{
    background: #F5F5F6;
  }
}
.pro-state-label{
  display: inline-block;
  width: 95px;
}
</style>
