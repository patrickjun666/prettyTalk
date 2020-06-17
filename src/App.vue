<template>
  <div id="app">
    <!-- 底部导航栏组件 -->
    <main-tabbar></main-tabbar>
    <keep-alive exclude="detail">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import mainTabbar from "./components/common/tabbar/mainTabbar"
export default {
  name: 'app',
  components: {
    mainTabbar
  }
}
</script>
<style lang="less">
@import "./assets/css/base.css";
</style>
