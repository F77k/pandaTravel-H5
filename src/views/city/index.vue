<template>
		<div class = 'city'>
				<!--头部搜索区域-->
				<van-search
						v-model = 'value'
						placeholder = '城市/区域/位置'
						show-action
						style = 'border-radius: 20px'
						@cancel = 'onCancel'
				>
						<template #left-icon>
								<img alt = '' src = '@/assets/img/city/搜索.png'>
						</template>
				</van-search>
				<!--标签页-->
				<van-tabs v-model:active = 'active'>
						<van-tab title = '国内/港澳台'>
								<!--热门城市列表-->
								<hot-city/>
								<!--通过abc选择城市-->
								<select-a-city></select-a-city>
						</van-tab>
						<van-tab title = '海外'>
								<!--热门城市列表-->
								<hot-city :active = 'active'/>
								<!--通过abc选择城市-->
								<select-a-city :active = 'active'></select-a-city>
						</van-tab>
				</van-tabs>
		</div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import HotCity from '@/views/city/cnps/hotCity.vue'
import SelectACity from '@/views/city/cnps/selectACity.vue'

//头部搜索区域
const value = ref('')
const router = useRouter()
const onCancel = () => {
		router.back()
}
//标签页
const active = ref(0)
</script>

<style lang = 'scss' scoped>
.city {
		img {
				width: 16px;
				height: 16px;
				padding: 5px 0 0 0;
				
		}
		
		:deep(.van-search__content) {
				border-radius: 20px !important;
		}
		
		
}
</style>
