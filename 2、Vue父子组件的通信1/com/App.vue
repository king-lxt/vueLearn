<template>
	<div class="container">
		<header class="header">头部</header>
		<div id="content">
			<v-content :my-msg="msg" @to-parent = "getChildData"></v-content>
			{{ childMsg}}
		</div>
		<footer class="footer">
			<v-footer></v-footer>
		</footer>
	</div>
</template>

<script>
	import MainFooter from "./MainFooter.vue";
	import Content from "./Content.vue";
	export default{
		data(){
			return {
				msg:'我是父组件的msg',
				childMsg:''
			}
		},
		methods:{
			getChildData(childMsg){
				this.childMsg = childMsg;
			}
		},
		//注册组件
		components:{
			"v-footer":MainFooter,
			"v-content":Content
		}
	}
</script>

<style>
</style>