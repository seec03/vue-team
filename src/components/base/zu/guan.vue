<template>
	<div class="guan">
		<div class="none">
			<div class="box">
			<img src="@/assets/img/zu/guanzhu.png" alt="" />
			<div class="title" @click="todahao">添加关注</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		
		methods:{
			todahao(){
				this.$router.push({
					path:'dahao'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../assets/css/pxrem.scss';
	.guan{position:relative;width:100%;height:100%}
	.none{position:fixed;width:px2rem(600);height:px2rem(800);left: 50%;top:50%;transform: translate(-50%,-50%);}
	.none .box{width:100%;height:100%}
	.none .box img{width:px2rem(600);height:px2rem(600)}
	.none .box .title{width:px2rem(435);height:px2rem(100);border:2px solid #fa7400;border-radius:px2rem(15) ;color:#fa7400;text-align: center;line-height: px2rem(100);margin:px2rem(20) auto;font-size:px2rem(38) ;}
	
	
</style>