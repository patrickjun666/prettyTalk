<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#tabbar{
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(120, 120, 120, 0.2);
  z-index: 99;
}
</style>