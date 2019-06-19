<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>商品名称</label>
          <input type="text" placeholder="请填写商品名称" v-model="query.nameLK"/>
        </div>
        <div class="inline-block">
          <label>品牌名称</label>
          <input type="text" placeholder="请填写品牌名称" v-model="query.num"/>
        </div>
        <div class="inline-block">
          <button type="button" class="btn" @click="onFresh">搜 索</button>
          <router-link to="/goods/add" class="btn btn-primary">添 加</router-link>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>交易状态</label>
          <div class="inline-block trade-status-box">
            <label class="check-label"><input type="radio" name="demo" checked/> 全部</label>
            <label class="check-label"><input type="radio" name="demo"/> 未上架</label>
            <label class="check-label"><input type="radio" name="demo"/> 已上架</label>
            <label class="check-label"><input type="radio" name="demo"/> 已下架</label>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <table class="goods-list" v-for="(goods, idx) in goodsList">
        <tbody>
          <tr>
            <td colspan="2">
              <img src="../../../static/img/product.jpg" alt="" class="list-img"/>
              <span class="list-name">{{goods.name}} </span>
            </td>
            <td>
            </td>
            <td colspan="3">
              <div class="list-info">
                <p><span>商品编号：</span>2016100956745345435</p>
                <p><span>商品分类：</span>卡片/加油卡</p>
                <p><span>品牌：</span>中石化</p>
                <p><span>创建时间：</span>{{goods.creTime | format('yyyy-MM-dd hh:mm')}}5</p>
              </div>
            </td>
            <td class="text-green">已上架</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail" class="margin-r-15">查看</a>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onOut">下架</a>
            </td>
          </tr>
          <tr class="list-item-title">
            <td>面额</td>
            <td>供货价</td>
            <td>市场价</td>
            <td>零售价</td>
            <td>库存</td>
            <td>已售</td>
            <td>SKU编号</td>
            <td>SPU值</td>
          </tr>
          <tr>
            <td>1000</td>
            <td>20.00</td>
            <td>25.00</td>
            <td>24.00</td>
            <td>50</td>
            <td>22</td>
            <td>201810221</td>
            <td>223</td>
          </tr>
          <tr>
            <td>2000</td>
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
      <Pager ref="pager" src="getGoodsList"></Pager>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
        obyCreTime: 2,
        nameLK: '',
        num: ''
      },
      goodsList: []
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    getGoodsList () {
      this.$refs.pager.getList(this.query, rst => {
        this.goodsList = rst.data || []
      })
    },
    onAdd () {
      this.$layer.open('lineAdd', '添加线路', {}, () => {
        this.$toast('添加成功')
      })
    },
    onDetail () {
      this.$layer.open('goodsDetail', '商品详情', {}, () => {
      })
    },
    onEdit () {
      this.$goto('goodsEdit', {})
    },
    // 上架商品
    onPut () {
      this.$confirm('确认上架该商品？', () => {
      })
    },
    // 下架商品
    onOut () {
      this.$confirm('确认下架该商品？', () => {
        this.getLineList()
      })
    },
    // 搜索
    onFresh  () {
    },
    onDele (i) {
    }
  }
}
</script>
<style lang="less" scoped>
.goods-list{
  tbody {
    border-top: 1px solid #E4E7ED;
  }
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
