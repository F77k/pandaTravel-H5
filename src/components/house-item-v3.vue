<template>
		<div class = 'house-item'>
				<div class = 'item-inner'>
						<div class = 'cover'>
								<img :src = 'itemData.image.url' alt = ''>
						</div>
						<div class = 'info'>
								<div class = 'location'>
										<img src = 'src/assets/img/home/location.png'>
										<span>{{ itemData.location }}</span>
								</div>
								<div class = 'name'>
										{{ itemData.houseName }}
								</div>
								<div class = 'summary'>
										{{ itemData.summaryText }}
								</div>
								<div class = 'price'>
										<div class = 'new'>￥{{ itemData.finalPrice }}</div>
										<div class = 'old'>￥{{ itemData.productPrice }}</div>
										<div class = 'tip'>
												<img src='@/assets/img/home/喇叭.png' alt=''>
												{{ itemData?.priceTipBadge?.text }}
										</div>
								</div>
						</div>
				</div>
		</div>
</template>

<script setup>
const props = defineProps({
		itemData: {
				type: Object,
				default: () => ({})
		}
})
</script>

<style lang = 'scss' scoped>
.house-item {
		width: 50%;
		
		.item-inner {
				overflow: hidden;
				margin: 5px;
				border-radius: 6px;
				background: #ffffff;
				
				.cover {
						img {
								width: 100%;
						}
				}
		}
		
		.info {
				padding: 0 8px 5px 8px;
				
				.location {
						display: flex;
						align-items: center;
						
						img {
								width: 12px;
								height: 12px;
						}
						
						span {
								font-size: 12px;
								color: #666666;
						}
				}
				
				.name {
						margin: 5px 0;
						font-size: 14px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
				}
				
				.summary {
						font-size: 13px;
						color: #666666;
				}
				
				.price {
						margin-top: 7px;
						display: flex;
						align-items: flex-start;
						padding: 5px 0;
						.new {
								color: #ff9645;
								font-size: 14px;
						}
						
						.old {
								color: #999999;
								font-size: 10px;
								position: relative;
								top: 1px;
								text-decoration: line-through;
						}
						
						.tip {
								font-size: 14px;
								background-image: linear-gradient(270deg, #f66, #ff9f9f);
								color: #fff;
								border-radius: 8px;
								padding: 0 2px;
								margin-left: 4px;
								img{
										width: 12px;
										height: 12px;
								}
						}
				}
		}
}

//.house-item {
//		width: 50%;
//
//		.item-inner {
//				margin: 5px;
//				border-radius: 6px;
//				overflow: hidden;
//
//				.cover {
//						img {
//								width: 100%;
//						}
//				}
//
//				.info {
//						padding: 8px 10px;
//						color: #666;
//						font-size: 12px;
//				}
//
//				.location {
//						display: flex;
//						align-items: center;
//						img {
//								width: 12px;
//								height: 12px;
//						}
//
//						.text {
//								margin-left: 2px;
//								font-size: 12px;
//								color: #666;
//						}
//				}
//
//				.name {
//						margin: 5px 0;
//						font-size: 14px;
//						color: #333;
//
//						overflow: hidden;
//						text-overflow: ellipsis;
//						display: -webkit-box;
//						-webkit-line-clamp: 2;
//						-webkit-box-orient: vertical;
//				}
//
//				.price {
//						display: flex;
//						align-items: flex-start;
//
//						margin: 8px 0;
//						.new {
//								color: #ff9645;
//								font-size: 14px;
//						}
//
//						.old {
//								margin: 0 3px;
//								color: #999;
//								font-size: 12px;
//								text-decoration: line-through;
//						}
//
//						.tip {
//								background-image: linear-gradient(270deg,#f66,#ff9f9f);
//								color: #fff;
//								padding: 0 6px;
//								border-radius: 8px;
//						}
//				}
//		}
//}
</style>
