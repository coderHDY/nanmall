<template>
  <transition name = "fade">
    <div class = "toast" v-if = "isShow">
      {{message}}
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message = "默认信息", timer = 1500) {
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = ""
        }, timer)
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .8s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .toast {
    display: block;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 12px;
    transform: translate(-50%, -50%);
    background-color: #949494;
    border-radius: 5px;
    color: #fff;
    z-index: 999;
  }
</style>
