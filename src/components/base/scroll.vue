<!--封装的 better-scroll组件-->
<template>
	<div ref="wrapper">
		<slot></slot>
		
	</div>
	
</template>

<script>
	import Bscroll from 'better-scroll';
	export default{
		data(){
			return{
				rights:{},
			}
		},
		methods:{
			init(){
				this.rights=new Bscroll(this.$refs.wrapper,{click:true,probeType:3,scrollX:true,scrollY:true})
			}
		},
		created(){
			setTimeout(()=>{
				this.init()
			},300)
			
		}
		
		
	}
</script>

<style scoped lang="scss">

</style>