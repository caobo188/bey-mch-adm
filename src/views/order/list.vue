<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>商品名称</label>
        <input type="text" placeholder="请填写商品名称关键字" v-model="query.nameLK"/>
      </div>
      <div class="inline-block">
        <button type="button" class="btn" @click="onFresh">搜 索</button>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th>商品名称</th>
            <th>零售价</th>
            <th>库存</th>
            <th>商家</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(goods, idx) in goodsList" :key="idx">
            <td>{{goods.name}}</td>
            <td>{{goods.salePrice}}</td>
            <td>{{goods.sale}}/{{goods.stock}}</td>
            <td>{{goods.mch}}</td>
            <td>{{goods.creTime | format('yyyy-MM-dd hh:mm:ss')}}</td>
            <td>
              <a href="javascript: void(0)" @click="onOrder(idx)">购买</a>
            </td>
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
        regId: ''
      },
      goodsList: []
    }
  },
  created () {
  },
  methods: {
    getGoodsList () {
      this.$refs.pager.getList(this.query, rst => {
        this.goodsList = rst.data || []
      })
    },
    onOrder () {
      this.$layer.open('orderAdd', '购买商品', {}, () => {
        this.$toast('购买成功')
        this.getGoodsList()
      })
    },
    onFresh () {
      this.$refs.pager.getPageNum(1)
      this.getgoodsList()
    }
  },
  beforeCreate () {
  }
}
</script>
<style lang="less" scoped>
</style>
