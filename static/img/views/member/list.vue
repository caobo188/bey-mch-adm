<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>会员账号：</label>
          <input type="text" placeholder="请填写商品分类名称"/>
        </div>
        <div class="inline-block">
          <label>会员昵称：</label>
          <input type="text" placeholder="请填写商品分类名称"/>
        </div>
      </div>
      <div class="padding-top-15">
        <div class="inline-block">
          <label>账号状态：</label>
          <select>
            <option value="">全部</option>
            <option value="">已启用</option>
            <option value="">已禁用</option>
          </select>
        </div>
        <div class="inline-block">
          <label>注册时间：</label>
          <div class="inline-block">
            <Date></Date>
          </div>
        </div>
        <div class="inline-block">
          <button type="button" class="btn">搜 索</button>
          <button type="button" class="btn btn-primary" @click="onAdd">添 加</button>
        </div>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>用户ID</th>
            <th>用户账号</th>
            <th>用户昵称</th>
            <th>消费金额</th>
            <th>订单数量</th>
            <th>注册时间</th>
            <th>账户状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>8447466</td>
            <td>18000000000</td>
            <td><img src="../../../static/img/avatar.png" alt="" class="member-list-avatar"/>Windir</td>
            <td>¥2000.00</td>
            <td>10</td>
            <td>2018-04-09 15:44:01</td>
            <td>已启用</td>
            <td>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">查看</a>
              <a href="javascript: void(0)" @click="onDele">禁用</a>
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
  name: 'brandList',
  data () {
    return {
      msg: ''
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    onAdd () {
      this.$layer.open('categoryAdd', '添加分类', {}, () => {
      })
    },
    onDetail () {
      this.$layer.open('categoryDetail', '分类详情', {}, () => {
      })
    },
    onEdit () {
      this.$layer.open('categoryEdit', '编辑分类', {}, () => {
      })
    },
    onDele () {
      this.$confirm('确认删除该分类？', () => {
      })
    }
  }
}
</script>
<style lang="less" scoped>
.member-list-avatar{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
