<template>
  <div class = "is-check-box">
    <img class = "is-check-img" src = "~assets/img/common/select.svg" v-show = "isChecked">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .is-check-box {
    width: 18px;
    height: 18px;
    border: 1px solid #b1b1b1;
    border-radius: 50%;
    overflow: hidden;
  }

  .is-check-img {
    background-color: #ff443f;
    vertical-align: top;
  }

</style>
