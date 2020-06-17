<template>
  <div id="home" class="wraper">
    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center" >芝棠❀(∩_∩)❀</div>
    </nav-bar>
        <!-- 商品导航 -->
    <tabControl :titles="['流行','新款','精选']" @tabClick="tabClick" v-show ="isTabFixed" ref="tabControl1"></tabControl>  
    <!-- 滚动条 -->
    <scroll class="content"
            ref="scroll"
            :probe-type = "3" 
            @scroll="contentsScroll"
            :pull-up-load="pullUpload"
            @pullingUp = "loadMore">
    <!-- 首页轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 好品分类 -->
    <recommend-view :recommends="recommends"/>  
    <!-- 本周流行 -->
    <feature-view />
    <!-- 商品导航 -->
    <tabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tabControl>
    <!-- 商品列表 -->
    <good-list :goods="goods[currentType].list" ></good-list>
    </scroll>
    <!-- 置顶 -->
    <back-top v-if="isShow" @click.native="backTop" ></back-top>
  </div>
</template>

<script>
import NavBar from '../components/common/navbar/NavBar' 
import HomeSwiper from './home/HomeSwiper'
import RecommendView from './home/RecommendView'
import FeatureView from './home/FeatureView'
import GoodList from '../components/content/goods/GoodList'

import tabControl from 'components/content/tabControl/tabControl'
import Scroll from 'components/common/scroll/Scroll'
import backTop from 'components/content/backTop/backTop'

import debounce from "common/utils";
import { 
  getHomeMultidata,
  getHomeGoods
   } from "../network/api/home"


export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    tabControl,
    GoodList,
    Scroll,
    backTop
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShow: false,
      pullUpload: true,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: ''
    }
  },
  created() {
    // 1：请求数据
    this.getHomeMultidata()

    // 2：请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    // 3.监听Item中图片加载完成
    // this.$bus.$on('itemImgLoad', ()=> {
    //   this.$refs.scroll.refresh()
    // })
  },
  mounted () {
    // 图片加载完成事件
    const refresh = debounce(this.$refs.scroll.refresh,500)
    // 3.监听Item中图片加载完成 
    this.$bus.$on('itemImgLoad', ()=> {
      refresh()
    })
    // 获取tabControl的offsetTop
    // 所有的属性都有一个$el：用于获取组件中的元素
    
  },
  beforeUpdate () {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      
  },
  activated () {
      this.$refs.scroll.scrollTo(0,this.saveY )
      this.$refs.scroll.refresh()
  },
  deactivated () {
      this.saveY = this.$refs.scroll.returnScrollY()
      console.log(this.saveY);
  },
  methods: {  
    /** 
     * 事件监听相关方法
    */
  //  商品导航切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentType = index
    },

  // 返回顶部
    backTop(){
        this.$refs.scroll.scrollTo(0,0,500)
    },
  // 监听滚动的位置
    contentsScroll(position) {
      // 判断backTop是否显示
      this.isShow = -position.y > 1000

      // 决定tabControl是否吸顶(position: fixed)
      this.isTabFixed= -position.y > this.tabOffsetTop+25
      if(-position.y ==  this.tabOffsetTop){
          this.isTabFixed = false
      }
    },
    // 上拉加载更多 
    loadMore(){
      this.getHomeGoods(this.currentType)
      // 完成了上拉加载更多 
      this.$refs.scroll.fininshPullUp()
    },

    /**
     * 网络请求相关方法
     */
    // 1:请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then( res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      })
    },
    // 2:请求商品数据
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then( res => {
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1

      // this.$refs.scroll.finishPullUp()
      })
    },

  }
  
}
</script>

<style scoped>
#home{
  position: relative;
  width: 100vw;
  height: 100vh ;
  /* padding-top: 44px; */
}
.home-nav{
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
  background-color: rgba(235, 60, 112, 1);
  color: white;
  /* z-index: 9; */
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  height: calc(100vh - 93px);
  overflow: hidden;
}
/* .fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
} */
</style>