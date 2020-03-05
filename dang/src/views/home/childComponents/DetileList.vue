<template>
  <div class="detile-list">
    <detile-list-item v-for="(item_,index) in detiles" :key="index" :item="item_"></detile-list-item>
  </div>
</template>

<script>
  import DetileListItem from './DetileListItem'
  export default {
    name: "DetileList",
    props:{
      detiles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      DetileListItem
    },
  }
</script>

<style scoped>
  .detile-list{
    display: flex;
  }

</style>