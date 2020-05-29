<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" >芝棠❀(∩_∩)❀</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>

  </div>
</template>

<script>
import NavBar from '../components/common/navbar/NavBar'
import  HomeSwiper from './home/HomeSwiper'
import { getHomeMultidata } from "../network/api/home"


export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper
  },
  data(){
    return{
      banners: [],
      recommends: [],
      carouselImg: null
    }
  },
  created () {
    // 1:请求多个数据
  getHomeMultidata().then( res => {
    this.banners = res.data.banner.list
    this.recommends = res.data.recommend.list
  })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: rgba(235, 60, 112, .6);
  color: white;
}
</style>