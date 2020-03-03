<template>

  <div class="wrapper">
      <ul class="content">

        <li class="li">
          <p class="pic"><img class="mypic" src="~assets/images/home/bag.jpg" alt=""></p>
          <p class="name">1元秒杀，限量抢购，抢完即止！</p>
          <div class="price">
            <p class="new">￥1</p>
            <p class="old">￥234</p>
          </div>
        </li>
        <li class="li">
          <p class="pic"><img class="mypic" src="~assets/images/home/bag.jpg" alt=""></p>
          <p class="name">1元秒杀，限量抢购，抢完即止！</p>
          <div class="price">
            <p>￥1</p>
            <p>￥234</p>
          </div>
        </li>
        <li class="li">
          <p class="pic"><img class="mypic" src="~assets/images/home/bag.jpg" alt=""></p>
          <p class="name">1元秒杀，限量抢购，抢完即止！</p>
          <div class="price">
            <p>￥1</p>
            <p>￥234</p>
          </div>
        </li>
        <li class="li">
          <p class="pic"><img class="mypic" src="~assets/images/home/bag.jpg" alt=""></p>
          <p class="name">1元秒杀，限量抢购，抢完即止！</p>
          <div class="price">
            <p>￥1</p>
            <p>￥234</p>
          </div>
        </li>
        <li class="li">
          <p class="pic"><img class="mypic" src="~assets/images/home/bag.jpg" alt=""></p>
          <p class="name">1元秒杀，限量抢购，抢完即止！</p>
          <div class="price">
            <p>￥1</p>
            <p>￥234</p>
          </div>
        </li>
        <li class="li">
          <p class="pic"><img class="mypic" src="~assets/images/home/bag.jpg" alt=""></p>
          <p class="name">1元秒杀，限量抢购，抢完即止！</p>
          <div class="price">
            <p>￥1</p>
            <p>￥234</p>
          </div>
        </li>
        <li class="li">
          <p class="pic"><img class="mypic" src="~assets/images/home/bag.jpg" alt=""></p>
          <p class="name">1元秒杀，限量抢购，抢完即止！</p>
          <div class="price">
            <p>￥1</p>
            <p>￥234</p>
          </div>
        </li>

      </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Profile",
    components: {
      BScroll
    },
    data() {
      return {
        scroller: {
          type: Object,
          default() {
            return {}
          }
        }
      }
    },
    mounted() {
      this.$nextTick(()=>{
        let wrapper = document.querySelector('.wrapper')
        this.scroller = new BScroll(wrapper, {
          probeType: 3,
          scrollX:true,
          scrollY:false
        })
        console.log(this.scroller)
      })
    },
  }
</script>

<style scoped>
  .wrapper {

    overflow: hidden;
    width: 100vw;
  }

  .content {
    /*这里定了七个的长度（25+2+2）*7  */
    width: 203vw;
    display: flex;
  }

  .li{
    width: 25vw;
    margin: 2vw;
  }

  .mypic{
    width: 25vw;
    height:25vw;
  }
  .name{
    font-size: 30px;
    margin-top: 1vw;
    line-height: 40px;
    height: 80px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price{
    text-align: left;
  }
  .old{
    text-decoration:line-through
  }
  .new{
    color: red;
  }

</style>