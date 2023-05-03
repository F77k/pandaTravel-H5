<template>
		<div class = 'hot'>
				<div class = 'hotitem'>
						<span style = 'width: 65%;	border-right: 1px solid #f3f3f3;' @click = 'showPrice=true'>价格不限</span>
						<span style = 'width: 30%;padding-left: 20px'>人数不限</span>
				</div>
				<!--价格选择的弹窗-->
				<van-popup
						v-model:show = 'showPrice'
						:style = "{ height: '60%',background:'#f1f3f5' }"
						close-icon = 'close'
						closeable
						position = 'bottom'
						round
				>
						<div class = 'popup'>
								<h3>价格</h3>
								<div class = 'box-section'>
										<div class = 'topPriceNav'>
												价格区间<span>￥{{ sibBack[0] }}-￥{{sibBack[1]}}</span>
										</div>
										<!--价格滑块-->
										<div class = 'backFq'>
												<van-slider
														v-model = 'sibBack'
														:max = '2000'
														:min = '0'
														active-color = '#ff9645' class = 'backBtn'
														range
														@change = 'onChange'>
												</van-slider>
										</div>
										<!--价格区间选择-->
										<div class='textPrice'>
												<span>￥100以下</span>
												<span>￥100-200</span>
												<span>￥200-300</span>
												<span>￥300-400</span>
												<span>￥400-600</span>
												<span>￥600-1000</span>
												<span>￥1000-2000</span>
										</div>
								</div>
								<div class = 'btn'>
										<van-button
												class = 'cancelBtn' color = '#ffffff'
												round
												style = 'color: black'
												@click='showPrice=false'
												type = 'success'>取消
										</van-button>
										<van-button
												class = 'confirmBtn' color = '#ff9645'
												round
												@click='confirmPrice'
												type = 'success'>确认
										</van-button>
								</div>
						</div>
				</van-popup>
				<!--人数选择的弹窗-->
		
		</div>
</template>

<script setup>
import { ref } from 'vue'
import useHome from '@/store/modules/home.js'
//价格
const homeStore=useHome()
const showPrice = ref(false)
//价格滑块
const onChange = (state,end) => {

}
//确认-保存选择的价格
const confirmPrice=()=>{
		homeStore.price=sibBack.value
		showPrice.value=false//关闭弹窗
}
const sibBack = ref([0, 2000])
</script>

<style lang = 'scss' scoped>
.hot {
		.hotitem {
				display: flex;
				height: 40px;
				align-items: center;
				padding: 0 20px;
				border-bottom: 1px solid #f3f3f3;
				
				span {
						line-height: 40px;
						height: 100%;
						color: #999999;
						font-size: 14px;
				}
		}
		
		.popup {
				padding: 0 15px;
				
				h3 {
						color: #333333;
				}
				
				.box-section {
						width: 320px;
						height: 210px;
						background: #ffffff;
						border-radius: 7px;
						padding: 15px 12px;
						margin-bottom: 30px;
						
						.backFq {
								margin-top: 20px;
								padding: 0 15px;
								text-align: center;
								
								.backBtn {
								
								}
						}
						
						.topPriceNav {
								color: #333333;
								font-size: 14px;
								padding-bottom: 12px;
								
								span {
										margin-left: 8px;
								}
						}
				}
				.textPrice{
						margin-top: 30px;
						span{
								padding: 2px;
								height: 20px;
								float: left;
								margin: 10px 5px;
								background: #f1f3f5;
								color: #333333;
								font-size: 13px;
								text-align: center;
								line-height: 20px;
								border-radius: 20px;
						}
				}
				.btn {
						.cancelBtn {
								width: 90px;
						}
						
						.confirmBtn {
								width: 240px;
								margin-left: 10px;
						}
				}
		}
		
}
</style>
