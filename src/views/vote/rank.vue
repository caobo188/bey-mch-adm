<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
        <table>
          <thead>
            <tr>
              <th>排名</th>
              <th>名称</th>
              <th>票数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rank, idx) in rankList" :key="idx">
              <td>{{idx + 1}}</td>
              <td>{{rank.title}}</td>
              <td>{{rank.count}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cfg', 'idx'],
  data () {
    return {
      rankList: []
    }
  },
  beforeCreate () {
  },
  created () {
    this.getVote()
  },
  methods: {
    getVote () {
      this.$http.voteRank({vid: this.cfg.params.id}, rst => {
        this.rankList = rst.data || []
      })
    },
  }
}
</script>
<style lang="less" scoped>
</style>
