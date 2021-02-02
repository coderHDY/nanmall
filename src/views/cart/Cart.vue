<template>
  <div id = "cart">
    <CartNavBar :length = "length"/>
    <Scroll class = "scroll" ref = "scroll">
      <CartGood v-for = "(item,index) in list" :good = "item" :key = "index"/>
    </Scroll>
    <CartBuy/>
  </div>
</template>

<script>
  // 内部
  import CartNavBar from "./childrencomps/CartNavBar";
  import CartGood from "./childrencomps/CartGood";
  import CartBuy from "./childrencomps/CartBuy";
  // 外部
  import Scroll from "components/common/scroll/Scroll";
  import { mapGetters } from "vuex"
  // 网络模块
  export default {
    name: "Cart",
    components: {
      CartNavBar,
      Scroll,
      CartGood,
      CartBuy
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    computed: {
      ...mapGetters({
        length: "cartLength",
        list: "cartList"
      })
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
  }

  .scroll {
    position: fixed;
    top: 44px;
    height: calc(100% - 49px - 45px - 44px);
  }
</style>




