<template>
  <div id="recommendView">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-Item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted () {
    console.log(console.log(this.recommends));
  }
}
</script>

<style scoped>
  #recommendView{
    width: 100%;
    display: flex;
    text-align: center;
    padding: 1.05vh 0 2.1vh 0;
    border-bottom: .85vh solid #eee;
  }
  #recommendView .recommend-Item{
    flex: 1;
  }
  #recommendView .recommend-Item a{
    text-decoration-line: none;
    color: #ee2c79;
    font-size: 2.8vw;
    font-weight: bold;
  }
  #recommendView .recommend-Item img{ 
    width: 20vw;
    height: 12vh;
  }
  #recommendView .recommend-Item div{
    margin-top: .5vh;
  }
</style>