import Vue from 'vue'
import Router from 'vue-router'

import hump from '@/libs/hump'

// 特殊页面，主要包含菜单，导航，和内容区域
import Page from '@/views/layout/Page'

// 自由路由，优先级高于页面路由
let routes = [
  {path: '/login', name: 'login', meta: {title: '登录'}, component: resolve => { require(['@/views/home/login'], resolve) }},
  {path: '/reset', name: 'reset', meta: {title: '重置'}, component: resolve => { require(['@/views/home/reset'], resolve) }},
  // 布局
  {path: '/header', name: 'Header', meta: {title: '头部'}, component: resolve => { require(['@/views/layout/Header'], resolve) }},
  {path: '/footer', name: 'Footer', meta: {title: '底部'}, component: resolve => { require(['@/views/layout/Footer'], resolve) }},
  {path: '/menu', name: 'Menu', meta: {title: '菜单'}, component: resolve => { require(['@/views/layout/Menu'], resolve) }}
]

// 页面路由
let pages = [
  // 首页
  {path: '/index', meta: {title: '首页'}, component: resolve => { require(['@/views/home/index'], resolve) }},
  // 平台数据
  {path: '/business/list', meta: {title: '商圈列表'}, component: resolve => { require(['@/views/business/list'], com => { com.default.name = hump('/business/list'); resolve(com) }) }},
  {path: '/plat/set', meta: {title: '平台设置'}, component: resolve => { require(['@/views/plat/set'], com => { com.default.name = hump('/plat/set'); resolve(com) }) }},
  {path: '/programa/list', meta: {title: '栏目列表'}, component: resolve => { require(['@/views/programa/list'], com => { com.default.name = hump('/programa/list'); resolve(com) }) }},
  {path: '/brand/list', meta: {title: '品牌列表'}, component: resolve => { require(['@/views/brand/list'], com => { com.default.name = hump('/brand/list'); resolve(com) }) }},
  {path: '/logistics/list', meta: {title: '物流列表'}, component: resolve => { require(['@/views/logistics/list'], com => { com.default.name = hump('/logistics/list'); resolve(com) }) }},
  {path: '/trade/list', meta: {title: '售后管理'}, component: resolve => { require(['@/views/trade/list'], com => { com.default.name = hump('/trade/list'); resolve(com) }) }},
  // 交易统计
  {path: '/sum/trade', meta: {title: '交易统计'}, component: resolve => { require(['@/views/sum/trade'], com => { com.default.name = hump('/sum/trade'); resolve(com) }) }},
  {path: '/sum/finance', meta: {title: '财务统计'}, component: resolve => { require(['@/views/sum/finance'], com => { com.default.name = hump('/sum/finance'); resolve(com) }) }},
  // 商品管理
  {path: '/goods/list', meta: {title: '商品列表'}, component: resolve => { require(['@/views/goods/list'], com => { com.default.name = hump('/goods/list'); resolve(com) }) }},
  {path: '/goods/add', meta: {title: '添加商品'}, component: resolve => { require(['@/views/goods/add'], com => { com.default.name = hump('/goods/add'); resolve(com) }) }},
  {path: '/goods/edit', meta: {title: '编辑商品'}, component: resolve => { require(['@/views/goods/edit'], com => { com.default.name = hump('/goods/edit'); resolve(com) }) }},
  {path: '/ware/list', meta: {title: '仓库商品'}, component: resolve => { require(['@/views/ware/list'], com => { com.default.name = hump('/ware/list'); resolve(com) }) }},
  {path: '/cate/list', meta: {title: '商品分类'}, component: resolve => { require(['@/views/cate/list'], com => { com.default.name = hump('/cate/list'); resolve(com) }) }},
  {path: '/group/list', meta: {title: '商品分组'}, component: resolve => { require(['@/views/group/list'], com => { com.default.name = hump('/group/list'); resolve(com) }) }},
  {path: '/eva/list', meta: {title: '商品评价'}, component: resolve => { require(['@/views/eva/list'], com => { com.default.name = hump('/eva/list'); resolve(com) }) }},
  // 订单管理
  {path: '/bill/list', meta: {title: '订单列表'}, component: resolve => { require(['@/views/bill/list'], com => { com.default.name = hump('/bill/list'); resolve(com) }) }},
  {path: '/undelive/list', meta: {title: '待发货订单'}, component: resolve => { require(['@/views/undelive/list'], com => { com.default.name = hump('/undelive/list'); resolve(com) }) }},
  {path: '/refund/list', meta: {title: '退款订单'}, component: resolve => { require(['@/views/refund/list'], com => { com.default.name = hump('/refund/list'); resolve(com) }) }},
  // 物流管理
  {path: '/exp/list', meta: {title: '快递公司'}, component: resolve => { require(['@/views/exp/list'], com => { com.default.name = hump('/exp/list'); resolve(com) }) }},
  {path: '/exp/tpl', meta: {title: '快递模板'}, component: resolve => { require(['@/views/exp/tpl'], com => { com.default.name = hump('/exp/tpl'); resolve(com) }) }},
  // 粉丝互动
  {path: '/fans/bill/list', meta: {title: '订单查询'}, component: resolve => { require(['@/views/fans/bill/list'], com => { com.default.name = hump('/fans/bill/list'); resolve(com) }) }},
  {path: '/fans/refund/list', meta: {title: '退货订单'}, component: resolve => { require(['@/views/fans/refund/list'], com => { com.default.name = hump('/fans/refund/list'); resolve(com) }) }},
  // 会员管理
  {path: '/member/list', meta: {title: '会员列表'}, component: resolve => { require(['@/views/member/list'], com => { com.default.name = hump('/member/list'); resolve(com) }) }},
  // 营销工具
  {path: '/tool/list', meta: {title: '工具列表'}, component: resolve => { require(['@/views/tool/list'], com => { com.default.name = hump('/tool/list'); resolve(com) }) }},
  {path: '/market/list', meta: {title: '营销历史'}, component: resolve => { require(['@/views/market/list'], com => { com.default.name = hump('/market/list'); resolve(com) }) }},
  // 报表统计
  {path: '/report/bill/list', meta: {title: '订单查询'}, component: resolve => { require(['@/views/report/bill/list'], com => { com.default.name = hump('/report/bill/list'); resolve(com) }) }},
  {path: '/report/refund/list', meta: {title: '退款订单'}, component: resolve => { require(['@/views/report/refund/list'], com => { com.default.name = hump('/report/refund/list'); resolve(com) }) }},
  // 系统管理
  {path: '/adm/list', meta: {title: '账号管理'}, component: resolve => { require(['@/views/adm/list'], com => { com.default.name = hump('/adm/list'); resolve(com) }) }},
  {path: '/suggest/list', meta: {title: '建议留言'}, component: resolve => { require(['@/views/suggest/list'], com => { com.default.name = hump('/suggest/list'); resolve(com) }) }},
  {path: '/message/list', meta: {title: '系统消息'}, component: resolve => { require(['@/views/message/list'], com => { com.default.name = hump('/message/list'); resolve(com) }) }},
  {path: '/complain/list', meta: {title: '投诉列表'}, component: resolve => { require(['@/views/complain/list'], com => { com.default.name = hump('/complain/list'); resolve(com) }) }},
  {path: '/reply/list', meta: {title: '咨询回复'}, component: resolve => { require(['@/views/reply/list'], com => { com.default.name = hump('/reply/list'); resolve(com) }) }},
  {path: '/', redirect: '/index'}
]

