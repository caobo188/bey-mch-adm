<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <form action="">
        <div class="form-item">
          <label class="form-label">分组名称</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入分组名称"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">分组描述</label>
          <div class="input-block">
            <textarea placeholder="请输入分组描述，最少10个字符"></textarea>
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
