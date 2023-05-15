<template>
		<div class = 'keyWord'>
				<div class = 'font'
				     :style="{color:isKeyText?'#333333':'#999999'}"
				     @click = 'enterSearch'
				>
						{{ keyText }}
				</div>
		</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import useCity from '@/store/modules/city.js'


const cityStore = useCity()
const isKeyText=ref(false)
const router = useRouter()
const keyText = computed(() => {
		if (cityStore.hotDistrict === null) {
				return '关键字 / 位置 / 民宿名'
		} else {
				isKeyText.value=true
				return cityStore.hotDistrict
		}
})
const enterSearch = () => {
		router.push('/keySearch')
}
</script>

<style lang = 'scss' scoped>

.keyWord {
		height: 40px;
		
		.font {
				display: flex;
				line-height: 40px;
				padding: 0 20px;
				font-size: 14px;
				color: #999999;
		}
}
</style>
