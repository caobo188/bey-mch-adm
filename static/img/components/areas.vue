<template>
<div class="area">
  <select v-model="query.pc">
    <option value="">请选择省</option>
    <option :value="prov.c" v-for="prov in provList" :key="prov.c">{{prov.n}}</option>
  </select>
  <select v-model="query.cc">
    <option value="">请选择市</option>
    <option :value="city.c" v-for="city in cityList" :key="city.c">{{city.n}}</option>
  </select>
  <select v-model="query.yc">
    <option value="">请选择区/县</option>
    <option :value="county.c" v-for="county in countyList" :key="county.c">{{county.n}}</option>
  </select>
</div>
</template>
<script>
export default {
  props: {
    code: {
      pc: '',
      cc: '',
      yc: ''
    }
  },
  data () {
    return {
      query: {
        pc: this.code.pc,
        cc: this.code.cc,
        yc: this.code.yc
      },
      provList: [],
      cityList: [],
      countyList: []
    }
  },
  beforeCreate () {
  },
  created () {
    this.getProvList()
    this.getCityList()
    this.getCountyList()
  },
  computed: {
  },
  methods: {
    // 获取省
    getProvList () {
      this.$http.getProvList({}, rst => {
        this.provList = rst || []
      })
    },
    // 获取市
    getCityList () {
      if (this.query.pc) {
        this.$http.getCityList(this.query.pc, rst => {
          this.cityList = rst || []
        })
      }
    },
    // 获取区县
    getCountyList () {
      if (this.query.cc) {
        this.$http.getCountyList(this.query.cc, rst => {
          this.countyList = rst || []
        })
      }
    }
  },
  watch: {
    'query.pc' (val) {
      if (val) {
        this.query.cc = ''
        this.query.yc = ''
        this.getCityList()
        this.$emit('codeVal', {'pc': val, 'cc': '', 'yc': ''})
      }
    },
    'query.cc' (val) {
      if (val) {
        this.query.yc = ''
        this.getCountyList()
        this.$emit('codeVal', {'pc': this.query.pc, 'cc': val, 'yc': ''})
      }
    },
    'query.yc' (val) {
      if (val) {
        this.$emit('codeVal', {'pc': this.query.pc, 'cc': this.query.cc, 'yc': val})
      }
    }
  }
}
</script>
<style lang="less" scoped>
</style>
