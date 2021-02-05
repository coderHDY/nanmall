<template>
  <div class = "shop-info">
    <div class = "shop">
      <img :src = "shopInfo.logo" class = "shop-img">
      <span class = "shop-name">{{shopInfo.name}}</span>
    </div>

    <div class = "shop-messages">
      <div class = "shop-message">
        <div class = "sales-volume">
          <div>{{sells}}万</div>
          <div class = "small">总销量</div>
        </div>
        <div class = "sales-volume">
          <div>{{shopInfo.goodsCount}}</div>
          <div class = "small">全部宝贝</div>
        </div>
      </div>
      <div class = "shop-evaluation">
        <div v-for = "item in shopInfo.score">
          {{item.name}}:
          <span :class = "item.isBetter?'high':'low'">{{item.score}}</span>
          <div class = "score">
            <span v-if = "item.score<4.8" class = "green">低</span>
            <span v-else class = "red">高</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      sells() {
        return (Number.parseFloat(this.shopInfo.sells) / 10000).toFixed(2)
      },
    }
  }
</script>

<style scoped>
  .shop-info {
    position: relative;
    margin-top: 20px;
    box-shadow: 0 -3px 3px rgba(100, 100, 100, 0.3);
    overflow: hidden;
  }

  .shop {
    margin-left: 10px;
    height: 60px;
    line-height: 55px;
    width: 100%;
    border-bottom: 1px solid #d4d4d4;
    margin-bottom: 25px;
  }

  .shop-img {
    height: 50px;
    width: 50px;
    vertical-align: middle;
    border-radius: 25px;
    margin-right: 10px;
    overflow: hidden;
  }

  .shop-name {
    vertical-align: top;
    font-size: 20px;
    color: var(--color-text);
  }

  /*总销量*/
  .shop-messages {
    display: flex;
    position: relative;
    margin-top: 10px;
    line-height: 25px;
  }

  .shop-message {
    display: flex;
    flex: 1;
    margin-right: 20px;
    border-right: solid 1px #e1e1e1;
  }

  .sales-volume {
    margin-top: 17px;
    flex: 1;
    text-align: center;
  }

  .small {
    font-size: var(--font-size);
  }

  /*评价*/
  .shop-evaluation {
    position: relative;
    margin-bottom: 5px;
    line-height: 25px;
    flex: 1;
  }

  .score {
    display: inline-block;
    position: absolute;
    right: 20px;
    font-size: 14px;
    color: #cec6e6;
  }

  .low {
    margin-left: 10px;
    color: #22ff2b;
  }

  .high {
    margin-left: 10px;
    color: #ff2c2a;
  }

  .green {
    border-radius: 5px;
    background-color: #22ff2b;
  }

  .red {
    border-radius: 5px;
    background-color: #ff2c2a;
  }
</style>
