<template>
  <div>
    <div class="tab_head">
      <tab @changeView="changeView" :tabs="tabs"></tab>
    </div>
    <div class="content">
      <div v-if="curIndex==0" class="baoliao_left">
        <scroll class="scroll" >
          <div>
            <textarea placeholder="请输入线索详细内容，点击下方‘‘+’’上传相关视频或图片..." name id cols="30" rows="10"></textarea>
            <div class="add">+</div>
            <div class="inputBox">
              <label for>姓名</label>
              <input type="text" placeholder="请输入您的姓名" />
              <label for>电话</label>
              <input type="text" placeholder="请输入您的电话" />
            </div>
            <div class="sendBox">
              <div>
                <img @click="changeCheck"
                  :src="check?require('../assets/img/liu/check.png'):require('../assets/img/liu/nocheck.png')"
                  alt
                />
                是否公开信息?让更多的人看到
              </div>
              <span class="sendBtn">提交</span>
            </div>
            <div class="banner">
              <img :src="require('../assets/img/liu/banner.png')" alt />
            </div>
          </div>
        </scroll>
      </div>
      <div v-if="curIndex==1"   >
        <scroll>
          <div></div>
        </scroll>
      </div>
    </div>
  </div>
</template>
<script>
import tab from "../components/page/baoliao/tab";
import scroll from "../components/base/scroll";
import {paike} from '../api/index';
export default {
  components: {
    tab,
    scroll
  },
  data() {
    return {
      tabs: ["报料", "拍客"],
      check: true,
      curIndex:0
    };
  },
  methods:{
      changeCheck(){
          this.check=!this.check
      },
      changeView(msg){
          this.curIndex=msg
      }
  },
  created(){
    //   console.log(paike)
  }
};
</script>
<style scoped lang='scss'>
@import "@/assets/css/pxrem.scss";
.content {
  position: relative;
  margin-top: px2rem(140);
}
.content > div {
  position: absolute;
  left: 0;
  top: 0;

  width: 100vw;
}
.baoliao_left textarea {
  width: 100%;
  height: px2rem(330);
  border: 0;
  outline: 0;
  font-size: 18px;
}
.add {
  width: px2rem(220);
  height: px2rem(220);
  border: 1px dashed #ccc;
  text-align: center;
  line-height: px2rem(220);
  color: #ccc;
  font-size: 30px;
}
.scroll{
    overflow: hidden;
    height:calc(100vh - #{px2rem(310)});
}
.scroll > div {
  box-sizing: border-box;
  padding: px2rem(30);
}
.content label {
  font-size: 18px;
}
.content input {
  border: 0;
  outline: 0;
  width: px2rem(240);
  font-size: 16px;
}
.inputBox {
  padding: px2rem(60) 0;
}
.sendBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: px2rem(120)
}
.sendBox img {
  vertical-align: middle;
}
.sendBtn {
  width: px2rem(110);
  height: px2rem(80);
  text-align: center;
  line-height: px2rem(80);
  border: 1px solid rgb(0, 108, 187);
  border-radius: 5px;
}
.banner img {
  width: 100%;
}
</style>