<template>
	<div class="main">
		<div class="top">
			<img src="@/assets/img/zu/logo.png" alt="" />
				
			<scroll class="nav" ref="nav">
				<ul ref="navul">
					<li ref="navli" v-for="(item,index) in li" @click="liclick(index,item.id,item.title)" :class="{active:liactive==index}">{{item.name}}</li>	
				</ul>

			</scroll>
			<img src="@/assets/img/zu/icon-search.png" alt="" />
		</div>
		<router-view/>
	</div>
</template>

<script>
	import scroll from '@/components/base/scroll'
	export default{
		data(){
			return{
				li:[{name:'推荐',id:1,title:'tuijian'},
					{name:'专题',id:2,title:'zhuan'},
					{name:'大象号',id:3,title:'dahao'},
					{name:'关注',id:4,title:'guan'},
					{name:'郑州',id:5,title:'zheng'},
					{name:'生活',id:6,title:'life'},
					{name:'国际',id:7,title:'country'},
					{name:'时政',id:8,title:'politics'},
					{name:'财经',id:9,title:'finance'},
					{name:'体育',id:10,title:'sport'},
					{name:'娱乐',id:11,title:'game'},
					{name:'社会',id:12,title:'sociology'}],
				navscroll:{},
				//li 的样式
				liactive:0
			}
		},
		methods:{
			init(){
				
				this.navscroll=this.$refs.nav.rights
				//导航栏的设置
				let length=this.$refs.navli.length
				let lengwidth=this.$refs.navli[0].clientWidth
				this.$refs.navul.style.width=((lengwidth+50)*length)/32+'rem'
			},
			liclick(index,id,title){
				this.liactive=index
				//通过缓存的方式将 导航栏的下标保存下来，以防下次刷新只显示 第一个
				localStorage.setItem('index',JSON.stringify(index))
				this.$router.push({
					path:title,
					query:{
						id:id
					}
				})
			}
		},
		mounted(){
			setTimeout(()=>{
				this.init()
			},500)
		},
		created(){
			//拿取缓存中的下标 index 判断导航栏到第几个，如果是第一次就是0
			this.liactive=JSON.parse(localStorage.getItem('index'))||0
		},
		components:{
			scroll
		}
		
		
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/pxrem.scss';
	.top{width:100%;height:px2rem(105);background: #0896ec;position: fixed;top:0;color:white;padding: 0 px2rem(27);display: flex;align-items: center;z-index: 1000;justify-content: space-around;box-sizing: border-box;}
	.top img:nth-of-type(1){width:px2rem(75);height:px2rem(75);}
	.top img:nth-of-type(2){width:px2rem(55);height:px2rem(55);}
	.main .nav{width:70%;height:px2rem(75);margin: 0 px2rem(20);line-height: px2rem(75);overflow: hidden;position:relative}
	.nav ul{}
	.nav ul li{float: left;padding: 0 px2rem(20);font-size:px2rem(28) ;position:relative}
	
	.nav ul li.active{font-size:px2rem(32) ;font-weight: bold;}
	.nav .box{}
	.nav ul li::after{content: "";display: none;position: absolute;width:px2rem(30);height:px2rem(5);border-radius: px2rem(5);background: white;bottom:px2rem(10);left: 50%;transform: translateX(-50%);}
	.nav ul li.active::after{display: block;}
	
	
	
	
	
</style>