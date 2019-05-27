<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>标题</label>
        <input type="text" placeholder="请填写标题关键字"/>
      </div>
      <div class="inline-block">
        <label>发布时间</label>
        <div class="inline-block">
          <Date></Date>
        </div>
      </div>
      <div class="inline-block">
        <button type="button" class="btn">搜 索</button>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
          <th>发自</th>
          <th>标题</th>
          <th>摘要</th>
          <th>发布时间</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>华老师</td>
            <td>管理制度</td>
            <td>良好的管理理念</td>
            <td>2018-04-09 15:44:01</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail" class="margin-r-15">查看</a>
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
  name: 'suggestList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onDetail () {
      this.$layer.open('categoryDetail', '建议留言详情', () => {})
    },
    onDele () {
      this.$confirm('确认删除该建议留言？', () => {})
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
