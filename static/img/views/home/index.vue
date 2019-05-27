<template>
  <div class="index-frame">
    <div class="serve-change">
      <div>
        <p>订单总数<span>今天</span></p>
        <div>115</div>
      </div>
      <div>
        <p>销售总额<span>今天</span></p>
        <div>5421.00</div>
      </div>
      <div>
        <p>销售总额<span>昨天</span></p>
        <div>15421.00</div>
      </div>
      <div>
        <p>销售总额<span>近7天</span></p>
        <div>65122.00</div>
      </div>
    </div>
    <div class="unpending">
      <div class="home-item-title">待处理事务</div>
      <div class="row">
        <div class="col-4">
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>待付款订单<b class="pull-right">(10)</b></a>
          </div>
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>待发货订单<b class="pull-right">(10)</b></a>
          </div>
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>已发货订单<b class="pull-right">(10)</b></a>
          </div>
        </div>
        <div class="col-4">
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>待发货订单<b class="pull-right">(10)</b></a>
          </div>
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>待发货订单<b class="pull-right">(10)</b></a>
          </div>
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>已发货订单<b class="pull-right">(10)</b></a>
          </div>
        </div>
        <div class="col-4">
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>待发货订单<b class="pull-right">(10)</b></a>
          </div>
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>待发货订单<b class="pull-right">(10)</b></a>
          </div>
          <div class="unpending-item">
            <a href="" class="clearfix"><span></span>已发货订单<b class="pull-right">(10)</b></a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-log">
      <div class="home-item-title">操作日志</div>
      <table>
        <thead>
          <tr>
          <th>管理员</th>
          <th>时间</th>
          <th>IP地址</th>
          <th>操作描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>agan</td>
            <td>2018-04-25 15:38:13</td>
            <td>183.16.188.17</td>
            <td>系统登陆</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    onCancel () {
    },
    onCnf () {
      this.$layer.open('confrim', {
        msg: '确定删除该选项吗？',
        calbck1: () => {
          console.log('确认回调')
          this.$toast('保存成功')
        },
        calbck2: () => {
          console.log('删除回调')
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
@import '../../styles/common.less';
.index-frame{
  .home-item-title{
    background: #F3F3F3;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-left: 15px;
  }
  .serve-change{
    display:flex;
    align-items:center;
    margin-top: 15px;
    >div:last-child{
      margin-right: 0;
    }
  }
  .serve-change > div{
    flex:1;
    margin-right:20px;
    background-color: #FFFFFF;
    height:100px;
    border-radius:4px;
    p{
      padding:0 15px;
      height: 48px;
      line-height: 48px;
      border-bottom:1px solid #D2D2D2;
      span{
        float: right;
        width:40px;
        height: 18px;
        line-height: 18px;
        border-radius: 4px;
        background-color: #1c84c6;
        color:#FFFFFF;
        text-align: center;
        margin-top: 15px;
      }
    }
    div{
      padding:0 20px;
      font-size: 26px;
      line-height:52px;
    }
  }
  .unpending{
    margin-top: 15px;
    background: #fff;
    .unpending-item{
      padding: 10px 0;
      margin: 0 15px;
      border-bottom: 1px solid #ddd;
      &:last-child{
        border-bottom: 0;
      }
      a{
        display: inline-block;
        width: 100%;
        b{
          color: @dangerColor;
        }
      }
    }
  }
  .home-log{
    margin-top: 15px;
    table{
      thead{
        tr{
          font-weight: normal;
          background: #fff;
        }
      }
    }
  }
}
</style>
