<template>
	<div class="box-one">
				<div class="title">
					<h2>{{data.title.title.substr(0,26)+'...'}}</h2>
					
				</div>
				
				<div class="img">
					<video width="100%" height="100%" :src="data.img[1].img1" controls="" style="object-fit: fill" :poster="data.img[0].img1">
					</video>
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
	.box-one .img{width:100%;display: flex;justify-content: space-between;margin-top: px2rem(10);height:px2rem(500);position:relative}
	.box-one .img video{width:100%;height:px2rem(500);position:absolute;left: 0;top:0}
.box-one .news{display: flex;justify-content: space-between;margin-top: px2rem(30);color:#aaa;font-size: px2rem(25);align-items: center;}
	.box-one .news .time{display: flex;align-items: center;}
	.box-one .news .type{}
	.box-one .news .time img{width:px2rem(33);height:px2rem(33);margin-right:px2rem(40) ;}
	.box-one .news .time span{}
	
</style>