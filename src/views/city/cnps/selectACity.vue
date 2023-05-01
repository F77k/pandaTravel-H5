<template>
		<van-index-bar>
				<template
						v-if='!porps.active'
						v-for = 'item in cityListOptions.letter'>
						<van-index-anchor :index = 'item.group' />
						<van-cell v-for = 'cityItem in item.cities'
						          :title = 'cityItem.cityName'
						          @click='letterClick(cityItem.cityName)'/>
				</template>
				<template
						v-else
						v-for = 'item in cityListOptions.foreign'>
						<van-index-anchor :index = 'item.group' />
						<van-cell v-for = 'cityItem in item.cities'
						          :title = 'cityItem.cityName'
						          @click='letterClick(cityItem.cityName)'/>
				</template>
		</van-index-bar>
</template>

<script setup>
import useCity from '@/store/modules/city.js'
import { computed ,defineProps} from 'vue'
import { useRouter } from 'vue-router'
const porps=defineProps(['active'])
const router=useRouter()
//通过字母选择所在城市
const cityStore = useCity()
const cityListOptions = computed(() => {
		return {
				//国内城市ABC
				letter: cityStore.homeHotCityList.data.data.cityGroup.cities,
				//国外城市ABC
				foreign:cityStore.homeHotCityList.data.data.cityGroupOverSea.cities
		}
})
//返回home页面并将选择的城市数据回显
const letterClick=(city)=>{
		//修改pinia中的数据 回显到home页面
		cityStore.cityName=city
		router.back()
}
</script>

<style scoped>

</style>
