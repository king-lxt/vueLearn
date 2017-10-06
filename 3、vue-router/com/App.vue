<template>
	<div class="container">
		<header class="header">头部</header>
		<div id="content">
			<!-- 路由出口 -->
			<!-- 路由匹配到的组件将渲染在这里 -->
			<router-view></router-view>
		</div>
		<footer class="footer">
			<v-footer></v-footer>
		</footer>
	</div>
</template>

<script>
	import MainFooter from "./MainFooter.vue";
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		//注册组件
		components: {
			"v-footer": MainFooter,
		}
	}
</script>

<style>

</style>