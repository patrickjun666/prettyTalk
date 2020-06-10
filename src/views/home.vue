<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center" >芝棠❀(∩_∩)❀</div>
    </nav-bar>
    <!-- 滚动条 -->
    <scroll class="content">
    <!-- 首页轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 好品分类 -->
    <recommend-view :recommends="recommends"/>
    <!-- 本周流行 -->
    <feature-view />
    <!-- 商品导航 -->
    <tabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tabControl>
    <!-- 商品列表 -->
    <good-list :goods="goods[currentType].list"></good-list>
    </scroll>
    <!-- 置顶 -->
    <back-top></back-top>
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
      currentType: 'pop'
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods("pop")
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  methods: {
    /** 
     * 事件监听相关方法
    */
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
  })
    }
  }
  
}
</script>

<style scoped>
#home{
  position: relative;
  width: 100vw;
  padding-top: 44px;
}
.home-nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(235, 60, 112, 1);
  color: white;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>