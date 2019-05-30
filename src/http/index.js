import request from '@/utils/request.js'
var http = {}
// 接口路径
var BASE_SERVER = ''
// 应用网关地址
var APP_API_PREFIX = BASE_SERVER
// 系统标识
var SYS_ID = 'plt.tfc.mch'
// 应用对象
var APP_APIS = ['Adm', 'Goods', 'Bill', 'Vote', 'Record']
// 自定义API
var CST_APIS = {
  'login': {
    uri: '/login',
    type: 'post'
  },
  // 投票结果
  'voteRank': {
    uri: '/record/rank',
    type: 'post'
  }
}

// 登陆
http.login = function (data, cb, fb) {
  http.post('/login', data, cb, fb)
}

// GET
http.get = function (url, params, okCb, failCb) {
  return request({
    url: url,
    method: 'get',
    data: params || {},
    okCb: okCb,
    failCb: failCb
  })
}

// POST
http.post = function (url, params, okCb, failCb) {
  return request({
    url: url,
    method: 'post',
    data: params || {},
    okCb: okCb,
    failCb: failCb
  })
}

// 提示
http.info = function (msg) {
}

// 按位合作
http.mergeBits = function (idxList) {
  let bits = (idxList && idxList.length) ? 0 : ''
  for (var i = 0, idx; i < idxList.length; i++) {
    idx = idxList[i]
    if (idx >= 30 || idx <= 0) {
      this.$alert('位下标错误(1~30)', 'error')
      return ''
    }
    bits = ((1 << (idx - 1)) | bits)
  }
  return bits
}

// 将位拆开
http.splitBits = function (bits) {
  let posList = []
  let num = typeof (bits) === 'string' ? parseInt(bits) : bits
  for (var i = 0, pos; i < 30; i++) {
    pos = 1 << i
    if ((num & pos) === pos) {
      posList.push(i + 1)
    }
  }
  return posList
}

// 安装方法
var installMethod = function (obj, method, _url, exeFun) {
  if (!obj[method]) {
    obj[method] = function (data, cb, fb) {
      var doUrl = _url
      if (_url.indexOf('{0}') > 0) {
        doUrl = _url.replace('{0}', data)
        data = {}
      }
      exeFun.call(obj, doUrl, data, cb, fb)
    }
  }
}

// 安装对象
var installObj = function (server, objName) {
  var styles = ['get$', 'get$List', 'add$', 'upd$', 'del$', 'qry$']
  var urls = ['/$/{0}', '/$/list', '/$/add', '/$/upd', '/$/del/{0}', '/$/qry']
  var types = ['GET', 'POST', 'POST', 'POST', 'GET', 'POST']
  //
  styles.forEach((style, idx) => {
    var method = style.replace('$', objName)
    var _url = server + urls[idx].replace('$', objName.substring(0, 1).toLowerCase() + objName.substring(1))
    installMethod(http, method, _url, http[types[idx].toLowerCase()])
  })
}

var installMap = function (apiMap) {
  for (var method in apiMap) {
    if (http[method]) {
      continue
    }
    var def = apiMap[method]
    installMethod(http, method, def.uri, http[def.type || 'get'])
  }
}

// API安装
var installList = function (server, objList) {
  objList.forEach((name, idx) => {
    installObj(server, name)
  })
}

// 接口安装 >>>
installMap(CST_APIS)
installList(APP_API_PREFIX, APP_APIS)

export default http
