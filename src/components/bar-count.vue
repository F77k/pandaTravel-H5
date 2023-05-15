<template>
		<div class = 'barCount'>
				<template v-for = '(item,index) in list' :key = 'index'>
						<div :class = '{active:index===currentIndex}'
						     class = 'item '
						     @click = 'activeIndex(index)'
						>
								{{ item }}
						</div>
				</template>
		</div>
</template>

<script setup>
import { ref, } from 'vue'


const emit = defineEmits(['tabItemClick'])
defineProps({
		list: {
				type: Array,
				default: () => ([])
		}
})
let currentIndex = ref(0)
const activeIndex = (index) => {
		//将当前点击的值的index保存，然后再对比筛查出想等的div再添加样式
		currentIndex.value = index
		emit('tabItemClick', index)
}

//根据scroll修改index值
const setCurrentIndex = (index) => {
		currentIndex = index
}
defineExpose({
		currentIndex
})
</script>

<style lang = 'scss' scoped>
.barCount {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #ffffff;
		z-index: 999;
		
		.item {
				padding: 10px 0;
				margin: 0 15px;
				font-size: 14px;
				color: #666666;
		}
		
		.active {
				border-bottom: 2px solid #ff9854;
				color: #ff9854;
		}
}
</style>
