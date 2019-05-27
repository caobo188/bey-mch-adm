<template>
  <div slot="toast" class="toast" v-show="visible">
    <div>{{message}}</div>
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
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px 20px;
  background-color: rgba(0,0,0,.6);
  z-index: 10000;
  color: #FFFFFF;
  border-radius: 2px;
  margin-left: -47px;
}
</style>
