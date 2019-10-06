<template>
  <div class="tabBox">
    <ul>
      <li @click='changeTab(index)' :class="{active:curIndex==index}" v-for="(item,index) in tabs" :key="index">{{item}}</li>
    </ul>
    <slot name="camera"></slot>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
      return {
          curIndex:0
      }
  },
  methods:{
      changeTab(index){
          this.curIndex=index;
            this.$emit('changeView',index)
      }
  }
};
</script>
<style scoped lang='scss'>
@import '@/assets/css/pxrem.scss';
.tabBox{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: px2rem(140);
    justify-content: center;
    align-items: center;
    background-color: rgb(8,153,235)
}
.tabBox ul{
    display: flex;
    font-size: 20px;
    color: white;
    height: 100%;
}
.tabBox ul li{
    margin:0 5px;
    line-height: px2rem(140);
}
.tabBox ul li.active{
    font-size: 25px;
}
</style>