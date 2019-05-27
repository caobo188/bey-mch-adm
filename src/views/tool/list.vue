<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>工具名称</label>
        <input type="text" placeholder="请填写工具名称关键字"/>
      </div>
      <div class="inline-block">
        <label>创建时间</label>
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
            <th>工具编号</th>
            <th>工具名称</th>
            <th>内容</th>
            <th>关联商品</th>
            <th>面值</th>
            <th>有效期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4002356325</td>
            <td>5.1代金券</td>
            <td>满100减50</td>
            <td>38</td>
            <td>50</td>
            <td>2018-04-09 至 2018-05-09</td>
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
  name: 'programaList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onAdd () {
      this.$layer.open('brandAdd', '添加营销工具', {}, () => {
      })
    },
    onDetail () {
      this.$layer.open('brandDetail', '营销工具详情', {}, () => {
      })
    },
    onEdit () {
      this.$layer.open('brandEdit', '编辑营销工具', {}, () => {
      })
    },
    onDele () {
      this.$confirm('确认删除该营销工具？', () => {
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
