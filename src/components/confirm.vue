<template>
  <div slot="shade" class="shade-box" :class="visible ? 'show' : 'hide'">
    <div class="confrim" v-show="visible">
      <p class="title">提示<span class="close-icon" @click="onCancel">&times;</span></p>
      <div class="mes">
        <p>{{msg}}</p>
      </div>
      <div class="btn-item">
        <button class="btn" @click="onCmf">确认</button>
        <button class="btn btn-primary" @click="onCancel">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      msg: '',
      okCb: null // 确认回调
    }
  },
  created () {
  },
  methods: {
    onCmf () {
      this.okCb && this.okCb()
      this.visible = false
    },
    onCancel () {
      this.visible = false
    }
  }
}
</script>
<style scoped>
.shade-box{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.4);
  z-index: 900;
}
.show{
  animation: fadeIn .3s linear 0s 1;
  -webkit-animation: fadeIn .3s linear 0s 1;
  -moz-animation: fadeIn .3s linear 0s 1;
  -o-animation: fadeIn .3s linear 0s 1;
}
.hide{
  display: none;
}
.mes{
  height: 80px;
  padding:10px 0;
}
.mes>p{
  line-height: 26px;
  word-wrap: break-word;
  font-size: 15px;
  margin-top: 10px;
  color: #888;
}
.confrim{
  width: 330px;
  height: 170px;
  border-radius: 4px;
  position: absolute;
  top:50%;
  left:50%;
  padding:15px;
  transform:translate(-50%,-50%);
  -webkit-transform:translate(-50%,-50%); /* Safari and Chrome */
  background-color: #FFFFFF;
  z-index: 1000;
}
.title{
  color:#595959;
  position:relative;
  font-size: 16px;
  font-weight: bold;
}
.close-icon{
  position: absolute;
  right:0;
  top:0;
  width:16px;
  text-align: center;
  cursor: pointer;
  display:inline-block;
  font-size: 24px;
}
.btn-item{
  text-align: right;
}
</style>
