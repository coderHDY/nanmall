<template>
  <div id = "detail">
    <DetailNavBar/>
    <Scroll class = "scroll" ref = "scroll">
      <DetailSwipe :topImages = "topImages"/>
      <DetailBaseInfo :good-info = "goodInfo"/>
      <DetailShopInfo :shop-info = "shopInfo"/>
      <DetailInfo :detail-info = "detailInfo"/>
      <Rate :cRate = "cRate" :rate = "rate"/>
      <ItemParams :itemParams = "itemParams"/>
      <DetailRecommend :recommend = "recommend"/>
    </Scroll>
    <DetailTabBar/>
  </div>
</template>

<script>
  //网络模块
  import { detailRequest, Goods, recommendRequest, Shop } from "network/detail";
  // 内部模块
  import DetailNavBar from "./childrencomps/DetailNavBar";
  import DetailSwipe from "./childrencomps/DetailSwipe";
  import DetailBaseInfo from "./childrencomps/DetailBaseInfo";
  import DetailShopInfo from "./childrencomps/DetailShopInfo";
  import DetailInfo from "./childrencomps/DetailInfo";
  import DetailTabBar from "./childrencomps/DetailTabBar";
  import Rate from "./childrencomps/Rate";
  import Scroll from "components/common/scroll/Scroll";
  import { debounce } from "components/common/utils/utils";
  import ItemParams from "./childrencomps/ItemParams";
  import DetailRecommend from "./childrencomps/DetailRecommend";
  // 外部模块
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        good: {},
        goodInfo: {},
        shopInfo: {},
        topImages: [],
        detailInfo: {},
        rate: [],
        cRate: 1,
        itemParams: null,
        recommend: null
      }
    },
    components: {
      DetailNavBar,
      DetailSwipe,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailInfo,
      DetailTabBar,
      Rate,
      ItemParams,
      DetailRecommend
    },
    created() {
      //拿到Good全部信息且分给各个组件
      this.initData();
    },
    methods: {
      initData() {
        this.iid = this.$route.query.iid;
        detailRequest(this.iid).then(res => {
          this.good = res.result;
          this.topImages = res.result.itemInfo.topImages;
          this.goodInfo = new Goods(this.good.itemInfo, this.good.columns, this.good.shopInfo.services)
          this.shopInfo = new Shop(this.good.shopInfo);
          this.detailInfo = {
            desc: this.good.detailInfo.desc,
            detailImage: this.good.detailInfo.detailImage[0].list
          };
          // console.log(this.good.rate.list);
          this.rate = this.good.rate.list;
          this.cRate = this.good.rate.cRate;
          this.itemParams = this.good.itemParams
        })
        recommendRequest().then(res => {
          this.recommend = res.data.list
        })
      }
    },
    mounted() {
      // scroll判断加载刷新
      // 封装防抖函数
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on("detailImageLoad", () => {
        refresh()
      })
      // 监听点击推荐商品
      this.$bus.$on("goodChange", () => {
        this.initData()
      })
    }
  }
</script>

<style scoped>
  #detail {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 100vh;
    background-color: #ffffff;
    z-index: 9;
  }

  .scroll {
    height: calc(100% - 94px);
  }

</style>
