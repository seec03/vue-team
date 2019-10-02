<template>
	<div class="tui">
		<div class="swiper">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide">Slide 1</div>
		        <div class="swiper-slide">Slide 2</div>
		        <div class="swiper-slide">Slide 3</div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		    
		    <!-- 如果需要导航按钮 -->
		    <div class="swiper-button-prev"></div>
		    <div class="swiper-button-next"></div>
		</div>
		</div>
		<div class="main-content">
			<div v-for="(item,index) in data">
				<contentone v-if="item.type=='one'" :data="item"></contentone>
				<contenttwo v-if="item.type=='two'" :data="item"></contenttwo>
				<contentthree v-if="item.type=='three'" :data="item"></contentthree>
				<contentfour v-if="item.type=='four'" :data="item"></contentfour>
			</div>
			
			
		</div>
		
	</div>
</template>

<script>
	import '@/assets/css/zu/swiper.css';
	import contentone from '@/components/base/zu/content-one'
	import contenttwo from '@/components/base/zu/content-two'
	import contentthree from '@/components/base/zu/content-three'
	import contentfour from '@/components/base/zu/content-four'
	export default{
		components:{
			contentone,
			contenttwo,
			contentthree,
			contentfour
		},
		data(){
			return{
				swip:"",
				data:[]
			}
		},
		methods:{
			swiper(){
				 
			},
			 getData(){
			 	  this.axios.get('/static/zu/main.json').then((respon)=>{
						this.data=respon.data.tuijian
						 console.log(this.data)
						 
					})
			 }
			
			
		},
		created(){
			this.getData()
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
	.tui .swiper{width:100%;height:px2rem(464);border-radius:px2rem(15);overflow: hidden;padding: 0 px2rem(28);box-sizing: border-box;}
	.tui .swiper .swiper-container{width:100%;background: red;height:100%;border-radius:px2rem(20) ;overflow: hidden;}
	.main-content{}

	
	
	
	
	
	
	
	
	
</style>