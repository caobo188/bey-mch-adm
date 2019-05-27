<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>商品名称</label>
        <input type="text" placeholder="请填写商品名称"/>
      </div>
      <div class="inline-block">
        <label>用户昵称</label>
        <input type="text" placeholder="请填写用户昵称"/>
      </div>
      <div class="inline-block">
        <button type="button" class="btn">搜 索</button>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th>用户昵称</th>
            <th>商品名称</th>
            <th>评价</th>
            <th>IP地址</th>
            <th>评论时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Windir</td>
            <td>银色星芒刺绣网纱底裤</td>
            <td>4.5颗星</td>
            <td>192.168.1.92</td>
            <td>2017-06-15 14:35:51</td>
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
  name: 'ExpList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onDetail () {
      this.$layer.open('evaDetail', '商品评价详情', {}, () => {})
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
