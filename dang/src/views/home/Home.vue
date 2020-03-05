<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <scroller class="home-scroller" ref="scroller" :probe-type="3" @scroll="getPostion">
      <home-swiper :img="img"></home-swiper>
      <home-recommend :recommend = "recommend"></home-recommend>
      <advert-title :url="seckillTitle"></advert-title>
      <timer></timer>
      <transverse-scroller :transScroll="transScroll"></transverse-scroller>
      <home-book :homeBook="homeBook"></home-book>
      <home-bag-close :homeBC="homeBC"></home-bag-close>
      <home-guess></home-guess>
      <detile-list :detiles="detileList"></detile-list>
    </scroller>
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
  import HomeNavBar from "components/common/topbar/home/HomeNavBar";
  import Timer from "components/common/timer/Timer";
  import Scroller from "components/common/scroller/Scroller";
  import BackTop from "components/common/backTop/BackTop";
  import AdvertTitle from "components/common/advertTitle/AdvertTitle";

  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";
  import TransverseScroller from "./childComponents/TransverseScroller"
  import HomeBook from "./childComponents/HomeBook";
  import HomeBagClose from "./childComponents/HomeBagClose";
  import HomeGuess from "./childComponents/HomeGuess";
  import DetileList from "./childComponents/DetileList";

  import {homeSwiperRequest} from "network/home"

  export default {
    name: "Home",
    data() {
      return {
        seckillTitle:'',
        img: [],
        recommend :[],
        transScroll:[],
        homeBook:{},
        homeBC:{},
        detileList:[],
        isShowBackTop: false
      }
    },
    components: {
      HomeNavBar,
      Scroller,
      BackTop,
      Timer,
      AdvertTitle,

      HomeSwiper,
      HomeRecommend,
      TransverseScroller,
      HomeBook,
      HomeBagClose,
      HomeGuess,
      DetileList
    },
    created() {
      this.homeRequest()
    },
    methods: {
      homeRequest() {
        homeSwiperRequest().then(res => {
          this.recommend = res.data.recommend
          this.img = res.data.swiperImages
          this.transScroll = res.data.todaySeckill
          this.homeBook =  res.data.homeBook
          this.seckillTitle = res.data.seckillTitle
          this.homeBC = res.data.closeBag
          this.detileList = res.data.detail
        })
      },
      getPostion(postion) {
        this.isShowBackTop = -postion.y > 500
      },
      backTopClick() {
        // 通过$refs拿到组件中的对象
        this.$refs.scroller.scrollTo(0, 0, 500)
      },
    }
  }
</script>

<style scoped>
  .home{
    width: 100%;
  }
  .home-scroller{
    overflow: hidden;
    position: absolute;
    top: 80px;
    bottom: 95px;
    right: 0;
    left: 0;
  }
</style>