<template>
  <NavBar class = "nav-bar">
    <div slot = "left" @click = "back" class = "nav-left">&lt;</div>
    <div slot = "center" class = "nav-bar-center">
      <div class = "nav-bar-item"
           v-for = "(item,index) in cate"
           @click = "navBarClick(index)"
           :class = "{'active':currentIndex === index}">
        {{item}}
      </div>
    </div>
    <div slot = "right" class = "nav-right">· · ·</div>
  </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        cate: [ "商品", "参数", "评论", "推荐" ],
        currentIndex: 0
      }
    },
    methods: {
      navBarClick(index) {
        this.currentIndex = index
      },
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    top: 0;
    background-color: #f3f3f3;
  }

  .nav-bar-center {
    display: flex;
  }

  .nav-bar-item {
    flex: 1;
  }

  .nav-left {
    border-right: 1px solid #e1e1e1;
  }

  .nav-right {
    border-left: 1px solid #e1e1e1;
  }

  .active {
    color: var(--color-height-text);
  }

</style>
