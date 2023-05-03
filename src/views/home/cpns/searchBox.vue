<template>
		<div class = 'search-box'>
				<!--位置信息-->
				<div class = 'location bottom-gray-line'>
						<div class = 'city' @click = 'openCity'>
								{{ cityStore.currentCity.cityName }}
						</div>
						<div class = 'position' @click = 'getLocation'>
								<span class = 'text'>我的位置</span>
								<img alt = '' src = '@/assets/img/home/icon_location.png'>
						</div>
				</div>
				<!--日期范围-->
				<div class = 'section date-range bottom-gray-line ' @click = 'showCalendar = true'>
						<div class = 'start'>
								<div class = 'date'>
										<span class = 'tip'>入住</span>
										<span class = 'time'>{{ startDateStr }}</span>
								</div>
								<div class = 'stay'>共{{ stayCount }}晚</div>
						</div>
						<div class = 'end'>
								<div class = 'date'>
										<span class = 'tip'>离店</span>
										<span class = 'time'>{{ endDateStr }}</span>
								</div>
						</div>
				</div>
				
				<van-calendar
						v-model:show = 'showCalendar'
						:round = 'false' color = '#ff9854'
						show-confirm
						type = 'range'
						@confirm = 'onConfirm'/>
				<!--价格人数选择-->
				<hot-recommend></hot-recommend>
				<!--关键词搜索-->
				<keyword-search></keyword-search>
				</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useCity from '@/store/modules/city.js'
import { getCityListAPI, getCurrentPosition } from '@/api/modules/home.js'
import { showNotify } from 'vant'
import { computed, ref } from 'vue'
import { formatMonthDay, getDiffDays } from '@/utils/formatMonthDay.js'
import useMian from '@/store/modules/mian.js'
import { storeToRefs } from 'pinia'
import HotRecommend from '@/views/home/cpns/hotRecommend.vue'
import KeywordSearch from '@/views/home/cpns/keywordSearch.vue'


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
				cityStore.cityName = `${principalSubdivision} ${city}`
		} catch (err) {
				//弹窗提示位置获取不到
				showNotify({message: '当前位置信息获取失败'});
		}
}
// 日期范围的处理
const mainStore = useMian()
const {startDate, endDate} = storeToRefs(mainStore)
let showCalendar = ref(false)//是否弹出选择日期对话框
//日期时间
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value))
//选择日期相关范围
const onConfirm = (dataTime) => {
		const selectStartDate = dataTime[0]
		const selectEndDate = dataTime[1]
		mainStore.startDate = selectStartDate
		mainStore.endDate = selectEndDate
		stayCount.value = getDiffDays(selectStartDate, selectEndDate)
		//隐藏日历
		showCalendar.value = false
}

</script>

<style lang = 'scss' scoped>
.search-box {
		--van-calendar-popup-height: 100%;
}

.location {
		border-bottom: 1px solid #f3f3f3;
		display: flex;
		align-items: center;
		height: 44px;
		padding: 0 20px;
		
		.city {
				flex: 1;
				color: #333;
				font-size: 15px;
		}
		
		.position {
				width: 74px;
				display: flex;
				align-items: center;
				
				.text {
						position: relative;
						top: 2px;
						color: #666;
						font-size: 12px;
				}
				
				img {
						margin-left: 5px;
						width: 18px;
						height: 18px;
				}
		}
}

.section {
		border-bottom: 1px solid #f3f3f3;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 0 20px;
		color: #999;
		height: 44px;
		
		.start {
				flex: 1;
				display: flex;
				height: 44px;
				align-items: center;
		}
		
		.end {
				min-width: 30%;
				padding-left: 20px;
		}
		
		.date {
				display: flex;
				flex-direction: column;
				
				.tip {
						font-size: 12px;
						color: #999;
				}
				
				.time {
						margin-top: 3px;
						color: #333;
						font-size: 15px;
						font-weight: 500;
				}
		}
}

.date-range {
		height: 44px;
		
		.stay {
				flex: 1;
				text-align: center;
				font-size: 12px;
				color: #666;
		}
}

.price-counter {
		.start {
				border-right: 1px solid var(--line-color);
		}
}

.hot-suggests {
		margin: 10px 0;
		height: auto;
		
		.item {
				padding: 4px 8px;
				margin: 4px;
				border-radius: 14px;
				font-size: 12px;
				line-height: 1;
		}
}

.search-btn {
		.btn {
				width: 342px;
				height: 38px;
				max-height: 50px;
				font-weight: 500;
				font-size: 18px;
				line-height: 38px;
				text-align: center;
				border-radius: 20px;
				color: #fff;
				background-image: var(--theme-linear-gradient);
		}
}

</style>
