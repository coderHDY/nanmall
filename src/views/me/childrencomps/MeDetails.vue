<template>
  <tab-bar id = "me-tab-bar">
    <tab-bar-item>
      <img src = "~assets/img/me/money.svg" slot = "item-icon">
      <div slot = "item-name">余额</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src = "~assets/img/me/present.svg" slot = "item-icon">
      <div slot = "item-name">积分</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src = "~assets/img/me/moneybox.svg" slot = "item-icon">
      <div slot = "item-name">卡</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src = "~assets/img/me/redbeg.svg" slot = "item-icon">
      <div slot = "item-name">优惠券/码</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src = "~assets/img/me/oldmoney.svg" slot = "item-icon">
      <div slot = "item-name">零钱</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MeDetails",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>
  #me-tab-bar {
    position: relative;
    margin-top: 15px;
  }

  #me-tab-bar img {
    margin-bottom: 3px;
  }
</style>
