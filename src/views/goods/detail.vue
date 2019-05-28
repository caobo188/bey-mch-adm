<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
        <div class="detail-item-title">商品编号</div>
        <div class="detail-block">2016100956745345435</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">商品名称</div>
        <div class="detail-block">OPPO R9 4GB+64GB内存版 雪岩灰 全网通4G手机 双卡双待</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">副标题</div>
        <div class="detail-block">全网通4G手机 双卡双待</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">商品介绍</div>
        <div class="detail-block">全网通4G手机 双卡双待</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">产品分类</div>
        <div class="detail-block">手机数码/手机通讯/拍照手机</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">所属品牌</div>
        <div class="detail-block">小米</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">创建时间</div>
        <div class="detail-block">2018-04-09 15:44:01</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">更新时间</div>
        <div class="detail-block">2018-04-09 15:44:01</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">发布状态</div>
        <div class="detail-block">已上架</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">商品库存</div>
        <div class="detail-block">
          <table>
            <thead>
              <tr class="font-bold">
                <td>颜色</td>
                <td>大小</td>
                <td>供货价</td>
                <td>市场价</td>
                <td>零售价</td>
                <td>库存</td>
                <td>已售</td>
                <td>SKU编号</td>
                <td>SPU值</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>红色</td>
                <td>XL</td>
                <td>20.00</td>
                <td>25.00</td>
                <td>24.00</td>
                <td>50</td>
                <td>22</td>
                <td>201810221</td>
                <td>223</td>
              </tr>
              <tr>
                <td>红色</td>
                <td>XL</td>
                <td>20.00</td>
                <td>25.00</td>
                <td>24.00</td>
                <td>50</td>
                <td>22</td>
                <td>201810221</td>
                <td>223</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">属性图片</div>
        <div class="detail-block">
          <div class="product-prop-box">
            <img src="../../../static/img/product.jpg" alt="" class="product-prop-pic"/>
            <p>2000红色</p>
          </div>
          <div class="product-prop-box">
            <img src="../../../static/img/product.jpg" alt="" class="product-prop-pic"/>
            <p>2000红色</p>
          </div>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">上市年份</div>
        <div class="detail-block"></div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">主材含量</div>
        <div class="detail-block"></div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">适用对象</div>
        <div class="detail-block"></div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">商品相册</div>
        <div class="detail-block">
          <span class="product-detail-pic-box"><img src="../../../static/img/product.jpg" alt="" class="product-detail-pic"/></span>
          <span class="product-detail-pic-box"><img src="../../../static/img/product.jpg" alt="" class="product-detail-pic"/></span>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">规格参数</div>
        <div class="detail-block"></div>
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
.product-detail-pic{
  width: 150px;
  height: 150px;
}
.product-detail-pic-box{
  margin-right: 10px;
}
.product-prop-box{
  display: inline-block;
  margin-right: 10px;
  img{
    width: 120px;
    height: 120px;
  }
  p{
    font-weight: bold;
  }
}
</style>
