<template>
		<van-index-bar :sticky-offset-top = '45'>
				<template
						v-for = 'item in cityListOptions.letter'
						v-if = '!props.active'>
						<van-index-anchor :index = 'item.group'/>
						<van-cell v-for = 'cityItem in item.cities'
						          :title = 'cityItem.cityName'
						          @click = 'letterClick(cityItem)'/>
				</template>
				<template
						v-for = 'item in cityListOptions.foreign'
						v-else>
						<van-index-anchor :index = 'item.group'/>
						<van-cell v-for = 'cityItem in item.cities'
						          :title = 'cityItem.cityName'
						          @click = 'letterClick(cityItem)'/>
				</template>
		</van-index-bar>
</template>

<script setup>
import useCity from '@/store/modules/city.js'
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'


const props = defineProps(['active'])
const router = useRouter()
//通过字母选择所在城市
const cityStore = useCity()
const cityListOptions = computed(() => {
		return {
				//国内城市ABC
				letter: cityStore.homeHotCityList.data.data.cityGroup.cities,
				//国外城市ABC
				foreign: cityStore.homeHotCityList.data.data.cityGroupOverSea.cities,
		}
})
const sidebar = computed(() => {
		cityListOptions.letter.map(item => {
				let list = item.group
				list.unshift('#')
				return list
		})
})
//返回home页面并将选择的城市数据回显
const letterClick = (city) => {
		//修改pinia中的数据 回显到home页面
		cityStore.currentCity = city
		router.back()
}
</script>

<style scoped>

</style>
