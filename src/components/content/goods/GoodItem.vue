<template>
  <div class = "good-item" @click = "toDetail">
    <img :src = "image" @load = "imageLoad">
    <div class = "good-info">
      <p class = "good-title">{{goodItem.title}}</p>
      <span class = "price">￥{{goodItem.price}}</span>
      <span class = "cfav">☆{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodItem",
    props: {
      goodItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      image() {
        return this.goodItem.image || this.goodItem.show.img
      }
    },
    methods: {
      toDetail() {
        this.$router.push({
          path: "detail",
          query: {
            iid: this.goodItem.iid
          }
        })
      },
      imageLoad() {
        if (this.$route.path.indexOf("/home") !== -1) {
          this.$bus.$emit("homeImageLoad")
        } else if (this.$route.path.indexOf("/detail") !== -1) {
          this.$bus.$emit("detailImageLoad")
        }
      }
    }
  }
</script>

<style scoped>
  .good-item {
    display: inline-block;
    width: 140px;
    height: 200px;
    margin: 2%;
    padding-top: 1%;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    border: 1px solid #c7c7c7;
    border-radius: 5px;
  }

  .good-item img {
    height: 80%;
    width: auto;
  }

  .good-info {
    display: block;
    position: relative;
    padding: 5px 10% 5px 10%;
    overflow: hidden;
  }

  .good-info p {
    line-height: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .good-info .price {
    color: var(--color-tint);
    margin-right: 20px;
  }

</style>
