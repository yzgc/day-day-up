// 这个 getter 函数会返回 count 的值
// 在 ES6 里你可以写成：
// export const getCount = state => state.count

export function getCount (state) {
  return state.count
}
export function getCount2 (state) {
	return state.count2
}
export function xx(state) {
	return state.duobaoflag
}
export function yy(state){
	return state.xinwenflag
}
