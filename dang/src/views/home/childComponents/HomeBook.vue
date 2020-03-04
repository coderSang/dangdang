<template>
  <div class="home-book">
    <section class="home-book-top"></section>
    <advert-title :url="homeBook.title"></advert-title>
    <advert-category :contents="homeBook.contents"></advert-category>
    <advert-title :url="homeBook.highlyRecommended"></advert-title>
    <three-clos-content :mainContents="homeBook.mainContents"></three-clos-content>
  </div>
</template>

<script>
  import AdvertTitle from "components/common/advertTitle/AdvertTitle";
  import AdvertCategory from "components/common/advertCategory/AdvertCategory";
  import ThreeClosContent from "components/common/contents/ThreeClosContent";
  export default {
    name: "HomeBook",
    props: {
      homeBook: {
        type: Object,
        default() {
          return {
            "title": "",
            "contents": [],
            "highlyRecommended": [],
            "mainContents": []
          }
        }
      }
    },
    components:{
      AdvertTitle,
      AdvertCategory,
      ThreeClosContent
    }
  }
</script>

<style scoped>
  .home-book-top {
    display: block;
    height: 10px;
    background: #eff4fa;
  }
</style>