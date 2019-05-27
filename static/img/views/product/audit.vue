<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>品牌名称：</label>
          <input type="text" placeholder="请填写商品分类名称关键字"/>
        </div>
        <div class="inline-block">
          <label>创建时间：</label>
          <div class="inline-block">
            <Date></Date>
          </div>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>产品状态：</label>
          <select>
            <option value="">全部</option>
            <option value="">未上架</option>
            <option value="">已上架</option>
            <option value="">已下架</option>
          </select>
        </div>
        <div class="inline-block">
          <button type="button" class="btn">搜 索</button>
          <button type="button" class="btn btn-primary" @click="onAdd">添 加</button>
        </div>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>商品编号</th>
            <th>缩略图</th>
            <th>产品名称</th>
            <th>产品分类</th>
            <th>所属品牌</th>
            <th>供货价</th>
            <th>市场价</th>
            <th>销售价</th>
            <th>剩余库存</th>
            <th>已售数量</th>
            <th>创建时间</th>
            <th>发布状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>1146653323268</td>
            <td><img src="../../../static/img/product.jpg" class="product-img" alt="" /></td>
            <td>李宁卫衣</td>
            <td>服装</td>
            <td>李宁</td>
            <td>10.00</td>
            <td>15.00</td>
            <td>11.00</td>
            <td>45</td>
            <td>15</td>
            <td>2018-04-09 15:44:01</td>
            <td>已发布</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail" class="margin-r-15">查看</a>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onDele">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="padding-top-15">
        <button type="button" class="btn btn-danger">批量删除</button>
      </div>
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
    // 添加商品
    onAdd () {
      this.$layer.open('productAdd', {calbck1: function () {}})
    },
    onDetail () {
      this.$layer.open('productDetail', {calbck1: function () {}})
    },
    onEdit () {
      this.$layer.open('productEdit', {calbck1: function () {}})
    },
    onDele () {
      this.$confirm('确认删除该商品？', () => {
      })
    }
  }
}
</script>
<style lang="less" scoped>
.product-img{
  width: 80px;
  height: 80px;
}
</style>
