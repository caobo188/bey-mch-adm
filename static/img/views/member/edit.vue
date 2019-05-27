<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <form action="">
        <div class="form-item">
          <label class="form-label">品牌名称</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入品牌名称"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">LOGO</label>
          <div class="input-block">
            <Upload></Upload>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">品牌类型</label>
          <div class="input-inline">
            <select>
              <option value="">一级分类</option>
            </select>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label"></label>
          <div class="input-block">
            <button type="button" class="btn" @click="onSave">提 交</button>
            <button type="button" class="btn btn-primary" @click="cfg.close">取 消</button>
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
