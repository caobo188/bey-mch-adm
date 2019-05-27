// 平台类型
export function platType (val) {
  if (val === 'wex') {
    return '微信'
  } else if (val === 'ali') {
    return '支付宝'
  } else if (val === 'qq') {
    return 'QQ'
  } else if (val === 'bai') {
    return '百度'
  } else {
    return ''
  }
}

// 应用类型
export function appType (val) {
  if (val === 10) {
    return 'WEB'
  } else if (val === 11) {
    return 'WAP'
  } else if (val === 12) {
    return 'APP'
  } else if (val === 13) {
    return '公众号'
  } else if (val === 14) {
    return '小程序'
  } else if (val === 20) {
    return 'API接口'
  } else {
    return '未知'
  }
}

// 账号状态
export function admStatus (val) {
  if (val === 0) {
    return '未审核'
  } else if (val === 1) {
    return '已启用'
  } else if (val === 2) {
    return '已禁用'
  } else {
    return ''
  }
}

// 证件号类型
export function idType (val) {
  if (val === '1') {
    return '身份证'
  } else if (val === '2') {
    return '临时身份证'
  } else if (val === '3') {
    return '户口簿'
  } else if (val === '4') {
    return '护照'
  } else if (val === '5') {
    return '港澳通行证'
  } else if (val === '6') {
    return '回乡证'
  } else if (val === '7') {
    return '军人证'
  } else if (val === '8') {
    return '武警身份证'
  } else if (val === '9') {
    return '其他法定文件'
  } else {
    return '未知'
  }
}

// 设备类型
export function deviceType (val) {
  if (val === 1) {
    return '二维码'
  } else if (val === 2) {
    return '扫码器'
  } else if (val === 3) {
    return '本地网关'
  } else if (val === 4) {
    return '摄像机'
  } else {
    return '未知'
  }
}

// 设备应用场景
export function deviceScene (val) {
  if (val === 1) {
    return 'WEB'
  } else if (val === 2) {
    return '店铺'
  } else if (val === 20) {
    return '停车场'
  } else if (val === 21) {
    return '车位停车'
  } else if (val === 22) {
    return '加油站'
  } else if (val === 23) {
    return '高速收费'
  } else if (val === 24) {
    return '地铁'
  } else if (val === 25) {
    return '公交'
  } else {
    return '未知'
  }
}

// 设备运行状态
export function deviceRun (val) {
  if (val === 0) {
    return '未运行'
  } else if (val === 1) {
    return '正常运行'
  } else if (val === 2) {
    return '运行异常'
  } else if (val === 3) {
    return '维修中'
  } else {
    return ''
  }
}

// 车牌颜色
export function plateClr (val) {
  if (val === 1) {
    return '蓝底白字'
  } else if (val === 2) {
    return '绿底黑字'
  } else if (val === 3) {
    return '黄底黑字'
  } else if (val === 4) {
    return '白底黑字'
  } else if (val === 5) {
    return '黑底白字'
  } else if (val === 6) {
    return '黄绿双拼'
  } else {
    return '未知'
  }
}

// 对账状态
export function vfyState (val) {
  if (val === 0) {
    return '未对账'
  } else if (val === 1) {
    return '缺少'
  } else if (val === 2) {
    return '超出'
  } else if (val === 3) {
    return '已冲正'
  } else if (val === 9) {
    return '已对账'
  } else {
    return ''
  }
}

// 交易状态
export function tradeState (val) {
  if (!val) {
    return ''
  }
  if (val.payCfm === 0) {
    return '未确认'
  } else if (val.payCfm === 1) {
    if (val.payState === 9) {
      if (val.rfdFlag !== 0) {
        return val.rfdFlag === 1 ? '待退款' : (val.rfdFlag === 2 ? '退款中' : (val.rfdFlag === 9 ? '已退款' : ''))
      } else {
        return '已支付'
      }
    } else if (val.payState === 0) {
      return '未支付'
    }
  }
}

// 支付方式
export function payType (val) {
  if (val === 10) {
    return '微信'
  } else if (val === 11) {
    return '支付宝'
  } else if (val === 12) {
    return 'QQ钱包'
  } else if (val === 13) {
    return '京东'
  } else if (val === 14) {
    return '银联'
  } else if (val === 15) {
    return '网关支付'
  } else {
    return ''
  }
}

// 支付场景
export function payScene (val) {
  if (val === 1) {
    return '扫描支付'
  } else if (val === 2) {
    return '扫码'
  } else if (val === 3) {
    return 'JSAPI支付'
  } else if (val === 4) {
    return '小程序支付'
  } else if (val === 5) {
    return '移动网页支付'
  } else if (val === 6) {
    return '非原生APP'
  } else if (val === 7) {
    return '原生APP'
  } else if (val === 8) {
    return '网关支付'
  } else if (val === 9) {
    return '无感'
  } else {
    return ''
  }
}

