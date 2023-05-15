import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'lodash'


export default function useScroll() {
	let el=window
	const isReachBottom = ref(false)
	let scrollTop = ref(0)//距离顶部的位置
	let clientHeight = ref(0)//拿到当前元素的高度
	let scrollHeight = ref(0)//总高度
	const scrollListenerHandler = throttle(() => {
		clientHeight.value = document.documentElement.clientHeight//拿到当前元素的高度
		scrollTop.value = document.documentElement.scrollTop
		scrollHeight.value = document.documentElement.scrollHeight
		//这里加1是因为浏览器有误差小数点会取舍，所以这里防止误差+1
		if (clientHeight.value + scrollTop.value + 1 >= scrollHeight.value) {
			isReachBottom.value = true
		}
	},200)
	onMounted(() => {
		el.addEventListener("scroll", scrollListenerHandler)
	})
	onUnmounted(() => {
		el.removeEventListener("scroll", scrollListenerHandler)
	})
	return {isReachBottom, scrollTop, clientHeight, scrollHeight}
}
