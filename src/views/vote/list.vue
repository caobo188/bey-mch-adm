<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>投票名称</label>
        <input type="text" placeholder="请填写管理员姓名关键字" v-model="query.nameLK"/>
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
            <th>投票名称</th>
            <th>有效期</th>
            <th>限制次数</th>
            <th>状态</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vote, idx) in voteList" :key="idx">
            <td>{{vote.title}}</td>
            <td>{{vote.expFm}} ~ {{vote.expTo}}</td>
            <td>{{vote.limit}}/{{vote.rule}}</td>
            <td>{{vote.status}}</td>
            <td>{{vote.creTime | format('yyyy-MM-dd hh:mm:ss')}}</td>
            <td>
              <a href="javascript: void(0)" @click="onEdit(idx)" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onVote(idx)" class="margin-r-15">投票</a>
              <a href="javascript: void(0)" @click="onRank(idx)" class="margin-r-15">结果</a>
              <a href="javascript: void(0)" @click="onDele(idx)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <Pager ref="pager" src="getVoteList"></Pager>
    </div>
  </div>
</template>
<script>
export default {
  name: 'voteList',
  data () {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
        obyCreTime: 2,
        nameLK: '',
        regId: ''
      },
      voteList: []
    }
  },
  created () {
  },
  methods: {
    getVoteList () {
      this.$refs.pager.getList(this.query, rst => {
        this.voteList = rst.data || []
      })
    },
    onAdd () {
      this.$layer.open('voteAdd', '添加投票', {}, () => {
        this.$toast('添加成功')
        this.getVoteList()
      })
    },
    onEdit (i) {
      let vote = this.voteList[i]
      this.$layer.open('voteEdit', '编辑管理员', {id: vote._id}, () => {
        this.$toast('编辑成功')
        this.getVoteList()
      })
    },
    onVote (i) {
      let vote = this.voteList[i]
      this.$layer.open('voteTake', '投票', {id: vote._id}, () => {
        this.$toast('投票成功')
        this.getVoteList()
      })
    },
    onRank (i) {
      let vote = this.voteList[i]
      this.$layer.open('voteRank', '投票结果', {id: vote._id}, () => {
      })
    },
    onDele (i) {
      let vote = this.voteList[i]
      this.$confirm('确认删除该管理员？', () => {
        this.$http.delVote(vote._id, rst => {
          this.$toast('删除成功')
          this.getVoteList()
        })
      })
    },
    onFresh () {
      this.getVoteList()
    }
  },
  beforeCreate () {
  }
}
</script>
<style lang="less" scoped>
</style>
