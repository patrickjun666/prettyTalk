<template>
  <div id="tab-control">
    <div class="tab-control-item"
     v-for="(item, index) in titles" 
     :key = "index" 
     :class="{active: index === currentIndex }" 
     @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  props: {
    titles: {
        type: Array,
        default() {
          return []
        }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
#tab-control{
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.active{
  color: #ee2c79;
}
.active>span{
  padding: 5px;
  border-bottom: 2px solid #ee2c79;
}
</style>