<template>
	<div class="zhuan">
		<div class="main-content">
			<div v-for="(item,index) in data">
				
				<contenttwo  :data="item"></contenttwo>
				
			</div>
			
			
		</div>
	</div>
</template>

<script>
	import contenttwo from '@/components/base/zu/content-two'
	export default{
		components:{
			
			contenttwo
			
		},
		data(){
			return{
				
				data:[]
			}
		},
		methods:{
			swiper(){
				 
			},
			 getData(){
			 	  this.axios.get('/static/zu/main.json').then((respon)=>{
						this.data=respon.data.zhuanti
						 console.log(this.data)
						 
					})
			 }
			
		},
		created(){
			this.getData()
		},
		mounted(){
	
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../assets/css/pxrem.scss';
	
	.zhuan{margin-top: px2rem(100);}
</style>