// 组件列表
let components = [
  // 全局组件
  {name: 'Date', component: resolve => { require(['@/components/date'], resolve) }},
  {name: 'Upload', component: resolve => { require(['@/components/upload'], resolve) }},
  {name: 'Pager', component: resolve => { require(['@/components/pager'], resolve) }},
  {name: 'Areas', component: resolve => { require(['@/components/areas'], resolve) }},
  {name: 'Time', component: resolve => { require(['@/components/time'], resolve) }},
  // 商圈管理
  {name: 'businessAdd', component: resolve => { require(['@/views/business/add'], resolve) }},
  {name: 'businessDetail', component: resolve => { require(['@/views/business/detail'], resolve) }},
  {name: 'businessEdit', component: resolve => { require(['@/views/business/edit'], resolve) }},
  // 品牌管理
  {name: 'brandAdd', component: resolve => { require(['@/views/brand/add'], resolve) }},
  {name: 'brandDetail', component: resolve => { require(['@/views/brand/detail'], resolve) }},
  {name: 'brandEdit', component: resolve => { require(['@/views/brand/edit'], resolve) }},
  // 物流管理
  {name: 'logisticsDetail', component: resolve => { require(['@/views/logistics/detail'], resolve) }},
  // 商品管理
  {name: 'goodsDetail', component: resolve => { require(['@/views/goods/detail'], resolve) }},
  // 商品评价
  {name: 'evaDetail', component: resolve => { require(['@/views/eva/detail'], resolve) }},
  // 商品分类
  {name: 'cateAdd', component: resolve => { require(['@/views/cate/add'], resolve) }},
  {name: 'cateDetail', component: resolve => { require(['@/views/cate/detail'], resolve) }},
  {name: 'cateEdit', component: resolve => { require(['@/views/cate/edit'], resolve) }},
  // 商品分组
  {name: 'groupAdd', component: resolve => { require(['@/views/group/add'], resolve) }},
  {name: 'groupEdit', component: resolve => { require(['@/views/group/edit'], resolve) }},
  // 订单查询
  {name: 'billDetail', component: resolve => { require(['@/views/bill/detail'], resolve) }},
  // 管理员
  {name: 'admAdd', component: resolve => { require(['@/views/adm/add'], resolve) }},
  {name: 'admEdit', component: resolve => { require(['@/views/adm/edit'], resolve) }},
  // 退款订单
  {name: 'refundDetail', component: resolve => { require(['@/views/refund/detail'], resolve) }}
]

// 组件
components.forEach(r => {
  Vue.component(r.name, r.component)
})

// 注册路由
routes.forEach(r => {
  Vue.component(r.name, r.component)
})
// 页面
pages.forEach(r => {
  r.name = hump(r.path)
  Vue.component(r.name, r.component)
})

// 放在最后
routes.push({path: '/*', component: Page, children: pages})

// 创建路由管理
Vue.use(Router)
const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  // console.log('form=' + from.path + ', to=' + to.path)
  document.title = to.meta.title
  next()
})

export default router
