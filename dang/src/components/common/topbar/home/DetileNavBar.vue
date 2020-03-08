<template>
  <div>
    <nav-bar class="detile-nav-bar">
      <img @click="backToHome" class="detile-nav-bar-left"
           slot="left" src="~assets/images/topbar/back.png">
      <div class="detail-nav-bar-center" slot="center">

        <span  v-for="(item,index) in infoParam" :class="{'active': index===currentIndex}" @click="itemClick(index)">
        {{item}}
        </span>
      </div>
    </nav-bar>
  </div>

</template>

<script>
  import NavBar from "./childComponents/NavBar";

  export default {
    name: "DetileNavBar",
    components: {
      NavBar,
    },
    props: {
      infoParam: {
        type: Array,
        default(){
          return ['商品', '详情']
        }
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      backToHome() {
        this.$router.go(-1)
      },
      itemClick(index) {
        this.$emit('itemClick', index)
      }
    }
  }
</script>

<style scoped>
  .detile-nav-bar img {
    width: 50px;
    height: 50px;
    position: relative;
    margin: 15px;
  }

  .detail-nav-bar-center {
    text-align: center;
    height: 100%;
  }

  .detail-nav-bar-center > span {
    margin: 30px;
    line-height: 100%;
  }

  .active {
    color: var(--color-high-text);
  }

</style>