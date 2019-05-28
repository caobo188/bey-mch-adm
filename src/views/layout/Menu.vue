<template>
  <div class="hsy-side">
    <div class="hsy-side-scroll">
      <div class="hsy-logo">
        <p><img src="../../../static/img/logo.jpg" alt="" /></p>
        <span>京城商户平台</span>
      </div>
      <ul class="hsy-nav-tree">
        <li class="hsy-nav-item"  v-for="(menu, idx) in list" :key="menu.title">
          <a href="javascript:;" @click="onMenu(menu, idx)" :class="menu.active ? 'active' : '' ">
            <span>{{menu.title}}</span>
            <span class="more"></span>
          </a>
          <dl class="hsy-nav-child" v-show="menu.active">
            <dd v-for="item in menu.subs" :key="item.title">
              <router-link :to="item.href">{{item.title}}</router-link>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      list: [{
        title: '订单管理',
        active: false,
        subs: [{
          title: '订单列表',
          href: '/bill/list'
        },
        {
          title: '待发货订单',
          href: '/undelive/list'
        },
        {
          title: '退款订单',
          href: '/refund/list'
        },
        {
          title: '交易物流',
          href: '/logistics/list'
        }]
      },
      {
        title: '商品管理',
        active: false,
        subs: [{
          title: '品牌管理',
          href: '/brand/list'
        },
        {
          title: '添加商品',
          href: '/goods/add'
        },
        {
          title: '商品列表',
          href: '/goods/list'
        },
        {
          title: '仓库商品',
          href: '/ware/list'
        },
        {
          title: '商品评价',
          href: '/eva/list'
        }]
      },
      {
        title: '物流管理',
        active: false,
        subs: [{
          title: '快递公司',
          href: '/exp/list'
        },
        {
          title: '快递模板',
          href: '/exp/tpl'
        }]
      },
      {
        title: '客户服务',
        active: false,
        subs: [{
          title: '售后管理',
          href: '/trade/list'
        },
        {
          title: '投诉列表',
          href: '/complain/list'
        },
        {
          title: '咨询回复',
          href: '/reply/list'
        },
        {
          title: '建议留言',
          href: '/suggest/list'
        }]
      },
      {
        title: '数据统计',
        active: false,
        subs: [{
          title: '交易统计',
          href: '/sum/trade'
        },
        {
          title: '财务统计',
          href: '/sum/finance'
        }]
      },
      {
        title: '营销工具',
        active: false,
        subs: [{
          title: '工具列表',
          href: '/tool/list'
        },
        {
          title: '营销历史',
          href: '/market/list'
        }]
      },
      {
        title: '平台数据',
        active: false,
        subs: [{
          title: '平台设置',
          href: '/plat/set'
        }]
      },
      {
        title: '系统管理',
        active: false,
        subs: [{
          title: '账号管理',
          href: '/adm/list'
        }]
      }]
    }
  },
  methods: {
    onMenu (item, idx) {
      if (item.active) {
        item.active = false
      } else {
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].active = false
        }
        item.active = true
      }
      sessionStorage.setItem('menuIdx', idx)
    }
  },
  created () {
    let idx = sessionStorage.getItem('menuIdx')
    idx && (this.list[idx].active = true)
  }
}
</script>
<style scoped lang="less">
@import '../../styles/common.less';
.hsy-side{
  width: 200px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 4;
  background-color: #20222A;
  color: #fff;
  .hsy-logo{
    padding: 25px 0 25px 45px;
    background: #20222A;
    img{
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: #fff;
    }
    span{
      color: rgba(255, 255, 255, 0.8);
      height: 50px;
      line-height: 50px;
      font-size:16px;
    }
  }
  .hsy-nav-tree{
    width: 200px;
    color: #fff;
    border-radius: 2px;
    .hsy-nav-item{
      display: block;
      width: 100%;
      .hsy-nav-child{
        display: block;
        background-color: #282B33;
        position: relative;
        z-index: 0;
        top: 0;
        border: none;
        box-shadow: none;
      }
    }
    .hsy-nav-item{
      >a{
        display: inline-block;
        width:100%;
        padding: 0 30px 0 41px;
        height: 45px;
        line-height: 45px;
        color:#BFC0C2;
        transition: all .3s;
        background: #393D49;
        border-left: 4px solid transparent;
        position: relative;
        &:hover{
          background: #4E5465;
          color: #fff;
          border-left: 4px solid #1ab394;
        }
        span.more{
          position: absolute;
          top: 20px;
          right: 30px;
          content: '';
          width: 0;
          height: 0;
          border-style: solid dashed dashed;
          border-color: #fff transparent transparent;
          overflow: hidden;
          cursor: pointer;
          transition: all .2s;
          border-width: 6px;
          border-top-color: rgba(255,255,255,.7);
        }
        &.active{
          color: #fff;
          span.more{
            top: 12px;
            border-color: transparent transparent #fff;
          }
        }
      }
      dl{
        a{
          height: 40px;
          line-height: 40px;
          background: #282B33;
          display: inline-block;
          width:100%;
          padding: 0 30px 0 45px;
          color:#BFC0C2;
          transition: all .3s;
          &:hover{
            background: #282B33;
            color: #fff;
          }
          &.active{
            background: #1ab394;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
