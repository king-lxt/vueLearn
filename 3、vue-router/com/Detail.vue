<template>
	<!--拿到点击的是第几个的值-->
	<div>
		详情{{ $route.params.goodsID }}
		<!--<button><router-link to="/home">返回home</router-link></button>-->
		<button @click="back()">返回</button>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		watch:{
			route:function(newVal,old){
				console.log(newVal + "==" + old)
			}
		},
		methods:{
			back(){
				window.history.go(-1)
			}
		},
		mounted(){
			console.log(this.$route);
			console.log(this.$route.params.goodsID);
		}
	}
</script>

<style>
</style>