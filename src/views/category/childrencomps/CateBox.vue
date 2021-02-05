<template>
  <div>
    <div class = "cate-item"
         v-for = "(item,index) in category"
         :key = "index"
         :class = "{'active':isActive(index)}"
         @click = "itemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CateBox",
    props: {
      category: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    computed: {
      isActive() {
        return index => {
          return this.currentIndex === index
        }
      }
    },
    methods: {
      itemClick(index) {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.$emit("indexChange",index)
        }
      }
    },
    updated() {
      this.$emit("loaded")
    },
  }
</script>

<style scoped>
  .cate-item {
    display: block;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    margin-top: 2px;
    text-align: center;
    background-color: #fff;
  }

  .active {
    background-color: #bcbad6;
  }
</style>
