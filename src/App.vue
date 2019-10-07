<template>
  <div id="app">
    <router-view />
    <div class="footer">
      <ol>
        <li :class="{active:curIndex==0}">
          <router-link :to='{path:"/index/tuijian",query:{curIndex:0}}'>
            <span class="iconfont icon-shouye"></span>
            <p>首页</p>
          </router-link>
        </li>
        <li :class="{active:curIndex==1}">
          <router-link :to='{path:"/index/tuijian",query:{curIndex:1}}'>
            <span class="iconfont icon-icon_video"></span>
            <p>视频</p>
          </router-link>
        </li>
        <li :class="{active:curIndex==2}">
          <router-link :to='{path:"/baoliao",query:{curIndex:2}}'>
            <span class="iconfont icon-gantanhao"></span>
            <p>报料</p>
          </router-link>
        </li>
        <li :class="{active:curIndex==3}">
          <router-link :to='{path:"/zw-listen",query:{curIndex:3}}'>
            <span class="iconfont icon-erji"></span>
            <p>随身听</p>
          </router-link>
        </li>
        <li :class="{active:curIndex==4}">
          <router-link :to='{path:"/index/tuijian",query:{curIndex:4}}'>
            <span class="iconfont icon-wode"></span>
            <p>我的</p>
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      curIndex:0
    }
  },
  updated(){
    this.curIndex = this.$route.query.curIndex
  }
};
</script>

<style lang='scss'>
@import "./assets/css/reset.css";
@import "./assets/css/pxrem.scss";
html {
  font-size: 16px;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: px2rem(140);
  background-color: white;   
}
.footer ol {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 20px;
  border-top: 1px solid #ccc;
  align-items: center;
  height: 100%;
}
.footer ol span {
  font-size: 20px;
}
.footer .active{
  color: rgb(0, 108, 187);
}
</style>
