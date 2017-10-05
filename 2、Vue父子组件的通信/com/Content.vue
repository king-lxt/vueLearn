<template>
	<div>我是内容区域
		<br>
		{{ myMsg }} 
		<br>
		{{ test }}
		<br />
		<button @click="send()">发送子组件内容到父组件</button>
		<br />
		<button @click="type = 'aaa'">显示A组件</button>
		<button @click="type = 'bbb'">显示B组件</button>
		<component :is="type"></component>
		<button @click="getParentData()">$parent调用父组件</button>
	</div>
</template>

<script>
	export default {
		//父组件给子组件传值是用的props
		props:["myMsg"],
		data() {
			return {
				test:"我是子组件内容",
				type:"aaa"
			}
		},
		methods:{
			send:function(){
				this.$emit("to-parent",this.test)
			},
			run(){
				console.log("通过ref获取 到子组件的方法")
			},
			getParentData(){
				this.$parent.parentFn();
			}
		},
		components:{
			"aaa":{
				template:"<h2>我是A组件</h2>"
			},
			"bbb":{
				template:"<h2>我是B组件</h2>"
			}
		}
	}
</script>

<style>

</style>