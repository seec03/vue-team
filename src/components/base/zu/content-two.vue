<template>
	<div class="box-one" @click="tonewsbus(data)">
				<div class="title">
					<h2>{{data.item.title.title.substr(0,20)+'...'}}</h2>
					<div class="news">
						<div class="type">{{data.item.name}}</div>
						<div class="border">|</div>
						<div class="top">{{data.item.time}}</div>
						<img src="@/assets/img/zu/icon-1.png" alt="" />
					</div>
				</div>
				<div class="img">
					<img :src="data.item.img[0].img1" alt="" />
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
		},
		methods:{
			 tonewsbus(data){
			 
			 	this.$router.push({
			 		path:"/newsbus",
			 		query:{
			 			data:data.item,
			 			datamain:data.datamain,
			 			back:data.back
			 		}
			 	})
			 
			 }
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../assets/css/pxrem.scss';
		 .box-one{width:100%;padding:px2rem(35) px2rem(28);display: flex;justify-content: space-between;border-bottom:px2rem(1) solid #f5f5f5;box-sizing: border-box; }
	.box-one .title{padding-right: px2rem(15);box-sizing: border-box;}
	.box-one .title h2{font-size: px2rem(32);}
	.box-one .title .news{display: flex;margin-top: px2rem(29);align-items: center;position:relative}
	.box-one .title .news .border{width:px2rem(2);height:100%;margin:0 px2rem(20)}
	.box-one .title .news .type{color:#aaa;font-size: px2rem(25);}
	.box-one .title .news .top{color:#aaa;font-size: px2rem(25);}
	.box-one .img{width:px2rem(303);height:px2rem(170);border-radius:px2rem(20);overflow: hidden;}
	.box-one .img img{width:100%;height:100%}
	.box-one .title .news img{width:px2rem(33);height:px2rem(33);position:absolute;right: px2rem(15);top:px2rem(5)}
	
	
	
	
	
</style>