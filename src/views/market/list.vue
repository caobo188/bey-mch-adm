<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>分类名称</label>
        <input type="text" placeholder="请填写商品分类名称关键字"/>
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
    <div class="page-content">
      <table>
        <thead>
          <tr>
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
            <td>4002356325</td>
            <td>卫衣</td>
            <td>服装</td>
            <td>38</td>
            <td>2018-04-09 15:44:01</td>
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
  name: 'markList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onDetail () {
      this.$layer.open('categoryDetail', '营销历史详情', {}, () => {
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
