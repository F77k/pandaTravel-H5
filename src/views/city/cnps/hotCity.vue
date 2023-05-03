<template>
		<!--热门城市-->
		<div class = 'hotCity'>
				<span>热门</span>
				<div class = 'hotBox'>
						<template
								v-if='!props.active'
								v-for = 'item in CityList.homeHot'>
								<div @click='cityClick(item)'>{{ item.cityName }}</div>
						</template>
						<template
								v-else
								v-for = 'item in CityList.foreignHot'>
								<div @click='cityClick(item)'>{{ item.cityName }}</div>
						</template>
				</div>
		</div>
</template>

<script setup>
import useCity from '@/store/modules/city.js'
import {computed,defineProps} from 'vue'
import { useRouter } from 'vue-router'
const router=useRouter()
//获取pinia
const cityStore=useCity()
//获取props
const props=defineProps(['active','cityAll'])

const CityList=computed(()=>{
		//返回国内热门地点
		return {
				//国内热门
				homeHot:cityStore.homeHotCityList.data.data.cityGroup.hotCities,
				//国外热门
				foreignHot:cityStore.homeHotCityList.data.data.cityGroupOverSea.hotCities
		}
})
//点击热门城市返回home页面数据回显
const cityClick=(city)=>{
		cityStore.currentCity=city
		router.back()
}
</script>

<style lang = 'scss' scoped>
//		热门城市
.hotCity {
		
		span {
				width: 40px;
				height: 40px;
				display: inline-block;
				left: 20px;
				font-size: 14px;
				color: #333333;
				margin: 10px 0 0 0;
				padding-left: 15px;
				
		}
		
		.hotBox {
				height: 150px;
				margin: 0 15px 10px 15px;
				
				div {
						font-size: 13px;
						display: flex;
						float: left;
						width: 60px;
						height: 30px;
						align-items: center;
						justify-content: center;
						background-color: #fff4ec;
						margin: 3px;
						border-radius: 20px;
				}
		}
}

</style>
