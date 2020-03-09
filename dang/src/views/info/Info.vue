<template>
  <div>
    <detile-nav-bar></detile-nav-bar>
    <info-swiper :img="img"></info-swiper>
    <info-advert :contents="contents" :coverContent="coverContent" :coverType="coverType"
                 :coverMoney="coverMoney"></info-advert>
    <info-bottom-bar @addToCart="addToCart"></info-bottom-bar>
  </div>
</template>

<script>
  import DetileNavBar from "components/common/topbar/home/DetileNavBar";
  import {detile} from "network/detile"

  import InfoSwiper from "./childComponents/InfoSwiper"
  import InfoAdvert from "./childComponents/InfoAdvert"
  import InfoBottomBar from "./childComponents/InfoBottomBar"

  export default {
    name: "Info",
    data() {
      return {
        iid: '',
        img: [],
        contents: {},
        coverMoney: 0,
        coverType: [],
        coverContent: ''
      }
    },
    components: {
      DetileNavBar,

      InfoSwiper,
      InfoAdvert,
      InfoBottomBar,
    },
    methods: {
      detileRequest() {
        // 1.获取iid
        const iid = this.$route.query.iid
        this.iid = iid

        detile().then(res => {
          this.img = res.data.detail[Number(iid) - 10].contents.listImg
          this.contents = res.data.detail[Number(iid) - 10].contents
          this.coverMoney = res.data.detail[Number(iid) - 10].coverMoney
          this.coverType = res.data.detail[Number(iid) - 10].coverType
          this.coverContent = res.data.detail[Number(iid) - 10].coverContent
        })
      },
      //购物车
      addToCart() {
        // 1.获取需要展示到购物车的商品信息
        const obj = {
          image: this.img[0],
          title: this.coverContent,
          desc: this.coverType[0],
          price: this.coverMoney,
          id: this.iid
        };
        // 2.将商品数据传到购物车页面
        this.$store.dispatch("setCateGoryData", obj);
      }
    },
    created() {
      this.detileRequest()
    }
  }
</script>

<style scoped>

</style>