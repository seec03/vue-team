<template>
	<div class="tui">
		<scroll class="swiper" ref="scro">
			<div class="content" ref='content'>
				<img :src="item.img[0].img1" alt="" v-for="(item,index) in swip" ref='contentimg' @click="contentimg(item)"/>
				
			</div>
			<ul>
				<li v-for="(item,index) in swip" :class="{active:index==ulli}" @click="ulliclick(index)"></li>
				
			</ul>
		</scroll>
		<div class="main-content">
			<div v-for="(item,index) in data">
				<contentone v-if="item.type=='one'" :data="{item:item,datamain:data,back:'tuijian'}"></contentone>
				<contenttwo v-if="item.type=='two'" :data="{item:item,datamain:data,back:'tuijian'}"></contenttwo>
				<contentthree v-if="item.type=='three'" :data="{item:item,datamain:data,back:'tuijian'}"></contentthree>
				<contentfour v-if="item.type=='four'" :data="{item:item,datamain:data,back:'tuijian'}"></contentfour>
			</div>
		</div>
		
	</div>
</template>

<script>
	
	import contentone from '@/components/base/zu/content-one'
	import contenttwo from '@/components/base/zu/content-two'
	import contentthree from '@/components/base/zu/content-three'
	import contentfour from '@/components/base/zu/content-four'
	import scroll from '@/components/base/scroll'
	export default{
		components:{
			contentone,
			contenttwo,
			contentthree,
			contentfour,
			scroll
		},
		data(){
			return{
				swip:[],
				data:[],
				scrolls:{},
				ulli:0,
				timer:""
			}
		},
		methods:{
			init(){
				let width=this.$refs.contentimg[0].clientWidth
				console.log(this.swip.length,width)
				this.scrolls=this.$refs.scro.rights
				this.$refs.content.style.width=(this.swip.length*width)/16+'rem'
			},
			//封装一个方法用来实现轮播图
			next(){
				this.ulli++;
				if(this.ulli>this.swip.length-1){
					this.ulli=0
				}
				this.$refs.content.style.transform='translateX('+this.ulli*-this.$refs.contentimg[0].clientWidth/16+'rem)'
			},
			//点击轮播图的图片，跳转对应的详情页面
			contentimg(data){
				this.$router.push({
			 		path:"/newsbus",
			 		query:{
			 			data:data,
			 			datamain:this.data,
			 			back:'tuijian'
			 		}
			 	})
			},
			ulliclick(index){
				this.ulli=index
				this.$refs.content.style.transform='translateX('+this.ulli*-this.$refs.contentimg[0].clientWidth/16+'rem)'
			},
			 getData(){
			 	  this.axios.get('/static/zu/main.json').then((respon)=>{
						this.data=respon.data.tuijian.tuijian
						this.swip=respon.data.tuijian.swiper
						 console.log(this.data,this.swip)
						 
					})
			 }
			
			
		},
		created(){
			this.getData()
			setTimeout(()=>{
				this.init()
			},500)
		},
		destroyed(){
			clearInterval(this.timer)
		},
		mounted(){
			this.timer=setInterval(()=>{
				this.next()
			},3500)
//			setTimeout(()=>{
//				 var mySwiper = new Swiper ('.swiper-container', {
//					autoplay: 1000,//可选选项，自动滑动 
//				    direction: 'vertical',
//				    loop: true,
//				    
//				    // 如果需要分页器
//				    pagination: '.swiper-pagination'
//				    
//				  
//				  }) 
//			},200)
				
			
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../assets/css/pxrem.scss';
	
	.tui{margin-top: px2rem(120);padding-bottom: px2rem(175)}
	.tui .swiper{width:px2rem(693);height:px2rem(464);border-radius:px2rem(15);overflow: hidden;margin:0 auto;box-sizing: border-box;position:relative}
	.swiper .content{height:100%;transition: 0.5s;transform: translateX(0);}
	.swiper .content img{display: block;float: left;width:px2rem(749);height:px2rem(464);}
	.swiper ul{position:absolute;bottom:px2rem(20);display: flex;width:100%;justify-content: space-around;z-index: 200;}
    .swiper ul li{height:px2rem(4);background: white;width:px2rem(139.8);margin:0 px2rem(10)}	
	.swiper ul li.active{background: #0000FF;}
	
	
	
	
	
	
	
</style>