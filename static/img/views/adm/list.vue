<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>管理员姓名</label>
        <input type="text" placeholder="请填写管理员姓名关键字" v-model="query.nameLK"/>
      </div>
      <div class="inline-block">
        <label>创建时间</label>
        <div class="inline-block p-r-0">
          <Date></Date>
        </div>
      </div>
      <button type="button" class="btn">搜 索</button>
      <button type="button" class="btn btn-primary" @click="onAdd">添 加</button>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th>管理员ID</th>
            <th>管理员</th>
            <th>登录账号</th>
            <th>最后登录</th>
            <th>是否启用</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2424</td>
            <td><img src="../../../static/img/avatar.png" class="avatar-img"/>HUKL</td>
            <td>1868951322</td>
            <td>2017-03-22 11:05</td>
            <td>已启用</td>
            <td>2017-03-22 11:05</td>
            <td>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" class="margin-r-15">启用</a>
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
  name: 'admList',
  data () {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
        obyCreTime: 2,
        nameLK: '',
        creTimeRG: ''
      },
      admList: []
    }
  },
  methods: {
    onAdd () {
      this.$layer.open('admAdd', '添加管理员', {}, () => {
        this.$toast('添加成功')
      })
    },
    onEdit (i) {
      this.$layer.open('admEdit', '编辑管理员', {}, () => {
        this.$toast('编辑成功')
      })
    },
    onDele (i) {
      this.$confirm('确认删除该管理员？', () => {
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
.avatar-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
