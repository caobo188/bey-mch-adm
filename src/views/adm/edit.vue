<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <form action="">
        <div class="form-item">
          <label class="form-label"><b class="color-red">*</b> 管理员名称</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入管理员名称" v-model="form.name"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">所属角色</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入所属角色" v-model="form.role"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label"><b class="color-red">*</b> 登录账号</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入登录账号" v-model="form.regId"/>
          </div>
          <div class="form-mid">请以手机号为登录账号</div>
        </div>
        <div class="form-item">
          <label class="form-label"><b class="color-red">*</b> 密码</label>
          <div class="input-inline">
            <input type="password" placeholder="请输入登录密码" v-model="form.pwd"/>
          </div>
          <div class="form-mid">6-16位数字与字母组合</div>
        </div>
        <div class="form-item">
          <label class="form-label"><b class="color-red">*</b> 手机号码</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入管理员手机号码" v-model="form.mbl"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">邮箱</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入管理员邮箱账号" v-model="form.email"/>
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
      form: {
        name: '',
        regId: '',
        pwd: '',
        mbl: '',
        email: '',
        avatar: '',
        role: '',
        status: 0,
        mchId: ''
      }
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    onSave () {
      this.cfg.ok()
    }
  }
}
</script>
<style lang="less" scoped>
</style>
