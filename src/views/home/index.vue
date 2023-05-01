<template>
		<div class = 'home'>
				<!--头部标题-->
				<home-nav-bar/>
				<!--图片-->
				<banner></banner>
				<!--位置信息-->
			  <search-box></search-box>
		</div>
</template>

<script setup>
import HomeNavBar from './cpns/homeNavBar.vue'
import Banner from './cpns/banner.vue'
import SearchBox from '@/views/home/cpns/searchBox.vue'
</script>
<style lang = 'scss' scoped>

</style>
