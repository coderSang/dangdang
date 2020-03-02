<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in img" :key="item.background">
      <img :src="getImgbackground(item.background)">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper';

  export default {
    name: "HomeSwiper",
    components: {
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
    },
    methods: {
      getImgbackground(bg) {
        return require('@/assets/images/home/'+bg)
      }
    },
  }
</script>

<style scoped>

</style>