<template>
  <div>
    <detile-nav-bar></detile-nav-bar>
  </div>
</template>

<script>
  import DetileNavBar from "components/common/topbar/home/DetileNavBar";
  import {detile} from "network/detile"
  export default {
    name: "Info",
    components:{
      DetileNavBar
    },
    methods:{
      detileRequest(){
        detile().then(res => {
          console.log(res);
        })
      }
    },
    created(){
      this.detileRequest()
    }
  }
</script>

<style scoped>

</style>