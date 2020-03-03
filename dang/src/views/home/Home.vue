<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <home-swiper :img="img"></home-swiper>
    <div v-for="i in (recommend.length)/5">
      <home-recommend :recommend = "recommend.slice(i*5-5,i*5)"></home-recommend>
    </div>
    <img src="~assets/images/home/mao_title.jpg" style="width: 100%" alt="">
    <timer></timer>
  </div>
</template>

<script>
  import HomeNavBar from "components/common/topbar/home/HomeNavBar";
  import Timer from "components/common/timer/Timer";
  import Scroller from "components/common/scroller/Scroller";

  import HomeSwiper from "./childComponents/HomeSwiper";
  import HomeRecommend from "./childComponents/HomeRecommend";

  import {homeSwiperRequest} from "network/home"

  export default {
    name: "Home",
    data() {
      return {
        img: [],
        recommend :[]
      }
    },
    components: {
      HomeNavBar,
      Scroller,
      Timer,

      HomeSwiper,
      HomeRecommend
    },
    created() {
      this.homeRequest()
    },
    methods: {
      homeRequest() {
        homeSwiperRequest().then(res => {
          this.recommend = res.data.recommend
          this.img = res.data.swiperImages

        })
      }
    }
  }
</script>

<style scoped>
  .home{
    width: 100%;
  }
</style>