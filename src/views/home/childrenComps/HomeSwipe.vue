<template>
  <Swiper>
    <SwiperItem v-for = "item in banners">
      <a :href = "item.link">
        <img :src = "item.image" alt = "">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper/index";

  export default {
    name: "HomeSwipe",
    components: {
      Swiper,
      SwiperItem
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
