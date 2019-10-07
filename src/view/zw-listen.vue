<template>
	<div>
		<div class="title-top">
			<ul>
		 		<li v-for="(item,index) in list" :class="{active:num==item.id}">		 					 			
		 			<router-link :to="{path:item.url,
					query:{
						id:item.id,
						url:item.url
					}}" tag='div'>{{item.txt}}</router-link>
		 		</li>		 	
		 	</ul>
		</div>
		<router-view/>
	</div>
</template>
<script>
	import bus from '@/bus/bus.js';
	export default{		
		data(){
			return {
				list:[
					{txt:'博客',url:'zw-boke',id:1},
					{txt:'广播',url:'zw-radio',id:2}								
				],
				num:""
			}
		},
		
			
	}
</script>

<style lang="scss" scoped>
	@import "../assets/css/pxrem.scss";
	.title-top{
		background: #0899ea;
		height:px2rem(111);
		line-height:px2rem(111) ;
		box-sizing: border-box;
	}
	.title-top ul{
		width:50%;
		height:px2rem(111);
		margin:0 auto;
		display: flex;
		justify-content: space-around;
		color:#fff;
	
		box-sizing: border-box;
		font-size:14px;
	}
	.title-top .active{
		font-weight: bold;
		border-bottom: 1px solid #fff;
		margin-bottom: px2rem(11);
	}
</style>