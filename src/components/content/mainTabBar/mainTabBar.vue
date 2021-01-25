<template>
  <tab-bar>
    <tab-bar-item link="/Home">
      <img src = "~assets/img/TabBar/home-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/home-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/Category">
      <img src = "~assets/img/TabBar/type-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/type-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/Cert">
      <img src = "~assets/img/TabBar/cert-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/cert-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/Me">
      <img src = "~assets/img/TabBar/user-black.svg" slot = "item-icon">
      <img src = "~assets/img/TabBar/user-blue.svg" slot = "item-icon-active">
      <div slot = "item-name">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/TabBar/TabBar";
  import TabBarItem from "../../common/TabBar/TabBarItem";

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
