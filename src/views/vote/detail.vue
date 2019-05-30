<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
        <div class="detail-item-title">品牌名称</div>
        <div class="detail-block">李宁</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">LOGO</div>
        <div class="detail-block"><img :src="imgURL()" alt="" class="brand-detail-logo"/></div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">品牌编号</div>
        <div class="detail-block">1146563203203</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">品牌类型</div>
        <div class="detail-block">国内品牌</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">品牌描述</div>
        <div class="detail-block">整件装 上下两部分相连的服装，如连衣裙等因上装与下装相连，服装整体形态感强。</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">创建时间</div>
        <div class="detail-block">2018-04-09 15:44:01</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">状态</div>
        <div class="detail-block">已启用</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">更新时间</div>
        <div class="detail-block">2018-04-09 15:44:01</div>
      </div>
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
  }
}
</script>
<style lang="less" scoped>
.brand-detail-logo{
  width: 150px;
  height: 120px;
}
</style>
