<template>
		<div class = 'infos'>
				<div class = 'houseName'>
						{{ topModule.houseName }}
				</div>
				<div class = 'houseTags'>
						<template v-for = 'item in topModule.houseTags'>
								<div class = 'tage-item'>
										{{ item?.tagText?.text }}
								</div>
						</template>
				</div>
				<div class = 'comment'>
						<div class = 'comment-left'>
								<span class = 'overall'>{{ topModule.commentBrief.overall }}</span>
								<span class = 'score'>{{ topModule.commentBrief.scoreTitle }}</span>
								<span class = 'brief'>"{{ topModule.commentBrief.commentBrief }}"</span>
						</div>
						<div class = 'comment-right'>
								<span class = 'count'>{{ topModule.commentBrief.totalCount }}条评论</span>
								<img alt = '' src = 'src/assets/img/detail/tujia_arrow_right.png'>
						</div>
				</div>
				<div class = 'position'>
						<div class = 'position-left'>
								<div class = 'address'>{{ topModule.nearByPosition.address }}</div>
								<div class = 'round'>
										<img src = 'https://pic.tujia.com/upload/festatic/crn/position_train.png' alt = ''>
										<span>{{ topModule?.nearByPosition?.areaName }}</span>
										<span>{{ topModule?.nearByPosition?.tradeArea }}</span>
								</div>
						</div>
						<div class = 'position-right'>
								<span>地图/周边</span>
								<img alt = '' src = 'src/assets/img/detail/tujia_arrow_right.png'>
						</div>
				</div>
		</div>
</template>

<script setup>


defineProps({
		topModule: {
				type: Object,
				default: () => ({})
		}
})
</script>

<style lang = 'scss' scoped>
.infos {
		padding: 12px 16px 0 16px;
		
		.houseName {
				font-size: 18px;
				font-weight: 700;
				margin-bottom: 10px;
		}
		
		.houseTags {
				display: flex;
				flex-wrap: wrap;
				.tage-item {
						color: #FF9645;
						background: rgba(255, 150, 69, 0.15);
						font-size: 14px;
						margin: 0 3px;
				}
		}
		
		.comment {
				margin-top: 10px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: #f5f7fa;
				padding: 12px;
				border-radius: 8px;
				
				.comment-left {
						display: flex;
						align-items: center;
						justify-content: center;
						
						.overall {
								color: #333;
								z-index: 10;
								font-weight: 700;
								font-size: 18px;
								margin-right: 2px;
						}
						
						.score {
								font-size: 14px;
								font-weight: 700;
								color: #333333;
								margin-right: 4px;
						}
						
						.brief {
								font-size: 13px;
						}
				}
				
				.comment-right {
						.count {
								font-size: 12px;
								color: #ff9854;
								margin-right: 1px
						}
						
						img {
								width: 4px;
								height: 8px;
								margin-left: 2px;
						}
				}
				
		}
		
		.position {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 10px;
				padding: 12px;
				background: #f3f5f9;
				border-radius: 8px;
				position: relative;
				
				.position-left {
						z-index: 1;
						
						.address {
								font-weight: 700;
								font-size: 14px;
								color: #333333;
								line-height: 16px;
						}
						
						.round {
								font-size: 12px;
								color: #666;
								line-height: 14px;
								display: flex;
								align-items: center;
								span {
										font-size: 12px;
										color: #666;
										line-height: 14px;
										display: -webkit-box;
										-webkit-box-orient: vertical;
										-webkit-line-clamp: 2;
										margin-top: 4px;
										overflow: hidden;
										-o-text-overflow: ellipsis;
										text-overflow: ellipsis;
										white-space: nowrap;
								}
								img{
										width: 10px;
										height: 10px;
										vertical-align: middle;
										margin: 5px 3px 0 0;
								}
						}
				}
				
				.position-right {
						display: flex;
						z-index: 2;
						position: absolute;
						background: #f3f5f9;
						height: 100%;
						right: 0;
						align-items: center;
						justify-content: center;
						margin-right: 14px;
						
						span {
								width: 60px;
								font-size: 10px;
								color: var(--tjc-theme, #ff9645);
								text-align: right;
						}
						
						img {
								width: 4px;
								height: 8px;
								margin-left: 2px;
						}
				}
		}
}
</style>
