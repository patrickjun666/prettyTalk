<template>
  <div id="backtop">
    <img src="~assets/img/toTop/totop.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  data(){
    return {

    }
  }
}
</script>

<style scoped>
  #backtop {
    position: fixed;
    right: 15px;
    bottom: 60px;
  }
  #backtop img {
    width: 43px;
    height: 43px;
  }
</style>