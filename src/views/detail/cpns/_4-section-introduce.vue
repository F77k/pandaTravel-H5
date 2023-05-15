<template>
		<div class = 'introduce'>
				<detail-section moreText = '查看房东主页' title = '房东介绍'>
						<div class = 'introduce-info'>
								<div class = 'item'>
										<div v-if = 'landlordModule.topScroll' class = 'vip'>
												<img :src = 'landlordModule.topScroll' alt = ''>
										</div>
										<div class = 'header'>
												<div class = 'logo'>
														<img :src = 'landlordModule.hotelLogo' alt = ''>
												</div>
												<div class = 'hotelName'>
														<div class = 'name'>
																{{ landlordModule.hotelName }}
														</div>
														<template
																v-for = '(item,index) in landlordModule.hotelTags' :key = 'index'>
															<span :style = '{color:item.tagText.color}' class = 'text'>
															{{ item.tagText.text }}
															</span>
														</template>
												</div>
												<div class = 'phone'>
														联系房东
												</div>
										</div>
										<div class = 'footer'>
												<template v-for = '(item,index) in landlordModule.hotelSummary' :key = 'index'>
														<div class = 'item'>
																<div class = 'title'>
																		{{ item.title }}
																</div>
																<div class = 'introduction'>
																		{{ item.introduction || "-" }}
																</div>
																<div class = 'tip'>
																		{{ item.tip }}
																</div>
														</div>
												</template>
										</div>
								</div>
						</div>
				</detail-section>
		</div>
</template>

<script setup>
import DetailSection from '@/components/detail-section.vue'


defineProps({
		landlordModule: {
				type: Object,
				default: () => ({})
		}
})
</script>

<style lang = 'scss' scoped>
.introduce-info {
		margin: 0 15px;
		
		.item {
				.vip{
					img{
							width: 100%;
							height: 30px;
							border-radius: 4px;
					}
				}
				.header {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-bottom: 10px;
						
						.logo {
								img {
										width: 60px;
										height: 60px;
										border-radius: 50%;
										border: 1px solid #f0f0f0;
								}
								
								margin-right: 5px;
						}
						
						.hotelName {
								.name {
										font-size: 16px;
										font-weight: 700;
								}
								
								.text {
										position: relative;
										font-size: 13px;
										padding: 0 5px;
										border-right: 1px solid #9B9B9B;
								}
						}
						
						.phone {
								width: 70px;
								height: 25px;
								color: #ffffff;
								font-size: 13px;
								line-height: 25px;
								background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
								text-align: center;
								border-radius: 3px;
								padding: 0 3px;
						}
				}
				
				.footer {
						display: flex;
						padding: 20px 0 12px 0;
						border-bottom: 2px solid #f5f5f5;
						margin-left: 5px;
						.item {
								width: 33%;
								.title {
										color: #9B9B9B;
										font-size: 14px;
								}
								.introduction{
										font-size: 18px;
										font-weight: 700;
										padding: 4px 0;
								}
								.tip{
										font-size: 12px;
										color: #666666;
								}
						}
				}
				
		}
}
</style>
