<template>
  <div class="header">
    <!-- 头部区域（可配合layui已有的水平导航） -->
    <div class="clearfix">
      <ul class="header-nav">
        <li class="header-nav-item">
          <a href="javascript:;">
            <img src="../../../static/img/avatar.png">admin
          </a>
          <dl class="header-nav-child">
            <dd>
              <a href="">个人资料</a>
            </dd>
            <dd>
              <a href="">修改密码</a>
            </dd>
            <dd>
              <a href="">安全退出</a>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
  .header{
    position: relative;
    border-bottom: 1px solid #E4E5E9;
    box-sizing: border-box;
    background-color: #fff;
    height: 50px;
    z-index:1;
    .header-nav{
      float:right;
      .header-nav-item{
        padding: 8px 0;
        &:hover{
          .header-nav-child{
            display: block;
          }
        }
        a{
          display: inline-block;
          padding: 0 15px 0 10px;
          img{
            width: 35px;
            height: 35px;
            margin-right: 10px;
            border-radius: 50%;
            vertical-align: middle;
          }
        }
        .header-nav-child{
          display: none;
          position: absolute;
          right: 0;
          top: 50px;
          line-height: 36px;
          padding: 5px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,.12);
          border: 1px solid #d2d2d2;
          background-color: #fff;
          z-index: 1000;
          border-radius: 2px;
          white-space: nowrap;
        }
      }
    }
  }
</style>
