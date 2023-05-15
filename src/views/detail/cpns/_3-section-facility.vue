<template>
		<div class = 'facility'>
				<detail-section moreText = '查看更多内容' title = '房屋设施'>
						<div class = 'facility-inner'>
								<template v-for = '(item,index) in houseFacility.houseFacilitys' :key = 'index'>
										<div v-if = 'houseFacility.facilitySort?.includes(index)' class = 'item'>
												<div class = 'head'>
														<img :src = 'item.icon' alt = ''>
														<div class = 'text'>{{ item.groupName }}</div>
												</div>
												<div class = 'list'>
														<template v-for = 'listItem in item.facilitys.slice(0,4)'>
																<div class = 'item'>
																		<img src = 'src/assets/img/detail/icon_check.png' alt = ''>
																		<span>{{ listItem.name }}</span>
																</div>
														</template>
												</div>
										</div>
								</template>
						</div>
				</detail-section>
		</div>
</template>

<script setup>
import DetailSection from '@/components/detail-section.vue'


defineProps({
		houseFacility: {
				type: Object,
				default: () => ({})
		}
})
</script>

<style lang = 'scss' scoped>
.facility {
		.facility-inner {
				background: #f7f9fb;
				border-radius: 10px;
				padding: 5px 0;
				margin: 0 20px;
				.item {
						display: flex;
						align-items: center;
						margin: 20px 0;
						.head {
								width: 90px;
								text-align: center;
								margin: 5px;
								padding-top: 7px;;
								
								img {
										width: 20px;
										height: 20px;
								}
								
								.text {
										font-size: 12px;
										font-weight: 700;
								}
						}
						
						.list {
								display: flex;
								flex: 1;
								flex-wrap: wrap;
								
								.item {
										display: flex;
										width: 50%;
										margin: 4px 0;
										box-sizing: border-box;
										span{
												font-size:12px
										}
										.icon {
												margin: 0 6px;
										}
										.text {
												color: #333;
											
										}
										img{
												width: 12px;
												height: 12px;
												margin-right: 5px;
										}
								}
								
						}
				}
		}
}
</style>
