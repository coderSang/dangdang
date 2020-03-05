<template>
  <div class="detile" @click="gotoInfo()" :key="item.iid">
    <button style="width: 100%;height: 100%;" @click="">
      <img :src="item.coverImg" alt="">
      <span class="intro">{{item.coverContent}}</span>
      <span class="type" v-for="type in item.coverType">{{type}}</span>
      <p style="color:red;font-size: 35px">￥{{item.coverMoney.toFixed(2)}}</p>
      <!--<div @click="gotoInfo()" style="height: 200px;background: #000;"></div>-->
      <!--<button >查看详情</button>-->
    </button>

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
        console.log("1");
        // 1.获取iid
        let iid = this.item.iid;
        console.log(iid);
        // 2.跳转到详情页面
        this.$router.push({path: '/info', query: {iid}}).catch(err=>{
          //高版本router存在的问题
          // console.log(err);
        })

      }
    },
    mounted(){
      let b = document.getElementsByClassName("detile");
      b.onclick=function () {
        console.log('11');
      }
    }
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