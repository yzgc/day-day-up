import Vue from 'vue'
import Vuex from 'vuex'
import Show from './module/show.js'
console.log(Show);
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
//const state = {
//	// TODO: 放置初始状态
//	count: 0,
//	count2: 10,
//	//控制是否显示夺宝模块
//	duobaoflag: null,
//	xinwenflag: null
//}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
//const mutations = {
//	// TODO: 放置我们的状态变更函数
//	INCREMENT(state, amount) {
//		state.count = state.count + amount
//	},
//	ADD(state, amount) {
//		state.count2 = state.count2 - amount
//	},
//传入我们需要的参数，以及额外的参数，此处实在actions里面改变了状态的做法
//	ISSHOW(state, other) {
//		state.duobaoflag = other.duobaoflag;
//		state.xinwenflag = other.xinwenflag;
//		console.log(state)
//	}
//传入我们需要的参数，以及额外的参数，每调用时，在此处改变状态
//	  ISSHOW (state){
//			state.duobaoflag = 1;
//			state.xinwenflag = 1;
//			console.log(state)
//	  }
//}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
var Store = new Vuex.Store({
//	modules: {
//		Show
//	},
//	strict: false//不启用严格模式
		state:Show.state,
		mutations:Show.mutations
})
export default Store

console.log(Store);
//总结
//1.创建一个对象保存启动时期的初始状态，即定义变量时期
//2.创建一个对象用来储存一系列我们接下来写的mutation函数，也是真正的处理程序
//3.整合初始状态和变更函数。得到了我们所需要的store，至此，这个store可以应用到我们的应用中。
//4.actions里面会重新导入函数和专递所需要的参数
//5.需要该方法的地方引入
//6.getter相当于计算属性，返改变后的变量值，直接作为数据引用
//7.需要注意的是，对于状态的变更，无论是在mutations里还是，在sctions里，实质都是一样的。