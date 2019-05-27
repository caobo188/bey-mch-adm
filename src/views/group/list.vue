<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>分组名称：</label>
        <input type="text" placeholder="请填写分组名称关键字"/>
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
            <th>分组编号</th>
            <th>分组名称</th>
            <th>分组描述</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4002356325</td>
            <td>李宁卫衣</td>
            <td>李宁最大体育品牌</td>
            <td>2018-04-09 15:44:01</td>
            <td>
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
  name: 'groupList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onAdd () {
      this.$layer.open('groupAdd', '添加分组', {}, () => {
      })
    },
    onDetail () {
      this.$layer.open('groupDetail', '分组详情', {}, () => {
      })
    },
    onEdit () {
      this.$layer.open('groupEdit', '编辑分组', {}, () => {
      })
    },
    onDele () {
      this.$confirm('确认删除该分组？', () => {
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
