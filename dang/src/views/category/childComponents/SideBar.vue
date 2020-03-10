<template>
  <div class="side-bar" >
    <scroller :probe-type="3" class="side-bar-scroller">
      <ul>
        <a href="" v-for="item in cate">
          <li class="on">{{item}}</li>
        </a>
      </ul>
    </scroller>

  </div>
</template>

<script>
  import Scroller from "components/common/scroller/Scroller";

  export default {
    name: "SideBar",
    components:{
      Scroller
    },
    data(){
      return{
        cate:["图书","童书","电子书","手机数码","创意文具","女装","电脑办公",
          "食品生鲜", "母婴玩具","童装童鞋","户外运动","美妆个护","男装",
          "男女鞋","手表眼镜","厨房用品","家用电器","内衣装饰","家居家纺"]
      }
    }
  }
</script>

<style scoped>
  .side-bar{
    width: 180px;
    background: #fdfdfe;
  }
  .on{
    padding: 40px 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .side-bar-scroller{
    overflow: hidden;
    position: absolute;
    width: 180px;
    top: 80px;
    bottom: 95px;

  }
</style>