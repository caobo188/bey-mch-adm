<!-- 日期选择组件 -->
<template>
  <div class="input-moudle" @click="openDate">
    {{inputText}}
    <div class="laydate" v-if="showDate" @click="hiddenDate">
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
        <div class="laydate-content">
          <ul>
            <li>日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li v-for="(item, idx) in customDate.days" :key="idx" :class="{disabled: item.disabled, active: day === item.day}" @click="onSelTime(item)">{{item.day}}</li>
          </ul>
        </div>
        <div class="laydate-footer">
          <div class="footer-btns">
            <span class="laydate-btns-clear" @click.stop="onClear">清空</span>
            <span class="laydate-btns-confirm" @click.stop="onConfrim">确定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['takeDate'],
  data () {
    return {
      customDate: {},
      year: '',
      month: '',
      day: '',
      inputText: '',
      showDate: false,
      selectDay: this.takeDate,
      jump: false
    }
  },
  created () {
    this.initDate()
    this.baseDate()
    this.renderInput()
  },
  mounted () {
    document.addEventListener('click', this.hiddenDate)
  },
  methods: {
    formats (myYear, myMonth, myDay) {
      myMonth = myMonth >= 10 ? myMonth : '0' + myMonth
      myDay = myDay >= 10 ? myDay : '0' + myDay
      return myYear + '-' + myMonth + '-' + myDay
    },
    renderInput () {
      this.inputText = this.selectDay ? this.selectDay : '请选择日期'
    },
    openDate () {
      this.showDate = true
    },
    onConfrim () {
      if (this.jump) {
        this.selectDay = this.selectDay ? this.selectDay : this.customDate.title
      } else {
        this.selectDay = this.selectDay ? this.selectDay : this.formats(this.customDate.y, this.customDate.m + 1, this.day)
      }
      this.renderInput()
      this.$emit('listenToDateEvent', {day: this.selectDay})
      this.showDate = false
    },
    onClear () {
      this.selectDay = ''
      this.jump = false
      this.renderInput()
      this.$emit('listenToDateEvent', {day: this.selectDay})
      this.showDate = false
    },
    hiddenDate (e) {
      if (!this.$el.contains(e.target)) {
        this.showDate = false
      }
    },
    onPre (type) {
      this.jump = true
      if (type === 'year') {
        this.year--
      } else if (type === 'month') {
        this.month--
      }
      this.day = 1
      this.selectDay = ''
      this.baseDate()
    },
    onNex (type) {
      this.jump = true
      if (type === 'year') {
        this.year++
      } else if (type === 'month') {
        this.month++
      }
      this.day = 1
      this.selectDay = ''
      this.baseDate()
    },
    baseDate () {
      let myDate = new Date()
      myDate.setFullYear(this.year, this.month - 1, this.day)
      this.customDate = this.genDays(myDate)
    },
    genDays (baseDate) {
      let initDate = baseDate
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
        Date: this.formats(day.getFullYear(), day.getMonth() + 1, day.getDate()),
        week: day.getDay(),
        day: day.getDate(),
        cls: ''
      }
    },
    onSelTime (item) {
      if (item.Date) {
        this.selectDay = item.Date
        this.day = item.day
      }
    },
    initDate () {
      if (this.selectDay) {
        this.year = parseInt(this.selectDay.slice(0, 5))
        this.month = parseInt(this.selectDay.slice(5, 7))
        this.day = parseInt(this.selectDay.slice(8))
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
<style scoped>
  .input-moudle{
    padding: 0 10px;
    border-radius: 4px;
    line-height: 34px;
    height: 34px;
    background-color: #fff;
    border: 1px solid #DCDFE6;
    outline: none;
    font-size: 13px;
    width: 220px;
    position: relative;
    display: inline-block;
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
  .laydate-content{
    padding: 10px;
  }
  .laydate-content ul{
    overflow: hidden;
  }
  .laydate-content li {
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
  .laydate-content li.disabled{
    color: #d2d2d2 !important;
  }
  .laydate-content li.active{
    background-color: #4B81EB!important;
    color: #fff!important;
  }
  .laydate-content li:hover{
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
</style>
