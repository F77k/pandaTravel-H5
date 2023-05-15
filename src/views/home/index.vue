<template>
		<div class = 'home'>
				<!--头部标题-->
				<home-nav-bar/>
				<!--图片-->
				<banner/>
				<!--位置信息-->
				<search-box/>
				<!--图标展示-->
				<home-categories/>
				<!--滑动的搜索框-->
				<div v-if = 'isShowSearchBar' class = 'search-bar'>
						<home-scroll-search :end-date = "'09.20'" :start-date = "'09.19'"/>
				</div>
				<!--加载中...-->
				<loading></loading>
				<!--酒店列表-->
				<home-content/>
		</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import HomeNavBar from './cpns/homeNavBar.vue'
import Banner from './cpns/banner.vue'
import SearchBox from '@/views/home/cpns/searchBox.vue'
import HomeCategories from '@/views/home/cpns/homeCategories.vue'
import HomeContent from '@/views/home/cpns/homeContent.vue'
import useHome from '@/store/modules/home.js'
import useScroll from '@/hooks/useScroll.js'
import HomeScrollSearch from '@/components/homeScrollSearch.vue'
import Loading from '@/components/loading.vue'


const homeStore = useHome()
//监听获取数据
const {isReachBottom, scrollTop} = useScroll()
watch(isReachBottom, (newValue) => {
		if (newValue) {
				homeStore.getHouseListFN().then(() => {
						isReachBottom.value = false
				})
		}
})
const isShowSearchBar = ref(false)
watch(scrollTop, (newTop) => {
		isShowSearchBar.value = newTop > 500;
})

</script>
<style lang = 'scss' scoped>

.search-bar{
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		right: 0;

}
</style>
