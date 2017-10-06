<template>
	<div>
		<ul id="classList">
			<!--<li v-show="isOK" v-for="item in classList">{{ item.className }}</li>-->
			<li v-show="isOK" v-for="item in classList">
				<router-link :to="{name:'kind',params:{classID:item.classID}}">{{ item.className }}</router-link>
			</li>
			<li v-show="!isOK">正在加载</li>
			<!--<li><router-link to="/kind/cy">衬衣</router-link></li>
			<li><router-link to="/kind/lf">礼服</router-link></li>
			<li><router-link to="/kind/mf">棉服</router-link></li>
			<li><router-link to="/kind/wt">外套</router-link></li>-->
		</ul>
		<!--<router-view></router-view>-->
		<ul id="proList">
			<li v-for="item in proList">{{ item.goodsName }}</li>
		</ul>
	</div>
</template>

<script>
	import MyAjax from "./../md/MyAjax.js";
	export default {
		data() {
			return {
				classList: [],
				isOK: false,
				proList: []
			}
		},
		watch: {
			'$route': function(newRoute) {
				console.log(newRoute.params.classID);
				var classID = newRoute.params.classID;
				//根据classID请求相应的资源
				var that = this;
				var url = 'http://datainfo.duapp.com/shopdata/getGoods.php?classID=' + classID;
				MyAjax.fetchJsonp(url, function(data) {
					console.log(data);
					that.proList = data;
					that.isOK = true;
				}, function(err) {
					console.log(err);
				})
			}
		},
		mounted() {
			var that = this;
			var url = 'http://datainfo.duapp.com/shopdata/getclass.php';
			MyAjax.vueJson(url, function(data) {
				console.log(data);
				that.classList = data;
				that.isOK = true;
			}, function(err) {
				console.log(err);
			})
		},
	}
</script>

<style scoped>
	#classList {
		width: 100%;
		height: 36px;
		border-bottom: 1px solid #ccc;
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
	}
	
	#classList li {
		display: inline-block;
		line-height: 36px;
		margin: 0 12px;
	}
	
	#classList::-webkit-scrollbar {
		display: none;
	}
</style>