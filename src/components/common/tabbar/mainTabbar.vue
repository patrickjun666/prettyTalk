<template>
  <div id="mainTabbar">
    <tabbar>
      <tabbar-item path="/home" activeColor="pink">
        <img src="~assets/img/home/home_flat.png" alt="" slot="item-icon">
        <img src="~assets/img/home/home_flat_active.png" alt="" slot="active-icon">
        <span slot="item-text">首页</span>
      </tabbar-item>
      <tabbar-item path="/calendar" activeColor="pink">
        <img src="~assets/img/calendar/calendar_flat.png" alt="" slot="item-icon">
        <img src="~assets/img/calendar/calendar_flat_active.png" alt="" slot="active-icon">
        <span slot="item-text">分类</span>
      </tabbar-item>
      <tabbar-item path="/lock" activeColor="pink">
        <img src="~assets/img/lock/lock_flat.png" alt="" slot="item-icon">
        <img src="~assets/img/lock/lock_flat_active.png" alt="" slot="active-icon">
        <span slot="item-text">购物车</span>
      </tabbar-item>
      <tabbar-item path="/account" activeColor="pink">
        <img src="~assets/img/account/account_flat.png" alt="" slot="item-icon">
        <img src="~assets/img/account/account_flat_active.png" alt="" slot="active-icon">
        <span slot="item-text">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./tabbar"
import tabbarItem from './tabbarItem'
export default {
  name: 'mainTabbar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>