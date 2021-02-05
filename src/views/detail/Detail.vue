<template>
  <div id = "detail">
    <DetailNavBar @navBarClick = "navBarClick" :currentIndex = "currentIndex"/>
    <Scroll class = "scroll" ref = "scroll"
            :probeType.Number = 3
            @scroll = "scroll">
      <DetailSwipe :topImages = "topImages"/>
      <DetailBaseInfo :good-info = "goodInfo"/>
      <DetailShopInfo :shop-info = "shopInfo"/>
      <DetailInfo :detail-info = "detailInfo"/>
      <Rate :cRate = "cRate" :rate = "rate" ref = "rate"/>
      <ItemParams :itemParams = "itemParams" ref = "itemParams"/>
      <DetailRecommend :recommend = "recommend" ref = "recommend"/>
    </Scroll>
    <BackTop @click.native = "backTop" v-show = "isShowBack"/>
    <DetailTabBar @addCart = "addCart" @buy = "buy"/>
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
  // 外部模块
  import { debounce, mixin } from "components/common/utils/utils";
  import ItemParams from "./childrencomps/ItemParams";
  import DetailRecommend from "./childrencomps/DetailRecommend";
  import BackTop from "components/common/scroll/BackTop";

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
        recommend: null,
        offsetY: [ 0, 0, 0, 0 ],
        offsetRefresh: null, //防抖函数两个
        heightRefresh: null,
        currentIndex: 0
      }
    },
    mixins: [ mixin ],
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
      DetailRecommend,
      BackTop,
    },
    created() {
      //拿到Good全部信息且分给各个组件
      this.initData();
      this.offsetRefresh = debounce(this.calcOffset, 300);
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
          this.rate = this.good.rate.list;
          this.cRate = this.good.rate.cRate;
          this.itemParams = this.good.itemParams
        })
        recommendRequest().then(res => {
          this.recommend = res.data.list
        })
      },
      navBarClick(index) {
        this.$refs.scroll.scroll.scrollTo(0, -this.offsetY[index], 300)
      },
      calcOffset() {
        // 查找各关键挂载点的offset并保存
        if (this.$refs.rate) this.offsetY[1] = this.$refs.rate.$el.offsetTop
        if (this.$refs.itemParams) this.offsetY[2] = this.$refs.itemParams.$el.offsetTop
        if (this.$refs.recommend) this.offsetY[3] = this.$refs.recommend.$el.offsetTop
      },
      scroll(position) {
        // 传入位置定义顶部显示栏谁变红色
        if (position["y"] <= -this.offsetY[3]) {
          this.currentIndex = 3
        } else if (position["y"] <= -this.offsetY[2]) {
          this.currentIndex = 2
        } else if (position["y"] <= -this.offsetY[1]) {
          this.currentIndex = 1
        } else {
          this.currentIndex = 0
        }
      },
      addCart() {
        const good = {
          iid: this.iid,
          image: this.topImages[0],
          title: this.goodInfo.title,
          price: this.goodInfo.lowPrice || this.goodInfo.realPrice || this.goodInfo.this.newPrice,
          number: 1,
          isChecked: false
        };
        this.$store.dispatch("addCart", good).then(res => {
          this.$toast.show(res)
        })
      },
      buy() {
        this.$toast.show("这是个人作品网站，没有商业性质，别乱花钱哦！", 4000)
      }
    },
    mounted() {
      this.heightRefresh = debounce(this.$refs.scroll.refresh, 100);
      this.$bus.$on("detailImageLoad", () => {
        this.heightRefresh();
        this.offsetRefresh()
      });
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
    /*z-index: 9;*/
  }

  .scroll {
    height: calc(100% - 94px);
  }

</style>
