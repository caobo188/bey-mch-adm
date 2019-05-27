<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
          <div class="detail-item-title">商圈名称</div>
          <div class="detail-block">商业步行街</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">商圈编号</div>
          <div class="detail-block">1146563203203</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">所在地区</div>
          <div class="detail-block">广东省深圳市罗湖区老街步行街</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">分类描述</div>
          <div class="detail-block">成立于1995年，最早商业步行街</div>
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