// 长字符串进行截短
export function truncate (val, len) {
  if (len) {
    return val.length <= len ? val.substr(0, len) : val.substr(0, len) + '...'
  } else {
    return val.length <= 30 ? val.substr(0, 30) : val.substr(0, 30) + '...'
  }
}

// 退款状态
export function refundState (val) {
  return val === 0 ? '未退款' : (val === 1 ? '退款中' : (val === 2 ? '退款失败' : (val === 9 ? '已退款' : '')))
}

// 退款原因
export function rfdRsn (val) {
  if (val === 1) {
    return '冲正'
  } else if (val === 2) {
    return '撤销'
  } else if (val === 9) {
    return '其他'
  } else {
    return ''
  }
}

// 审核状态
export function adtState (val) {
  if (val === 0) {
    return '未审核'
  } else if (val === 1) {
    return '已审核'
  } else if (val === 2) {
    return '自动审核'
  } else if (val === 3) {
    return '审核失败'
  } else {
    return ''
  }
}

// 车种
export function carFlag (val) {
  if (val === '0') {
    return '微型车'
  } else if (val === '1') {
    return '小型车'
  } else if (val === '2') {
    return '中型车'
  } else if (val === '3') {
    return '中大型车'
  } else if (val === '4') {
    return '大型车'
  } else {
    return ''
  }
}

// 流水类型
export function flowType (val) {
  if (val === 100) {
    return '系统支付流水'
  } else if (val === 120) {
    return '系统退款流水'
  } else if (val === 200) {
    return '车道支付流水'
  } else if (val === 220) {
    return '车道退款流水'
  } else if (val === 300) {
    return '微信支付流水'
  } else if (val === 320) {
    return '微信退款流水'
  } else {
    return ''
  }
}

// 支付通道类型
export function chidType (val) {
  if (val === 'wex') {
    return '微信'
  } else if (val === 'ali') {
    return '支付宝'
  } else {
    return '未知'
  }
}

// 秒转换为时分秒
export function fullTime (val) {
  let h = parseInt(val / 3600) || '00'
  let m = parseInt((val - h * 3600) / 60) || '00'
  let s = val % 60 || '00'
  return h + '小时' + m + '分钟' + s + '秒'
}

// 周期类型
export function periodType (val) {
  if (val === 40) {
    return '日报'
  } else if (val === 70) {
    return '周报'
  } else if (val === 50) {
    return '月报'
  } else if (val === 60) {
    return '年报'
  } else {
    return ''
  }
}

// 统计状态
export function rptState (val) {
  if (!val) {
    return ''
  }
  if (val.done === 1) {
    return '已完成'
  } else if (val.done === 0) {
    return val.running === 0 ? '待执行' : (val.done === 1 ? '执行中' : '')
  } else if (val.done === 2) {
    return '错误停止'
  }
}

// 报表任务
export function jobType (val) {
  if (val === 100) {
    return '工班统计'
  } else if (val === 102) {
    return '车道统计'
  } else if (val === 200) {
    return '站点统计'
  } else if (val === 300) {
    return '商户统计'
  }
  return ''
}

// 日期格式
export function format (value, type) {
  let date = String(value)
  if (type === 'yyyy-MM-dd') {
    return date.substring(0, 10)
  }
}

// 金额转换
export function amtTra (val) {
  if (!val) {
    return 0.00
  } else {
    return (val / 100).toFixed(2)
  }
}

// 显示屏
export function screenMode (val, type) {
  if (val === '0X30') {
    return type === 'agn' ? '默认左对齐' : '系统字体颜色'
  } else if (val === '0X31') {
    return type === 'agn' ? '左对齐' : '红色'
  } else if (val === '0X32') {
    return type === 'agn' ? '居中对齐' : '绿色'
  } else if (val === '0X33') {
    return type === 'agn' ? '右对齐' : '黄色'
  } else if (val === '0X34') {
    return type === 'agn' ? '向右移动' : '蓝色'
  } else if (val === '0X35') {
    return type === 'agn' ? '向左移动' : '紫色'
  } else if (val === '0X36') {
    return type === 'agn' ? '箭头' : '青色'
  } else if (val === '0X37') {
    return type === 'agn' ? '手指' : '白色'
  } else if (val === '0X38') {
    return type === 'agn' ? '空行模式' : ''
  } else {
    return ''
  }
}
