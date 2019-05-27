<template>
  <div class="dialogs-shade" v-if="show">
    <div class="dialogs-frame">
      <div class="title clearfix">
        <b>{{title}}</b>
        <a href="javascript: void(0)" class="dialogs-close pull-right" @click="show = false">&times;</a>
      </div>
      <component :is="cfg.name" :cfg="cfg"></component>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      title: '', // 弹框标签
      itemName: '', // 组件name
      cfg: {}
    }
  },
  created () {
  },
  methods: {
    open (name, title, params, okCb, cancelCb) {
      this.itemName = name
      this.title = title
      this.show = true
      this.cfg = {
        name: name,
        params: params || {},
        ok: (rst) => {
          this.show = false
          okCb && okCb(rst || {})
        },
        cancel: (rst) => {
          this.show = false
          cancelCb && cancelCb(rst || {}, 1)
        },
        close: (rst) => {
          this.show = false
          cancelCb && cancelCb(rst || {}, 2)
        }
      }
    },
    // 关闭
    onClose () {
      this.show = false
    }
  }
}
</script>
<style lang="less">
.dialogs-shade{
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  z-index: 50;
  pointer-events: auto;
  .dialogs-frame{
    width: 50%;
    max-height: 70%;
    top: 10%;
    left: 25%;
    bottom: 0;
    right: 0;
    border-radius: 2px;
    position: fixed;
    pointer-events: auto;
    overflow: auto;
    z-index: 1000;
    .title{
      position: fixed;
      width: 50%;
      z-index: 1000;
      font-size: 16px;
      background: #F8F8F8;
      padding: 0 15px;
      height: 40px;
      line-height: 40px;
      color: #303133;
      .dialogs-close{
        font-weight: bold;
        font-size: 26px;
        color: #595959;
      }
    }
    .dialogs-content{
      padding: 45px 15px 15px;
    }
  }
}
</style>
