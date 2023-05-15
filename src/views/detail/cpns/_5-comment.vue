<template>
		<div class = 'comment'>
				<detail-section moreText = '查看全部评论' title = '热门评论'>
						<div class = 'comment-inner'>
								<div class = 'header'>
										<div class = 'left'>
												<div class = 'score'>
														<span>{{ commentModule.overall }}</span>
														<div class = 'score-button'></div>
												</div>
												<div class = 'text'>
														<div style = 'font-size: 12px'>{{ commentModule.scoreTitle }}</div>
														<div class = 'totalCount'>{{ commentModule.totalCount }}条评论</div>
														
														<van-rate v-model = 'commentModule.overall' allow-half color = '#fa9b2c' readonly
														          size = '10px'/>
												
												</div>
										</div>
										<div class = 'right'>
												<template v-for = '(item,index) in commentModule.subScores' :key = 'index'>
														<span>{{ item }}</span>
												</template>
										</div>
								</div>
								<div class = 'tags'>
										<template v-for = '(item,index) in commentModule.commentTagVo' :key = 'index'>
												<span :style = '{color:item.color,backgroundColor:item.backgroundColor}'>{{ item.text }}</span>
										</template>
								</div>
								<div class = 'counter'>
										<div class = 'user'>
												<div class = 'message'>
														<img :src = 'commentModule.comment.userAvatars'>
														<div class = 'user-name-data'>
																<div class = 'user-name'>{{ commentModule.comment.userName }}</div>
																<div class = 'user-time'>{{ commentModule.comment.checkInDate }}</div>
														</div>
												</div>
												<div class = 'score'>
														<div>{{ commentModule.comment.overall }}</div>
														<van-rate v-model = 'commentModule.comment.overall' allow-half color = '#fa9b2c' readonly size = '10px'/>
												</div>
										</div>
										<div class='text'>
												<div>
														{{commentModule.comment.commentDetail}}
												</div>
										</div>
								</div>
						</div>
				</detail-section>
		</div>
</template>

<script setup>
defineProps({
		commentModule: {
				type: Object,
				default: () => ({})
		}
})
import DetailSection from '@/components/detail-section.vue'</script>

<style lang = 'scss' scoped>
.comment {
		.comment-inner {
				margin: 0 20px;
				
				.header {
						display: flex;
						justify-content: space-between;
						
						.left {
								display: flex;
								
								.score {
										position: relative;
										margin-right: 2px;
										
										span {
												position: relative;
												font-size: 48px;
												font-weight: 700;
												z-index: 9;
										}
										
										.score-button {
												width: 66px;
												height: 6px;
												background: var(--tjc-theme-linear-gradient, linear-gradient(90deg, #fa8c1d, #fcaf3f));
												-webkit-border-radius: 3px;
												border-radius: 3px;
												position: absolute;
												top: 40px;
												z-index: 5;
										}
								}
								
								.text {
										width: 70px;
										display: flex;
										flex-wrap: wrap;
										
										.totalCount {
												color: #999999;
												font-size: 12px;
										}
								}
						}
						
						.right {
								display: flex;
								flex-wrap: wrap;
								justify-content: right;
								
								span {
										max-width: 150px;
										color: #999999;
										font-size: 10px;
										margin-left: 3px;
								}
						}
				}
				
				.tags {
						display: flex;
						flex-wrap: wrap;
						margin-top: 10px;
						
						span {
								font-size: 12px;
								margin: 0 3px 3px 0;
								padding: 2px 7px;
								border-radius: 10px;
						}
				}
				
				.counter {
						margin-top: 10px;
						padding: 12px;
						background: #f7f9fb;
						
						.user {
								display: flex;
								
								.message {
										display: flex;
										
										img {
												width: 45px;
												height: 45px;
												border-radius: 50%;
										}
										
										.user-name-data {
												margin-left: 2px;
												.user-name {
														margin-top: 5px;
														font-weight: 700;
												}
												
												.user-time {
														color: #aaaaaa;
												}
										}
								}
								
								.score {
										display: flex;
										justify-content: center;
										flex-direction: column;
										text-align: right;
										margin-left: 110px;
										div{
												font-weight: 700;
												font-size: 18px;
										}
										
								}
						}
						.text{
								margin-top: 10px;
								div{
										margin: 6px;
										font-size: 13px;
										color: #333333;
								}
						}
				}
		}
}
</style>
