<template>
		<div class = 'geographicInformation'>
				<div class = 'city' @click = 'openCity'>
						{{ cityStore.cityName }}
				</div>
				<div class = 'position' @click = 'getLocation'>
						<span>我的位置</span>
						<img alt = '' src = '@/assets/img/home/icon_location.png'>
				</div>
		</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useCity from '@/store/modules/city.js'
import { getCityListAPI, getCurrentPosition } from '@/api/modules/home.js'


const cityStore = useCity()

const router = useRouter()
//选择具体城市
const openCity = async () => {
		//点击的时候发送数据请求 再保存到pinia，要是在搜索页面发送请求则拿不到数据
		cityStore.homeHotCityList = await getCityListAPI()
		await router.push('/city')
}
//获取位置信息
//通过当前网络连接的最近的地址
const getLocation = async () => {
		try {
				//调用接口api
				const res = await getCurrentPosition({
						latitude: '',
						longitude: '',
						localityLanguage: 'zh'
				})
				const {principalSubdivision, city} = res.data
				//将获取到的地理信息保存至pinia回显到页面
				cityStore.cityName=`${principalSubdivision} ${city}`
		} catch (err) {
				console.log(err)
		}
}


</script>

<style lang = 'scss' scoped>
.geographicInformation {
		display: flex;
		height: 40px;
		padding: 0 20px;
		align-items: center;
		
		.city {
				flex: 1;
				color: #333333;
				font-size: 15px;
		}
		
		.position {
				width: 80px;
				display: flex;
				
				span {
						position: relative;
						top: 2px;
						font-size: 14px;
						color: #333333;
						
				}
				
				img {
						margin-left: 4px;
						width: 18px;
						height: 18px;
				}
		}
}
</style>
