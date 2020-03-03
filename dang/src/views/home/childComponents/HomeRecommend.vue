<template>
  <div class="home-recommend">
    <div class="line" v-for="item in recommend">
      <img class="image" :src="getbackground(item)" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommend:{
        type :Array,
        default(){
          return []
        }
      }
    },
    methods: {
      getbackground(item) {
        return require('@/assets/images/home/'+item.background)
      }
    },
  }
</script>

<style scoped>
  .home-recommend{
    position: relative;
    width: 100%;
    display: flex;
  }
  .line{

    width: 100vw;
  }
  .image{
    height: 2rem;
    flex: 1;
    width: 2rem;
  }
</style>