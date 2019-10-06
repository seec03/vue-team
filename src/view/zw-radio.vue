<template>
	<div>
		<div class="top">
			<img src="@/assets/img/li/pic02.png"/>
			<div class="cover">
				<img src="@/assets/img/li/coin-1.png"/>
			</div>
		</div>
		<div class="content">
			<div class="title">
				<span @click="btn1" :class="{active:flag1}">节目当</span>
				<span @click="btn2" :class="{active:flag2}">聊天室</span>
			</div>
			<div class="plays" :v-show="flag1" ref="plays">
				<scroll class="dayBox">
					<div class="date" ref='scrolltop'>				
						<div class="time" v-for='item in data.date'  ref='times'>
							<p>{{item.day}}</p>
							<p>{{item.txt}}</p>
						</div>								
					</div>
				</scroll>
				<scroll class="changeBox">
					<div class="change" ref='scrollleft'>
						<div class="change1" v-for='item in data.change' ref='changs'>
							<p>{{item.txt1}}</p>
							<p>{{item.txt2}}</p>
						</div>
					</div>
				</scroll>
				<scroll class="showBox">
					<div class="show" ref='scrollright'>
						<div class="show1" v-for='item in data.show' ref='shows'>
							<p>{{item.txt1}}</p>
							<p>{{item.txt2}}</p>
						</div>
					</div>
				</scroll>
			</div>
			<div class="talk" :v-show="flag2" ref="talk">
				<scroll class="talkScroll">
					<div class="talkingBox" ref='scrollTalking'>
						<div class="talking" v-for="item in data.talking" ref="talkings">
							<img :src="item.img"/>
							<div class="contnet1">
								<div class="name">
									<p>{{item.people}}</p>
									<div>
										<img src="@/assets/img/li/good.png"/>
										<span>{{item.good}}</span>
									</div>
								</div>
								<p class="our">{{item.say}}</p>
								<p classs="timeBox">
									<span class="times">{{item.time}}</span>
									<span>·回复</span>
								</p>
							</div>
						</div>
					</div>
				</scroll>
				
				<div class="inpBoxs">
					<div class="inpBox">
						<img src="@/assets/img/li/write.png"/>
						<input type="txt" name="" id="" value="" placeholder="欢迎留言"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import scroll from '@/components/base/scroll'
	import {radiodata} from '@/api/index'
	export default{
		data(){
			return{
				data:'',				
				rights:{},
				flag1:true,
				flag2:false,
			}
		},
		methods:{
			btn1(){
				this.flag1=true;
				this.flag2=false;
			},
			btn2(){
				this.flag1=false;
				this.flag2=true;
			},
			getData(){
			 	radiodata().then((response) => {			 		
					this.data=response					
					console.log(this.data)
				})

			},
			init(){
				let timeWidth=this.$refs.times[0].clientWidth;
				let padding=2;
				let width=(timeWidth+padding)*this.data.date.length;
				this.$refs.scrolltop.style.width=width/16+'rem';
				this.$refs.scrolltop.rights
				
				let changeHeight=this.$refs.changs[0].clientHeight;
				console.log(changeHeight);
				let padding1=1.25;
				let height=(changeHeight+padding1)*this.data.change.length;
				this.$refs.scrollleft.style.height=height/16+'rem';
				this.$refs.scrollleft.rights
				
				let changeHeight2=this.$refs.shows[0].clientHeight;
				console.log(changeHeight2);
				let padding2=2.5625;
				let height2=(changeHeight2+padding2)*this.data.show.length;
				this.$refs.scrollright.style.height=height2/16+'rem';
				this.$refs.scrollright.rights
				
				let changesHeight=this.$refs.talkings[0].clientHeight;
				console.log(changesHeight);
				let height3=(changesHeight)*this.data.talking.length;
				this.$refs.scrollTalking.style.height=height3/16+'rem';
				this.$refs.scrollTalking.rights
			},
		},
		created(){
			//实现数据接口请求
			this.getData()
			setTimeout(()=>{
				this.init()
			},500)	
			
		},
		components:{
			scroll,
			
		}
	}
</script>

<style lang="scss" scoped>
@import "../assets/css/pxrem.scss";
	.top{
		width:100%;
		height:px2rem(500);		
		box-sizing: border-box;
		position: relative;
	}
	.top>img{
		width:50%;
		position:absolute;
		top:50%;
		left:50%;
		margin-top:-25%;
		margin-left:-25%;
	}
	.cover{
		width:100%;
		height:100%;
		position:absolute;
		background: rgba(0,0,0,0.5);
	}
	.cover>img{
		width:14%;
		position:absolute;
		top:50%;
		left:50%;
		margin-top:-12%;
		margin-left:-8%;
	}
	.content{
		width:100%;
		height:calc(100vh - 15.625rem - 3.46875rem);
		overflow: hidden;;
	}
	.title{
		width:100%;
		height:px2rem(120);
		line-height: px2rem(120);
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-around;
		font-size:14px;
		font-weight: bold;
	}
	.title .active{color:#1CA2CE}
	.plays{
		width:100%;
		height:calc(100% - 3.75rem);
		overflow: hidden;
				
	}
	.date{
		/*width:100%;*/
		height:px2rem(160);
		overflow: hidden;
		font-size:14px;
	}
	.date .time{
		padding:px2rem(32);
		float:left;
	}
	.changeBox{height:calc(100% - 5rem);overflow: hidden;	width:30vw;float:left;}
	.change{
		width:30vw;
		height:100%;
		overflow: hidden;
		float:left;
		font-size:14px;
		box-sizing: border-box;
	}
	.change1{
		padding:px2rem(20) px2rem(20);
		text-align: center;
		border-bottom:1px solid #ccc;
	}
	.showBox{height:calc(100% - 5rem);overflow: hidden;	width:70vw;float:left;}
	.show{
		float:left;
		width:70vw;
		height:100%;
		overflow: hidden;
		box-sizing: border-box;
	}
	.show1{
		display: flex;
		font-size:14px;
		justify-content: space-around;
		padding:px2rem(41);
		border-bottom:1px solid #ccc;
	}
	.talk{
		width:100%;
		height:calc(100% - 3.75rem);
		position:relative;
	}
	.inpBoxs{
		position:absolute;
		bottom:0px;
		left:0px;
		background: #fff;
		height:2rem;
		width:100%;
		line-height: 2rem;
		padding:0.5rem 0;
	}
	.inpBox{
		width:80%;
		height:2rem;
		margin:0 auto;
		background: #ecedf1;
		border-radius:1rem;
		padding:0 0.2rem;
	}
	.inpBox img{
		width:0.8rem;
		height:0.8rem;
		vertical-align: middle;
	}
	.inpBox input{
		border:none;
		background: #ecedf1;
	}
	.talkin{
		width:100%;
		padding:px2rem(20);
		font-size: 14px;
		box-sizing: border-box;
		display: flex;
		
	}
	.talking>img{
		width:2rem;
		height:2rem;
	}
	.talking>div{
		width:calc(100% - 2rem);
		margin-left:1rem;
		border-bottom: 1px solid #ccc;
		padding-bottom: 1rem;
	}
	.name{
		display: flex;
		justify-content: space-between;
		height:2rem;
		line-height: 2rem;
		color:#8e8e8e;
	}
	.name img{
		width:1rem;
	}
	.name>div{
		margin-right:2rem;
	}
	.our{
		font-size: 18px;
		margin:1rem 0;
		font-weight: bold;
	}
	.times{
		color:#8e8e8e;
	}
</style>