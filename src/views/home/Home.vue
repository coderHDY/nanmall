<template>
  <div>
    <HomeNavBar/>
    <HomeSwipe :banners = "banners" class = "home-swipe"></HomeSwipe>
  </div>
</template>

<script>
  import HomeNavBar from "./childrenComps/HomeNavBar";
  import HomeSwipe from "./childrenComps/HomeSwipe";


  export default {
    name: "Home.vue",
    components: {
      HomeNavBar,
      HomeSwipe
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      homeInitRequest().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>


  .home-swipe {
    top: 44px;
  }

</style>
