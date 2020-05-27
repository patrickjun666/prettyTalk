<template>
  <div id="app">
    <tabbar>
      <tabbar-item>
        <img src="./assets/img/home_flat.png" alt="" slot="item-icon">
        <span slot="item-text">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/img/home_flat.png" alt="" slot="item-icon">
        <span slot="item-text">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/img/home_flat.png" alt="" slot="item-icon">
        <span slot="item-text">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img src="./assets/img/home_flat.png" alt="" slot="item-icon">
        <span slot="item-text">首页</span>
      </tabbar-item>
    </tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from "./components/common/tabbar/tabbar"
import tabbarItem from "./components/common/tabbar/tabbarItem"
export default {
  name: 'app',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>
<style lang="less">
@import "./assets/css/base.css";
</style>
