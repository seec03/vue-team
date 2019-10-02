<template>
	<div class="sport">
			
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
				data:[]
			}
		},
		methods:{
		 getData(){
			 	  this.axios.get('/static/zu/main.json').then((respon)=>{
						this.data=respon.data.sport
						
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

<style scoped lang='scss'>
	@import '../../../assets/css/pxrem.scss';
	.sport{margin-top: px2rem(100);padding-bottom: px2rem(175)}
	
</style>