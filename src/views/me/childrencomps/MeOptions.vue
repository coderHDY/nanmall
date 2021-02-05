<template>
  <div class = "comps-box">

    <div class = "comps">
      <img src = "~assets/img/me/orders.svg">
      <span>我的订单</span>
    </div>
    <div class = "comps">
      <img src = "~assets/img/me/place.svg">
      <span>收货地址</span>
    </div>
    <div class = "comps">
      <img src = "~assets/img/me/me.svg">
      <span>个人信息</span>
    </div>
    <div class = "comps">
      <img src = "~assets/img/me/watcher.svg">
      <span>设置</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: "MeOptions",
    components: {}
  }
</script>

<style scoped>
  .comps-box {
    position: relative;
    width: 100%;
    margin-top: 10px;
  }

  .comps-box img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .comps {
    position: relative;
    display: block;
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    text-align: left;
    padding: 10px 20px;
    margin-top: 5px;
  }
</style>
