<template>
  <div>
    <div class = "buy-box" v-if = "isShowBuy">
      <div class = "select-box">
        <CheckButton :isChecked = "isChecked" @click.native = "selectAll"/>
      </div>
      <span>全选</span>
      <div class = "price-box">
        <span class = "price">￥{{totlePrice}}</span>
      </div>
      <div class = "buy" @click = "buy">
        购买
      </div>
    </div>

    <div v-else class = "shopListNull">
      <div>购物车空空如也~</div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/common/checkbutton/CheckButton";
  import { DESELECT_ALL, SELECT_ALL } from "../../../store/mutation-types";

  export default {
    name: "CartBuy",
    components: {
      CheckButton
    },
    computed: {
      totlePrice() {
        let sum = this.$store.state.cartList.filter(item => item.isChecked === true).reduce((preValue, obj) => {
          return obj.price * obj.number + preValue
        }, 0)
        return (sum).toFixed(2)
      },
      isShowBuy() {
        return this.$store.state.cartList.length
      },
      isChecked() {
        return this.$store.state.cartList.find(item => !item.isChecked) === undefined
        // true是是全选了
      }
    },
    methods: {
      selectAll() {
        if (this.isChecked) {
          this.$store.commit(DESELECT_ALL)
        } else {
          this.$store.commit(SELECT_ALL)
        }
      },
      buy() {
        this.$emit("buy")
      }
    }
  }
</script>

<style scoped>
  .buy-box {
    position: fixed;
    display: flex;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 45px;
    line-height: 45px;
    background-color: #f4f4f4;
    overflow: hidden;
  }

  .select-box {
    margin: 0 10px 0 10px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .price-box {
    position: absolute;
    right: 130px;
  }

  .price {
    font-size: 20px;
    color: #488acc;
  }

  .buy {
    position: absolute;
    width: 100px;
    height: 40px;
    line-height: 40px;
    right: 20px;
    text-align: center;
    vertical-align: top;
    border-radius: 20px;
    border: 1px solid #cccccc;
    background-color: #cc322a;
    color: #f1f1f1;
  }

  .shopListNull {
    display: block;
    position: absolute;
    text-align: center;
    font-size: 30px;
    font-family: 华文行楷;
    left: 0;
    right: 0;
    top: 60px;
  }
</style>
