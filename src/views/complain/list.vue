<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>投诉人</label>
          <input type="text" placeholder="请填写投诉人"/>
        </div>
        <div class="inline-block">
          <label>投诉对象</label>
          <input type="text" placeholder="请填写投诉对象"/>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>投诉类型</label>
          <select>
            <option value="">请选择</option>
            <option value="">有效举报</option>
            <option value="">恶意举报</option>
            <option value="">无效举报</option>
          </select>
        </div>
        <div class="inline-block">
          <label>创建时间</label>
          <div class="inline-block">
            <Date></Date>
          </div>
        </div>
        <div class="inline-block">
          <button type="button" class="btn">搜 索</button>
        </div>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
          <th>投诉类型</th>
          <th>投诉人</th>
          <th>投诉时间</th>
          <th>投诉对象</th>
          <th>投诉状态</th>
          <th>处理结果</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>商品评价</td>
            <td>Windir</td>
            <td>2017-03-22 11:05</td>
            <td>Windir</td>
            <td>未处理</td>
            <td>有效举报</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail">查看</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'complainList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onDetail () {
      this.$layer.open('noticeDetail', '投诉详情', () => {})
    },
    onDele () {
      this.$confirm('确认删除该投诉', () => {})
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
