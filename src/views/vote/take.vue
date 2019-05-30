<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <form action="">
        <div class="form-item">
          <label class="form-label">投票名称</label>
          <div class="input-inline">{{vote.title}}</div>
        </div>
        <div class="form-item">
          <label class="form-label">选项</label>
          <div class="input-block">
            <label class="check-label" v-for="(opt, idx) in vote.options">
              <input type="checkbox" name="vote-item" v-model="form.elects" :value="opt._id" :key="idx"/> {{opt.name}}
            </label>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label"></label>
          <div class="input-block">
            <button type="button" class="btn" @click="onSave">提 交</button>
            <button type="button"  class="btn btn-primary" @click="cfg.close">取 消</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cfg', 'idx'],
  data () {
    return {
      vote: {},
      form: {
        vid: '', // 投票活动id
        uid: '', // 投票人id
        elects: [] // 选项拼接
      }
    }
  },
  beforeCreate () {
  },
  created () {
    this.form.vid = this.cfg.params.id
    this.getVote()
  },
  methods: {
    getVote () {
      this.$http.getVote(this.form.vid, (rst) => {
        this.vote = rst.data
      })
    },
    onSave () {
      this.form.uid = sessionStorage.getItem('uid')
      this.$http.addRecord(this.form, rst => {
        this.cfg.ok(rst)
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
