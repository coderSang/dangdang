<template>
  <div class="home-bc">
    <section class="home-bc-top"></section>
    <advert-title :url="homeBC.title"></advert-title>
    <advert-category :contents="homeBC.contents"></advert-category>
    <advert-title :url="homeBC.highlyRecommended"></advert-title>
    <two-clos-content :mainContents="getTwoClo()"></two-clos-content>
    <four-clos-content :mainContents="getFourClo()"></four-clos-content>
  </div>
</template>

<script>
  import AdvertTitle from "components/common/advertTitle/AdvertTitle";
  import AdvertCategory from "components/common/advertCategory/AdvertCategory";
  import FourClosContent from "components/common/contents/FourClosContent";
  import TwoClosContent from "components/common/contents/TwoClosContent";

  export default {
    name: "HomeBagClose",
    components: {
      AdvertTitle,
      AdvertCategory,
      FourClosContent,
      TwoClosContent
    },
    props: {
      homeBC: {
        type: Object,
        default() {
          return {
            "title": "",
            "contents": [],
            "highlyRecommended": [],
            "mainContents": []
          }
        }
      },
    },
    methods:{
      getTwoClo(){
        if(this.homeBC.mainContents!==undefined){
          return this.homeBC.mainContents.slice(4,6)
        }
        else{
          return []
        }
      },
      getFourClo(){
        if(this.homeBC.mainContents!==undefined){
          return this.homeBC.mainContents.slice(0,4)
        }
        else{
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .home-bc-top {
    display: block;
    height: 10px;
    background: #eff4fa;
  }
</style>