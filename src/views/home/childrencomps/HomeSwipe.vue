<template>
  <Swiper>
    <SwiperItem v-for = "(item,index) in banners">
      <a :href = "item.link" :key = "index">
        <img :src = "item.image" @load = "imageLoad">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper/index";

  export default {
    name: "HomeSwipe",
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if (this.isLoad === false) {
          this.$emit("imageLoad");
          this.isLoad = true
        }
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
