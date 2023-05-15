<template>
		<div class = 'swp'>
				<van-swipe class = 'my-swipe' indicator-color = 'white' ref='swipe'>
						<template v-for = '(item,index) in housePics' v-if = 'housePics' :key = 'index'>
								<van-swipe-item>
										<img :src = 'item.url' alt = ''>
								</van-swipe-item>
						</template>
						<template #indicator = '{active,total}'>
								<div class = 'custom-indicator'>
										<template v-for = '(value,key,index) in swipeGroup' :key = 'key'>
												<span :class = '{active:housePics[active]?.enumPictureCategory==key}' class = 'item'>
														<span @click='toNowClick(key)'>{{ getName(value[0].title) }}</span>
														<span v-show = 'housePics[active]?.enumPictureCategory==key'>
																{{ getSwiperIndex(housePics[active]) }}/{{value.length}}
														</span>
												</span>
										</template>
								</div>
						</template>
				</van-swipe>
				<!--轮播图下方优惠价格-->
				<div class = 'pricePreferential'>
						<div>
								<span>优惠价格</span>
						</div>
				</div>
	
		
		</div>
</template>

<script setup>
import useDetails from '@/store/modules/details.js'
import { computed,ref, } from 'vue'
const swipe=ref(null)
const props = defineProps({
		swipeData: {
				type: Array,
				default: () => ([])
		}
})
const detailStore = useDetails()
//轮播图 图片
const housePics = computed(() => {
		return detailStore?.detailList?.mainPart?.topModule?.housePicture?.housePics
})
//数据处理分类
let swipeGroup = {}
for (const item of props.swipeData) {
		let arr = swipeGroup[item.enumPictureCategory]
		if (!arr) {
				arr = []
				swipeGroup[item.enumPictureCategory] = arr
		}
		arr.push(item)
}
//处理多余符号的函数
const getName = (name) => {
		return name.replace('：', '').replace('【', '').replace('】', '')
}
//用分类好的swiperGroup拿到其中我们想要对比的key的value值，通过findIndex找到与item相符的数据的索引,返回出去
const getSwiperIndex = (item) => {
		const valueArray = swipeGroup[item?.enumPictureCategory]
		return valueArray?.findIndex(data => data === item) + 1
}

</script>
<style lang = 'scss' scoped>
.swp {
		.my-swipe {
				color: #fff;
				font-size: 20px;
				text-align: center;
				height: 250px;
				
				.custom-indicator {
						position: absolute;
						right: 5px;
						bottom: 5px;
						padding: 2px 5px;
						font-size: 12px;
						color: #ffffff;
						border-radius: 8px;
						background: rgba(0, 0, 0, 0.5);
						
						.item {
								margin: 0 2px;
								padding: 0 5px;
						}
						
						.active {
								background: #ffffff;
								color: #333333;
								border-radius: 8px;
						}
				}
				
				img {
						width: 100%;
				}
		}
		
		.pricePreferential {
				width: 100%;
				
				div {
						height: 30px;
						background: url(@/assets/img/detail/detail.png) 0 0 / 100% 100%;
						
						span {
								display: flex;
								justify-content: center;
								align-items: center;
								line-height: 30px;
								color: #ffffff;
								font-weight: 700;
						}
				}
		}
}
</style>
