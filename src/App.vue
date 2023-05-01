<template>
		<div>
				<router-view></router-view>
				<!--底部标签导航栏-->
				<tab-bar v-show = '$route.meta.showTab'></tab-bar>
		</div>
</template>
<script setup>
import TabBar from './components/tabBar.vue'</script>

<style scoped>

</style>
