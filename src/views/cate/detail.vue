<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
          <div class="detail-item-title">分类名称</div>
          <div class="detail-block">卡券/加油卡</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">分类编号</div>
          <div class="detail-block">0101</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">分类级别</div>
          <div class="detail-block">二级分类</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">下级数量</div>
          <div class="detail-block">38</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">关联属性</div>
          <div class="detail-block">
            <span class="margin-r-15">颜色</span>
            <span class="margin-r-15">面额</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">分类描述</div>
          <div class="detail-block">整件装 上下两部分相连的服装，如连衣裙等因上装与下装相连，服装整体形态感强。</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">创建时间</div>
          <div class="detail-block">2018-04-09 15:44:01</div>
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
</style>
