<template>
  <div>
    <home-nav-bar></home-nav-bar>
    <home-swiper :img="img"></home-swiper>
  </div>
</template>

<script>
  import HomeNavBar from "components/common/topbar/home/HomeNavBar";
  import HomeSwiper from "./childComponents/HomeSwiper";
  import Scroller from "components/common/scroller/Scroller";

  import {homeSwiperRequest} from "network/home"

  export default {
    name: "Home",
    data() {
      return {
        img: []
      }
    },
    components: {
      HomeSwiper,
      HomeNavBar,
      Scroller
    },
    created() {
      this.homeSwiper()
    },
    methods: {
      homeSwiper() {
        homeSwiperRequest().then(res => {
          this.img = res.data.images
        })
      }
    }
  }
</script>

<style scoped>

</style>