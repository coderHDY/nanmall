<template>
  <div>
    <MeNavBar/>
    <MeMessage :me-message = "meMessage"/>
    <MeDetails/>
    <MeOptions/>
  </div>
</template>

<script>
  // 内部调用
  import MeNavBar from "./childrencomps/MeNavBar";
  import MeMessage from "./childrencomps/MeMessage";
  import MeDetails from "./childrencomps/MeDetails";
  import MeOptions from "./childrencomps/MeOptions";

  export default {
    name: "MyMessage",
    components: {
      MeNavBar,
      MeMessage,
      MeDetails,
      MeOptions
    },
    data() {
      return {
        meMessage: {
          name: '秃头程序猿',
          image: '~assets/img/common/2021go.svg'
        }
      }
    }
  }
</script>

<style scoped>

</style>
