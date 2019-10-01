<template>
	<transition name="callback">
		
	<div class="dahao" v-show="flags">
		<div class="top">
			<div class="title">
				<div @click='goback'><</div>
				<div class="name">添加关注</div>
			</div>
			<div class="all">全部</div>
		</div>
		<div class="content">
			<ul>
				<li v-for="(item,index) in data.li">
					<img :src="item.img" alt="" />
					<div class="name">
						<p>{{item.title}}</p>
						<p>{{item.title}}</p>
					</div>
					<div @click="liClick(index)">
						<div v-show="!item.type" :class="{active:!item.type}">+ 关注</div>
						<div v-show="item.type" :class="{ok:item.type}">已关注</div>
					</div>
				</li>
			</ul>
		</div>
		
	</div>
	</transition>
</template>

<script>
	export default{
		props:{
			data:{
				type:Object,
				default:()=>{}
			}
		},
		data(){
			return{
				flags:true
			}
		},
		methods:{
			liClick(index){
				this.data.li[index].type=!this.data.li[index].type
			},
			//点击返回大象号页面
			goback(){
				
				this.flags=true
				this.data.flag=!this.data.flag
				console.log(this.data.flag)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/pxrem.scss';
.dahao{position:absolute;width:100%;height:100%;background: white;right: 0;top:0;}
.dahao .top{margin-top: px2rem(20);position:absolute;width:100%;top:0;left: 0;height:px2rem(163);background: white;}
.dahao .top .title{position:relative}
.dahao .top .title div:nth-child(1){position:absolute;font-size: px2rem(30) ;left: px2rem(30);}
.dahao .top .title div:nth-child(2){font-size: px2rem(40) ;text-align: center;}
.dahao .top .all{position: relative;margin-left: px2rem(30);margin-top: px2rem(20);font-size: px2rem(30)}
.dahao .top .all::after{content: "";position:absolute;width:px2rem(60);height:px2rem(5);background: #036EB8;bottom:px2rem(-10);left: px2rem(-2);}
.content {margin-top:px2rem(163) ;overflow: auto;height:100%;}
.content ul{padding-bottom:px2rem(163)}
.content ul li img{width:px2rem(113);height:px2rem(113)}
.content ul li .name{font-size:px2rem(30) ;margin-left:px2rem(33) ;}
.content ul li .name p:nth-child(2){color:#aaa}
.content ul li{width:100vw;box-sizing: border-box;border-bottom: 1px solid #f5f5f5;padding:px2rem(30);display: flex;position:relative;align-items: center;}
.content ul li div:nth-of-type(2) div.active{width:px2rem(110);height:px2rem(48);color:white;background: #ff741f;text-align: center;line-height:px2rem(48) ;margin:px2rem(10) auto;border-radius:px2rem(10) ;position:absolute;right:px2rem(20);top:px2rem(50)}
.content ul li div:nth-of-type(2) div.ok{width:px2rem(110);height:px2rem(48);color:white;background: #aaa;text-align: center;line-height:px2rem(48) ;margin:px2rem(10) auto;border-radius:px2rem(10) ;position:absolute;right:px2rem(20);top:px2rem(50)}
.callback-enter,.callback-leave-to{right: 0;}
.callback-enter-active,.callback-leave-active{transition:0.5s}
.callback-enter-to,.callback-leave{right: -100vw;}








</style>