<template>
	<div class="news">
		
			<div class="top">
				<div v-show="topType==true">
					<div class="goback" @click="goback()"><img src="@/assets/img/zu/newbus-2.png" alt="" /></div>
					<div class="news-icon"><img src="@/assets/img/zu/newbus.png" alt="" /></div>
					<div class="fenxiang"><img src="@/assets/img/zu/newbus-1.png" alt="" /></div>
				</div>
				<div v-show="topType==false">
					<div class="goback" @click="goback()"><img src="@/assets/img/zu/newbus-2.png" alt="" /></div>
					<div class="content">
						<div class="img">
							<img src="@/assets/img/zu/newbus-3.png" alt="" />
							<div class="title">
								<p class="news-name">{{datas.name}}</p>
								<p class="time">{{datas.time}}</p>
							</div>
						</div>
						<div class="okornone" @click="okandnone">
							<div v-show="!type" :class="{active:!type}">+ 关注</div>
							<div v-show="type" :class="{ok:type}">已关注</div>
						</div>
					</div>
					<div class="fenxiang"><img src="@/assets/img/zu/newbus-1.png" alt="" /></div>
				</div>
			</div>
		
		<!--内容区域-->
		<div class="news-content">
			<div class="title">{{datas.title.title}}</div>
			<div class="tops">
				<div class="news-name">{{datas.name}}  <span>{{datas.time}}</span></div>
				<div class="okornone" @click="okandnone">
							<div v-show="!type" :class="{active:!type}">+ 关注</div>
							<div v-show="type" :class="{ok:type}">已关注</div>
				</div>
			</div>
			<div class="textcontent">
				
				<img :src="item.img1" alt="" v-for="(item,index) in datas.img" v-if="datas.type!=='four'"/>
				<video width="100%" height="300" src="@/assets/img/zu/我的梦.mp4" controls="" style="object-fit: fill" :poster="datas.img[0].img1" v-if="datas.type==='four'">
				</video>
				<div>{{datas.title.content}}</div>
				
				
				
				<div class="jizhe">{{datas.title.people}}</div>
			</div>
		</div>
		
		<!--相关新闻-->
		<div class="xiangguan">
			<div class="title">相关新闻</div>
			<contenttwo :data="{item:item,datamain:arrmain}" v-for="(item,index) in arrmain"></contenttwo>
		</div>
		<!--热门留言-->
		<div class="liuyan">
			<div class="title">热门留言</div>
			<div class="liuyan-content">请发表留言吧！</div>
		</div>
		<!--底部留言书写区域-->
		<div class="xinxi">
			<input type="text" placeholder="请输入留言信息"/>
			<div @click="startClick(datas)">
				<img src="@/assets/img/zu/newbus-no.png" alt="" v-show="!start"/>
				<img src="@/assets/img/zu/newbus-ok.png" alt="" v-show="start"/>
			</div>
			
		</div>
		
		<!--收藏弹框-->
		<transition name="shoucang">
			<div class="shoucang" v-show="starttype">{{start?'大象新闻:收藏成功':'大象新闻:取消收藏'}}</div>
		</transition>
		<!--关注弹框-->
		<transition name="guanzhu">
			<div class="guanzhu" v-show="typetype">{{type?'大象新闻:关注成功':'大象新闻:取消关注'}}</div>
		</transition>
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
				//头部吸顶的变换
				topType:true,
				//关注弹框的显示与隐藏
				type:false,
				typetype:false,
				//收藏弹框的显示与隐藏
				start:false,
				starttype:false,
				datas:{},
				datamain:{},
				arrmain:[],
				//跳转过来的页面类型
				componentsType:""
			}
		},
		methods:{
			okandnone(){
				this.type=!this.type
				this.typetype=!this.typetype
				setTimeout(()=>{
					this.typetype=!this.typetype
				},1000)
			},
			//封装一个方法判断是否存在，
			toIndex(arr,id){
				var index=-1
				for(var i=0;i<arr.length;i++){
					if(arr[i].id==id){
						index=i;
						break
					}
				}
				return index
			},
			startClick(datas){
				this.start=!this.start
				this.starttype=!this.starttype
				var arr=JSON.parse(localStorage.getItem('shoucang'))||[]
				var index=this.toIndex(arr,this.datas.id)
				if(index==-1){
					arr.push(this.datas)
				}else{
					arr.splice(index,1)
				}
				localStorage.setItem('shoucang',JSON.stringify(arr))
				setTimeout(()=>{
					this.starttype=!this.starttype
				},1000)
			},
			//封装一个方法，用来获取随机的 相关新闻信息，只获取 type类型是  two的
			toNewsTwo(){
				while(this.arrmain.length<2){
							var index=this.toRandom()
							if(this.datamain[index].type=='two'){
								this.arrmain.push(this.datamain[index])
							}else{
								index=this.toRandom()
							}
				}
//				console.log(this.arrmain)
			},
			//封装一个方法用来获取随机数字
			toRandom(){
				let index = parseInt(Math.random()*this.datamain.length+1)
				return index
			},
			//监听滚轮事件的方法
			handleScroll () {
				  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				  if(scrollTop>=200){
				  	 this.topType=false
				  }else{
				  	this.topType=true
				  }
			},
			//返回上一级页面
			goback(){
				console.log(this.componentsType)
				this.$router.push({
					path:'index/'+this.componentsType
				})
			},
			//页面初始化判断该新闻是否收藏
			toShouCang(){
				var arr=JSON.parse(localStorage.getItem('shoucang'))||[]
				console.log(arr,this.datas.id)
				let index=this.toIndex(arr,this.datas.id)
//				console.log(index)
				if(index!=-1){
					this.start=true
				}
			}
		},
		created(){
			this.datas=this.$route.query.data
			this.datamain=this.$route.query.datamain
			
			this.componentsType=this.$route.query.back
			
		},
		mounted(){
			setTimeout(()=>{
				this.toNewsTwo()
			},300)
			//监听滚轮事件
			window.addEventListener('scroll', this.handleScroll)
			//判断该新闻是否收藏
			this.toShouCang()
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
	.liuyan .liuyan-content{padding:px2rem(30);box-sizing: border-box;width:100%;font-size: px2rem(30);text-align: center;}
	
	.xinxi{width:100%;height:px2rem(128);border-top:1px solid #ccc;border-bottom:1px solid #ccc;box-sizing: border-box;padding: px2rem(20) px2rem(30);position: fixed;bottom: 0;left: 0;background: white;z-index: 100;display: flex;align-items: center;justify-content: space-between;}
	.xinxi input{width:90%;height:px2rem(60);border-radius:px2rem(40) ;outline: none;text-indent:px2rem(30) ;border:px2rem(1) solid #ccc}
	.xinxi img{width:px2rem(40);height:px2rem(40);}
	
	.shoucang{width:px2rem(268);height:px2rem(100);bottom:px2rem(100);background: rgba(0,0,0,.7);border-radius:px2rem(18) ;position:fixed;color:white;font-size:px2rem(27) ;text-align: center;line-height:px2rem(100) ;z-index: 200;left: 50%;transform: translate(-50%,0);}
	.guanzhu{width:px2rem(268);height:px2rem(100);bottom:px2rem(100);background: rgba(0,0,0,.7);border-radius:px2rem(18) ;position:fixed;color:white;font-size:px2rem(27) ;text-align: center;line-height:px2rem(100) ;z-index: 200;left: 50%;transform: translate(-50%,0);}
.shoucang-enter,.shoucang-leave-to{bottom:px2rem(50);opacity: 0;}
.shoucang-enter-active,.shoucang-leave-active{transition:0.5s}
.shoucang-enter-to,.shoucang-leave{bottom:px2rem(100);opacity: 1;}
.guanzhu-enter,.guanzhu-leave-to{bottom:px2rem(50);opacity: 0;}
.guanzhu-enter-active,.guanzhu-leave-active{transition:0.5s}
.guanzhu-enter-to,.guanzhu-leave{bottom:px2rem(100);opacity: 1;}
	
	
</style>