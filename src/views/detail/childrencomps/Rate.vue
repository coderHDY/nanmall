<template>
  <div class = "rate">
    <div class = "comment-title">
      <p>
        用户评论<span>({{cRate}}条)</span>
        <span class = "more-comment">更多&gt;&gt;</span>
      </p>
    </div>
    <div v-if = "rate[0]">
      <div class = "user">
        <img :src = "rate[0].user.avatar" class = "user-img">
        <div class = "user-name">{{rate[0].user.uname}}:
          <div class = "comment-info">
            <span class = "created">{{formatDate}}</span>
            <span class = "style">{{rate[0].style}}</span>
          </div>
        </div>
      </div>
      <div class = "content-box">
        <div class = "content">{{rate[0].content}}</div>
        <div v-if = "rate[0].images" class = "image-box">
          <div v-for = "item in rate[0].images" class = "img-box">
            <img :src = "item" class = "comment-img">
          </div>

        </div>
        <div class = "explain" v-if = "rate[0].explain">{{rate[0].explain}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from "components/common/utils/utils";

  export default {
    name: "Rate",
    props: {
      rate: {
        type: Array,
        default() {
          return []
        }
      },
      cRate: Number
    },
    computed: {
      formatDate() {
        return formatDate(this.rate[0].created, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .rate {
    margin-top: 20px;
    padding-left: 5px;
    border-top: #c7c7c7 1px solid;
    border-bottom: #b8b8b8 1px solid;
  }

  .comment-title {
    display: block;
    position: relative;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
    box-shadow: 0 2px 1px rgba(100, 100, 100, 0.3);
  }

  .more-comment {
    position: absolute;
    right: 5px;
    font-size: var(--font-size);
    text-decoration: underline;
  }

  .user {
    position: relative;
    margin-top: 10px;
    height: 50px;
    overflow: hidden;
  }

  .user-img {
    height: 50px;
    border-radius: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }

  .user-name {
    display: inline-block;
    font-size: 18px;
    vertical-align: middle;
  }

  .content-box {
    margin-top: 10px;
  }

  .comment-info {
    display: block;
    font-size: 12px;
  }

  .created {
    margin-right: 10px;
  }

  .content-box {
    margin: 5px 10px;
  }

  .content {
  }

  .explain {
    margin-top: 10px;
    border-top: 1px solid #333333;
    font-size: var(--font-size);
  }

  /*主盒子*/
  .image-box {
    width: 100%;
    overflow: hidden;
  }

  /*各盒子*/
  .img-box {
    display: inline-block;
    height: 100px;
    width: 100px;
    border-radius: 15px;
    margin-right: 10px;
    overflow: hidden;
  }

  .comment-img {
    width: 100%;
  }
</style>
