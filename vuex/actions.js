// action 会收到 store 作为它的第一个参数
// 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
// 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
export const incrementCounter = function({dispatch,state}) {
	dispatch('INCREMENT', 10)
}
export const incrementCounter2 = function({dispatch,state}) {
		dispatch('ADD', 10)
	}
	//在这里改变状态，在激发mutations改变状态的做法。
export const isshow = function({dispatch,state}) {
//		this.$http.get('../static/show.json').then(function(res){
//			console.log(res.body);
//			if(res.body.code===10000){
//				dispatch('ISSHOW',{'duobaoflag':res.body.result.duobaoflag,'xinwenflag':res.body.result.xinwenflag})
//			}
//		},function(res){
//			console.log('error');
//		})
		this.$http.get('../static/show.json').then((res)=>{
			console.log(res);
			if (res.body.code === 10000) {
				dispatch('ISSHOW', {'duobaoflag': res.body.result.duobaoflag,'xinwenflag': res.body.result.xinwenflag})
			}
		})
	}
	//这里就是激发，改变状态在mutations中,这种做法是不合理的。
	//export const isshow = function({dispatch}){
	//	dispatch('ISSHOW');
	//	console.log(state);
	//}