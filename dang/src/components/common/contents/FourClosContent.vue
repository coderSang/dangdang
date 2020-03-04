<template>
  <div class="main-contents">
    <div class="main-contents-item" v-for="cont in mainContents">
      <p class="main-contents-item-first">{{cont.type}}</p>
      <p class="main-contents-item-second">{{cont.info}}</p>
      <img class="main-contents-item-img" :src="cont.url" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "FourClosContent",
    props:{
      mainContents:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .main-contents {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    padding: 2px
  }

  .main-contents-item {
    border: 1px solid #cccccc;
    flex: 1;
    text-align: center
  }

  .main-contents-item-first {
    font-size: 25px;
    margin-top: 10px
  }

  .main-contents-item-second {
    color: red;
    font-size: 22px
  }

  .main-contents-item-img {
    width: 18vw;
  }
</style>