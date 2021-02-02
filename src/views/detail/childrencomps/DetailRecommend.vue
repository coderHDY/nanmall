<template>
  <GoodsList :goods = "recommend"/>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "DetailRecommend",
    components: {
      GoodsList
    },
    props: {
      recommend: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>
