<template>
  <div id = "cart">
    <CartNavBar :length = "length"/>
    <Scroll class = "scroll" ref = "scroll">
      <CartGood v-for = "(item,index) in list" :good = "item" :key = "index"/>
    </Scroll>
    <CartBuy @buy = "buy"/>
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
    },
    methods: {
      buy() {
        if (this.$store.state.cartList.find(item => item.isChecked)) {
          this.$toast.show("这是个人作品网站，没有商业性质，别乱花钱哦！", 4000)
        } else {
          this.$toast.show("请先添加商品！", 4000)
        }
      }
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




