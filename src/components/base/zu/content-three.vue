<template>
				<div class="box-one">
				<div class="title">
					<h2>{{data.title.substr(0,26)+'...'}}</h2>
					
				</div>
				
				<div class="img">
					<img :src="item.img1" alt=""  v-for="(item,index) in data.img"/>
					
				</div>
				<div class="news">
					<div class="type">{{data.name}}</div>
					<div class="time">
						<img src="@/assets/img/zu/icon-1.png" alt="" />
						<span>{{data.time}}</span>
					</div>
				</div>
			</div>
</template>

<script>
	export default{
		props:{
			data:{
				type:Object,
				default:()=>{}
			}
		}
	}
</script>

<style scoped lang="scss">
@import '../../../assets/css/pxrem.scss';
	 .box-one{width:100%;padding:px2rem(35) px2rem(28);border-bottom:px2rem(1) solid #f5f5f5;box-sizing: border-box; }

	.box-one .title h2{font-size: px2rem(32);}
	.box-one .img{width:100%;display: flex;justify-content: space-between;margin-top: px2rem(10);}
	.box-one .img img{width:px2rem(225);height:px2rem(160);}
.box-one .news{display: flex;justify-content: space-between;margin-top: px2rem(30);color:#aaa;font-size: px2rem(25);align-items: center;}
	.box-one .news .time{display: flex;align-items: center;}
	.box-one .news .type{}
	.box-one .news .time img{width:px2rem(33);height:px2rem(33);margin-right:px2rem(40) ;}
	.box-one .news .time span{}
	
	
</style>