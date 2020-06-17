<template>
  <div id="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted () {
    // 第一步：创建betterScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,//可点击
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad//滚动到底部
    }),
    this.scroll.scrollTo(0, 0)
    // 第二步：监听滚动的位置
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    }
    //  第三步： 监听scroll滚动到底部
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', ()=>{
        this.$emit('pullingUp')
      })
    }
    
    // 第三步：监听上拉事件
    // this.scroll.on('pullingUp', ()=> {
    //   this.$emit('pullingUp')
    // })
    console.log(this.scroll);
  },
  methods: {
    scrollTo(x, y, time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      console.log('完成');
      this.scroll && this.scroll.refresh()
    },
    fininshPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    returnScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>