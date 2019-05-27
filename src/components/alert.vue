<template>
  <div slot="shade" class="alert" :class="visible ? 'show' : 'hide'">
    <div class="alert-box">
      <div class="title">{{message}}</div>
      <button type="button" class="btn alert-btn" @click="visible = false">确&nbsp;&nbsp;&nbsp;&nbsp;认</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      message: ''
    }
  }
}
</script>
<style scoped>
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}
.show{
  animation: fadeIn .5s linear 0s 1;
  -webkit-animation: fadeIn .5s linear 0s 1;
  -moz-animation: fadeIn .5s linear 0s 1;
  -o-animation: fadeIn .5s linear 0s 1;
}
.hide{
  display: none;
}
.alert{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.4);
  z-index: 1000;
}
.alert-box{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 130px;
  width: 280px;
  background: #fff;
  padding: 25px 20px;
  border-radius: 5px;
  text-align: center;
}
.alert-box .title{
  font-size: 15px;
  margin-bottom: 25px;
  font-weight: bold;
}
.alert-box .alert-btn{
  padding: 0 30px;
}
</style>
