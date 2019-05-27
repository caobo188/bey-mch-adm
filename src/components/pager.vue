<template>
<div class="pager" v-show="total > 0">
  <span class="total">共<i>{{total}}</i>条</span>
  <a href="javascript: void(0)" @click="onPrev">上一页</a>
  <a href="javascript: void(0)" @click="onFirst" v-show="numList.indexOf(1) == -1">1</a>
  <a href="javascript: void(0)" :class="item == pageNum ? 'pager-curr' : '' " v-for="(item, idx) in numList" @click="onPage(item)" :key="idx">{{item}}</a>
  <a href="javascript: void(0)" @click="onNext">下一页</a>
  <span class="pager-limits">
    <select v-model="pageSize">
      <option value="10">10条/页</option>
      <option value="20">20条/页</option>
      <option value="30">30条/页</option>
      <option value="40">40条/页</option>
      <option value="50">50条/页</option>
    </select>
  </span>
  <span class="pager_total">
    <label>到第</label>
    <input type="number" v-model="jumpPage" class="pager-skip" min="1" onkeyup="this.value=this.value.replace(/\D/, '');"/>
    <label>页</label>
    <button type="button" @click="onJump">确定</button>
  </span>
</div>
</template>
<script>
export default {
  props: {
    src: null,
    autoload: true,
    scrollTo: true
  },
  data () {
    return {
      numList: [],
      jumpPage: '',
      //
      pageSize: 10,
      pageNum: 1,
      //
      pages: 0,
      total: '',
      //
      $_query: null,
      $_okcb: null,
      $_fbcb: null
    }
  },
  beforeCreate () {
  },
  mounted () {
    let auto = String(this.autoload)
    if (auto !== '0' && auto !== 'false') {
      let fn = this.$parent[this.src]
      if (fn) {
        fn.call(this.$parent, 'pager')
      }
    }
  },
  computed: {
  },
  methods: {
    getList (q, cb, fb) {
      this.$_query = q || {}
      this.$_okcb = cb
      this.$_fbcb = fb
      //
      this.loadData()
    },
    getPageNum (num) {
      this.pageNum = num
    },
    loadData () {
      let fn = window.http[this.src]
      if (fn) {
        this.$_query.pageNum = this.pageNum
        this.$_query.pageSize = this.pageSize
        fn(this.$_query, rst => {
          if (rst.total !== '-1') {
            this.total = rst.total
            this.pages = rst.pages
          }
          this.buildNumList()
          this.$_okcb && this.$_okcb(rst)
          // 是否滚动到顶部
          let scroll = String(this.scrollTo)
          if (scroll !== '0' && scroll !== 'false') {
            window.scrollTo(0, 0)
          }
        }, this.$_fbcb)
      }
    },
    buildNumList () {
      let pages = this.pages
      let cur = this.pageNum
      let numList = []
      // 页码连续数量
      let groups = 2
      let showPages = groups * 2 + 1
      if (showPages >= pages) {
        for (let i = 0; i < pages; i++) {
          numList.push(i + 1)
        }
      } else {
        let start = groups >= cur ? 1 : cur - groups
        let end = start === 1 ? showPages : (cur - 0 + groups > pages ? pages : cur - 0 + groups)
        // 前省略
        if (start === 2) {
          numList.push(1)
        } else if (start > 2) {
          numList.push('...')
        }
        //
        for (let i = start; i <= end; i++) {
          numList.push(i)
        }
        // 后省略
        if (end < pages) {
          if (end === (pages - 2)) {
            numList.push(pages - 1)
          } else {
            numList.push('...')
          }
          numList.push(pages)
        }
      }
      this.numList = numList
    },
    // 选中某一页
    onPage (num) {
      if (num !== '...' && this.pageNum !== num) {
        this.pageNum = num
        this.loadData()
      }
    },
    // 上一页
    onPrev () {
      if (this.pageNum > 1) {
        this.pageNum--
        this.loadData()
      }
    },
    // 下一页
    onNext () {
      if (this.pageNum < this.pages) {
        this.pageNum++
        this.loadData()
      }
    },
    // 首页
    onFirst () {
      this.pageNum = 1
      this.loadData()
    },
    // 跳转
    onJump () {
      if (this.jumpPage !== '...' && this.jumpPage && this.jumpPage - 0 <= this.pages - 0) {
        this.pageNum = this.jumpPage
        this.loadData()
      }
    }
  },
  watch: {
    pageSize (val) {
      this.pageNum = 1
      this.loadData()
    }
  }
}
</script>
<style lang="less" scoped>
.pager{
  vertical-align: middle;
  margin-top: 15px;
  font-size: 0;
  text-align: center;
  .total{
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    height: 30px;
    line-height: 33px;
    margin-right: 5px;
    i{
      margin: 0 3px;
    }
  }
  a, .pager-spr, button, .pager-limits, .pager_total{
    display: inline-block;
    vertical-align: middle;
    margin: 0 3px 0;
    background: #fff;
    font-size: 12px;
    color: #333;
    border: 1px solid #DEDEDE;
    height: 30px;
    line-height: 30px;
    padding: 0 13px;
    border-radius: 3px;
  }
  .pager-curr{
    color: #fff;
    background: #4B81EB;
    border: 1px solid #4B81EB;
    cursor: text;
  }
  .pager-spr{
    color: #999;
    border: 0;
    background: none;
  }
  a{
    &.pager-disabled, &.pager-disabled:hover{
      color: #d2d2d2!important;
      cursor: not-allowed!important;
    }
  }
  .pager-limits{
    padding: 0 6px;
    margin: 0 3px 6px;
    background: none;
    border: 0;
    select{
      height: 30px;
      line-height: 30px;
      width: 80px;
      margin-top: 3px;
    }
  }
  .pager_total{
    padding: 0 0;
    margin: 0;
    background: none;
    border: 0;
    label{
      vertical-align: baseline;
      display: inline-block;
      font-size: 12px;
    }
    .pager-skip{
      height: 30px;
      line-height: 30px;
      width: 60px;
      border-radius: 2px;
      margin: 0 5px;
      padding: 0 5px;
      border: 1px solid #ccc;
      background-color: #fff;
      padding-right: 0;
    }
    button{
      outline: 0;
      margin-bottom: 2px;
      cursor: pointer;
    }
  }
}
</style>
