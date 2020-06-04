<template>
  <div id="goodsListItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: 'GoodsListItem',
props: {
  goodsItem: {
    type: Object,
    default() {
      return {}
    }
  }
},
created () {
  console.log(this.goodsItem);
}
}
</script>

<style scoped>
#goodsListItem{
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}
#goodsListItem img {
  width: 100%;
  height: 300px;
  border-radius: 5px;
}
.goodsInfo{
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goodsInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsInfo .price{
  color: #ee2c79;
  margin-right: 20px;
}
.goodsInfo .collect {
  position: relative;
}
.goodsInfo .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  color: #ee2c79;
  background-color: #ee2c79;
  font-size: 12px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/home/goodslititem/focus.png') 0 0/14px 14px;
}
</style>