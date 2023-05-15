<template>
		<!--scroll弹出搜索框-->
		<van-sticky>
				<div class = 'search'>
						<div class = 'content'>
								<van-search
										placeholder = '关键字/位置/民宿名'
								>
										<!--搜索框内左侧内容-->
										<template #left-icon>
												<div class = 'searchData'>
														<div>
																<span style = 'color: #9999b0'>住</span>{{ time.start }}
														</div>
														<div>
																<span style = 'color: #9999b0'>离</span>{{ time.end }}
														</div>
														<img alt = '' class = 'topRightImg' src = '../assets/img/search/右下.png'>
												</div>
										</template>
										<template #right-icon>
												<div style = 'margin-right: 5px'>
														<van-icon :size = '25' color = '#888989' name = 'search'/>
												</div>
										</template>
								</van-search>
						</div>
				</div>
		</van-sticky>
</template>

<script setup>
//监听搜索框出现时机
//is搜索框
import { computed,  } from 'vue'
import useMian from '@/store/modules/mian.js'
import { formatMonthDay } from '@/utils/formatMonthDay.js'


const mianStore = useMian()
//获取页面移动数据
//入住时间 离职时间转换成M月D日格式
const time = computed(() => {
		return {
				start: formatMonthDay(mianStore.startDate,'MM.DD'),
				end: formatMonthDay(mianStore.endDate,'MM.DD')
		}
})
</script>

<style lang = 'scss' scoped>
.search {
		--van-padding-sm: 8px;
		--van-search-input-height: 40px;
		--van-radius-sm: 8px;
		width: 100%;
}

.searchData {
		color: #333333;
		padding: 1px 10px 0 0;
		border-right: 1px solid #dfdbdb;
		font-size: 12px;
		position: relative;
		line-height: 1;
		
		div {
				height: 14px;
				line-height: 1;
		}
		
		img {
				width: 9px;
				height: 9px;
				position: absolute;
				z-index: 4;
				right: 0;
				top: 17px;
		}
}
</style>
