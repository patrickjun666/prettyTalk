<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-info :goods="goods"></detail-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
  // 组件
  import DetailNavBar from './components/DetailNavBar'
  import DetailSwiper from './components/DetailSwiper'
  import DetailInfo from './components/DetailInfo'
  import DetailShopInfo from './components/DetailShopInfo'

  // 接口
  import {getDetail, GoodsInfo, Shop} from 'network/api/detail.js'

export default {
  name: 'detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo
  },
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  created () {
    // 1.保存存入的iid
    this.iid = this.$route.params.iid
    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部的无限轮播数据
      const data = res.result
      console.log(data);
      this.topImages = data.itemInfo.topImages
      // 2.获取商品信息
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo)
    })
    
  }
}
</script>

<style>

</style>