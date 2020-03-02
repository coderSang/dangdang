<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/icon.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/icon_active.png" alt="">
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/feilei.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/feilei_active.png" alt="">
    </tab-bar-item>
    <tab-bar-item path="/worth" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/ic_buy_normal.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/ic_buy_normal_active.png" alt="">
    </tab-bar-item>
    <tab-bar-item path="/cart" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/guowuche.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/guowuche_active.png" alt="">
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/wodedangdang.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/wodedangdang_active.png" alt="">
    </tab-bar-item>
  </tab-bar>

</template>

<script>
  import TabBar from "./childComponents/TabBar";
  import TabBarItem from "./childComponents/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>