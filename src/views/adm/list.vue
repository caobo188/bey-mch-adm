<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>管理员姓名</label>
        <input type="text" placeholder="请填写管理员姓名关键字" v-model="query.nameLK"/>
      </div>
      <div class="inline-block">
        <label>登录账号</label>
        <input type="text" placeholder="请填写登录账号" v-model="query.regId"/>
      </div>
      <div class="inline-block">
        <button type="button" class="btn" @click="onFresh">搜 索</button>
        <button type="button" class="btn btn-primary" @click="onAdd">添 加</button>
      </div>
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
              <a href="javascript: void(0)" @click="onEdit(idx)" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onDele(idx)">删除</a>
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
        regId: ''
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
        method: 'post',
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
        this.getAdmList()
      })
    },
    onEdit (i) {
      let adm = this.admList[i]
      this.$layer.open('admEdit', '编辑管理员', {id: adm._id}, () => {
        this.$toast('编辑成功')
        this.getAdmList()
      })
    },
    onDele (i) {
      let adm = this.admList[i]
      this.$confirm('确认删除该管理员？', () => {
        request({
          url: `adm/del/${adm._id}`,
          method: 'get'
        })
        .then(rst => {
          if(rst.data.status == 'success') {
            this.$toast('删除成功')
            this.getAdmList()
          } else {
            this.$alert('新增失败')
          }
        })
        .catch(error => {
          console.log(error)
        })
      })
    },
    onFresh () {
      this.getAdmList()
    }
  },
  beforeCreate () {
  }
}
</script>
<style lang="less" scoped>
</style>
