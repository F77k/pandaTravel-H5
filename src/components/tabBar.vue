<template>
		<van-tabbar
				v-model = 'active'
				active-color = '#fdbf6d'
		>
				<template v-for='(item,index) in tabBarData' :key='item.text'>
						<van-tabbar-item :to='item.path'>
								<template #default>
										<span>{{item.text}}</span>
								</template>
								<template #icon>
										<img v-if='active!==index' :src='getAssetURL(item.image)' alt=''>
										<img v-else :src='getAssetURL(item.imageActive)' alt=''>
								</template>
						</van-tabbar-item>
				</template>
		</van-tabbar>
</template>

<script setup>
import tabBarData from '../assets/data/tabBarData.js'
import { getAssetURL } from '../utils/load-assets.js'
import { ref } from 'vue'
const active = ref(0)

</script>

<style lang = 'scss' scoped>
.tabBar {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50px;
		border-top: 1px solid #f3f3f3;
		
		.tabBarItem {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 12px;
				
				img {
						width: 20px;
						height: 20px;
				}
				
				span {
						margin-top: 4px;
				}
		}
}
</style>
