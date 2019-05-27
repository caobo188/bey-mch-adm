<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>分类名称：</label>
        <input type="text" placeholder="请填写商品分类名称关键字"/>
      </div>
      <div class="inline-block">
        <label>创建时间：</label>
        <div class="inline-block">
          <Date></Date>
        </div>
      </div>
      <div class="inline-block">
        <button type="button" class="btn">搜 索</button>
        <button type="button" class="btn btn-primary" @click="onAdd">添 加</button>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
          <th><input type="checkbox" /></th>
          <th>分类编号</th>
          <th>分类名称</th>
          <th>上级分类</th>
          <th>下级数量</th>
          <th>创建时间</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>4002356325</td>
            <td>卫衣</td>
            <td>服装</td>
            <td>38</td>
            <td>2018-04-09 15:44:01</td>
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
  name: 'Button',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onAdd () {
      this.$layer.open('productAdd', '添加商品', {}, () => {
      })
    },
    onDetail () {
      this.$layer.open('productDetail', '商品详情', {}, () => {
      })
    },
    onEdit () {
      this.$layer.open('productEdit', '编辑商品', {}, () => {
      })
    },
    onDele () {
      this.$confirm('确认删除该商品？', () => {
      })
    }
  },
  beforeCreate () {
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
</style>
