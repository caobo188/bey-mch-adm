<template>
  <div>
    <div class="page-head">
      <div>
        <div class="inline-block">
          <label>品牌名称</label>
          <input type="text" placeholder="请填写品牌名称"/>
        </div>
        <div class="inline-block">
          <label>品牌类型</label>
          <select>
            <option value="">全部</option>
            <option value="">国内品牌</option>
            <option value="">国外品牌</option>
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
            <th>品牌名称</th>
            <th>LOGO</th>
            <th>品牌类型</th>
            <th>启用状态</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>中石化</td>
            <td><img src="../../../static/img/brand.jpg" class="brand-img" alt="" /></td>
            <td>国内品牌</td>
            <td>已启用</td>
            <td>2018-04-09 15:44:01</td>
            <td>
              <a href="javascript: void(0)" @click="onDetail" class="margin-r-15">查看</a>
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
  name: 'BrandList',
  data () {
    return {
      query: {
        pageNum: 1,
        pageSize: 10,
        obyCreTime: 2,
        nameLK: '',
        num: '',
        mchId: ''
      },
      lineList: []
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    onAdd () {
      this.$layer.open('brandAdd', '添加品牌', {}, () => {
        this.$toast('添加成功')
      })
    },
    onDetail (i) {
      this.$layer.open('brandDetail', '品牌详情', {}, () => {
      })
    },
    onEdit (i) {
      this.$layer.open('brandEdit', '编辑品牌', {}, () => {
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
.brand-img{
  width: 50px;
  height: 50px;
}
</style>
