<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="detail-item">
        <table>
          <thead>
            <tr>
              <th>投票人</th>
              <th>投票名称</th>
              <th>已投</th>
              <th>创建时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, idx) in recordList" :key="idx">
              <td>{{record.uid}}</td>
              <td>{{record.vid}}</td>
              <td>{{record.elects}}</td>
              <td>{{record.creTime | format}}</td>
            </tr>
          </tbody>
        </table>
        <Pager ref="pager" src="getRecordList"></Pager>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cfg', 'idx'],
  data () {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
        obyCreTime: 2
      },
      recordList: []
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    getRecordList () {
      this.$refs.pager.getList(this.query, rst => {
        this.recordList = rst.data || []
      })
    },
  }
}
</script>
<style lang="less" scoped>
</style>
