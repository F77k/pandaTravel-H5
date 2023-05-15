<template>
		<div class = 'search'>
				<div class = 'topSearch'>
						<van-search
								v-model = 'content'
								:placeholder = "'搜索'+cityStore.currentCity.cityName+'的景点、地标、房源'"
								clearable
								shape = 'round'
								show-action
								@search="onSearch"
								@cancel="onCancel"
						/>
				</div>
		</div>
</template>

<script setup>
import { ref } from 'vue'
import useCity from '@/store/modules/city.js'
import { useRouter } from 'vue-router'
const router = useRouter()
//头部搜索区域
const cityStore = useCity()
const content = ref('')
const onSearch=()=>{
		console.log('搜索')
		
}
const onCancel=()=>{
		router.back()
}
</script>

<style lang = 'scss' scoped>
.search {
		--van-search-content-background: #f2f2f2;
		:deep(.van-field__left-icon) {
				width: 15px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				color: #ff9854;
		}
		
		.topSearch {
		}
}
</style>
