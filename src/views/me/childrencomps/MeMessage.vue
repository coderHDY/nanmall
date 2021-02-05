<template>
  <div class = "me-message">
    <div class = "me-img-box">
      <img src = "~assets/img/common/2021go.svg" class = "me-img">
    </div>
    <div class = "me-name">{{meMessage.name}}</div>
  </div>
</template>

<script>
  export default {
    name: "MeMessage",
    props: {
      meMessage: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .me-message {
    position: relative;
    display: flex;
    margin-top: 44px;
    height: 100px;
    width: 100vw;
    padding: 10px 30px;
    border-top: 1px solid #333333;
    box-shadow: 0 4px 4px rgba(100, 100, 100, 0.3);
    overflow: hidden;
  }

  .me-img-box {
    display: inline-block;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 1px solid #d6d6d6;
    overflow: hidden;
  }

  .me-img {
    width: 100%;
  }

  .me-name {
    display: inline-block;
    padding-left: 40px;
    height: 80px;
    line-height: 80px;
    font-size: 33px;
    font-family: 华文隶书;
  }
</style>
