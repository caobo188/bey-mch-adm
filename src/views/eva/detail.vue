<template>
  <div class="detail-frame" :style="{zIndex: idx}">
    <div class="page-content">
      <div class="layer-item-title">基本信息</div>
      <div class="detail-item">
        <div class="detail-item-title">用户头像</div>
        <div class="detail-block">
          <img src="../../../static/img/avatar.png" class="eva-detail-img"/>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">用户昵称</div>
        <div class="detail-block">Windir</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">商品</div>
        <div class="detail-block">银色星芒刺绣网纱底裤</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">购买</div>
        <div class="detail-block">肤色/M</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">评价</div>
        <div class="detail-block">4.5颗星</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">评论时间</div>
        <div class="detail-block">2017-06-15 14:35:51</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">IP地址</div>
        <div class="detail-block">192.168.1.92</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">评价内容</div>
        <div class="detail-block">棉布莱卡的出现，不过使内衣面料又多了一种选择与表现。最舒适的面料仍当数棉布，今天的女性依然偏爱棉质内衣，这因为棉布本身独一无二的透气性和天然性，使穿着感受绝不同于其他面料。从美感来说，平织棉布的印花效果和针织棉布的染色效果，都有一种天然纯朴和青春气息，为其他面料所难取代。</div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title">图片</div>
        <div class="detail-block eva-detail-upload">
          <img src="../../../static/img/product.jpg" alt="" />
          <img src="../../../static/img/product.jpg" alt="" />
        </div>
      </div>
      <div class="layer-item-title">回复评价</div>
      <div class="detail-item">
        <div class="detail-item-title">回复内容</div>
        <div class="detail-block eva-detail-reply">
          <textarea placeholder="请输入回复内容"></textarea>
        </div>
      </div>
      <div class="detail-item">
        <div class="detail-item-title"></div>
        <div class="detail-block eva-detail-cfm">
          <button type="button" class="btn">确 认</button>
        </div>
      </div>
      <div class="layer-item-title">全部评论</div>
      <div class="detail-item">
        <div class="detail-item-title">回复评论</div>
        <div class="detail-block">
          <div class="eva-all-item clearfix">
            <div class="eva-all-item-left">
              <img src="../../../static/img/avatar.png" alt="" />
              <p>Eric</p>
            </div>
            <div class="eva-all-item-right">
              <p>挺好啊！</p>
              <p>回复Windir：看来大家都是懒人呀！</p>
              <p>2017-06-15 14:35:51</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cfg', 'idx'],
  data () {
    return {
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.eva-detail-img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.eva-detail-upload{
  img{
    width: 120px;
    height: 120px;
    margin-right: 15px;
  }
}
.eva-all-item{
  display: flex;
  .eva-all-item-left{
    flex: 1;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    p{
      font-weight: bold;
    }
  }
  .eva-all-item-right{
    flex: 3;
    text-align: left;
    p{
      line-height: 26px;
    }
  }
}
.eva-detail-reply{
  padding: 15px;
}
.eva-detail-cfm{
  text-align: left;
  padding-left: 15px;
}
</style>
