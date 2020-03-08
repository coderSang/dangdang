<template>
  <div class="detile" @click="gotoInfo()" :key="item.iid">
    <img @click="" :src="item.coverImg" alt="">
    <span @click="" class="intro">{{item.coverContent}}</span>
    <span @click="" class="type" v-for="type in item.coverType">{{type}}</span>
    <p @click="" style="color:red;font-size: 35px">￥{{item.coverMoney.toFixed(2)}}</p>
  </div>
</template>

<script>
  export default {
    name: "DetileListItem",
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      gotoInfo(){
        // 1.获取iid
        let iid = this.item.iid;
        // 2.跳转到详情页面
        this.$router.push({path: '/info', query: {iid}}).catch(err=>{
          //高版本router存在的问题
          // console.log(err);
        })
      }
    },
  }
</script>

<style scoped>
  .detile{
    flex: 1;
    height: auto;
  }
  .intro{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
  }
  .type{
    color: red;
    margin: 10px;
  }
</style>