<template>
  <div>
    <div class="page-head">
      <div class="inline-block">
        <label>物流公司</label>
        <input type="text" placeholder="请填写物流公司"/>
      </div>
      <div class="inline-block">
        <button type="button" class="btn">搜 索</button>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th>物流公司</th>
            <th>配送描述</th>
            <th>是否启用</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>顺丰快递</td>
            <td>首重为5元/KG，续重为5元/KG。</td>
            <td>
              <label class="switch-label">
                <input type="checkbox" class="switch">
              </label>
            </td>
          </tr>
          <tr>
            <td>圆通快递</td>
            <td>首重为5元/KG，续重为5元/KG。</td>
            <td>
              <label class="switch-label">
                <input type="checkbox" class="switch" checked>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExpList',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  },
  beforeCreate () {
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
</style>
