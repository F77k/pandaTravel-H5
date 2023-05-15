<template>
		<div class = 'content'>
				<div>
						<h2 class = 'title'>
								热门精选
						</h2>
						<div class = 'list'>
								<template v-for = '(item,index) in houseList' :key = 'index'>
										<house-item-v9
												v-if = 'item.discoveryContentType===9'
												@click='itemClick(item.data)'
												:itemData = 'item.data'/>
										<house-item-v3
												v-else-if = 'item.discoveryContentType===3'
												@click='itemClick(item.data)'
												:itemData = 'item.data'/>
								</template>
						</div>
				</div>
		</div>
</template>

<script setup>
import useHome from '@/store/modules/home.js'
import { storeToRefs } from 'pinia'
import HouseItemV9 from '@/components/house-item-v9.vue'
import HouseItemV3 from '@/components/house-item-v3.vue'
import { useRouter } from 'vue-router'


const homeStore = useHome()
const router=useRouter()
//发起请求房屋列表数据
homeStore.getHouseListFN()
const {houseList} = storeToRefs(homeStore)
const itemClick=(item)=>{
		router.push(`/detail/${item.houseId}`)
}
</script>

<style lang = 'scss' scoped>
.content {
		padding: 10px 8px 50px;
		background: #f5f7f9;
		.title {
				font-family: PingFangSC-Medium, serif;
				font-size: 18px;
				color: #333;
		}
		
		.list {
				display: flex;
				flex-wrap: wrap;
		}
}
</style>
