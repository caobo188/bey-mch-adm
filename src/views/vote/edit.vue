<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <form action="">
        <div class="form-item">
          <label class="form-label">投票名称</label>
          <div class="input-inline">
            <input type="text" v-model="form.title"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">备注</label>
          <div class="input-inline">
            <input type="text" v-model="form.rmk"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">介绍</label>
          <div class="input-inline">
            <input type="text" v-model="form.intro"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">选项</label>
          <div class="input-block">
            <table>
              <thead>
                <tr>
                  <th>名称</th>
                  <th>说明</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in form.options" :key="idx">
                  <td>
                    <input type="text" v-model="item.name"/>
                  </td>
                  <td>
                    <input type="text" v-model="item.desc"/>
                  </td>
                  <td>
                    <a href="javascript: void(0)" @click="onDeleOpt(idx)">移除</a>
                  </td>
                </tr>
              </tbody>
              <a href="javascript: void(0)" @click="onAddOpt">新增</a>
            </table>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">投票规则</label>
          <div class="input-block">
            <label class="check-label"><input type="radio" name="rule" v-model="form.rule" value="1"/> 只投一次</label>
            <label class="check-label"><input type="radio" name="rule" v-model="form.rule" value="2"/> 每日可投</label>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">投票次数</label>
          <div class="input-inline">
            <input type="text" v-model="form.limit"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">有效期</label>
          <div class="input-block">
            <DateTime :value="form.expFm" @setVal="getExpFm" v-if="isLoading"></DateTime>
            <span>至</span>
            <DateTime :value="form.expTo" @setVal="getExpTo" v-if="isLoading"></DateTime>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">状态</label>
          <div class="input-block">
            <label class="check-label"><input type="radio" name="status" v-model="form.status" value="0"/> 待开启</label>
            <label class="check-label"><input type="radio" name="status" v-model="form.status" value="1"/> 已开启</label>
            <label class="check-label"><input type="radio" name="status" v-model="form.status" value="2"/> 已禁止</label>
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
      isLoading: false,
      form: {
        title: '',
        rmk: '',
        intro: '',
        options: [],
        rule: 1,
        limit: '',
        expFm: '',
        expTo: '',
        status: 0
      }
    }
  },
  beforeCreate () {
  },
  created () {
    this.form.id = this.cfg.params.id
    this.getVote()
  },
  methods: {
    getVote () {
      this.$http.getVote(this.form.id, (rst) => {
        this.form = rst.data
        this.isLoading = true
      })
    },
    onSave () {
      this.$http.updVote(this.form, rst => {
        this.cfg.ok(rst)
      })
    },
    onAddOpt () {
      this.form.options.push({
        name: '',
        desc: ''
      })
    },
    onDeleOpt (i) {
      this.form.options.splice(i, 1)
    },
    getExpFm (val) {
      this.form.expFm = val || ''
    },
    getExpTo (val) {
      this.form.expTo = val || ''
    }
  }
}
</script>
<style lang="less" scoped>
</style>
