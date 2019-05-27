<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>物流公司</label>
        <input type="text" placeholder="请填写物流公司"/>
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
            <th>单据编号</th>
            <th>单据名称</th>
            <th>添加时间</th>
            <th>是否启用</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1000001</td>
            <td>顺丰快递</td>
            <td>2017-08-05 15:47:44</td>
            <td>
              <label class="switch-label">
                <input type="checkbox" class="switch">
              </label>
            </td>
            <td>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onDetail">删除</a>
            </td>
          </tr>
          <tr>
            <td>1000001</td>
            <td>顺丰快递</td>
            <td>2017-08-05 15:47:44</td>
            <td>
              <label class="switch-label">
                <input type="checkbox" class="switch" checked>
              </label>
            </td>
            <td>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onDetail">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExpTpl',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onAdd () {
      this.$layer.open('brandAdd', '添加模板', {}, () => {
        this.$toast('添加成功')
      })
    },
    onDetail () {
      this.$layer.open('brandEdit', '物流详情', {}, () => {
      })
    },
    onEdit () {
      this.$layer.open('brandAdd', '编辑模板', {}, () => {
        this.$toast('添加成功')
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
