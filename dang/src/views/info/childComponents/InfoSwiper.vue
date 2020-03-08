<template>
  <swiper class="info-swiper">
    <swiper-item v-for="(item,index) in img" :key="index">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper';
  export default {
    name: "InfoSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props: {
      img: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .info-swiper{
    border:1px black;
  }
</style>