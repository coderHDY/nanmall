<template>
  <div class = "wrapper" ref = "wrapper">
    <div class = "content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BS from "better-scroll"

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BS(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true
      })
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position)
      });
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
          setTimeout(() => {
            this.scroll.finishPullUp()
          }, 2000)
        })
      }
    },
    methods: {
      backTop(x = 0, y = 0, time = 300) {
        this.scroll.scrollTo(x, y, time)
      },
      getPositionY() {
        return this.scroll.y
      },
      refresh() {
        // console.log("判断成功");
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
