<template>
  <div class = "good-info-box">
    <div class = "title">{{goodInfo.title}}</div>
    <div class = "price">
      {{goodInfo.newPrice}}
      <del class = "old-price">{{goodInfo.oldPrice}}</del>
      <div class = "discount" v-show = "showDiscount">
        {{goodInfo.discount}}
      </div>
    </div>
    <div class = "column">
      <span v-for = "item in goodInfo.columns" class = "column-item">{{item}}</span>
    </div>
    <div class = "services">
      <div v-for = "item in goodInfo.services" class = "service">
        <img :src = "item.icon" class = "service-icon" v-if = "item.icon">
        <span class = "service-name">{{item.name}}</span>
      </div>
    </div>
  </div>

</template>

<script>
  // 商品主要信息（轮播图下面）
  export default {
    name: "DetailBaseInfo",
    props: {
      goodInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showDiscount() {
        return this.goodInfo.discount && this.goodInfo.discount.trim() !== ''
      }
    }
  }
</script>

<style scoped>
  .good-info-box {
    margin: 10px;
  }

  /*介绍栏*/
  .title {
    font-size: 17px;
    font-family: 华文行楷;
    margin-bottom: 15px;
  }

  /*价格栏*/
  .price {
    font-size: 22px;
    color: var(--color-height-text);
  }

  .old-price {
    font-size: var(--font-size);
    color: #464646;
  }

  /*价格小提示*/
  .discount {
    position: relative;
    display: inline-block;
    margin-left: 5px;
    height: 25px;
    line-height: 20px;
    vertical-align: top;
    border-radius: 13px;
    width: auto;
    padding: 3px;
    font-size: 12px;
    background-color: var(--color-height-text);
    color: #f3f3f3;
  }

  /*销量类提示栏*/
  .column {
    display: flex;
    position: relative;
    margin-top: 20px;
    margin-bottom: 10px;
    justify-content: space-between;
    font-size: small;
    color: #d0d0d0;
  }

  /*服务栏*/
  .services {
    display: flex;
    position: relative;
    margin-top: 25px;
    font-size: 10px;
    justify-content: space-between;
  }

  .service-icon {
    height: 10px;
    margin-right: 3px;
  }
</style>
