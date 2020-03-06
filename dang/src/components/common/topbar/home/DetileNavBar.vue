<template>
  <nav-bar class="detile-nav-bar">
    <img @click="backToHome" class="detile-nav-bar-left"
         slot="left" src="~assets/images/topbar/back.png">
  </nav-bar>
</template>

<script>
  import NavBar from "./childComponents/NavBar";
  export default {
    name: "DetileNavBar",
    components:{
      NavBar
    },
    methods:{
      backToHome(){}
    }
  }
</script>

<style scoped>
  .detile-nav-bar-left image{
    width: 50px;
    height: 50px;
    position: relative;
    margin: 15px;
  }
</style>