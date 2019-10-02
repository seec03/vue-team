<template>
	<div class="hao">
		<div class="top">
			<div class="title">
				<div class="name">大象号</div>
				<div class="more" @click="moreClick">更多 <span>></span></div>
			</div>
			<scroll class="content" ref="nav">
				<ul ref="ul">
					<li ref="li" v-for="(item,index) in li.li" @click="liClick(index,item.type)">
						<img :src="item.img" alt="" />
						<div v-show="!item.type" :class="{active:!item.type}">+ 关注</div>
						<div v-show="item.type" :class="{ok:item.type}">已关注</div>
					</li>
					
				</ul>
				
			</scroll>
		</div>
		
			<div v-for="(item,index) in datas">
				<contentone v-if="item.type=='one'" :data="item"></contentone>
				<contenttwo v-if="item.type=='two'" :data="item"></contenttwo>
				<contentthree v-if="item.type=='three'" :data="item"></contentthree>
				<contentfour v-if="item.type=='four'" :data="item"></contentfour>
			</div>
		
		<!--添加关注组件-->
		<transition name="limove">
			<div class="move" v-show="li.flag">
			<dahaobussiness :data="li"></dahaobussiness>
			</div>
		</transition>
	</div>
</template>

<script>
	import contentone from '@/components/base/zu/content-one'
	import contenttwo from '@/components/base/zu/content-two'
	import contentthree from '@/components/base/zu/content-three'
	import contentfour from '@/components/base/zu/content-four'
	import scroll from '@/components/base/scroll'
	import dahaobussiness from '@/components/base/zu/dahaobussiness'
	export default{
		components:{
			contentone,
			contenttwo,
			contentthree,
			contentfour,
			scroll,
			dahaobussiness
		},
		data(){
			return{
				
				datas:[],
				li:{
					li:[
					{
						img:require('@/assets/img/zu/daxiang-1.png'),
						title:"大象新闻",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-2.png'),
						title:"河南新闻广播",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-3.png'),
						title:"河南都市频道",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-4.png'),
						title:"河南民生频道",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-5.png'),
						title:"河南法制频道",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-6.png'),
						title:"映像网",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-7.png'),
						title:"猛犸新闻",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-8.png'),
						title:"东方日报",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-9.png'),
						title:"河南交通广播",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-10.png'),
						title:"河南广电新闻中心",
						type:false
					},
					{
						img:require('@/assets/img/zu/daxiang-11.png'),
						title:"河南新闻评论部",
						type:false
					}
					

					
				],
					flag:false
				},
				
				scrolls:{}
				
			}
		},
		methods:{
			moreClick(){
				this.li.flag=!this.li.flag
			},
			liClick(index,flag){
				this.li.li[index].type=!this.li.li[index].type
			},
			swiper(){
				 
			},
			 getData(){
			 	  this.axios.get('/static/zu/main.json').then((respon)=>{
						this.datas=respon.data.dahao
						 console.log(this.datas)
						 
					})
			 },
			 //计算ul总宽
			toWidth(){
			
				
				let width=(this.$refs.li.length*(this.$refs.li[0].clientWidth+140))/32+'rem'
				
				this.$refs.ul.style.width=width
			},
			//滑动组件
			init(){
				this.scrolls=this.$refs.nav.rights
			}
		},
		created(){
			this.getData()
			
		},
		mounted(){
			this.toWidth()
			this.init()
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../assets/css/pxrem.scss';
	
	.hao{margin-top: px2rem(100);position:relative;padding-bottom: px2rem(175)}
	.top{width:100%;border-bottom: 1px solid #f5f5f5;margin-top: px2rem(120);}
	.top .title{display: flex;width:100%;box-sizing: border-box;justify-content: space-between;align-items: center;padding:0 px2rem(28);}
	.top .title .name{font-size:px2rem(33) ;position:relative;font-weight: bold;}
	.top .title .name::after{position: absolute;content: "";width:px2rem(111);height:px2rem(5);background: #036eb8;left: px2rem(-5);bottom:px2rem(-10)}
	
	.top .title .more{}
	.top .title .more span{color:#036eb8}
	.top .content{box-sizing: border-box;width:90%;overflow: hidden;margin: 0 auto;margin-top: px2rem(50);}
	.top .content ul{width:100%;padding:0 px2rem(28);box-sizing: border-box;overflow: hidden;display: flex;}
	
	.top .content ul li{width:px2rem(133);margin-right: px2rem(70);}
	.top .content ul li img{width:px2rem(133);height:px2rem(133)}	
	.top .content ul li div.active{width:px2rem(110);height:px2rem(48);color:white;background: #ff741f;text-align: center;line-height:px2rem(48) ;margin:px2rem(10) auto;border-radius:px2rem(10) ;}
	.top .content ul li div.ok{width:px2rem(110);height:px2rem(48);color:white;background: #aaa;text-align: center;line-height:px2rem(48) ;margin:px2rem(10) auto;border-radius:px2rem(10) ;}
	
.move{position:fixed;width:100%;height:100%;top:0;z-index: 10000;}
.limove-enter,.limove-leave-to{right: -100vw;}
.limove-enter-active,.limove-leave-active{transition:0.5s}
.limove-enter-to,.limove-leave{right: 0;}
	
	
	
	
	
	
	
	
</style>