<template>
		<div ref = 'detailRef' class = 'detail'>
				<div class = 'top-bar'>
						<!--头部搜索栏-->
						<van-nav-bar
								left-arrow
								left-text = '途旅'
								title = '房屋详情'
								@click-left = 'goBack'
						>
								<template #right>
										<img alt = '' class = 'threeImg' src = '@/assets/img/home/icon-right-menu.png'>
								</template>
						</van-nav-bar>
						
						<div v-if = 'mainPart' class = 'main'>
								<!--轮播图-->
								<carousel-map :swipe-data = 'mainPart?.topModule?.housePicture?.housePics'/>
								<!--内容页面-->
								<Infos :ref = 'getSectionRef' :topModule = 'mainPart?.topModule' name = '描述'></Infos>
								<!--房屋设施-->
								<SectionFacility :ref = 'getSectionRef'
								                 :houseFacility = 'mainPart.dynamicModule.facilityModule.houseFacility'
								                 name = '设施'/>
								<!--房屋详情-->
								<SectionIntroduce :ref = 'getSectionRef' :landlordModule = 'mainPart.dynamicModule.landlordModule'
								                  name = '房东'></SectionIntroduce>
								<!--热门评论-->
								<Comment :ref = 'getSectionRef' :commentModule = 'mainPart.dynamicModule.commentModule'
								         name = '评论'></Comment>
								<!--入住须知-->
								<Notice :ref = 'getSectionRef' :rulesModule = 'mainPart.dynamicModule.rulesModule'
								        name = '须知'></Notice>
								<!--位置周边-->
								<Map :ref = 'getSectionRef' :positionModule = 'mainPart.dynamicModule.positionModule'
								     name = '周边'></Map>
								<!--价格解释-->
								<IntroductionModule :introductionModule = 'mainPart.introductionModule'></IntroductionModule>
								<!--详情页bar-->
								<transition>
										<bar-count
												v-if = 'isShowDetails'
												ref = 'tabControlRef'
												:list = 'names'
												@tabItemClick = 'tabClick'/>
								</transition>
						</div>
				</div>
		</div>
</template>

<script setup>
import CarouselMap from '@/views/detail/cpns/_1-swiper.vue'
import useDetails from '@/store/modules/details.js'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import Infos from '@/views/detail/cpns/_2-infos.vue'
import SectionFacility from '@/views/detail/cpns/_3-section-facility.vue'
import SectionIntroduce from '@/views/detail/cpns/_4-section-introduce.vue'
import Comment from '@/views/detail/cpns/_5-comment.vue'
import Notice from '@/views/detail/cpns/_6-notice.vue'
import Map from '@/views/detail/cpns/_7-map.vue'
import BarCount from '@/components/bar-count.vue'
import useScroll from '@/hooks/useScroll.js'
import IntroductionModule from '@/views/detail/cpns/_8-interPretation.vue'


const detailStore = useDetails()
const mainPart = computed(() => {
		return detailStore?.detailList?.mainPart
})
const route = useRoute()
const router = useRouter()
const goBack = () => {
		router.back()
}
//发起请求 获取房屋详情数据
detailStore.getHouseDetailsFN(route.params.id)
//是否展示酒店详情页的bar导航栏
let isShowDetails = ref(false)
const detailRef = ref()
const {scrollTop} = useScroll()
watch(scrollTop, (newScroll) => {
		isShowDetails.value = newScroll >= 300
})
//点击tab滚动到对应位置----------------------------------------------------------------
const sectionEls = ref({})
const names = computed(() => {
		return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
		const name = value?.$el.getAttribute("name")
		sectionEls.value[name] = value?.$el
}
let isClick = false
let currentDistance = -1
const tabClick = (index) => {
		const key = Object.keys(sectionEls.value)[index]
		const el = sectionEls.value[key]
		let Distance = el.offsetTop
		
		isClick = true//当前为点击切换位置
		currentDistance = Distance//当前滚动的最终位置
		
		window.scrollTo({
				top: Distance - 24,
				behavior: "smooth"
		})
}
const tabControlRef = ref()
//滑动页面tab栏的选择状态也跟着改变
watch(scrollTop, (newScroll) => {
		//这里需要加24才能等于currentDistance 因为tab栏占用24像素，通过log控制台发现俩个相差24像素
		if (newScroll+24 == currentDistance) isClick = false//判断如果newScroll就是当前的页面位置等于了我点击的目标的位置那么再将isClick设为ture
		if (isClick) return//如果为点击状态直接退出函数
		const els = Object.values(sectionEls.value)//拿到ref标签对应的value值，然后map遍历出里面的offsetTop值（距顶部的距离）
		const values = els.map(item => item.offsetTop)// [326, 538, 911, 1138, 1509, 1964]
		let index = values.length - 1//这里默认值是数字的最后一个数据的索引值，因为最后一个永远匹配不到 所以设置一个默认值
		//遍历values匹配newScroll中符合的index值
		for (let i = 0; i < values.length; i++) {
				if (values[i] > newScroll + 44) {
						index = i - 1//这里-1是因为我们要拿到匹配到的那个index的前一个值，比如200-400之间的数据应该是属于200的，还是显示200
						break//退出循环
				}
		}
		//修改tab栏中改变样式的index值   判断是否有tab栏的ref 因为刚开始会拿到undinfend
		if (tabControlRef.value) {
				//性能优化，不用一直给currentIndex赋值
				if (tabControlRef.value.currentIndex !== index) {
						tabControlRef.value.currentIndex = index
				}
		}
})
</script>

<style lang = 'scss' scoped>
.detail {
		:deep(.van-nav-bar__text) {
				font-size: 16px;
				font-weight: 700;
				color: #ff9854;
		}
		
		:deep(.van-nav-bar .van-icon) {
				color: #ff9854;
				
		}
		
		.top-bar {
				.threeImg {
						width: 20px;
						height: 15px;
						margin-right: 5px;
				}
		}
		
		/* 进入之前和离开后的样式 */
		.v-enter-from,
		.v-leave-to {
				top: -37px;
		}
		
		/* 进入过程中的样式 */
		.v-enter-active {
				transition: 0.3s;
		}
		
		/* 进入之后和离开之前的样式 */
		.v-enter-to,
		.v-leave-from {
				top: 0;
		}
		
}
</style>
