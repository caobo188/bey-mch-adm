<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <form action="">
        <div class="form-item">
          <label class="form-label"><b class="color-red">*</b> 分类名称</label>
          <div class="input-inline">
            <input type="text" placeholder="请输入分类名称"/>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label"><b class="color-red">*</b> 分类级别</label>
          <div class="input-block">
            <label class="check-label"><input type="radio" name="cate-type" v-model="form.type" value="1"/> 一级分类</label>
            <label class="check-label"><input type="radio" name="cate-type" v-model="form.type" value="2"/> 二级分类</label>
            <label class="check-label"><input type="radio" name="cate-type" v-model="form.type" value="3"/> 三级分类</label>
          </div>
        </div>
        <div class="form-item product-cate" v-show="form.type != 1">
          <label class="form-label"><b class="color-red">*</b> 上级分类</label>
          <div class="input-inline" v-show="form.type == 2 || form.type == 3">
            <select>
              <option value="">请选择</option>
            </select>
          </div>
          <div class="input-inline" v-show="form.type == 3">
            <select>
              <option value="">请选择</option>
            </select>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label"><b class="color-red">*</b> 关联属性</label>
          <div class="input-block">
            <label class="check-label"><input type="checkbox" name="prop"/> 大小</label>
            <label class="check-label"><input type="checkbox" name="prop"/> 颜色</label>
            <label class="check-label"><input type="checkbox" name="prop"/> 尺码</label>
            <label class="check-label"><input type="checkbox" name="prop"/> 面额</label>
          </div>
        </div>
        <div class="form-item">
          <label class="form-label">分类描述</label>
          <div class="input-block">
            <textarea placeholder="请输入分类描述，最少10个字符"></textarea>
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
      form: {
        type: 1
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
.product-cate{
  .input-inline{
    width: 200px;
  }
}
</style>
