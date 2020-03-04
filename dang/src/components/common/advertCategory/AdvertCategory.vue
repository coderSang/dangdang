<template>
<!--  <div class="contents">-->
<!--  </div>-->
  <div class="contents">
    <div class="contents-item" v-for="item in contents">
      <span>{{item}}</span>
      <img class="item-icon" src="~assets/images/home/next.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "AdvertCategory",
    props:{
      contents:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

  .contents {
    display: flex;
    margin-bottom: 5px;
  }

  .contents-item {
    vertical-align: middle;
    flex: 1;
    text-align: center;
  }

  .item-icon {
    height: 25px;
    margin: 0 5px 0 5px;
  }

</style>