<template>
		<div class='search'>
				<div class='topSearch'>
						<van-search
								v-model="Searchvalue"
								show-action
								:label='searchContent.label'
								:placeholder = "searchContent.placeholder"
						>
								<!--搜索框内左侧内容-->
								<template #left-icon>
										<div class='searchData'>
												<div>
														<span style='color: #9999b0'>住</span>{{route.query.startDate}}
												</div>
												<div>
														<span style='color: #9999b0'>离</span>{{route.query.endDateStr}}
												</div>
												<img src='src/assets/img/search/右下.png' alt='' class='topRightImg'>
										</div>
								</template>
								<!--搜索框外左侧图标-->
								<template #left>
										<img src='src/assets/img/search/左侧箭头.png'
										     alt=''
										     @click='backHome'
										     class='topRightImg'
										     style='margin-right: 10px'>
								</template>
								<!--搜索框外右侧图标-->
								<template #action>
										<img src='src/assets/img/search/三条杠.png' alt='' class='topRightImg'>
								</template>
						</van-search>
				</div>
		</div>
</template>

<script setup>
import useCity from '@/store/modules/city.js'
import { ref } from 'vue'
import {computed} from 'vue'
import { useRouter,useRoute } from 'vue-router'

const cityStore=useCity()
const router=useRouter()
const route=useRoute()
//头部第一行搜索区域内容--------------------------------
const Searchvalue=ref('')
const searchContent=computed(()=>{
		return {
				placeholder:'搜索'+cityStore.currentCity.cityName+'的景点、地标、房源',
				label:cityStore.currentCity.cityName
		}
})
//头部左侧图标
const backHome=()=>{
		router.back()
}
</script>

<style scoped lang='scss'>
.search{
//搜索框内部样式
		--van-padding-sm:5px;
		--van-gray-6:#999999;
}
.topSearch{
		.topRightImg{
				width: 25px;
				height: 25px;
				display: flex;
				align-items: center;
		}
		.searchData{
				color: #333333;
				padding: 0 8px 0 4px;
				border-right: 1px solid #dfdbdb;
				border-left: 1px solid #dfdbdb;
				font-size: 12px;
				position: relative;
				div{
						height: 14px;
						line-height: 1;
				}
			img{
					width: 9px;
					height: 9px;
					position: absolute;
					z-index: 4;
					right: 0;
					top: 17px;
			}
		}
}
</style>
