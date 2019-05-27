<template>
  <div class="page-content">
    <form action="">
      <div class="form-item">
        <label class="form-label"><b class="color-red">*</b> 商户名称</label>
        <div class="inline-block">
          <input type="text" placeholder="请输入商户名称"/>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label"><b class="color-red">*</b> 联系人</label>
        <div class="inline-block">
          <input type="text" placeholder="请输入联系人姓名"/>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label"><b class="color-red">*</b> 联系人手机号</label>
        <div class="inline-block">
          <input type="text" placeholder="请输入联系人手机号"/>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label"><b class="color-red">*</b> 客服热线</label>
        <div class="inline-block">
          <input type="text" placeholder="请输入客服热线"/>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label">客服邮箱</label>
        <div class="inline-block">
          <input type="text" placeholder="请输入客服邮箱"/>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label"><b class="color-red">*</b> 商户描述</label>
        <div class="input-block">
          <textarea placeholder="请输入商户描述，不少于10字"></textarea>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label"><b class="color-red">*</b> 主营业务</label>
        <div class="input-block">
          <input type="text" placeholder="请输入主营业务"/>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label"><b class="color-red">*</b> 所在地区</label>
        <div class="input-block">
          <select>
            <option value="">请选择省</option>
          </select>
          <select>
            <option value="">请选择市</option>
          </select>
          <select>
            <option value="">请选择区/县</option>
          </select>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label">详细地址</label>
        <div class="input-block">
          <input type="text" placeholder="请输入详细地址"/>
        </div>
      </div>
      <div class="form-item">
        <label class="form-label"></label>
        <div class="input-block">
          <button type="button" class="btn">提 交</button>
          <button type="button" class="btn btn-primary" @click="onClose">取 消</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'form',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onClose () {
      window.history.back()
    }
  },
  beforeCreate () {
  },
  created () {
  }
}
</script>
<style lang="less"></style>
