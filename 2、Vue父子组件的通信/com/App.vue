<template>
	<div class="container">
		<header class="header">头部</header>
		<div id="content">
			<v-content ref="myContent" :my-msg="msg" @to-parent="getChildData"></v-content>
			{{ childMsg}}
			<br />
			<button @click="getChildFn()">ref获取子组件</button>
			<br />
			<v-slot>
				<h2 slot="test1">111</h2>
				<h2 slot="test2">222</h2>
			</v-slot>
		</div>
		<footer class="footer">
			<v-footer></v-footer>
		</footer>
	</div>
</template>

<script>
	import MainFooter from "./MainFooter.vue";
	import Content from "./Content.vue";
	import SlotMd from "./SlotMd.vue";
	export default {
		data() {
			return {
				msg: '我是父组件的msg',
				childMsg: ''
			}
		},
		methods: {
			getChildData(childMsg) {
				this.childMsg = childMsg;
			},
			getChildFn() {
				this.$refs.myContent.run();
			},
			parentFn() {
				alert("我是父组件");
			}
		},
		//注册组件
		components: {
			"v-footer": MainFooter,
			"v-content": Content,
			"v-slot": SlotMd
		}
	}
</script>

<style>

</style>