<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {

      }
    },
    props:{
      path:{
        type:String,
      },

    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    /*使图片居中*/
    text-align: center;
  }
  .tab-bar-item img {

    vertical-align: middle;
    margin: 14px 0 2px 0;
  }
</style>