<template>
  <div class="info-ad">
    <span style="color: white;background: red;border-radius: 7px;margin: 0 5px">{{coverType[0]}}</span>
    <span style="font-size: 30px">{{coverContent}}</span>
    <p class="intro">{{contents.advert}}</p>
    <div>
      <span>￥</span>
      <span class="price">{{coverMoney}}</span>
      <span style="color: rgba(119, 119, 119, 0.87);">({{(coverMoney*10/contents.oldPrice).toFixed(2)}}折)</span>
    </div>
    <div>
      <span>定价</span>
      <span style="text-decoration:line-through">￥{{contents.oldPrice}}</span>
    </div>
    <img class="info-ad-img" :src="contents.about" alt="">
    <!--{{coverPrice}}-->
  </div>
</template>

<script>
  export default {
    name: "InfoAdvert",
    props:{
      contents:{
        type:Object,
        default(){
          return {}
        }
      },
      coverMoney:{
        type: Number,
        default(){
          return 0
        }
      },
      coverType:{
        type:Array,
        default(){
          return []
        }
      },
      coverContent:{
        type:String,
        default(){
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .info-ad{
    margin: 0 13px;
  }
  .intro{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:3;
    overflow: hidden;
    line-height: 30px;
    color: rgba(119, 119, 119, 0.87);
  }
  .price{
    font-size: 44px;
    color: red;
  }
  .info-ad-img{
    width: 98vw;
  }
</style>