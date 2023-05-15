<template>
		<div class = 'notice'>
				<detail-section title = '入住须知'>
						<div class = 'notice-inner'>
								<template v-for = '(item, index) in rulesModule.orderRules' :key = 'index'>
										<div class = 'notice-headline'>
												<span class = 'title'>{{ item.title }}</span>
												<span class = 'explain'>{{ item.introduction }}</span>
										</div>
								</template>
										<div class='rules'>
												<van-steps direction="vertical" :active="0">
													<template v-for='(item,index) in rulesModule.cancelRules' :key='index'>
															<van-step>
																	<p :style='{}'>{{ item.introduction }}</p>
																	<h3 :style='{color:item.tipColor,background:item.backColor}'>{{ item.tip }}</h3>
															</van-step>
													</template>
												</van-steps>
										</div>
						</div>
				</detail-section>
		</div>
</template>

<script setup>
import DetailSection from '@/components/detail-section.vue'


defineProps({
		rulesModule: {
				type: Object,
				default: () => ({})
		}
})
</script>

<style lang = 'scss' scoped>
.notice-inner {
		margin: 20px;
		:deep(.van-step--vertical){
				font-size: 12px;
				display: table;
		}
		h3{
				font-size: 12px;
		}
		.notice-headline {
				margin-top: 20px;
				font-size: 12px;
				
				.title {
						margin-right: 15px;
						color: #666666;
				}
				
				.explain {
						flex: 1;
						color: #333333;
				}
				.rules{
			
				}
		}
}
</style>
