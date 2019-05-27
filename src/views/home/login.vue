<template>
  <div class="login">
    <div class="login-content">
      <div class="logo-title">
        <div class="title">京城商户管理系统</div>
      </div>
      <div class="title-name">用户登录</div>
      <div class="login-form">
        <div class="login-form-item">
          <input type="text" placeholder="请输入用户名" @keyup.enter="onLogin"  v-model="form.regId"/>
        </div>
        <div class="login-form-item">
          <input type="password" placeholder="请输入密码" @keyup.enter="onLogin" v-model="form.pwd"/>
        </div>
        <div class="login-form-item text-right">
          <a href="javascript: void(0)">忘记密码</a>
        </div>
        <div class="login-form-item">
          <button type="button" class="btn" @click="onLogin">登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      form: {
        regId: '',
        pwd: ''
      }
    }
  },
  methods: {
    // 登录
    onLogin () {
      request({
          url: './login',
          method: 'post',
          data: this.form,
        })
        .then(rst => {
          if (rst.data.code === 200) {
            this.$toast('登录成功')
            this.$goto('Home', 1500)
          } else {
            this.$alert(rst.data.msg)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../styles/common.less';
.login{
  height: 100%;
  background: url(../../../static/img/login-bg.jpg) no-repeat center fixed;
  background-size: cover;
  .login-content{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 306px;
    width: 350px;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    .logo-title{
      position: absolute;
      top: -75px;
      width: 100%;
      text-align: center;
      margin-left: -30px;
      .title{
        color: #B9C1D5;
        font-size: 22px;
        margin-top: 10px;
      }
    }
    .title-name{
      font-size: 18px;
      margin-bottom: 30px;
    }
    .login-form{
      margin: 10px 0;
      .login-form-item{
        margin-bottom: 15px;
        .item-name{
          margin-bottom: 5px;
        }
        input{
          width: 100%;
        }
        .btn{
          width: 100%;
          height: 36px;
          line-height: 36px;
        }
      }
    }
  }
}
</style>
