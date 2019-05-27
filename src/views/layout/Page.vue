<template>
  <div class="page">
    <div class="container" @mouseup="onMouseUp">
      <Menu></Menu>
      <div class="page-main">
        <Header></Header>
        <div class="pagetabs" id="LAY_app_tabs">
          <div class="tabs-control down-control">
            <ul class="admin-tabs-select">
              <li class="">
                <a href="javascript:;">操作</a>
                <dl class="">
                  <dd>
                    <a href="javascript:;" @click="onClose(0)">关闭当前页</a>
                  </dd>
                  <dd>
                    <a href="javascript:;" @click="onClose(1)">关闭其它页</a>
                  </dd>
                  <dd>
                    <a href="javascript:;" @click="onClose(9)">关闭全部页</a>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
          <div class="layout-tab" ref="FraWidthInfo">
            <ul class="layout-tab-title" id="LAY_app_tabsheader" :style="{left: drag.left}" ref="widthInfo" @mousemove="onDrag" @mousedown="onMouseDown">
              <li :class="cur == tab.name ? 'tab-this' : ''" v-for="(tab,i) in tabs" :key="tab.name" @click="onView(i)"><span>{{tab.title}}</span><i v-show="tab.name != 'Index'" class="tab-close" @click.stop="onDel(i)">&times;</i></li>
            </ul>
          </div>
        </div>
        <div class="page-body">
          <keep-alive :include="caches">
            <router-view/>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      index: 'Index',
      cur: 'Index',
      drag: {
        flag: false,
        startMouse: '',
        nowMouse: '',
        left: 0
      },
      tabs: [{
        name: 'Index',
        path: '/index',
        title: '首    页'
      }],
      caches: ['Index']
    }
  },
  created () {
  },
  mounted () {
  },
  beforeRouteUpdate (to, from, next) {
    this.addTab(to)
    next()
  },
  methods: {
    onMouseDown (e) {
      let tabLeft = parseInt(window.getComputedStyle(this.$refs.widthInfo).left)
      this.drag.flag = true
      this.drag.startMouse = e.clientX - tabLeft
    },
    onDrag (e) {
      if (this.drag.flag) {
        let tabWidth = parseInt(window.getComputedStyle(this.$refs.widthInfo).width)
        let tabLeft = parseInt(window.getComputedStyle(this.$refs.widthInfo).left)
        let tabFraWth = parseInt(window.getComputedStyle(this.$refs.FraWidthInfo).width)
        let diff = e.clientX - this.drag.startMouse
        if (diff <= 0 && diff >= (tabFraWth - tabWidth)) {
          this.drag.left = diff + 'px'
        } else if (diff >= (tabFraWth - tabWidth) && tabLeft < 0) {
          this.drag.left = 0
        }
      }
    },
    init () {
      this.addTab(this.$route)
    },
    onMouseUp () {
      this.drag.flag = false
    },
    addTab (route) {
      let exist
      this.tabs.forEach((one) => {
        if (one.name === route.name) {
          exist = one
        }
      })
      if (!exist) {
        exist = {
          name: route.name,
          title: route.meta.title,
          path: route.path
        }
        if (route.meta.title !== '对账单汇总') {
          this.tabs.push(exist)
        }
        this.caches.push(route.name)
      }
      this.cur = exist.name
    },
    onClose (type) {
      // 0: 关闭当前页面; 1:关闭非当页面; 9:全部关闭
      let tabs = []
      let caches = []
      let curTab = this.tabs[0]
      this.tabs.forEach((tab, i) => {
        if (this.index === tab.name) {
          // 无论如何, 首页不能删除
          tabs.push(tab)
          caches.push(tab.name)
        } else if (type === 0) {
          // 0: 关闭当前页面, 保留其他页面
          if (this.cur !== tab.name) {
            tabs.push(tab)
            caches.push(tab.name)
          } else {
            curTab = this.tabs[i - 1]
          }
        } else if (type === 1) {
          // 1:关闭非当页面, 只保留当前页
          if (this.cur === tab.name) {
            tabs.push(tab)
            caches.push(tab.name)
            curTab = tab
          }
        }
      })
      this.cur = curTab.name
      this.tabs = tabs
      this.caches = caches
      this.showTab(curTab)
    },
    showTab (tab) {
      this.cur = tab.name
      this.$router.push({
        name: tab.name,
        query: tab.query || {},
        params: tab.params || {}
      })
    },
    onView (i) {
      let tab = this.tabs[i]
      this.showTab(tab)
    },
    onDel (i) {
      this.caches.splice(i, 1)
      this.tabs.splice(i, 1)
      if (i < this.tabs.length) {
        this.onView(i)
      } else if (i > 0) {
        i = i - 1
        this.onView(i)
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../styles/common.less';
.page-main{
  padding-left: 200px;
}
.page-body{
  width:100%;
  padding: 60px 0 15px 15px;
}
.pagetabs{
  height: 44px;
  line-height: 44px;
  padding: 0 80px 0 0;
  background: #fff;
  transition: all .3s;
  position: absolute;
  top: 50px;
  right: 0;
  left: 200px;
  .layout-tab{
    margin: 0;
    overflow: hidden;
    height: 100%;
    .layout-tab-title{
      display: inline-block;
      border: none;
      position: relative;
      left: 0;
      top: 0;
      white-space: nowrap;
      font-size: 0;
      transition: all .2s;
      font-size: 13px;
      height: 44px;
      -webkit-user-select: none;
      user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      -ms-user-select: none;
      li{
        width:158px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        padding-left:18px;
        padding-right: 22px;
        overflow: hidden;
        display: inline-block;
        position: relative;
        cursor: pointer;
        font-size: 14px;
        border-right: 1px solid #E4E5E9;
        color: #303133;
        font-weight: bold;
        &.tab-this{
          color: #303133;
          background-color: #F0F1F5;
        }
        .tab-close{
          position: absolute;
          right: 8px;
          top: 50%;
          margin: -7px 0 0;
          width: 16px;
          height: 16px;
          line-height: 16px;
          border-radius: 50%;
          font-size: 20px;
        }
      }
      li.normal:hover{
        background:rgba(87,96,103,0.2026);
      }
      li.normal:hover .tab-close{
        color:#FFFFFF !important;
      }
    }
  }
  .tabs-control{
    position: absolute;
    top: 0;
    width: 48px;
    height: 100%;
    text-align: center;
    cursor: pointer;
    transition: all .3s;
    border-left: 1px solid rgba(228,229,233,.12);
    &.prev-control{
      left: 0;
      border-left: none;
      border-right: 1px solid #CCCCCC;
    }
    &.next-control{
      right: 80px;
    }
    &.down-control{
      right: 0;
      width: 80px;
      ul.admin-tabs-select{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        background: 0 0;
        border-left: 1px solid #E4E5E9;
        li{
          line-height: 40px;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          width: 100%;
          &:hover{
            dl{
              display: block;
            }
          }
          a{
            padding: 0;
            color: #303133;;
          }
          .operation{
            color:#FFFFFF;
          }
          dl{
            display: none;
            position: absolute;
            min-width: 100%;
            right: 0;
            left: auto;
            background: #fff;
            white-space: nowrap;
            top: 40px;
            line-height: 36px;
            padding: 5px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,.12);
            border: 1px solid #d2d2d2;
            z-index: 100;
            border-radius: 2px;
            dd{
              position: relative;
              a{
                color: @textColor;
                display: inline-block;
                height: 100%;
                padding: 0 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
