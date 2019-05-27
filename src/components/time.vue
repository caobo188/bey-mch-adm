<!-- 日期选择组件 -->
<template>
  <div class="input-moudle" @click="openDate">
    <div class="input-text">{{inputVal}}</div>
    <div class="laydate" v-if="showDate" @click="hiddenDate">
      <div class="laydate-main">
        <div class="laydate-header">选择时间</div>
        <div class="laydate-content clearfix">
          <div class="time-cate-item">
            <p>时</p>
            <ul class="time-title">
              <li @click="onHour(0)" :class="hourVal == 0 ? 'active' : '' ">00</li>
              <li v-for="item in 23" :key="item" @click="onHour(item)" :class="hourVal == item ? 'active' : '' ">
                <span v-show="item < 10">0</span><i>{{item}}</i>
              </li>
            </ul>
          </div>
          <div class="time-cate-item">
            <p>分</p>
            <ul class="time-title">
              <li @click="onMinute(0)" :class="minuteVal == 0 ? 'active' : '' ">00</li>
              <li v-for="item in 59" :key="item" @click="onMinute(item)" :class="minuteVal == item ? 'active' : '' ">
                <span v-show="item < 10">0</span>{{item}}
              </li>
            </ul>
          </div>
        </div>
        <div class="laydate-footer">
          <div class="footer-btns">
            <span  class="laydate-btns-clear" @click.stop="onClear">清空</span>
            <span  class="laydate-btns-confirm" @click.stop="onConfrim">确定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['time'],
  data () {
    return {
      showDate: false,
      hourVal: 0,
      minuteVal: 0,
      inputVal: '', // 显示值
      timeVal: this.time
    }
  },
  created () {
    this.initTime()
    this.renderInput()
  },
  mounted () {
    document.addEventListener('click', this.hiddenDate)
  },
  methods: {
    // 选择时
    onHour (val) {
      this.hourVal = val
    },
    // 选择分
    onMinute (val) {
      this.minuteVal = val
    },
    // 渲染显示
    renderInput () {
      this.inputVal = this.timeVal ? this.timeVal : '请选择时间'
    },
    // 初始化
    initTime () {
      if (this.timeVal) {
        this.hourVal = this.timeVal.split(':')[0]
        this.minuteVal = this.timeVal.split(':')[1]
      }
    },
    openDate () {
      this.showDate = true
    },
    // 确认
    onConfrim () {
      let hour = parseInt(this.hourVal)
      let minute = parseInt(this.minuteVal)
      this.hourVal = hour < 10 ? '0' + hour : hour
      this.minuteVal = minute < 10 ? '0' + minute : minute
      this.timeVal = this.hourVal + ':' + this.minuteVal
      this.$emit('setTime', this.timeVal)
      this.renderInput()
      this.showDate = false
    },
    // 清除
    onClear () {
      this.timeVal = ''
      this.renderInput()
      this.hourVal = 0
      this.minuteVal = 0
      this.$emit('setTime', '')
      this.showDate = false
    },
    hiddenDate (e) {
      if (!this.$el.contains(e.target)) {
        this.showDate = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.input-moudle{
  padding: 0 10px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #DCDFE6;
  outline: none;
  font-size: 13px;
  width: 220px;
  position: relative;
  display: inline-block;
  height: 34px;
  line-height: 34px;
}
.laydate{
  position: absolute;
  top:34px;
  left:0;
  z-index: 4;
  background-color: #FFFFFF;
  border:1px solid #d2d2d2;
  border-radius:4px;
  display:inline-block ;
}
.laydate-main{
  width:272px;
}
.laydate-header{
  position: relative;
  line-height: 30px;
  padding: 10px 70px 5px;
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
}
.laydate-content{
  padding: 10px;
  .time-cate-item{
    float: left;
    width: 50%;
    text-align: center;
    p{
      padding-bottom: 10px;
    }
    .time-title{
      height: 160px;
      overflow: auto;
      border: 1px solid #e2e2e2;
      &:first-child, &:nth-child(2){
        border-right: 0;
      }
      li{
        line-height: 26px;
        cursor: pointer;
        &:hover{
          background: #EAEAEA;
        }
        &.active{
          background: #4B81EB;
          color: #fff;
        }
      }
      &::-webkit-scrollbar {
        width: 8px;
        height: 1px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #747474;
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 5px;
        background: #E6E6E6;
      }
    }
  }
}
.laydate-footer {
  border-top: 1px solid #e2e2e2;
}
.laydate-footer {
    position: relative;
    height: 46px;
    line-height: 26px;
    padding: 10px 20px;
}
.footer-btns {
  position: absolute;
  right: 10px;
  top: 10px;
}
.footer-btns span {
  height: 26px;
  line-height: 26px;
  margin: 0 0 0 -1px;
  padding: 0 10px;
  border: 1px solid #C9C9C9;
  background-color: #fff;
  white-space: nowrap;
  vertical-align: top;
  border-radius: 2px;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
}
</style>
