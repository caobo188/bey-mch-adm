<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>分类名称：</label>
        <input type="text" placeholder="请填写商品分类名称关键字"/>
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
            <th>商圈编号</th>
            <th>商圈名称</th>
            <th>所在地区</th>
            <th>简介</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4002356325</td>
            <td>商业步行街</td>
            <td>广东省深圳市罗湖区老街步行街</td>
            <td>成立于1995年，最早商业步行街</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail" class="margin-r-15">查看</a>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onDele">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'businessList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onAdd () {
      this.$layer.open('brandAdd', '添加品牌', {}, () => {
      })
    },
    onDetail () {
      this.$layer.open('businessDetail', '品牌详情', {}, () => {
      })
    },
    onEdit () {
      this.$layer.open('brandEdit', '编辑品牌', {}, () => {
      })
    },
    onDele () {
      this.$confirm('确认删除该品牌？', () => {
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
