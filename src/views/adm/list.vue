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
            <th>管理员</th>
            <th>登录账号</th>
            <th>手机号码</th>
            <th>邮箱</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(adm, idx) in admList" :key="idx">
            <td>{{adm.name}}</td>
            <td>{{adm.regId}}</td>
            <td>{{adm.mbl}}</td>
            <td>{{adm.email}}</td>
            <td>2019-05-22 11:05</td>
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
import request from "@/utils/request"
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
  created () {
    this.getAdmList()
  },
  methods: {
    getAdmList () {
      request({
        url: './adm/list',
        method: "post",
        data: this.query
      })
      .then(rst => {
        if(rst.data.status == 'success') {
          this.admList = rst.data.data || []
        } else {
          this.$alert(rst.data.msg)
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
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
