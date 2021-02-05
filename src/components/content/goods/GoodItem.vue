<template>
  <div class = "good-item" @click = "toDetail">
    <a :href = "goodItem.link" :class = "{'active':isUseful}">
      <img v-lazy = "image" @load = "imageLoad">
    </a>

    <div class = "good-info">
      <p class = "good-title">{{goodItem.title}}</p>
      <span class = "price" v-if = "goodItem.price">￥{{goodItem.price}}</span>
      <span class = "cfav" v-if = "goodItem.cfav">☆{{goodItem.cfav}}</span>
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
      },
      isUseful() {
        return this.$route.path.indexOf("/category") === -1
      }
    },
    methods: {
      toDetail() {
        if (this.$route.path.indexOf("/home") !== -1) {
          this.$router.push({
            path: "detail",
            query: {
              iid: this.goodItem.iid
            }
          })
        } else if (this.$route.path.indexOf("/category") !== -1) {
          return
        }
      },
      imageLoad() {
        if (this.$route.path.indexOf("/home") !== -1) {
          this.$bus.$emit("homeImageLoad")
        } else if (this.$route.path.indexOf("/detail") !== -1) {
          this.$bus.$emit("detailImageLoad")
        }
        if (this.$route.path.indexOf("/category") !== -1) {
          this.$bus.$emit("categoryImageLoad")
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

  .active {
    pointer-events: none;
  }
</style>
