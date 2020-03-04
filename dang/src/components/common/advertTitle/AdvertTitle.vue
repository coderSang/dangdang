<template>
  <div class="advert-title">
    <img :src="url" alt="">
  </div>

</template>

<script>
  export default {
    name: "AdvertTitle",
    props:{
      url:{
        type:String,
        default(){
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  .advert-title{
    width: 100vw;
    height: auto;
  }
  .advert-title img{
    width: 100vw;
    height: auto;
  }
</style>