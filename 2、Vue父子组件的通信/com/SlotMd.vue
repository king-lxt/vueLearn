<template>
	<div>
		这是slot内容
		<slot name="test1">22</slot>
		这是slot内容
		<slot name="test2">22</slot>
		<h2 ref="dom" @click="getDom()">获取DOM元素</h2>
		<div ref = 'oDiv'>{{ msg }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				msg:"获取值"
			}
		},
		methods:{
			getDom(){
				console.log(this.$refs.dom);
				this.$refs.dom.style.color = "gold"
			}
		},
		mounted(){
			var that = this;
			this.msg = "新的值";
			console.log(this.$refs.oDiv.textContent);
			//获取到新的值，用到三级联动的比较多
			this.$nextTick(function(){
				console.log(this.$refs.oDiv.textContent);
			})
		}
	}
</script>

<style>
</style>