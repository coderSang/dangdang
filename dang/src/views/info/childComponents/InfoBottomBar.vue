<template>
  <div class="info-bottom">
    <div class="bar-item info-bottom-left">
      <div>
        <img src="~assets/images/detail/shop.png" alt="">
        <p>店铺</p>
      </div>
      <div>
        <img src="~assets/images/detail/collect.png" alt="">
        <p>收藏</p>
      </div>
      <div>
        <img src="~assets/images/detail/cart.png" alt="">
        <p>购物车</p>
      </div>
    </div>
    <div class="bar-item info-bottom-right">
      <div class="right at-once">
        <p>立即预定</p>
      </div>
      <div class="right buy">
        <p>购买</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoBottomBar",

  }
</script>

<style scoped>
  .info-bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: #fff;
    text-align: center;
    height: 90px;
    z-index: 20;
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item>div{
    flex:1;
  }
  .bar-item>div img{
    width:50px;
  }
  .right{
    font-size: 30px;
    line-height: 90px;
  }
  .at-once{
    background-color: #ffbe23;
    border-radius: 10px 0 0 10px ;
  }
  .buy{
    background-color: #f3554b;
    border-radius:0 10px 10px 0 ;

  }
</style>