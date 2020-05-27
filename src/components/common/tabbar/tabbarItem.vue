<template>
  <div id="tabarItem" @click="activeChange">
    <div v-if="!isActive">
      <slot name="item-icon" ></slot>
    </div>
    <div v-else>
      <slot name="active-icon"></slot>
    </div>
    <div :style="activeStyle">
    <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deeppink'
    }
  },
  data(){
    return{
    }
  },
  methods:{
    activeChange(){
      this.$router.replace(this.path).catch(err => {
        
      })
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive?{color: this.activeColor} : {} 
    }
  }
}
</script>

<style scoped>
#tabarItem{
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
}
#tabarItem img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>