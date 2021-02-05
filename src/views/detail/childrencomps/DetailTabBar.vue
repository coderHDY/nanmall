<template>
  <div class = "tabBar">
    <div class = "tabBar-shop">
      <img src = "~assets/img/detail/shop.svg">
      <div>店铺</div>
    </div>
    <div class = "tabBar-ai">
      <img src = "~assets/img/detail/chat.svg">
      <div>客服</div>
    </div>
    <div class = "tabBar-collection">
      <img src = "~assets/img/detail/star.svg">
      <div>收藏</div>
    </div>
    <div class = "tabBar-add-cert" @click = "addCart">
      <span>加入购物车</span>
    </div>
    <div class = "tabBar-buy" @click = "buy">
      <div>购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTabBar",
    methods: {
      addCart() {
        this.$emit("addCart")
      },
      buy() {
        this.$emit("buy")
      }
    }
  }
</script>

<style scoped>
  .tabBar {
    display: flex;
    position: fixed;
    height: 50px;
    width: 100%;
    bottom: 0;
    background-color: #ffffff;
    text-align: center;
    box-shadow: 0 2px 2px rgba(100, 100, 100, 0.2);
    z-index: 999 !important;
  }

  .tabBar-shop,
  .tabBar-ai,
  .tabBar-collection {
    flex: 1;
    font-size: 12px;
    vertical-align: bottom;
    margin-top: 10px;
  }

  .tabBar-shop img,
  .tabBar-ai img,
  .tabBar-collection img {
    display: inline-block;
    height: 20px;
    vertical-align: middle;
    margin-bottom: 3px;
  }

  /*加入购物车*/
  .tabBar-add-cert {
    flex: 2;
    margin: 8px 0;
    line-height: 34px;
    height: 34px;
    background-color: #9ae6a8;
    border-radius: 17px 0 0 17px;
  }

  /*购买*/
  .tabBar-buy {
    flex: 2;
    line-height: 34px;
    height: 34px;
    background-color: #e68e69;
    margin: 8px 0;
    border-radius: 0 17px 17px 0;
  }
</style>
