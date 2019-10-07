<template>
	<div class="sociology">
		<div class="main-content">
			<div v-for="(item,index) in data">
				<contentone v-if="item.type=='one'" :data="{item:item,datamain:data,back:'sociology'}"></contentone>
				<contenttwo v-if="item.type=='two'" :data="{item:item,datamain:data,back:'sociology'}"></contenttwo>
				<contentthree v-if="item.type=='three'" :data="{item:item,datamain:data,back:'sociology'}"></contentthree>
				<contentfour v-if="item.type=='four'" :data="{item:item,datamain:data,back:'sociology'}"></contentfour>
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
						this.data=respon.data.sociology
						
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
	.sociology{margin-top: px2rem(100);}
	
</style>