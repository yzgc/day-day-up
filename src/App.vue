<template>
	<div>
		<Display></Display>
		<Increment></Increment>
	</div>
	<iframe src="http://1.lly800.com/#/" width="320" height="568" frameborder="1">如不支持,请升级您的浏览器以便正常访问脚本之家。</iframe>
	<div class="mes">消息页面</div>
</template>

<script>
    import Vue from 'vue'
	import Display from 'components/Display.vue'
	import Increment from 'components/Increment.vue'
	import store from '../vuex/store'
	import html from '../static/html.js'
	//import cookie from '../static/cookie.js'
	Vue.use(require('vue-resource'));
	export default {
		components: {
			Display: Display,
			Increment: Increment
		},
		store: store,
		ready() {
			//cookie.checkCookie();
		}
	}
</script>
<style scoped>
	/*.mes {
		
	}*/
</style>