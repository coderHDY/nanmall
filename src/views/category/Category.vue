<template>
  <div>
    <CategoryNavBar/>
    <Scroll class = "cate-box" ref = "scrollLeft">
      <CateBox :category = "category" @loaded = "leftLoaded" @indexChange = "indexChange"/>
    </Scroll>
    <Scroll class = "items-box" ref = "scrollRight">
      <GoodsList :goods = "currentCate"/>
    </Scroll>
  </div>
</template>

<script>
  // 外部组件
  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";
  import { debounce } from "components/common/utils/utils";
  // 内部组件
  import CategoryNavBar from "./childrencomps/CategoryNavBar";
  import CateBox from "./childrencomps/CateBox";
  // 网络组件
  import { getCategory, getSubcategory } from "network/category";

  export default {
    name: "Category",
    components: {
      Scroll,
      CategoryNavBar,
      CateBox,
      GoodsList
    },
    data() {
      return {
        category: [],
        currentIndex: 0,
        currentCate: []
      }
    },
    created() {
      getCategory().then(res => {
        this.category = res.data.category.list;
        this.changeCate()
      });
    },
    mounted() {
      const refresh = debounce(this.$refs.scrollRight.refresh, 200)
      this.$bus.$on("categoryImageLoad", () => {
        refresh()
      })
    },
    methods: {
      leftLoaded() {
        this.$refs.scrollLeft.refresh()
      },
      indexChange(index) {
        //index改变
        this.currentIndex = index;
        this.changeCate()
      },
      //种类变更
      changeCate() {
        getSubcategory(this.category[this.currentIndex].maitKey).then(res => {
          this.currentCate = res.data.list;
          this.$refs.scrollRight.backTop()
        })
      }
    }
  }
</script>

<style scoped>
  .cate-box {
    position: absolute;
    top: 44px;
    left: 0;
    height: calc(100vh - 44px - 49px);
    width: 70px;
    background-color: #f4f4f4;
    overflow: hidden;
  }

  .items-box {
    position: absolute;
    top: 44px;
    left: 70px;
    width: calc(100vw - 70px);
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
</style>
