<template>
  <tab-bar>
    <tab-bar-item link = "/home">
      <img src = "~assets/img/TabBar/home-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/home-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">首页</div>
    </tab-bar-item>
    <tab-bar-item link = "/category">
      <img src = "~assets/img/TabBar/type-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/type-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">分类</div>
    </tab-bar-item>
    <tab-bar-item link = "/cart">
      <img src = "~assets/img/TabBar/cart-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/cart-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item link = "/me">
      <img src = "~assets/img/TabBar/user-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/user-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "mainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
