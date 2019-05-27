import ConfirmComponent from '@/components/confirm.vue'
const Confirm = {}
Confirm.install = function (Vue) {
  const ConfirmConstructor = Vue.extend(ConfirmComponent)
  // 生成一个该子类的实例
  const instance = new ConfirmConstructor()
  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$confirm = (msg, okCb) => {
    instance.msg = msg
    instance.visible = true
    instance.okCb = okCb
  }
}
export default Confirm
