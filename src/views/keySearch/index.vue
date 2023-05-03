<template>
		<div class='search'>
				<div class='topSearch'>
						<van-search
								v-model="content"
								show-action
								shape='round'
								clearable
								:placeholder="'搜索'+cityStore.currentCity.cityName+'的景点、地标、房源'"
						/>
				</div>
		</div>
</template>

<script setup>
import { ref } from 'vue'
import useCity from '@/store/modules/city.js'
const cityStore=useCity()
const content=ref('')
</script>

<style scoped lang='scss'>
.search{
		:deep(.van-field__left-icon){
				width: 15px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				color: #ff9854;
		}
		.topSearch{
		}
}
</style>
