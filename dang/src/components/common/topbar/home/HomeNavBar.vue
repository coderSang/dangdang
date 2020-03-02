<template>
  <div>
    <nav-bar class="nav-bar">
      <img v-if="!isInputClick" class="home-nav-bar-left"
           slot="left" src="~assets/images/topbar/logo.png" alt="">
      <img v-else @click="InputClickCancel" class="home-nav-bar-left"
           slot="left" src="~assets/images/topbar/back.png">
      <div class="home-nav-bar-center" @click="inputClick" slot="center">
        <img class="search-icon" src="~assets/images/topbar/search.png" alt="">
        <input class="search-input"
               placeholder="三年级课外阅读必读书"
               onkeydown="this.style.color='#404040'"
               type="text">
      </div>
      <img v-if="!isInputClick" class="home-nav-bar-right"
           slot="right" src="~assets/images/topbar/category.png">
      <span v-else
            style="position: relative;top: 10px;background: #fff;color: black"
            class="search-input" slot="right"
            @click="searchInput">
      搜索
    </span>
    </nav-bar>
    <div v-if="isInputClick" class="hot-words">
      <p class="hot-top">热词搜索</p>
      <span class="hot-content" v-for="item in hotWords">
        <a href="">{{item}}</a>
      </span>
    </div>
  </div>

</template>

<script>
  import NavBar from "./childComponents/NavBar";

  export default {
    name: "HomeNavBar",
    data() {
      return {
        isInputClick: false,
        hotWords:['三生三世','星火英语','巴拉巴拉']
      }
    },
    components: {
      NavBar
    },
    methods: {
      inputClick() {
        this.isInputClick = true
      },
      InputClickCancel() {
        this.isInputClick = false
      },
      searchInput() {
        console.log('searchInput');
      }
    }
  }
</script>

<style scoped>
  .nav-bar img {
    width: 50px;
    height: 50px;
    position: relative;
    margin: 15px;
  }

  .home-nav-bar-center {
    background-color: var(--input-search);
    height: 60px;
    margin: 10px;
    border-radius: 20px;
    position: relative;;
  }

  .search-input {
    background: #e8ecf0;
    width: 80%;
    height: 60%;
    border: none;
    outline: none;
    position: relative;
    top: -20px;
    color: #9ca8b0;
  }

  .home-nav-bar-center img {
    width: 30px;
    height: 30px;
    position: relative;
    right: 10px;
    /*top:10px*/
  }

  .hot-words{
    width: 100vh;
    height: 100vh;
    background: #f2f2f2;
  }

  .hot-top{
    padding: 20px;
  }

  .hot-content{
    background: #fff;
    border: 1px black;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }
</style>