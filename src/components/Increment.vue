<template>
	<div>
		<button @click="increment">Increment +1</button>
		<button @click="increment2">Increment -1</button>
	</div>
	<div>分割线</div>
	<ul v-show="show">
		<li>1</li>
		<li>1</li>
		<li>1</li>
	</ul>
	<dl v-show="xinwen">
		<dd>新闻1</dd>
		<dd>1</dd>
		<dd>2</dd>
	</dl>
</template>

<script>
	import Vue from 'vue'
	import {incrementCounter} from '../../vuex/actions'
	import {incrementCounter2,isshow} from '../../vuex/actions'
	import {xx,yy} from '../../vuex/getters'
	export default {
		vuex: {
			actions: {
				increment: incrementCounter,
				increment2: incrementCounter2,
				isshow
			},
			getters: {
				show: xx,
				xinwen: yy
			},
			data() {
				return {
					list: '888'
				}
			}
		},
		ready() {
			//{duobaoflag:0,xinwenflag:0}在最外面传参的例子
			this.isshow();
		}
	}
</script>