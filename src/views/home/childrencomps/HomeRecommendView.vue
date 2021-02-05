<template>
  <div class = "home-recom">
    <Recommend>
      <RecommendItem v-for = "items in recommends">
        <a :href = "items.link">
          <img :src = "items.image" @load = "imageLoad"/>
          <div>{{items.title}}</div>
        </a>
      </RecommendItem>
    </Recommend>
  </div>
</template>

<script>
  import Recommend from "components/common/recommend/Recommend";
  import RecommendItem from "components/common/recommend/RecommendItem";

  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        isEmit: false
      }
    },
    components: {
      Recommend,
      RecommendItem
    },
    methods: {
      imageLoad() {
        if (!this.isEmit) {
          this.$emit("imageLoad")
          this.isEmit = true
        }
      }
    }
  }
</script>

<style scoped>
  .home-recom {
    display: block;
    position: relative;
    font-size: var(--font-size);
    border-top: 2px solid #d4d4d4;
    box-shadow: 0 2px 2px rgba(100, 100, 100, 0.3);
  }
</style>
