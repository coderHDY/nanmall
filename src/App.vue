<template>
  <div id = "app">
    <router-view/>
    <mainTabBar/>
  </div>
</template>

<script>
  import mainTabBar from "components/content/mainTabBar/mainTabBar";

  export default {
    name: "App",
    components: {
      mainTabBar
    },
    methods: {}
  }
</script>
<style lang = "stylus">
  @import "assets/css/baseConfig/base.css";
</style>
