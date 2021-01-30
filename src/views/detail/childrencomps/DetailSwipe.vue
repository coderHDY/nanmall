<template>
  <div>
    <Swiper class = "topImages">
      <SwiperItem v-for = "item in topImages">
        <a href = "#">
          <img :src = "item">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper";

  export default {
    name: "DetailSwipe",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .topImages {
    height: 350px;
    overflow: hidden;
  }
</style>
