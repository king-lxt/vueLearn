<template>
	<div>
		<ul>
			<li> <router-link to="/Detail/0">第1个</router-link></li>
			<li> <router-link to="/Detail/1">第2个</router-link></li>
			<li> <router-link to="/Detail/2">第3个</router-link></li>
			<li> <router-link to="/Detail/3">第4个</router-link></li>
			<li> <router-link to="/Detail/4">第5个</router-link></li>
			<li> <router-link to="/Detail/5">第6个</router-link></li>
			<li> <router-link to="/Detail/6">第7个</router-link></li>
			<li> <router-link to="/Detail/7">第8个</router-link></li>
			<li> <router-link to="/Detail/8">第9个</router-link></li>
			<li> <router-link to="/Detail/9">第10个</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	ul{
		width: 100%;
	}
	ul li{
		height: 36px;
		line-height: 36px;
		text-indent: 12px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
	}
</style>