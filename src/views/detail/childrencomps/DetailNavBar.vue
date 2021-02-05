<template>
  <NavBar class = "nav-bar">
    <div slot = "left" @click = "back" class = "nav-left">&lt;</div>
    <div slot = "center" class = "nav-bar-center">
      <div class = "nav-bar-item"
           v-for = "(item,index) in cate"
           @click = "navBarClick(index)"
           :class = "{'active':current_index === index}">
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
    props: {
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        cate: [ "商品", "评论", "参数", "推荐" ],
        current_index: this.currentIndex
      }
    },
    methods: {
      navBarClick(index) {
        if (this.current_index !== index) {
          this.current_index = index
          this.$emit("navBarClick", index)
        }
      },
      back() {
        this.$router.back()
      }
    },
    watch: {
      currentIndex() {
        this.current_index = this.currentIndex
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    top: 0;
    background-color: #f3f3f3;
    left: 0;
    right: 0;
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
