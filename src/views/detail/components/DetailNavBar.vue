<template>
  <div id="DeatilNavBar">
    <nav-bar>
      <div slot="left" class="leftArrows" @click="backClick">
        <img src="~assets/img/detail/detailNavBar/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        class="title-item" :key="index" 
        :class="{active: index === currentIndex}"
        @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      // this.$router.back()——返回第一种方案
      this.$router.go(-1) //返回第二种方案
    }
  }
}
</script>

<style lang="less" scpod>
.title{
  display: flex;
  padding: 0 20px;
}
.title-item{
  flex: 1;
  font-size: 14px;
}
.active{
  color: #ee2c79;
}
.leftArrows img {
  margin-top: 10px;
  margin-left: 15px;
  width: 24px;
  height: 24px;
}
</style>