<template>
  <div class="category">
    <div style="height: 65px;width: 100vw"></div>
    <!--<div class="side-bar">-->
      <side-bar></side-bar>
    <!--</div>-->
  </div>

</template>

<script>
  import SideBar from "./childComponents/SideBar"
  export default {
    name: "Category",
    components:{
      SideBar
    },
    methods: {

    }
  }
</script>

<style scoped>
  .category{
    background-color: #eef3f9;
  }
</style>