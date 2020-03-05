<template>
  
</template>

<script>
  import {detile} from "network/detile"
  export default {
    name: "Info",
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