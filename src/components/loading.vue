<template>
		<div class = 'loading' v-show='homeStore.isShowLoading'>
				<div class = 'loading-Item'>
						<img alt = '' src = '@/assets/img/home/full-screen-loading.gif'>
				</div>
		</div>
</template>

<script setup>
import useHome from '@/store/modules/home.js'
const homeStore=useHome()
</script>

<style lang = 'scss' scoped>
.loading {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom:0;
		display: flex;
		justify-content: center;
    align-items: center;
		z-index: 999;
		background: rgb(0,0,0,.2);
		.loading-Item {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 104px;
				height: 104px;
				background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
		}
		img {
				width: 70px;
				height: 70px;
				margin-bottom: 8px;
		}
}
</style>
