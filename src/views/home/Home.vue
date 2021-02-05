<template>
  <div id = "home">
    <HomeNavBar/>
    <TabControl ref = "tabControl1" class = "tab-control1" :items = "['流行','新款','精选']" @TabClick = "changeGoods"
                v-show = "showTabOffsetTop"/>
    <Scroll class = "scroll" ref = "scroll"
            :probeType.Number = 3 :pullUpLoad.Boolean = "true"
            @scroll = "scroll" @pullingUp = "pullingUp">
      <HomeSwipe :banners = "banners" class = "home-swipe" @imageLoad = "imageLoad"/>
      <HomeRecommendView :recommends = "recommends" @imageLoad = "imageLoad"/>
      <FeatureView/>
      <TabControl ref = "tabControl2" class = "tab-control2" :items = "['流行','新款','精选']" @TabClick = "changeGoods"/>
      <GoodsList :goods = "currentType"/>
    </Scroll>

    <BackTop @click.native = "backTop" v-show = "isShowBack"/>
  </div>
</template>

<script>
  //本文件组件
  import HomeNavBar from "./childrencomps/HomeNavBar";
  import HomeSwipe from "./childrencomps/HomeSwipe";
  import HomeRecommendView from "./childrencomps/HomeRecommendView";
  import FeatureView from "./childrencomps/FeatureView";
  // 其他文件组件
  import { getHomeGoods, homeInitRequest } from "network/home";
  //公共组件
  import TabControl from "components/common/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/common/scroll/BackTop";
  import { debounce, mixin } from "components/common/utils/utils";

  export default {
    name: "Home.vue",
    components: {
      HomeNavBar,
      HomeSwipe,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    mixins: [ mixin ],
    data() {
      return {
        banners: [],
        recommends: [],
        showList: "pop",
        goods: {
          "pop": { page: 0, list: [] },
          "new": { page: 0, list: [] },
          "sell": { page: 0, list: [] },
        },
        tabOffsetTop: null,
        showTabOffsetTop: false,
        lastY: 0
      }
    },
    computed: {
      currentType() {
        return this.goods[this.showList].list
      },
    },
    created() {
      this.getHomeMutlidata(),
        this.getHomeGoods("pop"),
        this.getHomeGoods("new"),
        this.getHomeGoods("sell")
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      this.$bus.$on("homeImageLoad", () => {
        refresh()
      })
    },
    methods: {
      //轮播图加载完成
      imageLoad() {
        this.tabOffsetTop = document.querySelector(".tab-control2").offsetTop;
      },
      //获取初始页面顶部数据
      getHomeMutlidata() {
        homeInitRequest().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      // 获取各分类页面的goods
      getHomeGoods(type) {
        getHomeGoods(type, this.goods[type].page + 1).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
        })
      },
      //接收tabControl变动事件
      changeGoods(currentIndex) {
        const goods = [ "pop", "new", "sell" ];
        this.showList = goods[currentIndex];
        this.$refs.scroll.backTop(0, -this.tabOffsetTop);
        this.$refs.tabControl1.current_index = currentIndex;
        this.$refs.tabControl2.current_index = currentIndex;
      },
      //底部刷新事件
      pullingUp() {
        this.getHomeGoods(this.showList)
      }
    },
    activated() {
      this.$refs.scroll.scroll.refresh();
      this.$refs.scroll.backTop(0, this.lastY, 5);
    },
    deactivated() {
      this.lastY = this.$refs.scroll.getPositionY();
    }
  }
</script>

<style scoped>
  /*解决方案一*/
  /*#home {*/
  /*  height: 100vh;*/
  /*  width: 100%;*/
  /*  margin-top: 44px;*/
  /*}*/
  /*.scroll {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*}*/
  /*解决方案二*/
  #home {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .tab-control1 {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
  }

  .tab-control2 {
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
  }


</style>
