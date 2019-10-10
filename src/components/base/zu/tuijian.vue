<template>
	<div class="tui">
		<div class="swiper">
			<mt-swipe :auto="2000" class="swiper" >
				<mt-swipe-item  v-for="(item,index) in swip" ><img :src="item.img[0].img1" alt="" @click="contentimg(item)"/></mt-swipe-item>
				
			</mt-swipe>

			<!--<ul>
				<li v-for="(item,index) in swip"></li>
				
			</ul>-->
		</div>
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
	//引入 mint-ui 的轮播图
	import { Swipe, SwipeItem } from 'mint-ui';
	
	import 'mint-ui/lib/style.css'
	import contentone from '@/components/base/zu/content-one'
	import contenttwo from '@/components/base/zu/content-two'
	import contentthree from '@/components/base/zu/content-three'
	import contentfour from '@/components/base/zu/content-four'
	export default{
		components:{
			contentone,
			contenttwo,
			contentthree,
			contentfour,
			'mt-swipe': Swipe,
  			'mt-swipe-item': SwipeItem
		
		},
		data(){
			return{
				swip:[],
				data:[],
				timer:""
			}
		},
		methods:{

			
			
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
		
		},
		destroyed(){
			
		},
		mounted(){
			
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

	 .mint-swipe-indicators{position:absolute;bottom:px2rem(20);display: flex;width:100%;justify-content: space-around;z-index: 200;}
     .mint-swipe-indicators .mint-swipe-indicator{height:px2rem(4);background: white;width:px2rem(139.8);margin:0 px2rem(10)}	
	 .mint-swipe-indicators .mint-swipe-indicator.is-active{background: #0000FF;}
	
	
	 .swiper {width:96%;height:px2rem(464);border-radius:px2rem(15);overflow: hidden;margin:0 auto;box-sizing: border-box;position:relative}
	.swiper img{width:100%;height:100%}
	
	.tui >>> .mint-swipe-indicators{width:100%;position:absolute;bottom:px2rem(15);display: flex;justify-content: space-around;}
	.tui >>> .mint-swipe-indicator{width:px2rem(110);border-radius: px2rem(10);height:  px2rem(7);opacity: 1;background: rgba(0,0,0,.5);}
	.tui >>> .mint-swipe-indicator.is-active{background: #0000FF;}
	
	
	
	
	
	
</style>