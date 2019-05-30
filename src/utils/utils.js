// 将一维数据进行分组
Array.prototype.groupBy = function(name, filter) {
  var groups = [], grp, mapping = {}
  for(var i = 0, item, v, rtn; item = this[i++];) {
    v = item[name]
    grp = mapping[v]
    if(!grp) {
      grp = {
        name: v,
        count: 0,
        subs: []
      }
      mapping[v] = grp
      groups.push(grp)
    }
    rtn = filter && filter.call(grp, item, mapping)
    // 返回false表示过滤掉，返回null表示使用原来的值，否则使用返回的值
    if(rtn !== false){
      item = rtn || item
      grp.subs.push(item)
      grp.count++
    }
  }
  return groups
}