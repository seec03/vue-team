<template>
	<div class="news">
		
			<div class="top">
				<div v-show="false">
					<div class="goback"><img src="@/assets/img/zu/newbus-2.png" alt="" /></div>
					<div class="news-icon"><img src="@/assets/img/zu/newbus.png" alt="" /></div>
					<div class="fenxiang"><img src="@/assets/img/zu/newbus-1.png" alt="" /></div>
				</div>
				<div>
					<div class="goback"><img src="@/assets/img/zu/newbus-2.png" alt="" /></div>
					<div class="content">
						<div class="img">
							<img src="@/assets/img/zu/newbus-3.png" alt="" />
							<div class="title">
								<p class="news-name">环球网-环球时报</p>
								<p class="time">1小时前</p>
							</div>
						</div>
						<div class="okornone">
							<div v-show="!type" :class="{active:!type}">+ 关注</div>
							<div v-show="type" :class="{ok:type}">已关注</div>
						</div>
					</div>
					<div class="fenxiang"><img src="@/assets/img/zu/newbus-1.png" alt="" /></div>
				</div>
			</div>
		
		<!--内容区域-->
		<div class="news-content">
			<div class="title">十一当天，广澳游对比过于强烈。</div>
			<div class="tops">
				<div class="news-name">环球网-环球日报  <span>1小时前</span></div>
				<div class="okornone">
							<div v-show="!type" :class="{active:!type}">+ 关注</div>
							<div v-show="type" :class="{ok:type}">已关注</div>
				</div>
			</div>
			<div class="textcontent">
				<img src="../../../../static/zu/zu/country-8.jpg" alt="" />
				<div>十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。</div>
				<img src="../../../../static/zu/zu/country-8.jpg" alt="" />
				<div>十一当天，广澳游对比过于强烈。十一当天，广澳游对比过于强烈。十一当天</div>
				<img src="../../../../static/zu/zu/country-8.jpg" alt="" />
				<div class="jizhe">大象新闻编辑 李晨奥</div>
			</div>
		</div>
		
		<!--相关新闻-->
		<div class="xiangguan">
			<div class="title">相关新闻</div>
			<!--<contenttwo></contenttwo>-->
		</div>
		<!--热门留言-->
		<div class="liuyan">
			<div class="title">热门留言</div>
			dfdfg
		</div>
		<!--底部留言书写区域-->
		<div class="xinxi">
			<input type="text" placeholder="请输入留言信息"/>
			<div>
				<img src="@/assets/img/zu/newbus-no.png" alt="" v-show="start"/>
				<img src="@/assets/img/zu/newbus-no.png" alt="" v-show="!start"/>
			</div>
			
		</div>
	</div>
</template>

<script>
	import contenttwo from '@/components/base/zu/content-two';
	export default{
		components:{
			contenttwo
		},
		data(){
			return{
				type:false,
				start:true
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/pxrem.scss';
	.news{}
	.news .top{width:100%;height:px2rem(105);background: white;position:fixed;padding:px2rem(10) 0;border-bottom: 1px solid #f5f5f5;top:0;z-index: 100;}
	.news .top>div{display: flex;align-items: center;;width:100%;height:px2rem(105);background: white;position:relative;}
	.news .top .goback{position:absolute;left: px2rem(30);width:px2rem(22);height:px2rem(39)}
	.news .top .goback img,.news .top .fenxiang img,.news .top .news-icon img{width:100%;height:100%}
	.news .top .news-icon{margin: 0 auto;width:px2rem(222);height:px2rem(62)}
	.news .top .fenxiang{position:absolute;right: px2rem(30);width:px2rem(39);height:px2rem(35)}
	
	.news .top .content{width:80%;height:100%;margin: 0 auto;display: flex;justify-content: space-between;align-items: center;}
	.top .content .img{display: flex;align-items: center;}
	.top .content .img img{width:px2rem(86);height:px2rem(86);border-radius: 50%;}
	.top .content .img .title{margin-left:px2rem(30) ;}
	.top .content .img .title .news-name{font-size: px2rem(33);}
	.top .content .img .time{font-size: px2rem(25);color:#aaa}
	.top .content .okornone{margin-right:px2rem(30);}
	 .okornone div.active{width:px2rem(110);height:px2rem(48);color:white;background: #ff741f;text-align: center;line-height:px2rem(48) ;border-radius:px2rem(10) ;}
	 .okornone div.ok{width:px2rem(110);height:px2rem(48);color:white;background: #aaa;text-align: center;line-height:px2rem(48) ;border-radius:px2rem(10) ;}
	
	.news-content{padding:0 px2rem(25);box-sizing: border-box;margin-top: px2rem(185);}
	.news-content .title{font-size:px2rem(38);margin:px2rem(50) 0;font-weight: bold;}
	.news-content .tops{position: relative;display: flex;justify-content: space-between;align-items: center;width:100%}
	.news-content .tops::before{content: "";display: block;width:px2rem(55);height:px2rem(5);background: #026eb7;left: 0;position: absolute;top:px2rem(-10)}
	.news-content .tops .news-name{font-size:px2rem(30);}
	.news-content .tops .news-name span{font-size:px2rem(26);color:#aaa;padding-left: px2rem(16);}
	
	.textcontent{width:100%;margin-top:px2rem(100) ;}	
	.textcontent img{width:100%;margin:px2rem(35) 0 }
	.textcontent div{text-indent:px2rem(50) ;font-size:px2rem(30);}
	.textcontent .jizhe{margin-top: px2rem(50);}
	
	.xiangguan{width:100%;margin-top: px2rem(50);}
	.xiangguan .title{padding: 0 px2rem(30);font-size:px2rem(30);font-weight: bold;position:relative}
	.xiangguan .title::after{content: "";display: block;width:px2rem(85);height:px2rem(3);background: #026eb7;left:px2rem(35);position: absolute;bottom:px2rem(-10)}
	
	.liuyan{width:100%;margin-top: px2rem(50);padding-bottom:px2rem(128) ;}
	.liuyan .title{padding: 0 px2rem(30);font-size:px2rem(30);font-weight: bold;position:relative}
	.liuyan .title::after{content: "";display: block;width:px2rem(85);height:px2rem(3);background: #026eb7;left:px2rem(35);position: absolute;bottom:px2rem(-10)}
	
	
	.xinxi{width:100%;height:px2rem(128);border-top:1px solid #ccc;border-bottom:1px solid #ccc;box-sizing: border-box;padding: px2rem(20) px2rem(30);position: fixed;bottom: 0;left: 0;background: white;z-index: 100;display: flex;align-items: center;justify-content: space-between;}
	.xinxi input{width:90%;height:px2rem(60);border-radius:px2rem(40) ;outline: none;text-indent:px2rem(30) ;border:px2rem(1) solid #ccc}
	.xinxi img{width:px2rem(40);height:px2rem(40);}
	
	
	
</style>