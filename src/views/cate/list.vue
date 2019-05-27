<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>分类名称</label>
          <input type="text" placeholder="请填写分类名称"/>
        </div>
        <div class="inline-block">
          <label>分类级别</label>
          <select>
            <option value="">全部</option>
            <option value="">一级分类</option>
            <option value="">一级分类</option>
            <option value="">三级分类</option>
          </select>
        </div>
        <div class="inline-block">
          <button type="button" class="btn" @click="onFresh">搜 索</button>
          <button type="button" class="btn btn-primary" @click="onAdd">添 加</button>
        </div>
      </div>
    </div>
    <div class="page-content">
      <table>
        <thead>
          <tr>
            <th>分类名称</th>
            <th>分类编号</th>
            <th>分类级别</th>
            <th>下级数量</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="javascript: void(0)" @click="onDetail">卡券</a></td>
            <td>01</td>
            <td>一级</td>
            <td>5</td>
            <td>2018-04-09 15:44:01</td>
            <td>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onDele">删除</a>
            </td>
          </tr>
          <tr>
            <td><a href="javascript: void(0)" @click="onDetail">卡券/加油卡</a></td>
            <td>0101</td>
            <td>二级</td>
            <td>15</td>
            <td>2018-04-09 15:44:01</td>
            <td>
              <a href="javascript: void(0)" @click="onEdit" class="margin-r-15">编辑</a>
              <a href="javascript: void(0)" @click="onDele">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CateList',
  data () {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
        obyCreTime: 2,
        nameLK: '',
        num: '',
        mchId: ''
      }
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    onAdd () {
      this.$layer.open('cateAdd', '添加商品分类', {}, () => {
        this.$toast('添加成功')
      })
    },
    onDetail (i) {
      this.$layer.open('cateDetail', '分类详情', {}, () => {
      })
    },
    onEdit (i) {
      this.$layer.open('cateEdit', '编辑分类', {}, () => {
        this.$toast('编辑成功')
      })
    },
    // 搜素
    onFresh  () {
    },
    onDele (i) {
    }
  }
}
</script>
<style lang="less" scoped>
</style>
