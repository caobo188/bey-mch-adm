<!-- 日期选择组件 -->
<template>
  <div class="input-moudle" @click="showDate = true">
    <span>{{inputText}}</span>
    <div class="laydate" v-show="showDate" @click="hiddenDate">
      <div class="laydate-main">
        <div class="laydate-header">
          <i class="laydate-prev-y" @click="onPre('year')">&lt;&lt;</i>
          <i class="laydate-prev-m" @click="onPre('month')">&lt;</i>
          <div class="laydate-set-ym">
            <span>{{customDate.y}}年</span>
            <span>{{customDate.m + 1}}月</span>
          </div>
          <i class="laydate-next-m" @click="onNex('month')">&gt;</i>
          <i class="laydate-next-y" @click="onNex('year')">&gt;&gt;</i>
        </div>
        <div class="laydate-content-date">
          <ul>
            <li>日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li v-for="(item, idx) in customDate.days" :key="idx" :class="{disabled: item.disabled, active: day === item.day}" @click="onDate(item)">{{item.day}}</li>
          </ul>
        </div>
        <div class="laydate-footer">
          <div class="toggle-link">
            <a href="javascript: void(0)" @click="onToggle(1)">选择时间</a>
          </div>
          <div class="footer-btns">
            <span class="laydate-btns-clear" @click.stop="onClear">清空</span>
            <span class="laydate-btns-confirm" @click.stop="onCfm">确定</span>
          </div>
        </div>
      </div>
    </div>
    <div class="laydate" v-show="showTime" @click="hiddenDate">
      <div class="laydate-main-time">
        <div class="laydate-header-time">选择时间</div>
        <div class="laydate-content-time clearfix">
          <div class="time-cate-item">
            <p>时</p>
            <ul class="time-title">
              <li @click="onHour(0)" :class="hour == 0 ? 'active' : '' ">00</li>
              <li v-for="item in 23" :key="item" @click="onHour(item)" :class="hour == item ? 'active' : '' ">
                <span v-show="item < 10">0</span><i>{{item}}</i>
              </li>
            </ul>
          </div>
          <div class="time-cate-item">
            <p>分</p>
            <ul class="time-title">
              <li @click="onMinute(0)" :class="minute == 0 ? 'active' : '' ">00</li>
              <li v-for="item in 59" :key="item" @click="onMinute(item)" :class="minute == item ? 'active' : '' ">
                <span v-show="item < 10">0</span>{{item}}
              </li>
            </ul>
          </div>
          <div class="time-cate-item">
            <p>秒</p>
            <ul class="time-title">
              <li @click="onSecond(0)" :class="second == 0 ? 'active' : '' ">00</li>
              <li v-for="item in 59" :key="item" @click="onSecond(item)" :class="second == item ? 'active' : '' ">
                <span v-show="item < 10">0</span>{{item}}
              </li>
            </ul>
          </div>
        </div>
        <div class="laydate-footer">
          <div class="toggle-link">
            <a href="javascript: void(0)" @click="onToggle(2)">选择日期</a>
          </div>
          <div class="footer-btns">
            <span class="laydate-btns-clear" @click.stop="onClear">清空</span>
            <span class="laydate-btns-confirm" @click.stop="onCfm">确定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['value'],
  data () {
    return {
      // 日期
      customDate: {},
      year: '',
      month: '',
      day: '',
      inputText: '',
      showDate: false,
      dateTime: this.value,
      jump: false,
      date: '', // 时间格式
      // 时间
      showTime: false,
      hour: 0,
      minute: 0,
      second: 0
    }
  },
  created () {
    this.onInit()
    this.baseDate()
    this.renderInput()
  },
  mounted () {
    document.addEventListener('click', this.hiddenDate)
  },
  methods: {
    // 切换日期/时间
    onToggle (flag) {
      if (flag === 1) {
        this.showTime = true
        this.showDate = false
      } else if (flag === 2) {
        this.showTime = false
        this.showDate = true
      }
    },
    // 选择时
    onHour (val) {
      this.hour = val
    },
    // 选择分
    onMinute (val) {
      this.minute = val
    },
    // 选择秒
    onSecond (val) {
      this.second = val
    },
    // 时间格式化
    formats (myYear, myMonth, myDay) {
      myMonth = myMonth >= 10 ? myMonth : '0' + myMonth
      myDay = myDay >= 10 ? myDay : '0' + myDay
      return myYear + '-' + myMonth + '-' + myDay
    },
    // 渲染显示
    renderInput () {
      this.inputText = this.inputText ? this.inputText : '请选择日期时间'
    },
    // 日期时间确认
    onCfm () {
      if (this.jump) {
        this.date = this.date || this.customDate.title
      } else {
        this.date = this.date || this.formats(this.customDate.y, this.customDate.m + 1, this.day)
      }
      let hour = parseInt(this.hour)
      let minute = parseInt(this.minute)
      let second = parseInt(this.second)
      this.hour = hour < 10 ? '0' + hour : hour
      this.minute = minute < 10 ? '0' + minute : minute
      this.second = second < 10 ? '0' + second : second
      let timeVal = this.hour + ':' + this.minute + ':' + this.second
      //
      this.inputText = this.date + ' ' + timeVal
      this.renderInput()
      this.$emit('setVal', this.inputText)
      this.showDate = false
      this.showTime = false
    },
    // 清除
    onClear () {
      this.inputText = ''
      this.jump = false
      this.renderInput()
      this.$emit('setVal', '')
      this.showDate = false
      this.showTime = false
    },
    hiddenDate (e) {
      if (!this.$el.contains(e.target)) {
        this.showDate = false
        this.showTime = false
      }
    },
    // 上一年/月
    onPre (type) {
      this.jump = true
      if (type === 'year') {
        this.year--
      } else if (type === 'month') {
        this.month--
      }
      this.day = 1
      this.date = ''
      this.baseDate()
    },
    // 下一年/月
    onNex (type) {
      this.jump = true
      if (type === 'year') {
        this.year++
      } else if (type === 'month') {
        this.month++
      }
      this.day = 1
      this.date = ''
      this.baseDate()
    },
    baseDate () {
      let myDate = new Date()
      myDate.setFullYear(this.year, this.month - 1, this.day)
      this.customDate = this.genDays(myDate)
    },
    genDays (opt) {
      let initDate = opt
      let moth, day
      initDate.setDate(1)
      moth = {
        m: initDate.getMonth(),
        y: initDate.getFullYear(),
        title: this.formats(initDate.getFullYear(), initDate.getMonth() + 1, initDate.getDate()),
        days: []
      }
      var week = initDate.getDay()
      while (week > 0) {
        moth.days.push({disabled: false})
        week--
      }
      while (true) {
        day = this.createDay(initDate)
        if (day.Date <= this.formats(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())) {
          day.disabled = false
        }
        moth.days.push(day)
        initDate.setDate(initDate.getDate() + 1)
        if (initDate.getMonth() !== moth.m) {
          break
        }
      }
      return moth
    },
    createDay (day) {
      return {
        date: this.formats(day.getFullYear(), day.getMonth() + 1, day.getDate()),
        week: day.getDay(),
        day: day.getDate(),
        cls: ''
      }
    },
    // 点击日期
    onDate (item) {
      if (item.date) {
        this.date = item.date
        this.day = item.day
      }
    },
    // 初始化时间
    onInit () {
      let value = this.dateTime
      if (value) {
        this.inputText = value
        this.year = parseInt(value.slice(0, 4))
        this.month = parseInt(value.slice(5, 7))
        this.day = parseInt(value.slice(8, 10))
        this.date = value.slice(0, 10)
        //
        this.hour = parseInt(value.slice(11, 13))
        this.minute = parseInt(value.slice(14, 16))
        this.second = parseInt(value.slice(17, 19))
      } else {
        let myDate = new Date()
        this.year = myDate.getFullYear()
        this.month = myDate.getMonth() + 1
        this.day = myDate.getDate()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.input-moudle{
  display: inline-block;
  width: 220px;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #DCDFE6;
  outline: none;
  position: relative;
}
.laydate{
  position: absolute;
  top:34px;
  left:0;
  z-index: 999;
  background-color: #FFFFFF;
  border:1px solid #d2d2d2;
  border-radius:4px;
}
.laydate-main{
  width:272px;
}
.laydate-header{
  position: relative;
  line-height: 30px;
  padding: 10px 70px 5px;
}
.laydate-header i {
  position: absolute;
  top: 10px;
  color: #999;
  font-size: 18px;
  cursor: pointer;
}
.laydate-header i.laydate-prev-y {
  left: 15px;
}
.laydate-header i.laydate-prev-m {
  left: 45px;
}
.laydate-set-ym {
  width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.laydate-header i.laydate-next-y {
  right: 15px;
}
.laydate-header i.laydate-next-m {
  right: 45px;
}
.laydate-content-date{
  padding: 10px;
}
.laydate-content-date ul{
  overflow: hidden;
}
.laydate-content-date li {
  float: left;
  color: #666;
  position: relative;
  cursor: pointer;
  width: 36px;
  height: 30px;
  line-height: 22px;
  padding: 5px;
  text-align: center;
}
.laydate-content-date li.disabled{
  color: #d2d2d2 !important;
}
.laydate-content-date li.active{
  background-color: #4B81EB!important;
  color: #fff!important;
}
.laydate-content-date li:hover{
  background-color: #eaeaea;
  color: #333;
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
.toggle-link{
  font-size: 12px;
}
/*时间*/
.laydate-main-time{
  width:272px;
  .laydate-header-time{
    position: relative;
    line-height: 30px;
    padding: 10px 70px 5px;
    text-align: center;
    border-bottom: 1px solid #e2e2e2;
  }
  .laydate-content-time{
    padding: 10px;
    .time-cate-item{
      float: left;
      width: 33%;
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
}
</style>
