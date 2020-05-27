<template>
  <div id="tabarItem">
    <div>
      <slot name="item-icon" ></slot>
    </div>
    <div>
    <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  data(){
    return{

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