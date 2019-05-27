<template>
  <div>
    <div class="page-content">
      <form action="">
        <!--商品信息-->
        <div v-show="step == 0">
          <div class="product-add-title">商品信息</div>
          <div class="form-item product-cate">
            <label class="form-label"><b class="color-red">*</b> 商品分类</label>
            <div class="input-inline">
              <select>
                <option value="">一级分类</option>
              </select>
            </div>
            <div class="input-inline">
              <select>
                <option value="">二级分类</option>
              </select>
            </div>
            <div class="input-inline">
              <select>
                <option value="">三级分类</option>
              </select>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"><b class="color-red">*</b> 所属品牌</label>
            <div class="input-inline">
              <select>
                <option value="">李宁</option>
              </select>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"><b class="color-red">*</b> 商品名称</label>
            <div class="input-block">
              <input type="text" placeholder="请输入商品名称" v-model="form.name"/>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"><b class="color-red">*</b> 副标题</label>
            <div class="input-block">
              <input type="text" placeholder="请输入商品 副标题"/>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"><b class="color-red">*</b> 商品介绍</label>
            <div class="input-block">
              <textarea placeholder="请输入分类描述，最少10个字符"></textarea>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"></label>
            <div class="input-block">
              <router-link class="btn btn-primary" to="/product/list">返 回</router-link>
              <button type="button" class="btn" @click="step = 1">下一步</button>
            </div>
          </div>
        </div>
        <!--商品属性-->
        <div v-show="step == 1">
          <div class="product-add-title">商品属性</div>
          <div class="form-item">
            <label class="form-label"><b class="color-red">*</b> 售价类型</label>
            <div class="input-inline">
              <label class="check-label"><input type="radio" name="sale-type" v-model="form.saleType" value="1"/> 分类出售</label>
              <label class="check-label"><input type="radio" name="sale-type" v-model="form.saleType" value="2"/> 一口价</label>
            </div>
          </div>
          <div v-show="form.saleType == 1">
            <div class="form-item">
              <label class="form-label"><b class="color-red">*</b> 属性</label>
              <div class="input-block">
                <!--属性种类-->
                <div class="cate-prop-item" v-for="(nat, index) in natList" :key="index">
                  <span class="cate-prop-name">{{nat.name}}：</span>
                  <label class="check-label" v-for="(item, idx) in nat.items" :key="idx">
                    {{item}}
                    <a href="javascript: void(0)" @click="onDeleNat(index, idx)" class="cate-prop-dele">&times;</a>
                  </label>
                  <div class="other-inline">
                    <input type="text" v-model="nat.value"/>
                    <button type="button" class="btn btn-primary" @click="onAddNat(index)">增加</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-item">
              <label class="form-label"><b class="color-red">*</b> 商品属性</label>
              <div class="input-block">
                <table class="edit-table">
                  <thead>
                    <tr>
                      <th v-for="(nat, index) in natList" :key="index">{{nat.name}}</th>
                      <th>供货价(元)</th>
                      <th>市场价(元)</th>
                      <th>零售价(元)</th>
                      <th>库存(件)</th>
                      <th>SKU编号</th>
                      <th>SPU值</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in subList" :key="index">
                      <td>{{item.title}}</td>
                      <td>{{item.color}}</td>
                      <td class="edit-td"><input type="text" class="edit-input" v-model="item.price"/></td>
                      <td class="edit-td"><input type="text" class="edit-input" v-model="item.mrice"/></td>
                      <td class="edit-td"><input type="text" class="edit-input" v-model="item.srice"/></td>
                      <td class="edit-td"><input type="text" class="edit-input" v-model="item.left"/></td>
                      <td class="edit-td"><input type="text" class="edit-input" v-model="item.sku"/></td>
                      <td class="edit-td"><input type="text" class="edit-input" v-model="item.spu"/></td>
                    </tr>
                    <tr v-if="subList.length == 0">
                      <td colspan="8" class="no-exit-tips">未选择属性</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="form-item">
              <label class="form-label"><b class="color-red">*</b> 属性图片</label>
              <div class="input-block">
                <ul class="parmpic">
                  <li>
                    <img src="../../../static/img/product.jpg" alt="" class="parm-example-pic"/>
                    <p class="parm-title">例图</p>
                  </li>
                  <li v-for="(sub, index) in subList" :key="index">
                    <Upload></Upload>
                    <p class="parm-title">{{sub.color}}{{sub.size}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-show="form.saleType == 2">
            <div class="form-item">
              <label class="form-label"><b class="color-red">*</b> 一口价及总库存</label>
              <div class="input-block">
                <table class="edit-table">
                  <thead>
                    <tr>
                      <th>供货价(元)</th>
                      <th>市场价(元)</th>
                      <th>零售价(元)</th>
                      <th>总库存(件)</th>
                      <th>SKU编号</th>
                      <th>SPU值</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="edit-td"><input type="text" class="edit-input"/></td>
                      <td class="edit-td"><input type="text" class="edit-input"/></td>
                      <td class="edit-td"><input type="text" class="edit-input"/></td>
                      <td class="edit-td"><input type="text" class="edit-input"/></td>
                      <td class="edit-td"><input type="text" class="edit-input"/></td>
                      <td class="edit-td"><input type="text" class="edit-input"/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"></label>
            <div class="input-block">
              <button type="button" class="btn btn-primary" @click="step = 0">上一步</button>
              <button type="button" class="btn" @click="step = 2">下一步</button>
            </div>
          </div>
        </div>
        <!--商品参数-->
        <div v-show="step == 2">
          <div class="product-add-title">商品参数</div>
          <div class="form-item">
            <label class="form-label"><b class="color-red">*</b> 上市年份</label>
            <div class="input-inline">
              <input type="text" placeholder="请输入上市年份"/>
            </div>
            <div class="form-mid">例如，2018年</div>
          </div>
          <div class="form-item">
            <label class="form-label">主材含量</label>
            <div class="input-block">
              <input type="text" placeholder="请输入主材含量"/>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label">适用对象</label>
            <div class="input-inline">
              <input type="text" placeholder="请输入适用对象"/>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"><b class="color-red">*</b> 商品相册</label>
            <div class="input-block">
            </div>
          </div>
          <div class="form-item">
            <label class="form-label">规格参数</label>
            <div class="input-block">
              <textarea placeholder="请输入规格参数，最少10个字符"></textarea>
            </div>
          </div>
          <div class="form-item">
            <label class="form-label"></label>
            <div class="input-block">
              <button type="button" class="btn btn-primary" @click="step = 1">上一步</button>
              <button type="button" class="btn" @click="onSave">保 存</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request"
export default {
  props: ['cfg', 'idx'],
  data () {
    return {
      visible: true,
      step: 0, // 上、下一步切换
      subList: [], // 商品属性集合
      form: {
        saleType: 1,
        name: '',
      },
      natList: [
        {
          name: '颜色',
          value: '',
          items: ['red', 'blue']
        },
        {
          name: '面额',
          value: '',
          items: ['1000', '2000']
        }
      ]
    }
  },
  beforeCreate () {
  },
  created () {
    this.initList()
  },
  methods: {
    initList () {
      let list = []
      this.subList = list
    },
    // 添加属性值
    onAddNat (i) {
      let nat = this.natList[i]
      if (nat.value) {
        nat.items.push(nat.value)
        nat.value = ''
        this.initList()
      }
    },
    // 删除属性值
    onDeleNat (index, idx) {
      let nat = this.natList[index]
      nat.items.splice(idx, 1)
      this.initList()
    },
    onSave () {
      request({
        url: './goods/add',
        method: "post",
        data: this.form
      })
      .then(response => {
        if(response.data.status == 'success') {
          this.$toast('新增成功')
        } else {
          this.$alert('新增失败')
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    onClose () {
      this.cfg.close()
    }
  }
}
</script>
<style lang="less" scoped>
.other-inline{
  display: inline-block;
  input{
    display: inline-block !important;
    width: 120px !important;
    margin-right: 5px;
  }
}
.cate-prop-item{
  margin-bottom: 15px;
  .cate-prop-name{
    font-weight: bold;
    margin-right: 10px;
  }
  .cate-prop-dele{
    font-size: 18px;
    font-weight: bold;
  }
}
.product-add-title{
  font-size: 15px;
  margin-bottom: 15px;
  font-weight: bold;
}
.edit-table{
  border: 1px solid #e6e6e6;
  td, th{
    text-align: center;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    &.edit-td{
      padding: 0;
      .edit-input{
        border: 0;
        display: inline-block;
        outline: 0;
        text-align: center;
        height: auto;
      }
    }
  }
  td{
   background: #fff;
 }
}
.parmpic{
  li{
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
    p.parm-title{
      font-weight: bold;
      margin-top: 5px;
    }
    .parm-example-pic{
      width: 110px;
      height: 110px;
      border: 2px solid #ddd;
      margin-right: 20px;
    }
  }
}
</style>
