import Vue from 'vue';
import "./scss/main.scss";
import HomeHeader from "./md/HomeHeader.vue"

new Vue({
	el:"#app",
	data:{
		msg:"hello world"
	},
	components:{
		"v-header":HomeHeader
	}
})

