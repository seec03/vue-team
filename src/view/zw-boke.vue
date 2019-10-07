<template>
	<div>
		<div class="lunbo">
			<ul>
				<li><img src="@/assets/img/li/pic1.png"/></li>
			</ul>
		</div>
		<div class="content">
			<ul>
				<li v-for="item in data">
					<img :src="item.img"/>
					<p>{{item.txt}}</p>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	import {bokedata} from '@/api/index'
	export default{
		data(){
			return{
				data:''
			}
		},
		methods:{
			getData(){
			 	bokedata().then((response) => {			 		
					this.data=response.data					
					console.log(this.data)
				})

			},
		},
		created(){
			//实现数据接口请求
			this.getData()
		},
	}
</script>

<style lang="scss" scoped>
@import "../assets/css/pxrem.scss";
	.lunbo{
		width:100%;
		height:px2rem(480);
		padding:px2rem(20);
		box-sizing: border-box;
		border-bottom: 1px solid #e6e6e6;
	}
	.lunbo img{
		width:100%;
		height:100%;
	}
	.content{
		width:100%;
		padding:px2rem(20);
		box-sizing: border-box;
	}
	.content ul{
		width:100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.content li{
		width:30%;
		margin-bottom: px2rem(120);
	}
	.content li img{
		width:100%;
		margin-bottom: px2rem(60);
	}
	.content li p{
		text-align: center;
		
	}
</style>