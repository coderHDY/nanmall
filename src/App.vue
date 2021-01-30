<template>
  <div id = "app">
    <keep-alive exclude = "Detail">
      <router-view/>
    </keep-alive>
    <mainTabBar/>
  </div>
</template>

<script>
  import mainTabBar from "components/content/maintabbar/mainTabBar";

  export default {
    name: "App",
    components: {
      mainTabBar
    }
  }
</script>
<style lang = "stylus">
  @import "assets/css/baseConfig/base.css";
</style>
