<template>
	<ul>
		<!-- 使用 router-link 组件来导航. -->
		<!-- 通过传入 `to` 属性指定链接. -->
		<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
		<li class="active">
			<router-link to="/home">首页</router-link>
		</li>
		<li>
			<router-link to="/kind">分类</router-link>
		</li>
		<li>
			<router-link to="/cart">购物车</router-link>
		</li>
		<li>
			<router-link to="/user">我的</router-link>
		</li>
		<li>
			<router-link to="/more">更多</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.router-link-exact-active,
	.router-link-active {
		color:red
	}
</style>