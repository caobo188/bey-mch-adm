<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>标题：</label>
        <input type="text" placeholder="请填写商品分类名称关键字"/>
      </div>
      <div class="inline-block">
        <label>发布时间：</label>
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
            <th><input type="checkbox" /></th>
            <th>编号</th>
            <th>消息标题</th>
            <th>发布时间</th>
            <th>发布人员</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>1002356325</td>
            <td>秒杀专区暂时下线公告</td>
            <td>2017-08-02 15:47:44</td>
            <td>admin</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail">查看</a>
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
  name: 'messageList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onDetail () {
      this.$layer.open('categoryDetail', '分类详情', {}, () => {
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
