// 创建一个对象来保存应用启动时的初始状态
const state = {
	// TODO: 放置初始状态
	count: 0,
	count2: 10,
	//控制是否显示夺宝模块
	duobaoflag: null,
	xinwenflag: null
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
	// TODO: 放置我们的状态变更函数
	INCREMENT(state, amount) {
		state.count = state.count + amount
	},
	ADD(state, amount) {
		state.count2 = state.count2 - amount
	},
	//传入我们需要的参数，以及额外的参数，此处实在actions里面改变了状态的做法
	ISSHOW(state, other) {
		state.duobaoflag = other.duobaoflag;
		state.xinwenflag = other.xinwenflag;
		console.log(state)
	}
	//传入我们需要的参数，以及额外的参数，每调用时，在此处改变状态
	//  ISSHOW (state){
	//		state.duobaoflag = 1;
	//		state.xinwenflag = 1;
	//		console.log(state)
	//  }
}
//导出
console.log(state);
export default {
	state,
	mutations
}
