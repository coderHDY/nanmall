<template>
  <div class = "good-box">
    <div class = "item-selector">
      <CheckButton :isChecked = "good.isChecked" @click.native = "selectorClick"/>
    </div>
    <div class = "good-img-box">
      <img :src = "good.image" class = "good-img">
    </div>

    <div class = "good-main-message">
      <div class = "good-title">{{good.title}}</div>
      <div class = "good-price">
        {{good.price}}
        <span class = "buy-number">
            ×{{good.number}}
          </span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/common/checkbutton/CheckButton";
  import { SELECT_CHANGE } from "../../../store/mutation-types";

  export default {
    name: "CartGood",
    props: {
      good: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      selectorClick() {
        // this.good.isChecked = !this.good.isChecked
        this.$store.commit(SELECT_CHANGE, this.good.iid)
      }
    }
  }
</script>

<style scoped>
  .good-box {
    position: relative;
    display: flex;
    width: calc(100% - 10px);
    height: 100px;
    padding: 5px;
    margin: 5px;
    border: #e1e1e1 solid 1px;
    border-radius: 10px;
    overflow: hidden;
  }

  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .good-img-box {
    height: 90px;
    width: 75px;
    border-radius: 10px;
    display: inline-block;
    overflow: hidden;
  }

  .good-img {
    width: 100%;
  }

  .good-main-message {
    position: relative;
    display: inline-block;
    width: calc(100% - 100px);
    line-height: normal;
    height: 100%;
    padding: 3px 0px 3px 10px;
    word-wrap: normal;
    overflow: hidden;
  }

  .good-title {
    height: 70%;
    text-overflow: ellipsis;
  }

  .good-price {
    position: relative;
    margin-top: 5px;
    height: auto;
    width: 100%;
    color: var(--color-height-text);
    font-size: 20px;
  }

  .buy-number {
    position: absolute;
    display: inline-block;
    color: #606060;
    font-size: var(--font-size);
    right: 10px;
    padding: 0 2px;
    border: #606060 1px solid;
    border-radius: 3px;
  }
</style>
