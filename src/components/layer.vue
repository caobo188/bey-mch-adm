<template>
  <div class="shade" v-show="visible">
    <div class="layer-content" v-for="(c,i) in list" :key="i">
      <div class="layer-title">
        <span class="close-btn" @click="onShut">&times;</span>
        <div class="page-title">{{title}}</div>
      </div>
      <component :is="c.name" :idx="i" v-on:listenToChildEvent="showMsgFromChild" :cfg="c.cfg"></component>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      title: '详情',
      itemName: '',
      list: []
    }
  },
  created () {
  },
  methods: {
    open (name, title, params, okCb, cancelCb) {
      var self = this
      this.title = title
      this.visible = true
      this.itemName = name
      var cfg = {
        name: name,
        params: params || {},
        ok: function (rst) {
          self.closeComponent(name)
          okCb && okCb(rst || {})
        },
        cancel: function (rst) {
          self.closeComponent(name)
          cancelCb && cancelCb(rst || {}, 1)
        },
        close: function (rst) {
          self.closeComponent(name)
          cancelCb && cancelCb(rst || {}, 2)
        }
      }
      this.list.push({name: name, cfg: cfg})
    },
    close () {
    },
    onShut () {
      this.closeComponent(this.itemName)
    },
    closeComponent (name) {
      for (let i = this.list.length - 1; i >= 0; i--) {
        let c = this.list[i]
        if (c.cfg.name === name) {
          this.list.splice(i, 1)
          break
        }
      }
      if (this.list.length === 0) {
        this.visible = false
      }
    },
    showMsgFromChild (data) {
      if (!data.visible) {
        this.list.splice(-1, 1)
      }
      if (this.list.length === 0) {
        this.visible = false
      }
    }
  }
}
</script>
<style>
.shade{
  position: fixed;
  top:0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  z-index: 5;
  pointer-events: auto;
}
</style>
